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
    $("table tr"[0]).each((index, element) => {
        console.log(element)
        // flowerName.add($(element).find('a').text())
    })
    $("table.itemlist tr td").each((index, element) => {
        flowerDescription.add($(element).text())
    })
    $("table.itemlist tr td").each((index, element) => {
        flowerImage.add($(element).find('img').attr('src'))
    })
    console.log({
        flowerName: [...flowerName],
        flowerDescription: [...flowerDescription],
        flowerImage: [...flowerImage]
    })
}

module.exports = getResults