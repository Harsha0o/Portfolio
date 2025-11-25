
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  preview: string;
  description?: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const defaultTheme: Theme = {
  id: 'modern',
  name: 'Modern Dark',
  primary: 'from-purple-600 to-pink-600',
  secondary: 'from-indigo-900 via-purple-900 to-pink-800',
  background: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800',
  preview: 'linear-gradient(135deg, #312e81 0%, #7c3aed 35%, #ec4899 100%)',
  description: 'Modern dark theme with purple and pink gradients'
};

const themes: Theme[] = [
  defaultTheme,
  {
    id: 'light',
    name: 'Classic Light',
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-white to-gray-50',
    background: 'bg-gradient-to-br from-white to-gray-50',
    preview: 'linear-gradient(135deg, #0f0e0eff 0%, #101111ff 35%, #0d0d0eff 100%)',
    description: 'Clean light theme for professional presentation'
  },
  {
    id: 'dark',
    name: 'Classic Dark',
    primary: 'from-blue-500 to-purple-500',
    secondary: 'from-gray-900 to-black',
    background: 'bg-gradient-to-br from-gray-900 to-black',
    preview: 'linear-gradient(135deg, #151515ff 0%, #1f2937 35%, #484646ff 100%)',
    description: 'Pure dark theme for comfortable viewing'
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    primary: 'from-blue-600 to-cyan-600',
    secondary: 'from-blue-900 via-cyan-900 to-teal-800',
    background: 'bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800',
    preview: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 35%, #0f766e 100%)',
    description: 'Ocean-inspired blue and cyan tones'
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primary: 'from-orange-600 to-red-600',
    secondary: 'from-orange-900 via-red-900 to-pink-800',
    background: 'bg-gradient-to-br from-orange-900 via-red-900 to-pink-800',
    preview: 'linear-gradient(135deg, #ea580c 0%, #dc2626 35%, #be185d 100%)',
    description: 'Warm sunset colors with orange and red gradients'
  },
  {
    id: 'forest',
    name: 'Forest Green',
    primary: 'from-green-600 to-emerald-600',
    secondary: 'from-green-900 via-emerald-900 to-teal-800',
    background: 'bg-gradient-to-br from-green-900 via-emerald-900 to-teal-800',
    preview: 'linear-gradient(135deg, #14532d 0%, #047857 35%, #0f766e 100%)',
    description: 'Nature-inspired green and emerald tones'
  },
  // {
  //   id: 'minimal',
  //   name: 'Minimal Light',
  //   primary: 'from-gray-700 to-gray-900',
  //   secondary: 'from-white to-gray-100',
  //   background: 'bg-gradient-to-br from-white to-gray-100',
  //   preview: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 35%, #e5e7eb 100%)',
  //   description: 'Minimalist light theme for clean presentation'
  // },
  {
    id: 'neon',
    name: 'Neon Cyber',
    primary: 'from-cyan-400 to-purple-600',
    secondary: 'from-gray-900 via-cyan-900 to-purple-900',
    background: 'bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900',
    preview: 'linear-gradient(135deg, #111827 0%, #155e75 35%, #581c87 100%)',
    description: 'Futuristic cyberpunk theme with neon accents'
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const found = themes.find(t => t.id === savedTheme);
      if (found) {
        setThemeState(found);
      }
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme.id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
