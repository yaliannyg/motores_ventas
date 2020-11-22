import Api from '@/services/api'

export default {
  getPokemones () {
    return Api().get('/pokemon')
  },
  login (email,password) {
      return Api.post('/login/normal', {email, password})
  }
  
//   getWordDetails (params) {
//     return Api().get('/entries/' + params)
//   }
}