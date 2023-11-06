import toaster from '../toaster/actions';
import { getQuizzes } from '../../services/quizService';

const actions = {
  SET_QUIZ_LOADING: 'SET_QUIZ_LOADING',
  SET_QUIZZES_DATA: 'SET_QUIZZES_DATA',
  getQuizzes: () => async (dispatch) => {
    dispatch({ type: actions.SET_QUIZ_LOADING, payload: true })
    const quizzes = await getQuizzes();
    dispatch({ type: actions.SET_QUIZZES_DATA, payload: quizzes })
    dispatch({ type: actions.SET_QUIZ_LOADING, payload: false })
  },

}

export default actions;
