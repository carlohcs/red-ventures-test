import config from '../../config'

global.config = config
global.TEST = {
  TIMEOUT: 30000
}

// Define jest timeout
jest.setTimeout(global.TEST.TIMEOUT)
