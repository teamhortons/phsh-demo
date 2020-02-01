export const actionTypes = {
  PHSH_ANALYZE_REQUEST: "PHSH_ANALYZE_REQUEST",
  PHSH_ANALYZE_SUCCESS: "PHSH_ANALYZE_SUCCESS",
  PHSH_ANALYZE_FAILURE: "PHSH_ANALYZE_FAILURE",
};

export const actions = {

  // TODO: Add when API call is available
  // analyzePage: () => async (dispatch) => {
  //   console.log("--- REQUEST");
  //   dispatch({ type: actionTypes.PHSH_ANALYZE_REQUEST });
  //   try {
  //     console.log("--- SUCCESS");
  //     const data = "0.99"
  //     dispatch({
  //       type: actionTypes.PHSH_ANALYZE_SUCCESS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: actionTypes.PHSH_ANALYZE_FAILURE,
  //     });
  //   }
  // },

  analyzePage: () => (dispatch) => {
    console.log("--- REQUEST");
    dispatch({ type: actionTypes.PHSH_ANALYZE_REQUEST });
    setTimeout(function () {
      dispatch({ type: actionTypes.PHSH_ANALYZE_SUCCESS });
    }, 5000);
  },

};

/* initial state + reducer */
export const createInitialState = () => ({
  isAnalyzing: false,
});
const initialState = createInitialState();

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PHSH_ANALYZE_REQUEST:
      console.log("*** REQUEST");
      return { ...state, isAnalyzing: true };

    case actionTypes.PHSH_ANALYZE_SUCCESS:
      console.log("*** SUCCESS");
      return { ...state, isAnalyzing: false };

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
