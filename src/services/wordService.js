import Api from '@/services/api'

export default {
  getPokemones () {
    return Api().get('/pokemon')
  },
//   getWordDetails (params) {
//     return Api().get('/entries/' + params)
//   }
}