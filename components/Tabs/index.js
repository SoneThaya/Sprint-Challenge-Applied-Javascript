// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabEntryPoint = document.querySelector('.topics')

function topicTab(topicHere) {
  const tabDiv = document.createElement('div')

  tabDiv.classList.add('tab')

  tabDiv.textContent = topicHere

  return tabDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/topics') 
  .then(response => {
    console.log(response)
    const tabTopic = response.data.topics
    console.log(tabTopic)
    
    tabTopic.forEach(item => {
      tabEntryPoint.appendChild(topicTab(item))
    })
    
  })
    .catch(error => {
      console.log('error')
  })
