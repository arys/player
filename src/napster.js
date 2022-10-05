import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.napster.com/v2.2',
  params: {
    apikey: '',
    per_type_limit: 5,
  }
})

export default client