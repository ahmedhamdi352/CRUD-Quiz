import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
import Footer from './containers/footer';
// import './index.css'

//components 
const QuizList = lazy(() => import('./containers/quizList'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<QuizList />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App;
