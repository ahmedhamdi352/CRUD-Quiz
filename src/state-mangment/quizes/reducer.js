import actions from './actions';

const initState = {
  loading: false, quizzes: [], currentStep: 0,
  quizInfo: {
    title: '',
    url: '',
    score: '',
    description: ""
  },
  questions: [],
  answers: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_QUIZZES_DATA: {
      return { ...state, quizzes: [...state.quizzes, ...action.payload] };
    }
    case actions.SET_QUIZ_LOADING: {
      return { ...state, loading: action.payload };
    }

    case actions.SET_NEXT_STEP: {
      return { ...state, currentStep: action.payload }
    }

    case actions.SET_QUIZ_INFO: {
      return { ...state, quizInfo: action.payload }
    }

    case actions.SET_ANSWER_TO_QUESTION: {
      return { ...state, answers: [...state.answers, action.payload] }
    }

    case actions.SET_QUESTION: {
      return {
        ...state,
        quizzes: [...state.quizzes, { ...state.quizInfo, questions_answers: [...state.questions, { ...action.payload, answers: state.answers }] }],
      }
    }

    case actions.SAVE_AND_CREATE_NEW: {
      return { ...state, questions: [...state.questions, { ...action.payload, answers: state.answers }], answers: [] }
    }
    default:
      return state;
  }
}
