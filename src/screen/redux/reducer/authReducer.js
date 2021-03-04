const INITIAL_STATE = {
  username: '',
  password: '',
  isSignedIn: false,
  loading: false,
  error: false,
  errorMessage: '',
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'AUTH_START':
      return {
        ...state,
        loading:true,
      }
    case 'AUTH_SUCCESS':
      return {
        ...action.payload,
        isSignedIn: true,
        loading:false,
      }
    case 'AUTH_FAILED':
      return {
        ...state,
        loading:false,
        error: true,
        errorMessage: action.payload
      }
    case 'NULLIFY_ERROR':
      return {
        ...state,
        error: false,
        errorMessage: '',
      }
    case 'AUTH_LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}