import React from 'react';
import { MatrixData } from '../types';

interface MatrixProps {
  data: MatrixData;
  label?: string;
}

export const Matrix: React.FC<MatrixProps> = ({ data, label }) => {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-sm my-4">
      {label && <span className="font-serif italic text-lg mr-1">{label} = </span>}
      <div className="relative px-2 py-1">
        {/* Left Bracket */}
        <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-slate-800 rounded-l-sm"></div>
        
        <div 
          className="grid gap-x-4 gap-y-1 text-center"
          style={{ 
            gridTemplateColumns: `repeat(${data.cols}, minmax(1.5rem, auto))` 
          }}
        >
          {data.data.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((cell, j) => (
                <div key={`${i}-${j}`} className="text-slate-700 font-medium">
                  {cell}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Right Bracket */}
        <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-slate-800 rounded-r-sm"></div>
      </div>
    </div>
  );
};