import {
  FETCH_VACANCIES,
  START_FETCH_VACANCIES,
  ERROR_FETCH_VACANCIES,
  SET_CURRENT_VACANCY,
  UPDATE_COUNT_VACANCIES,
  ADD_VACANCY,
  REMOVE_VACANCY,
  UPDATE_VACANCY,
  SET_VACANCY_SEARCH,
  SUBSCRIBE_VACANCIES,
  ERROR_SUBSCRIBE_VACANCIES,
  START_SUBSCRIBE_VACANCIES,
  REMOVE_CATCH
} from '../actions/vacancies'

const count = 15

let initialState = {
  data: [],
  count,
  search: '',
  current: null,
  loading: false,
  error: false,
  subscribeLoading: false,
  subscribeError: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VACANCIES:
      return {
        ...state,
        data: action.data,
        error: false,
        loading: false,
        count
      }
    case START_FETCH_VACANCIES:
      return {
        ...state,
        error: false,
        loading: true
      }
    case ERROR_FETCH_VACANCIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    case SET_CURRENT_VACANCY:
      let [current] = state.data.filter(({_id}) => _id == action.data)
      return {
        ...state,
        current,
        subscribeLoading: false,
        subscribeError: false
      }
    case UPDATE_COUNT_VACANCIES:
      return {
        ...state,
        count: state.count + count
      }
    case ADD_VACANCY:
      return {
        ...state,
        data: [action.data, ...state.data]
      }
    case REMOVE_VACANCY:
      return {
        ...state,
        data: state.data.filter(({_id}) => _id != action.data)
      }
    case UPDATE_VACANCY:
      const {id, data} = action.data
      return {
        ...state,
        data: state.data.map(vacancy => vacancy._id == id ? {...vacancy, ...data} : vacancy)
      }
    case SET_VACANCY_SEARCH:
      return {
        ...state,
        search: action.data
      }
    case START_SUBSCRIBE_VACANCIES:
      return {
        ...state,
        subscribeLoading: true,
        subscribeError: false
      }
    case ERROR_SUBSCRIBE_VACANCIES:
      return {
        ...state,
        subscribeLoading: false,
        subscribeError: true
      }
    case SUBSCRIBE_VACANCIES:
      const {current: currentVacancy} = state
      if (currentVacancy && currentVacancy._id == action.data) {
        currentVacancy.haveSubscription = true
      }
      return {
        ...state,
        data: state.data.map(vacancy => vacancy._id == action.data ? {...vacancy, haveSubscription: true} : vacancy),
        current: currentVacancy,
        subscribeLoading: false,
        subscribeError: false
      }
    case REMOVE_CATCH:
      return initialState
    default:
      return state
  }
}
