import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { QuizState } from '../types';
import { RotateCcw, Trophy, Award, Home } from 'lucide-react';

interface ResultsProps {
  quizState: QuizState;
  totalQuestions: number;
  onRestart: () => void;
  onGoHome: () => void;
}

export const Results: React.FC<ResultsProps> = ({ quizState, totalQuestions, onRestart, onGoHome }) => {
  const correctCount = quizState.score;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const data = [
    { name: 'Correctas', value: correctCount },
    { name: 'Incorrectas', value: incorrectCount },
  ];

  const COLORS = ['#4f46e5', '#ef4444'];

  return (
    <div className="max-w-4xl mx-auto p-4 animate-in zoom-in-95 duration-500 w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        <div className="bg-indigo-600 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300 drop-shadow-lg" />
          <h2 className="text-3xl font-bold mb-2 relative z-10">Evaluación Completada</h2>
          <p className="text-indigo-200 relative z-10">Has finalizado este módulo de Álgebra Lineal</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
          
          <div className="text-center md:text-left space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Tu Puntaje Final</h3>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-6xl font-bold text-slate-800">{percentage}%</span>
                <span className="text-xl text-slate-400 font-medium">({correctCount} de {totalQuestions})</span>
              </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 text-green-800">
                 <div className="bg-green-200 p-2 rounded-lg"><Award className="w-5 h-5 text-green-700"/></div>
                 <div>
                   <p className="font-bold">Respuestas Correctas</p>
                   <p className="text-sm text-green-600">{correctCount} preguntas</p>
                 </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRestart}
                className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                <RotateCcw className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" />
                Reintentar
              </button>
              <button
                onClick={onGoHome}
                className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Inicio
              </button>
            </div>
          </div>

          <div className="h-64 md:h-80 w-full bg-slate-50 rounded-2xl border border-slate-100 p-4">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
             </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};