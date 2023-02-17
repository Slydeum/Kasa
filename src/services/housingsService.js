import Housings from '../data/Housings.json'

const housingsService = {
  getAll: () => {
    return Housings
  },
  getById: (housingId) => {
    return Housings.filter((Housings) => Housings.id === housingId)
  },
}

export default housingsService
