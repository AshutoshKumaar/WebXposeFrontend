import axios from 'axios'
const URL = 'https://webxposebackend.onrender.com'

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/Contact`, data)
  } catch (error) {
    console.log('There is Some error in  axios', error)
  }
}

export const feedBacUser = async (feedBack) => {
  try {
    return await axios.post(`${URL}/donation`, feedBack)
  } catch (error) {
    console.log('There is some Eroor in FeedBack pages')
  }
}

export const getFeedBack = async () => {
  try {
    return await axios.get(`${URL}/donation`)
  } catch (error) {
    console.log('There is some error while fetching the data')
  }
}
