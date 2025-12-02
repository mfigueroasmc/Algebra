import React, { useState } from 'react';
import { QuizCard } from './components/QuizCard';
import { Results } from './components/Results';
import { questions } from './data/questions';
import { AppView, QuizState } from './types';
import { GraduationCap, ChevronRight, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.START);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: []
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const startQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: []
    });
    setSelectedOption(null);
    setIsAnswered(false);
    setView(AppView.QUIZ);
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsAnswered(true);

    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect || false;

    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect
      }]
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setView(AppView.RESULTS);
    }
  };

  // Main Render Logic
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
               <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-bold text-lg tracking-tight text-slate-900 hidden sm:block">AlgebraLineal<span className="text-indigo-600">Pro</span></h1>
          </div>
          {view === AppView.QUIZ && (
            <div className="flex items-center gap-3 bg-slate-100 px-4 py-1.5 rounded-full">
               <span className="text-xs font-bold uppercase text-slate-500">Progreso</span>
               <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                   style={{ width: `${((quizState.currentQuestionIndex) / questions.length) * 100}%` }}
                 ></div>
               </div>
               <span className="text-xs font-mono font-medium text-slate-600">
                 {quizState.currentQuestionIndex + 1}/{questions.length}
               </span>
            </div>
          )}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        
        {view === AppView.START && (
          <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                Prácticas 11-15
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Domina el <br/> <span className="text-indigo-600">Álgebra Lineal</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
                Evalúa tus conocimientos sobre espacios vectoriales, transformaciones lineales, valores propios y ortogonalidad basados en el material de la Universidad de Concepción.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-blue-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800">Teoría</h3>
                  <p className="text-xs text-slate-500 mt-1">Conceptos fundamentales y definiciones.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-purple-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                    <span className="font-mono text-purple-600 text-xs font-bold">Ax=b</span>
                  </div>
                  <h3 className="font-bold text-slate-800">Cálculo</h3>
                  <p className="text-xs text-slate-500 mt-1">Operaciones con matrices y vectores.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-orange-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                    <span className="font-serif italic text-orange-600 font-bold">λ</span>
                  </div>
                  <h3 className="font-bold text-slate-800">Abstracto</h3>
                  <p className="text-xs text-slate-500 mt-1">Demostraciones y propiedades.</p>
               </div>
            </div>

            <button 
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              Comenzar Evaluación
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {view === AppView.QUIZ && (
          <QuizCard 
            question={questions[quizState.currentQuestionIndex]}
            selectedOptionId={selectedOption}
            onSelectOption={handleOptionSelect}
            isAnswered={isAnswered}
            onNext={handleNext}
            isLast={quizState.currentQuestionIndex === questions.length - 1}
          />
        )}

        {view === AppView.RESULTS && (
          <Results 
            quizState={quizState} 
            totalQuestions={questions.length}
            onRestart={startQuiz}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 text-center text-slate-400 text-sm">
        <p>Basado en material docente público del Depto. de Ingeniería Matemática.</p>
      </footer>
    </div>
  );
};

export default App;