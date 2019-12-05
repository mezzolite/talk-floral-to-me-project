const axios = require('axios')
const cheerio = require('cheerio')
const meaningsUrl = 'https://www.theflowerexpert.com/content/aboutflowers/flower-meanings'

const flowerName = new Set()
const flowerDescription = new Set()
const flowerImage = new Set()

const fetchData = async () => {
    const result = await axios.get(meaningsUrl)
    return cheerio.load(result.data)
}

const getResults = async() => {
    const $ = await fetchData()
    $("table tr").each((index, element) => {
        flowerName.add($(element).find('a').text().trim())
        flowerDescription.add($(element).find('td:nth-child(2)').text().trim())
        flowerImage.add($(element).find('img').attr('src'))
    })
   
    return {
        flowerName: [...flowerName],
        flowerDescription: [...flowerDescription],
        flowerImage: [...flowerImage]
    }
}


async function dataTransformation(){
return await getResults()
        .then(response => response)
        .then(response => {
        return response.flowerName.map(flower => {
            const flowerObject = {}
            flowerObject.name = flower
            
            response.flowerDescription.map(description => {
                return description.includes(flower)  
                    ? flowerObject.description = description
                    : null
            })
        
            response.flowerImage.slice(1).map(image => {
                const splitImage = image.split('/')
                const imageFlower = splitImage[5].split('.')
                const flowerElement = imageFlower[0]
                return flowerElement.includes(flower.toLowerCase())
                    ? flowerObject.image = `https://www.theflowerexpert.com${image}`
                    : null
            })

            return flowerObject
        })})

}

module.exports = dataTransformation()