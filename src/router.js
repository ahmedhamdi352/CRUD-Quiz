import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
// import './index.css'

//components 
const QuizList = lazy(() => import('./containers/quizList'));
const CreateQuiz = lazy(() => import('./containers/createQuiz'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/add-quiz" element={<CreateQuiz />} />

          </Routes>
        </div>
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App;
