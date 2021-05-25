import API from '../components/API'
import resultItemTemplate from '../templates/resultItemTemplate'

const Home = () => {
  /**
   * Get values from selects
   *
   * @returns {Object}
   */
  const getStepsData = () => {
    const stepsData = {}

    document.querySelectorAll('[data-step]').forEach((item) => {
      stepsData[item.getAttribute('data-step')] = item.value
    })

    return stepsData
  }

  /**
   * Toggle visualization of results containers
   *
   * @param   {Boolean} hasResult
   * @returns {Object}
   */
  const toggleResultsVisible = (hasResult) => {
    const NOT_FOUND_CLASS = 'page__results__not-found'
    const FOUND_CLASS = 'page__results__found'
    const ACTIVE_CLASS = '--active'

    const $foundElement = document.querySelector(`.${FOUND_CLASS}`)
    const $notFoundElement = document.querySelector(`.${NOT_FOUND_CLASS}`)

    if (hasResult) {
      $foundElement.classList.add(`${FOUND_CLASS}${ACTIVE_CLASS}`)
      $notFoundElement.classList.remove(`${NOT_FOUND_CLASS}${ACTIVE_CLASS}`)
    } else {
      $foundElement.classList.remove(`${FOUND_CLASS}${ACTIVE_CLASS}`)
      $notFoundElement.classList.add(`${NOT_FOUND_CLASS}${ACTIVE_CLASS}`)
    }
  }

  /**
   * Fill results in container
   *
   * @param   {Object} data
   * @returns {void}
   */
  const fillResults = (data) => {
    const $resultElement = document.querySelector('.result__items')

    if (data.length) {
      let content = []
      data.forEach((currentData) => {
        content.push(resultItemTemplate(currentData, getStepsData()))
      })

      $resultElement.innerHTML = content.join('')
    }
  }

  /**
   * Handle change of selects
   *
   * @returns {void}
   */
  const handleSelect = (/* evt */) => {
    const { sun, water, pets } = getStepsData()

    API.getItems(sun, water, pets)
      .then((response) => {
        fillResults(response)
        toggleResultsVisible(true)
      })
      .catch((/* error */) => {
        toggleResultsVisible(false)
      })
  }

  /**
   * Attach events
   */
  const addEvents = () => {
    // Handle change of options
    document.querySelectorAll('[data-step]').forEach((item) => {
      item.addEventListener('change', handleSelect)
    })
  }

  return {
    init() {
      addEvents()
    }
  }
}

export default Home
