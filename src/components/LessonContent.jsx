import React from 'react';

const LessonContent = ({ lesson, onStartQuiz }) => {
  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6 shadow-lg border-l-4 border-purple-500">
              <code className="font-mono text-sm leading-relaxed">{codeContent}</code>
            </pre>
          );
          codeContent = '';
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-4xl font-bold mt-8 mb-4 text-slate-900">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-slate-800 pb-2 border-b-2 border-slate-200">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-5 mb-2 text-slate-700">
            {line.substring(4)}
          </h3>
        );
      } else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
        const text = line.trim().slice(2, -2);
        elements.push(
          <div key={index} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-xl my-6 font-semibold shadow-lg">
            {text}
          </div>
        );
      } else if (line.trim().startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-8 mb-2 text-slate-700 list-disc">
            {line.trim().substring(2)}
          </li>
        );
      } else if (line.trim()) {
        const parts = line.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
        const formatted = parts.map((part, i) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code key={i} className="bg-slate-100 text-purple-600 px-2 py-1 rounded font-mono text-sm font-semibold">
                {part.slice(1, -1)}
              </code>
            );
          } else if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        elements.push(
          <p key={index} className="mb-4 text-slate-600 leading-relaxed">
            {formatted}
          </p>
        );
      } else {
        elements.push(<br key={index} />);
      }
    });

    return elements;
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-200 text-green-800';
      case 'Intermediate': return 'bg-yellow-200 text-yellow-800';
      case 'Advanced': return 'bg-red-200 text-red-800';
      default: return 'bg-green-200 text-green-800';
    }
  };

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="overflow-y-auto flex-1 p-8">
        {/* Lesson Header */}
        <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-slate-200">
          <div>
            <div className="text-sm text-purple-600 font-semibold uppercase tracking-wider mb-2">
              {lesson.topic}
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
              {lesson.title}
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${getDifficultyColor(lesson.difficulty)}`}>
              {lesson.difficulty}
            </span>
            <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
              ⏱ {lesson.duration}
            </span>
          </div>
        </div>

        {/* Lesson Body */}
        <div className="prose prose-lg max-w-none">
          {renderContent(lesson.content)}
        </div>

        {/* Quiz Button */}
        <div className="mt-12 pt-8 border-t-2 border-slate-200">
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            📝 Take Quiz ({lesson.quiz.length} questions)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;