const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'

const configs = {
  test: {
    baseUrl: 'http://localhost:1234'
  }
}

export default configs[env]
