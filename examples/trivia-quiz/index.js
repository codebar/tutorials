// As fetch() is an asynchronous function we can add the async/await keywords
async function fetchQuizQuestions(difficulty)  {
  return await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
  .then((response) => {
      return response.json()
  })
  .then((data) => {
      renderQuizQuestions(data)
  })  
}

function renderQuizQuestions(data) {
  const container = document.getElementById('questions')
  //when new data is fetched we want to remove the pre-existing list
  container.removeChild(container.firstChild)

  const list = document.createElement('ul')
  container.appendChild(list)

  data.results.map((questionObject) => {
      const listElement = document.createElement('li')
      const text = document.createTextNode(questionObject.question)
      listElement.appendChild(text)
      list.appendChild(listElement)
  })
}

// Bonus part of the tutorial functions
function createSelector() {
  const difficulties = ['easy', 'medium', 'hard']

  const selectorContainer = document.getElementById('selector-container')
  const selector = document.createElement('select')
  selector.id = 'selector'

  difficulties.map((difficulty) => {
      const option = new Option(difficulty, difficulty)
      selector.appendChild(option)
  })
  selectorContainer.appendChild(selector)
}

function selectorChangeListener() {
  const selector = document.getElementById('selector')

  selector.addEventListener('change', event => {
      const difficulty = event.target.value.toLowerCase()

      fetchQuizQuestions(difficulty)
  })   
}
// // //

function renderApp() {
  createSelector()
  // set to easy to load the page with
  fetchQuizQuestions('easy')
  selectorChangeListener()
}

document.addEventListener('readystatechange', event => {
  const readyState = event.target.readyState
  const container = document.getElementById('questions')

  if (readyState === 'interactive') {
      const image = new Image(100, 100)
      image.src = 'spinner.gif'
  
      container.appendChild(image)
  } else if (readyState === 'complete') {
      //remove spinner when document is ready
      container.removeChild(container.firstChild)
      renderApp()
  }
})