import getAnalysis from '../phsh/PhshAnalysis';

export const actionTypes = {
  PHSH_ANALYZE_REQUEST: "PHSH_ANALYZE_REQUEST",
  PHSH_ANALYZE_SUCCESS: "PHSH_ANALYZE_SUCCESS",
  PHSH_ANALYZE_FAILURE: "PHSH_ANALYZE_FAILURE",
};

export const actions = {

  analyzePage: async (dispatch) => {
    dispatch({ type: actionTypes.PHSH_ANALYZE_REQUEST });
    try {
      const response = await getAnalysis();
      dispatch({
        type: actionTypes.PHSH_ANALYZE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PHSH_ANALYZE_FAILURE,
      });
    }

  }

};

/* initial state + reducer */
export const createInitialState = () => ({
  isAnalyzing: false,
  isPhishy: false,
});
const initialState = createInitialState();

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PHSH_ANALYZE_REQUEST:
      console.log("*** REQUEST");
      return { ...state, isAnalyzing: true };

    case actionTypes.PHSH_ANALYZE_SUCCESS:
      console.log("*** SUCCESS", action.payload);
      return { ...state, isAnalyzing: false, isPhishy: action.payload};

    case actionTypes.PHSH_ANALYZE_FAILURE:
      console.log("*** FAILURE");
      return { ...state, isAnalyzing: false };

    default: {
      return state;
    }
  }
};

export const selectors = {
  isAnalyzing: state => state.phsh.isAnalyzing,
};
