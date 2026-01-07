
'use client';

import { useState } from 'react';

interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  preview: string;
  description?: string;
}

const themes: Theme[] = [
  {
    id: 'modern',
    name: 'Modern Dark',
    primary: 'from-purple-600 to-pink-600',
    secondary: 'from-indigo-900 via-purple-900 to-pink-800',
    background: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800',
    preview: 'linear-gradient(135deg, #312e81 0%, #7c3aed 35%, #ec4899 100%)',
    description: 'Modern dark theme with purple and pink gradients'
  },
  {
    id: 'light',
    name: 'Classic Light',
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-white to-gray-50',
    background: 'bg-gradient-to-br from-white to-gray-50',
    preview: 'linear-gradient(135deg, #060505ff 0%, #f9fafb 35%, #f3f4f6 100%)',
    description: 'Clean light theme for professional presentation'
  },
  {
    id: 'dark',
    name: 'Classic Dark',
    primary: 'from-blue-500 to-purple-500',
    secondary: 'from-gray-900 to-black',
    background: 'bg-gradient-to-br from-gray-900 to-black',
    preview: 'linear-gradient(135deg, #111827 0%, #1f2937 35%, #000000 100%)',
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

interface ThemeSelectorProps {
  onThemeChange: (theme: Theme) => void;
  currentTheme: string;
}

export default function ThemeSelector({ onThemeChange, currentTheme }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-black/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-black/20 transition-all transform hover:scale-110 cursor-pointer border border-white/20 shadow-lg"
      >
        <i className="ri-palette-line text-white w-5 h-5 flex items-center justify-center"></i>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-96 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold flex items-center">
              <i className="ri-brush-line w-4 h-4 flex items-center justify-center mr-2"></i>
              Choose Theme
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-white text-sm w-3 h-3 flex items-center justify-center"></i>
            </button>
          </div>
          
          <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-thin">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme);
                  setIsOpen(false);
                }}
                className={`w-full p-4 rounded-xl border-2 transition-all hover:scale-[1.02] cursor-pointer text-left ${
                  currentTheme === theme.id
                    ? 'border-black/50 bg-black/20 shadow-lg'
                    : 'border-black/20 bg-black/5 hover:bg-black/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-12 rounded-lg shadow-lg border border-white/20"
                    style={{ background: theme.preview }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-white font-medium">{theme.name}</p>
                      {currentTheme === theme.id && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    {theme.description && (
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">{theme.description}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-start space-x-3">
              <i className="ri-information-line w-4 h-4 flex items-center justify-center text-blue-300 mt-0.5 flex-shrink-0"></i>
              <div className="text-white/70 text-sm">
                <p className="font-medium text-white/90 mb-1">About Themes</p>
                <p className="leading-relaxed">
                  Themes customize the entire portfolio appearance including colors, gradients, and visual effects. 
                  Your selection is automatically saved and applies to all pages instantly.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
