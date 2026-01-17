import React from 'react';

const Sidebar = ({ lessons, selectedLesson, onSelectLesson, completedLessons, lessonScores }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-200 text-green-800';
      case 'Intermediate': return 'bg-yellow-200 text-yellow-800';
      case 'Advanced': return 'bg-red-200 text-red-800';
      default: return 'bg-green-200 text-green-800';
    }
  };

  return (
    <aside className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col flex-shrink-0">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Course Contents</h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            {lessons.length} lessons
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className={`flex gap-4 p-4 mb-2 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
              selectedLesson.id === lesson.id
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 shadow-lg'
                : 'bg-slate-50 hover:bg-slate-100 border-transparent hover:translate-x-1'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 ${
              selectedLesson.id === lesson.id 
                ? 'bg-white/20 text-white' 
                : completedLessons.has(lesson.id)
                ? 'bg-green-500 text-white'
                : 'bg-purple-100 text-purple-600'
            }`}>
              {completedLessons.has(lesson.id) ? '✓' : index + 1}
            </div>

            <div className="flex-1 min-w-0">
              <div className={`font-semibold text-sm mb-2 line-clamp-2 ${
                selectedLesson.id === lesson.id ? 'text-white' : 'text-slate-800'
              }`}>
                {lesson.title}
              </div>
              
              <div className="flex flex-wrap gap-2 items-center">
                <span className={`text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide ${
                  selectedLesson.id === lesson.id 
                    ? 'bg-white/25 text-white' 
                    : getDifficultyColor(lesson.difficulty)
                }`}>
                  {lesson.difficulty}
                </span>
                
                <span className={`text-xs font-medium ${
                  selectedLesson.id === lesson.id ? 'text-white/90' : 'text-slate-600'
                }`}>
                  ⏱ {lesson.duration}
                </span>

                {lessonScores[lesson.id] && (
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    selectedLesson.id === lesson.id 
                      ? 'bg-white/25 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {lessonScores[lesson.id]}%
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;