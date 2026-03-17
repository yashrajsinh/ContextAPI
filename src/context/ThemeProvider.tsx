import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

{
  /* ===
    Context to handle AppTheme based on useState  
    === */
}

export default function ThemeProvider({ children }: any) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
