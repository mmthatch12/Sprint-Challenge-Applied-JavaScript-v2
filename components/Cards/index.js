// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsCont = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('arrays', data.data.articles)
        const artObj = data.data.articles
        const artobjtoArr = Object.entries(artObj)
        console.log('artObj:', artObj)
        console.log('artobjtoArr', artobjtoArr)


    })





function createCard(object){

    //create elements
    const cardDiv = document.createElement('div')
    const cardDHead = document.createElement('div')
    const cardDAuth = document.createElement('div')
    const cardDImCont = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardSpan = document.createElement('span')

    //set styling
    cardDiv.classList.add('card')
    cardDHead.classList.add('headline')
    cardDAuth.classList.add('author')
    cardDImCont.classList.add('img-container')

    //connect new elements
    cardDiv.appendChild(cardDHead)
    cardDiv.appendChild(cardDAuth)
    cardDAuth.appendChild(cardDImCont)
    cardDImCont.appendChild(cardImg)
    cardDAuth.appendChild(cardSpan)

    cardDHead.textContent = object.headline
    cardImg.src = object.authorPhoto
    cardSpan.textContent = `By ${object.authorName}`


    return cardDiv
}




