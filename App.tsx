import React, { useState } from 'react';
import { QuizCard } from './components/QuizCard';
import { Results } from './components/Results';
import { quizzes } from './data/questions';
import { AppView, QuizState } from './types';
import { GraduationCap, ChevronRight, BookOpen, Layers, Maximize, Divide } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.START);
  const [quizState, setQuizState] = useState<QuizState>({
    activeQuizId: null,
    currentQuestionIndex: 0,
    score: 0,
    answers: []
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Helper to get current quiz data
  const activeQuiz = quizzes.find(q => q.id === quizState.activeQuizId);
  const activeQuestions = activeQuiz?.questions || [];

  const startQuiz = (quizId: string) => {
    setQuizState({
      activeQuizId: quizId,
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

    const currentQuestion = activeQuestions[quizState.currentQuestionIndex];
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
    if (quizState.currentQuestionIndex < activeQuestions.length - 1) {
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

  const restartQuiz = () => {
    if (quizState.activeQuizId) {
      startQuiz(quizState.activeQuizId);
    }
  };

  const goToMenu = () => {
    setView(AppView.START);
    setQuizState({
      activeQuizId: null,
      currentQuestionIndex: 0,
      score: 0,
      answers: []
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'geometry': return <Maximize className="w-5 h-5 text-blue-600" />;
      case 'transform': return <Layers className="w-5 h-5 text-purple-600" />;
      case 'spectrum': return <Divide className="w-5 h-5 text-orange-600" />;
      default: return <BookOpen className="w-5 h-5 text-slate-600" />;
    }
  };

  // Main Render Logic
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={goToMenu}>
            <div className="bg-indigo-600 p-2 rounded-lg">
               <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-bold text-lg tracking-tight text-slate-900 hidden sm:block">AlgebraLineal<span className="text-indigo-600">Pro</span></h1>
          </div>
          {view === AppView.QUIZ && activeQuiz && (
            <div className="flex items-center gap-3 bg-slate-100 px-4 py-1.5 rounded-full">
               <span className="hidden xs:inline text-xs font-bold uppercase text-slate-500 mr-2">{activeQuiz.title}</span>
               <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                   style={{ width: `${((quizState.currentQuestionIndex) / activeQuestions.length) * 100}%` }}
                 ></div>
               </div>
               <span className="text-xs font-mono font-medium text-slate-600">
                 {quizState.currentQuestionIndex + 1}/{activeQuestions.length}
               </span>
            </div>
          )}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        
        {view === AppView.START && (
          <div className="max-w-5xl w-full space-y-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="text-center space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
                Prácticas 11-15 & Fórmulas
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Selecciona tu <span className="text-indigo-600">Evaluación</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Pon a prueba tus conocimientos con tests específicos diseñados a partir del material oficial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    quiz.icon === 'geometry' ? 'bg-blue-100 group-hover:bg-blue-200' :
                    quiz.icon === 'transform' ? 'bg-purple-100 group-hover:bg-purple-200' :
                    'bg-orange-100 group-hover:bg-orange-200'
                  }`}>
                    {getIcon(quiz.icon)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{quiz.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {quiz.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{quiz.questions.length} Preguntas</span>
                    <button 
                      onClick={() => startQuiz(quiz.id)}
                      className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Comenzar <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === AppView.QUIZ && activeQuiz && (
          <QuizCard 
            question={activeQuestions[quizState.currentQuestionIndex]}
            selectedOptionId={selectedOption}
            onSelectOption={handleOptionSelect}
            isAnswered={isAnswered}
            onNext={handleNext}
            isLast={quizState.currentQuestionIndex === activeQuestions.length - 1}
          />
        )}

        {view === AppView.RESULTS && activeQuiz && (
          <Results 
            quizState={quizState} 
            totalQuestions={activeQuestions.length}
            onRestart={restartQuiz}
            onGoHome={goToMenu}
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