import React from 'react';

const Header = ({ totalLessons, completedCount }) => {
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-purple-200">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2">
              <span className="text-4xl">🎓</span>
              CodeLearn Platform
            </h1>
            <p className="text-slate-600 text-sm mt-1 ml-14">
              Learn to code, one lesson at a time
            </p>
          </div>

          <div className="ml-8">
            <div className="bg-purple-100 px-6 py-3 rounded-xl border-2 border-purple-200">
              <div className="text-xs text-purple-700 font-semibold mb-2 uppercase tracking-wider">
                Overall Progress
              </div>
              <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="text-sm text-slate-700 font-semibold text-center">
                {completedCount}/{totalLessons} Lessons
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;