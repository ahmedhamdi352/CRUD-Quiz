import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components 
const QuizList = lazy(() => import('./containers/quizList'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<QuizList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
