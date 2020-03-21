const initialState = {
  wakeup: false,
  loading: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WAKEUP':
      return { ...state, wakeup: action.wakeup }

    case 'SET_LOADING':
      return { ...state, loading: action.loading }

    default:
      return state
  }
}

export default app
