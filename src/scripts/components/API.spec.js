import axios from 'axios'
import API from './API'
import apiFixture from '../../../tests/fixtures/apiFixture.json'

jest.mock('axios')

describe('#runRequest', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should throw an error if a wrong method were passed', async () => {
    await expect(
      API.runRequest('INVALID_METHOD', API.URL, {})
    ).rejects.toThrow()
  })

  it('Should throw an error something wrong happened in promise', async () => {
    axios.get = jest.fn().mockRejectedValue()

    expect.assertions(1)

    return API.runRequest('get', API.URL, {}).catch((error) => {
      expect(error).toBe('[API error] ')
    })
  })

  it('Should receive server response if parameters were passed', async () => {
    const resp = { data: apiFixture }
    axios.get.mockResolvedValue(resp)

    await expect(API.getItems('low', 'rarely', 'yes')).resolves.toBe(apiFixture)
  })
})

describe('#getItems', () => {
  it('Should throw an error if wrong parameters were passed', async () => {
    await expect(API.getItems(false, false, false)).rejects.toThrow(
      '[API error] Missing arguments.'
    )
  })

  it('Should receive server response if parameters were passed', async () => {
    const resp = { data: apiFixture }
    axios.get.mockResolvedValue(resp)

    await expect(API.getItems('low', 'rarely', 'yes')).resolves.toBe(apiFixture)
  })
})
