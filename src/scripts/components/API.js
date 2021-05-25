// Solve 'regeneratorruntime-not-defined': https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import 'regenerator-runtime/runtime'
import axios from 'axios'

const API = {
  URL: 'https://front-br-challenges.web.app/api/v2/green-thumb/?sun={{sun}}&water={{water}}&pets={{pets}}',
  /**
   * Run a request
   *
   * @param   {String} method get | post | put | delete ...
   * @param   {String} url
   * @param   {String} data
   * @param   {String} options
   * @returns {Promise}
   */
  async runRequest(method, url, data = {}, options = false) {
    return new Promise((resolve, reject) => {
      axios[method](url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(`[API error] `, error)
        })
    })
  },
  /**
   * Get data from API
   *
   * @param   {String} sun no | low | high
   * @param   {String} water regularly | daily | rarely
   * @param   {String} pets true | false
   * @returns {Promise}
   */
  async getItems(sun, water, pets) {
    if (
      !sun ||
      sun.trim() === '' ||
      !water ||
      water.trim() === '' ||
      !pets ||
      pets.trim() === ''
    ) {
      throw new Error('[API error] Missing arguments.')
    }

    const url = API.URL.replace('{{sun}}', sun)
      .replace('{{water}}', water)
      .replace('{{pets}}', pets)

    return API.runRequest('get', url)
  }
}

export default API
