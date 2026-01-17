import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here and click Run\nconsole.log("Hello World!");');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput('Running...');
    
    setTimeout(() => {
      try {
        const logs = [];
        const originalLog = console.log;
        
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
          originalLog(...args);
        };

        eval(code);
        console.log = originalLog;

        setOutput(logs.join('\n') || '✓ Code executed successfully (no console output)');
      } catch (error) {
        setOutput(`❌ Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 300);
  };

  return (
    <div className="w-[500px] flex-shrink-0 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Editor Header */}
      <div className="bg-slate-950 px-6 py-4 flex justify-between items-center border-b border-slate-700">
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg">
            <span className="text-lg">📝</span>
            <span className="text-slate-200 font-semibold text-sm">JavaScript</span>
          </div>
        </div>
        <button
          onClick={runCode}
          disabled={isRunning}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? '⏳ Running...' : '▶ Run Code'}
        </button>
      </div>

      {/* Code Input */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 p-6 bg-slate-900 text-slate-100 font-mono text-sm leading-relaxed resize-none focus:outline-none"
        spellCheck="false"
        placeholder="Write your JavaScript code here..."
        style={{
          caretColor: '#10b981'
        }}
      />

      {/* Output Panel */}
      <div className="bg-slate-950 border-t border-slate-700 max-h-48 flex flex-col">
        <div className="px-6 py-3 bg-slate-900 flex justify-between items-center">
          <span className="text-slate-400 text-sm font-semibold">📤 Output</span>
          {output && (
            <button
              onClick={() => setOutput('')}
              className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1 rounded-md transition-colors"
            >
              Clear
            </button>
          )}
        </div>
        <pre className="flex-1 px-6 py-4 overflow-y-auto font-mono text-sm leading-relaxed text-green-400 whitespace-pre-wrap">
          {output || '👈 Write some code and click "Run Code" to see the output here'}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;