import React from 'react';
import { Question, Option } from '../types';
import { Matrix } from './Matrix';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
  isAnswered: boolean;
  onNext: () => void;
  isLast: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedOptionId, 
  onSelectOption, 
  isAnswered,
  onNext,
  isLast
}) => {
  
  const getOptionStyle = (option: Option) => {
    const baseStyle = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group";
    
    if (!isAnswered) {
      if (selectedOptionId === option.id) {
        return `${baseStyle} border-indigo-600 bg-indigo-50 text-indigo-900`;
      }
      return `${baseStyle} border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700`;
    }

    // Answered state
    if (option.isCorrect) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900`;
    }
    if (selectedOptionId === option.id && !option.isCorrect) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
    }
    return `${baseStyle} border-slate-100 text-slate-400 opacity-60`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-2 py-1 rounded">
            {question.topic}
          </span>
          <span className="text-slate-400 text-sm font-mono">ID: {question.id}</span>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <h3 className="text-xl font-medium text-slate-800 leading-relaxed mb-6">
            {question.text}
          </h3>

          {question.matrix && (
            <div className="flex justify-center mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <Matrix data={question.matrix} />
            </div>
          )}

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => !isAnswered && onSelectOption(option.id)}
                disabled={isAnswered}
                className={getOptionStyle(option)}
              >
                <span className="flex-1 font-medium">{option.text}</span>
                {isAnswered && option.isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                {isAnswered && selectedOptionId === option.id && !option.isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
              </button>
            ))}
          </div>

          {isAnswered && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <h4 className="text-blue-900 font-semibold mb-1 flex items-center gap-2">
                  <span className="bg-blue-200 text-blue-800 text-xs px-1.5 py-0.5 rounded">Explicación</span>
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={onNext}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2"
                >
                  {isLast ? "Ver Resultados" : "Siguiente Pregunta"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};