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
export const ThemeContext = createContext<any>({
  theme: "light",
  toggleTheme: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  const colors =
    theme === "light"
      ? { background: "#fff", text: "#000" }
      : { background: "#000", text: "#fff" }
  const fonts = {
    main: "Arial",
    size: "16px"
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors, fonts }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 2. Create a UserContext (like a family photo album)
//    - user: Who is logged in (like family members)
//    - login: Sign in (like joining family)
//    - logout: Sign out (like leaving family)
//    - updateProfile: Change info (like new photos)
export const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = useState<any>(null)
  const login = (userData: any) => {
    setUser(userData)
  }
  const logout = () => {
    setUser(null)
  }
  const updateProfile = (newData: any) => {
    setUser({ ...user, ...newData })
  }
  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  )
}

// 3. Create a SettingsContext (like house rules)
//    - settings: What's allowed (like family rules)
//    - updateSettings: Change rules (like new rules)
//    - resetSettings: Back to start (like default rules)
//    - saveSettings: Remember rules (like writing down)
export const SettingsContext = createContext<any>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const defaultSettings = {
    darkMode: false,
    notifications: true
  }
  const [settings, setSettings] = useState(defaultSettings)
  const updateSettings = (newSettings: any) => {
    setSettings({ ...settings, ...newSettings })
  }
  const resetSettings = () => {
    setSettings(defaultSettings)
  }
  const saveSettings = () => {
    localStorage.setItem("settings", JSON.stringify(settings))
  }
  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, resetSettings, saveSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

// 4. Create a LanguageContext (like family language)
//    - language: What language to use (like family talk)
//    - translations: What words mean (like dictionary)
//    - changeLanguage: Switch language (like learning new)
//    - t: Translate words (like interpreter)

export const LanguageContext = createContext<any>({
  language: "en",
  changeLanguage: () => {}
})

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const translations = {
    en: {
      greeting: "Hello",
      language: "Language"
    },
    es: {
      greeting: "Hola",
      language: "Idioma"
    }
  }
  const [language, setLanguage] = useState<keyof typeof translations>("en")
  const changeLanguage = (lang: keyof typeof translations) => {
    setLanguage(lang)
  }
  const t = (key: string) => {
    return translations[language]?.[key as keyof typeof translations["en"]] || key
  }
  return (
    <LanguageContext.Provider
      value={{ language, translations, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Components that use the contexts:
export function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  )
}

export function LanguageSelector(): JSX.Element {
  const { language, changeLanguage } = useContext(LanguageContext)
  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  )
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
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            marginTop: '16px'
          }}>
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ThemeProvider</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
              <ThemeProvider>
                <ThemeToggle />
              </ThemeProvider>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 UserProvider</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <UserProvider>
                  <p>User Provider Active</p>
                </UserProvider>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SettingsProvider</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <SettingsProvider>
                  <p>Settings Provider Active</p>
                </SettingsProvider>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 LanguageProvider</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <LanguageProvider>
                  <LanguageSelector />
                </LanguageProvider>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ThemeToggle</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <ThemeToggle/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 LanguageSelector</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <LanguageSelector/>
              </div>
            </div>
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