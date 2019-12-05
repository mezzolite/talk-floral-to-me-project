
const meaningContainer = document.querySelector('.meaning-container')
const majorMeaningButtons = document.querySelector('#major-meanings')
const flowerContainer = document.querySelector('#flower-container')

const beautyDiv = document.querySelector('#beauty')
const happinessDiv = document.querySelector('#happiness')
const loveDiv = document.querySelector('#love')
const wealthDiv = document.querySelector('#wealth')
const characterDiv = document.querySelector('#character')

const beautyUl = document.querySelector('#beauty-ul')
const happinessUl = document.querySelector('#happiness-ul')
const loveUl = document.querySelector('#love-ul')
const wealthUl = document.querySelector('#wealth-ul')
const characterUl = document.querySelector('#character-ul')

const bouquetCollectionButton = document.querySelector('#bouquet-coll-button')
const bouquetOuterContainer = document.querySelector('#bouquet-encompass')
const bouquetContainer = document.querySelector('#bouquet-container')

const newBouquetForm = document.querySelector('.new-bouquet-form')

beautyMeanings = [
    'daintiness',
    'elegance',
    'exotic beauty',
    'glorious femininity',
    'loveliness',
    'magnificence',
    'mature charm',
    'refined beauty',
    'refinement',
    'splendid beauty',
    'sweetness',
    'beauty'
]

happinessMeanings = [
    "disappointment",
    "joyfulness",
    "lightness",
    "sorrow",
    "joy ",
    "happiness",
    "playfulness",
    "cheerfulness",
    "levity",
    "fading hope",
    "optimism",
    "anticipation",
    "fame",
    "gaiety"
]

loveMeanings = [
    'fidelity',
    'disdain',
    'jealousy',
    'unrequited love',
    'slighted love',
    'rejection',
    'regard',
    'love of variety',
    'secret love',
    'friendship',
    'loyal love',
    'admiration',
    'heartlessness',
    'first love',
    'adoration',
    'passion',
    'love'
]

wealthMeanings = [
    'long life',
    'abundance',
    'diversity',
    'rebirth',
    'fortune',
    'eternal life',
    'new beginnings',
    'wealth',
    'remembrance',
    'prosperity',
    'worth beyond beauty'
]

characterMeanings = [
    'strength of character',
    'capriciousness',
    'rashness',
    'solitude',
    'patience',
    'pride',
    'thoughtfulness',
    'chivalry',
    'protection',
    'purity',
    'honor',
    'innocence',
    'constancy',
    'frigidity',
    'fickleness',
    'haughtiness',
    'confidence',
    'bashfulness',
    'indignation',
    'shame',
    'change',
    'transformation',
    'daring',
    'resourcefulness',
    'courage'
]


function buttonCreation(meaningArray, meaningUl){
    return meaningArray.map(meaning => {
        meaningButton = document.createElement('button')
        meaningButton.innerText = meaning

        meaningUl.append(meaningButton)
})}

function changeUlDisplay(meaningUl){
     if(meaningUl.style.display === 'block'){
         meaningUl.style.display = 'none'
    } else {
        meaningUl.style.display = 'block'
    }
}

function meaningButtonClick(meaningUl){
    meaningUl.addEventListener('click', event => {
        fetch('http://localhost:3000/flowers')
            .then(response => response.json())
            .then(flowers => flowers.map(flower => {
                if(flower.description.includes(event.target.innerText.toLowerCase())){
                const flowerCard = document.createElement('div')
                flowerCard.className = 'flower-card'
                
                const flowerName = document.createElement('h4')
                flowerName.innerText = flower.name 
                
                const flowerDescription = document.createElement('p')
                flowerDescription.innerText = flower.description 
                
                const flowerImage = document.createElement('img')
                flowerImage.src = flower.image 
                flowerImage.alt = flower.name

                const addToBouquetButton = document.createElement('button')
                addToBouquetButton.className = "add-to-bouquet-button"
                addToBouquetButton.innerText = "Add to Bouquet"
                
                flowerCard.append(flowerName, flowerDescription, flowerImage, addToBouquetButton)
                flowerContainer.append(flowerCard)
                }
            }))
            .catch(error => console.log(error))
    })
}

majorMeaningButtons.addEventListener('click', event => {
    if(event.target === beautyDiv){
        buttonCreation(beautyMeanings, beautyUl)
        changeUlDisplay(beautyUl)
        meaningButtonClick(beautyUl)
    } else if(event.target === happinessDiv){
        buttonCreation(happinessMeanings, happinessUl)
        changeUlDisplay(happinessUl)
        meaningButtonClick(happinessUl)
    } else if(event.target === loveDiv){
        buttonCreation(loveMeanings, loveUl)
        changeUlDisplay(loveUl)
        meaningButtonClick(loveUl)
    } else if(event.target === wealthDiv){
        buttonCreation(wealthMeanings, wealthUl)
        changeUlDisplay(wealthUl)
        meaningButtonClick(wealthUl)
    } else if(event.target === characterDiv){
        buttonCreation(characterMeanings, characterUl)
        changeUlDisplay(characterUl)
        meaningButtonClick(characterUl)
    } 
})

bouquetCollectionButton.addEventListener('click', event => {
    if(bouquetOuterContainer.style.display === 'block'){
        bouquetOuterContainer.style.display = 'none'
   } else {
       bouquetOuterContainer.style.display = 'block'
   }

})

function fetchBouquets(){
    fetch('http://localhost:3000/bouquets')
         .then(response => response.json())
         .then(bouquets => bouquets.map(bouquet => {
             const bouquetCard = document.createElement('div')
             bouquetCard.className = "bouquet-card"
    
             const bouquetName = document.createElement('h4')
             bouquetName.innerText = bouquet.name
    
             const bouquetFlowers = document.createElement('div')
             bouquetFlowers.className = "bouquet-flowers"
    
             bouquet.flowers.map(flower =>{
                 const bouquetFlowerName = document.createElement('h5')
                 bouquetFlowerName.innerText = flower.name
                 const bouquetFlowerImage = document.createElement('img')
                 bouquetFlowerImage.src = flower.image
    
                 bouquetFlowers.append(bouquetFlowerName, bouquetFlowerImage)
             })

             const deleteBouquetButton = document.createElement('button')
             deleteBouquetButton.innerText = "X"
             deleteBouquetButton.id = "delete-bouquet-button"
    
             bouquetCard.append(bouquetName, bouquetFlowers, deleteBouquetButton)
             bouquetContainer.append(bouquetCard)
         }))

}

newBouquetForm.addEventListener('submit', event =>{
    event.preventDefault()

    const bouquetData = new FormData(event.target)
    const name = bouquetData.get('name')
    
    const bouquetCard = document.createElement('div')
    bouquetCard.className = "bouquet-card"
    
    const bouquetName = document.createElement('h4')
    bouquetName.innerText = name

    bouquetCard.append(bouquetName)
    bouquetContainer.append(bouquetCard)

    fetch('http://localhost:3000/bouquets', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "name": name
        })
      })
})

fetchBouquets()




