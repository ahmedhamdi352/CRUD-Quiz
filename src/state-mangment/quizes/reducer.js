import actions from './actions';

const initState = { loading: false, quizzes: null, };

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_QUIZZES_DATA: {
      return { ...state, quizzes: action.payload };
    }
    case actions.SET_QUIZ_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
}
