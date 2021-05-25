import config from '../../config'
import initPuppeteer from '../e2e/initPuppeteer'

global.config = config
global.TEST = {
  TIMEOUT: 30000
}

// Define jest timeout
jest.setTimeout(global.TEST.TIMEOUT)

 // Define actions to be executed before all tests
global.TEST.beforeAll = async () => {
  const browser = await initPuppeteer()

  global.browser = browser
  global.page = await browser.newPage()
}

// Define actions to be executed after all tests
global.TEST.afterAll = async () => {
  if (global.browser) {
    await global.browser.close()
  }
}
