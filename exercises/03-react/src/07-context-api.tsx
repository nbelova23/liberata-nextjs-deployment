// Exercise 7: Context API 🎭
// Think of Context like a family tree:
// - Parents share things with children (like passing down traits)
// - Children can access what parents share (like inheriting features)
// - Everyone knows what's shared (like family rules)
// - Changes affect everyone (like family decisions)
//
// In this exercise, you'll build:
// 1. A Theme Provider (like a house decorator)
// 2. A User Context (like a family photo album)
// 3. A Settings Context (like house rules)
// 4. A Language Context (like family language)
//
// Documentation:
// - Context: https://reactjs.org/docs/context.html
// - useContext: https://reactjs.org/docs/hooks-reference.html#usecontext
// - Context.Provider: https://reactjs.org/docs/context.html#contextprovider

import React, { createContext, useContext, useState } from 'react';

// TODO: Create these contexts:

// 1. Create a ThemeContext (like a house decorator)
//    - theme: How things look (like house style)
//    - toggleTheme: Change the look (like redecorating)
//    - colors: What colors to use (like paint colors)
//    - fonts: What text looks like (like wall art)
export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  throw new Error('🚧 TODO: Implement the ThemeProvider component! Use useState and Context to manage theme state.');
}

// 2. Create a UserContext (like a family photo album)
//    - user: Who is logged in (like family members)
//    - login: Sign in (like joining family)
//    - logout: Sign out (like leaving family)
//    - updateProfile: Change info (like new photos)
export const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  throw new Error('🚧 TODO: Implement the UserProvider component! Use useState and Context to manage user state.');
}

// 3. Create a SettingsContext (like house rules)
//    - settings: What's allowed (like family rules)
//    - updateSettings: Change rules (like new rules)
//    - resetSettings: Back to start (like default rules)
//    - saveSettings: Remember rules (like writing down)
export const SettingsContext = createContext<any>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }): JSX.Element {
  throw new Error('🚧 TODO: Implement the SettingsProvider component! Use useState and Context to manage settings.');
}

// 4. Create a LanguageContext (like family language)
//    - language: What language to use (like family talk)
//    - translations: What words mean (like dictionary)
//    - changeLanguage: Switch language (like learning new)
//    - t: Translate words (like interpreter)
export const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
  throw new Error('🚧 TODO: Implement the LanguageProvider component! Use useState and Context to manage language.');
}

// Components that use the contexts:
export function ThemeToggle(): JSX.Element {
  throw new Error('🚧 TODO: Implement the ThemeToggle component! Use useContext to access and toggle theme.');
}

export function LanguageSelector(): JSX.Element {
  throw new Error('🚧 TODO: Implement the LanguageSelector component! Use useContext to change language.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Context API Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement Context providers to share state across components!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The context components below will throw errors until you implement them.
        </p>
        
        <div style={{ opacity: 0.5 }}>
          <h3>What you'll build:</h3>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 ThemeProvider: Share theme state (colors, fonts) across app
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 UserProvider: Share user authentication state
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 SettingsProvider: Share app settings and preferences
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 LanguageProvider: Share language and translations
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with ThemeProvider - create context and provider component</li>
          <li>Use useState to manage theme state in the provider</li>
          <li>Create components that use useContext to access theme</li>
          <li>Wrap your app with the provider to share state</li>
          <li>Test by changing theme and seeing updates everywhere</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 