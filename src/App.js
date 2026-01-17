import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import CodeEditor from './components/CodeEditor';
import Quiz from './components/Quiz';
import { javascriptCourse } from './data/javascriptCourse';

function App() {
  const lessons = javascriptCourse.lessons;
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [lessonScores, setLessonScores] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('learningProgress');
    if (saved) {
      const data = JSON.parse(saved);
      setCompletedLessons(new Set(data.completed || []));
      setLessonScores(data.scores || {});
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (completed, scores) => {
    localStorage.setItem('learningProgress', JSON.stringify({
      completed: Array.from(completed),
      scores: scores
    }));
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setShowQuiz(false);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (percentage) => {
    if (percentage >= 70) {
      const newCompleted = new Set(completedLessons);
      newCompleted.add(selectedLesson.id);
      setCompletedLessons(newCompleted);
      
      const newScores = { ...lessonScores, [selectedLesson.id]: percentage };
      setLessonScores(newScores);
      
      saveProgress(newCompleted, newScores);
    }
  };

  const handleBackToLesson = () => {
    setShowQuiz(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header 
        totalLessons={lessons.length}
        completedCount={completedLessons.size}
      />

      <div className="flex gap-4 p-4 flex-1 overflow-hidden min-h-0">
        <Sidebar
          lessons={lessons}
          selectedLesson={selectedLesson}
          onSelectLesson={handleSelectLesson}
          completedLessons={completedLessons}
          lessonScores={lessonScores}
        />

        <div className="flex-1 flex gap-4 overflow-hidden">
          {!showQuiz ? (
            <LessonContent
              lesson={selectedLesson}
              onStartQuiz={handleStartQuiz}
            />
          ) : (
            <Quiz
              lesson={selectedLesson}
              onComplete={handleQuizComplete}
              onBackToLesson={handleBackToLesson}
            />
          )}

          <CodeEditor />
        </div>
      </div>
    </div>
  );
}

export default App;