import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App as ComponentsApp } from './exercises/01-components';
import { App as HooksApp } from './exercises/02-hooks';
import { App as FormsApp } from './exercises/03-forms';
import { App as RoutingApp } from './exercises/04-routing';
import { App as StateManagementApp } from './exercises/05-state-management';
import { App as AsyncEffectsApp } from './exercises/06-async-effects';
import { App as ContextApiApp } from './exercises/07-context-api';
import { App as TailwindCssApp } from './exercises/08-tailwindcss';
import { App as SsrSsgApp } from './exercises/09-ssr-ssg';

const exercises = [
  // Core Exercises (Start Here!)
  { id: 'components', name: '1. Components 🧩', component: ComponentsApp, level: 'Core' },
  { id: 'hooks', name: '2. Hooks 🎣', component: HooksApp, level: 'Core' },
  { id: 'forms', name: '3. Forms 📝', component: FormsApp, level: 'Core' },
  { id: 'routing', name: '4. Routing 🗺️', component: RoutingApp, level: 'Core' },
  { id: 'state', name: '5. State Management 🧠', component: StateManagementApp, level: 'Core' },
  
  // Advanced Exercises
  { id: 'async', name: '6. Async Effects 🕒', component: AsyncEffectsApp, level: 'Advanced' },
  { id: 'context', name: '7. Context API 🎭', component: ContextApiApp, level: 'Advanced' },
  { id: 'tailwind', name: '8. Tailwind CSS 🎨', component: TailwindCssApp, level: 'Advanced' },
  { id: 'ssr-ssg', name: '9. SSR & SSG 🚀', component: SsrSsgApp, level: 'Advanced' },
];

function ExerciseSelector() {
  const [currentExercise, setCurrentExercise] = useState('components');
  const CurrentExercise = exercises.find(ex => ex.id === currentExercise)?.component;
  const currentLevel = exercises.find(ex => ex.id === currentExercise)?.level;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>React Exercises 🎨</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Learn React step by step! Start with Core exercises, then try Advanced ones.
        </p>
        
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="exercise-select" style={{ fontWeight: 'bold', marginRight: '10px' }}>
            Select Exercise:
          </label>
          <select 
            id="exercise-select"
            value={currentExercise}
            onChange={(e) => setCurrentExercise(e.target.value)}
            style={{ 
              padding: '8px 12px', 
              fontSize: '16px', 
              borderRadius: '4px',
              border: '1px solid #ccc',
              minWidth: '250px'
            }}
          >
            <optgroup label="🌟 Core Exercises (Start Here!)">
              {exercises.filter(ex => ex.level === 'Core').map(ex => (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="🚀 Advanced Exercises">
              {exercises.filter(ex => ex.level === 'Advanced').map(ex => (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        
        <div style={{ 
          padding: '8px 12px', 
          backgroundColor: currentLevel === 'Core' ? '#e8f5e8' : '#fff3cd',
          border: `1px solid ${currentLevel === 'Core' ? '#4caf50' : '#ffc107'}`,
          borderRadius: '4px',
          fontSize: '14px',
          color: currentLevel === 'Core' ? '#2e7d32' : '#856404'
        }}>
          <strong>Level:</strong> {currentLevel} 
          {currentLevel === 'Core' ? ' - Perfect for beginners!' : ' - Try after completing Core exercises'}
        </div>
      </div>
      
      <div style={{ 
        border: '1px solid #ddd', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        minHeight: '400px'
      }}>
        {CurrentExercise && <CurrentExercise />}
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>💡 Tip:</strong> Open your browser's developer tools (F12) to see console logs and debug your code!</p>
        <p><strong>🧪 Testing:</strong> Run <code>pnpm test</code> in your terminal to check your implementations.</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExerciseSelector />
  </React.StrictMode>
); 