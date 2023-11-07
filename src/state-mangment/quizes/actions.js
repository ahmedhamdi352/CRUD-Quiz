import toaster from '../toaster/actions';
import { getQuizzes } from '../../services/quizService';

const actions = {
  SET_QUIZ_LOADING: 'SET_QUIZ_LOADING',
  SET_QUIZZES_DATA: 'SET_QUIZZES_DATA',
  SET_NEXT_STEP: 'SET_NEXT_STEP',
  SET_QUIZ_INFO: 'SET_QUIZ_INFO',
  SET_ANSWER_TO_QUESTION: 'SET_ANSWER_TO_QUESTION',
  SET_QUESTION: 'SET_QUESTION',
  SAVE_AND_CREATE_NEW: 'SAVE_AND_CREATE_NEW',

  getQuizzes: () => async (dispatch) => {
    dispatch({ type: actions.SET_QUIZ_LOADING, payload: true })
    const quizzes = await getQuizzes();
    dispatch({ type: actions.SET_QUIZZES_DATA, payload: quizzes })
    dispatch({ type: actions.SET_QUIZ_LOADING, payload: false })
  },

  setNextStep: (step) => async (dispatch) => {
    dispatch({ type: actions.SET_NEXT_STEP, payload: step })
  },

  setQuizInfo: (data) => async (dispatch) => {
    dispatch({ type: actions.SET_QUIZ_INFO, payload: data })
  },

  setAnswerToQuestion: (data) => async (dispatch) => {
    dispatch({ type: actions.SET_ANSWER_TO_QUESTION, payload: data })
  },

  setQuestion: (data) => async (dispatch) => {
    dispatch({ type: actions.SET_QUESTION, payload: data })
  },

  saveAndCreateNew: (data) => async (dispatch) => {
    dispatch({ type: actions.SAVE_AND_CREATE_NEW, payload: data })
  },

}

export default actions;
