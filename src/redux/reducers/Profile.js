const initialState = {
    data: [],
    loading: false,
  };
  
  const DataProfile = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'SAVE_DATA_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'SAVE_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'SAVE_DATA_ERROR':
        return {
          ...state,
          loading: false,
          data:[],
          error: action.payload
        };
      default:
        return state
    }
  };

  export{
    DataProfile
  } 
  