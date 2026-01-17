import React, { useState } from 'react';

const Quiz = ({ lesson, onComplete, onBackToLesson }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    const question = lesson.quiz[currentQuestion];
    if (selectedAnswer === question.correct) {
      setQuizScore(quizScore + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < lesson.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      const percentage = Math.round(((quizScore + (selectedAnswer === lesson.quiz[currentQuestion].correct ? 1 : 0)) / lesson.quiz.length) * 100);
      onComplete(percentage);
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const finalScore = Math.round((quizScore / lesson.quiz.length) * 100);
    
    return (
      <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="overflow-y-auto flex-1 p-12 text-center">
          <h2 className="text-5xl font-bold mb-8 text-slate-900">🎉 Quiz Complete!</h2>
          
          <div className="my-12">
            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl">
              <div className="text-6xl font-extrabold text-white">{finalScore}%</div>
            </div>
            <p className="text-xl text-slate-600 mt-8 font-medium">
              You got {quizScore} out of {lesson.quiz.length} questions correct!
            </p>
          </div>

          {finalScore >= 70 ? (
            <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl text-lg font-semibold mb-8">
              ✅ Great job! You've completed this lesson.
            </div>
          ) : (
            <div className="bg-red-100 border-2 border-red-500 text-red-800 px-6 py-4 rounded-xl text-lg font-semibold mb-8">
              📚 You need 70% to complete this lesson. Review the content and try again!
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={retakeQuiz}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              🔄 Retake Quiz
            </button>
            <button
              onClick={onBackToLesson}
              className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors"
            >
              📖 Back to Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = lesson.quiz[currentQuestion];

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="overflow-y-auto flex-1 p-8">
        {/* Quiz Header */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900">📝 Quiz Time!</h2>
          <div className="bg-slate-100 px-6 py-3 rounded-full font-semibold text-slate-700">
            Question {currentQuestion + 1} of {lesson.quiz.length}
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 leading-relaxed">
            {question.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all border-2 ${
                selectedAnswer === index
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'
              } ${
                showExplanation && index === question.correct
                  ? 'border-green-500 bg-green-50'
                  : showExplanation && selectedAnswer === index
                  ? 'border-red-500 bg-red-50'
                  : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                selectedAnswer === index
                  ? 'bg-purple-600 text-white'
                  : showExplanation && index === question.correct
                  ? 'bg-green-500 text-white'
                  : showExplanation && selectedAnswer === index
                  ? 'bg-red-500 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <div className="flex-1 text-slate-800 font-medium text-lg">{option}</div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
            <p className="text-amber-900 leading-relaxed">
              <strong className="font-bold">Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          {!showExplanation ? (
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {currentQuestion < lesson.quiz.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;