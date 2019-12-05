console.log('better work')

const meaningContainer = document.querySelector('.meaning-container')
const majorMeaningButtons = document.querySelector('#major-meanings')
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
         meaningUl.childNodes.remove()
    } else {
        meaningUl.style.display = 'block'
    }
}

majorMeaningButtons.addEventListener('click', event => {
    if(event.target === beautyDiv){
        buttonCreation(beautyMeanings, beautyUl)
        changeUlDisplay(beautyUl)  
    } else if(event.target === happinessDiv){
        buttonCreation(happinessMeanings, happinessUl)
        changeUlDisplay(happinessUl)
    } else if(event.target === loveDiv){
        buttonCreation(loveMeanings, loveUl)
        changeUlDisplay(loveUl)
    } else if(event.target === wealthDiv){
        buttonCreation(wealthMeanings, wealthUl)
        changeUlDisplay(wealthUl)
    } else if(event.target === characterDiv){
        buttonCreation(characterMeanings, characterUl)
        changeUlDisplay(characterUl)
    } 
})

fetch('')




