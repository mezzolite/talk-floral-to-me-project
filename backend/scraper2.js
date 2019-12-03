const axios = require('axios')
const cheerio = require('cheerio')
const meaningsUrl = 'https://www.clareflorist.co.uk/inspire-me/meanings/'

const flowerName = new Set()
const flowerDescription = new Set()

const fetchData = async () => {
    const result = await axios.get(meaningsUrl)
    return cheerio.load(result.data)
}

const getResults = async() => {
    const $ = await fetchData()

    $(".wrap flower-meaning-listings").each((index, element) => {
        flowerName.add($(element).find('a.innerText'))
    })
    $("table.itemlist tr td").each((index, element) => {
        flowerDescription.add($(element).text())
    })

    return {
        flowerName: [...flowerName],
        flowerDescription: [...flowerDescription]
    }
}

module.exports = getResults