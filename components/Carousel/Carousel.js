/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselEntryPoint = document.querySelector('.carousel-container')

function carouselMaker() {
  const carouselDiv = document.createElement('div')
  const leftButton = document.createElement('div')
  const imgOne = document.createElement('img')
  const imgTwo = document.createElement('img')
  const imgThree = document.createElement('img')
  const imgFour = document.createElement('img')
  const rightButton = document.createElement('div')

  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(imgOne)
  carouselDiv.appendChild(imgTwo)
  carouselDiv.appendChild(imgThree)
  carouselDiv.appendChild(imgFour)
  carouselDiv.appendChild(rightButton)

  carouselDiv.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  leftButton.textContent = '<'
  imgOne.src = "./assets/carousel/mountains.jpeg"
  imgTwo.src = "./assets/carousel/computer.jpeg"
  imgThree.src = "./assets/carousel/trees.jpeg"
  imgFour.src = "./assets/carousel/turntable.jpeg"
  rightButton.textContent = '>'

  const imageArray = [imgOne, imgTwo, imgThree, imgFour]

  console.log(imageArray)
  

  leftButton.addEventListener('click', event => {
    let imageIndex = 1
    imageArray[imageIndex - 1].style.display = ''
  })

  rightButton.addEventListener('click', event => {
    let imageIndex = 1
    imageArray[imageIndex + 1].style.display = ''
  })

  return carouselDiv
}

carouselEntryPoint.appendChild(carouselMaker())