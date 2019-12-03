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
   
    console.log({
        flowerName: [...flowerName],
        flowerDescription: [...flowerDescription],
        flowerImage: [...flowerImage]
    })
}

module.exports = getResults