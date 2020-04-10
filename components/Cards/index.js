// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsEntryPoint = document.querySelector('.cards-container')

function cardMaker({ headlineArticle, authorsImage, authorsName }) {
  const cardDiv = document.createElement('div')
  const cardHeadline = document.createElement('div')
  const cardAuthor = document.createElement('div')
  const cardImage = document.createElement('div')
  const imgAuthor = document.createElement('img')
  const spanName = document.createElement('span')

  cardDiv.appendChild(cardHeadline)
  cardDiv.appendChild(cardAuthor)
  cardAuthor.appendChild(cardImage)
  cardAuthor.appendChild(spanName)
  cardImage.appendChild(imgAuthor)

  cardDiv.classList.add('card')
  cardHeadline.classList.add('headline')
  cardAuthor.classList.add('author')
  cardImage.classList.add('img-container')

  cardHeadline.textContent = headlineArticle
  imgAuthor.src = authorsImage
  spanName.textContent = authorsName
  
  return cardDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response)
    
    const javascriptArticles = response.data.articles.javascript
    const bootstrapArticles = response.data.articles.bootstrap
    const technologyArticles = response.data.articles.technology
    const jqueryArticles = response.data.articles.jquery
    const nodeArticles = response.data.articles.node
    

    const allArticles = [...javascriptArticles, ...bootstrapArticles, ...technologyArticles, ...jqueryArticles, ...nodeArticles]
    
    console.log(allArticles)

    allArticles.forEach(item => {
      const headlineArticle = item.headline
      const authorsImage = item.authorPhoto
      const authorsName = item.authorName

      const articleCard = cardMaker({ headlineArticle, authorsImage, authorsName })
      
      cardsEntryPoint.appendChild(articleCard)
    })
    
  })
  .catch(error => {
    console.log('error')
  })