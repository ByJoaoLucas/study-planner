import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectTheme = (state) => {
    const isDarkTheme = state.theme.theme === 'dark';
    return {
    isDark: isDarkTheme,
    background: isDarkTheme 
      ? "url('/src/assets/bg-dark.png')" 
      : "url('/src/assets/bg-light.png')",
    backgroundColor: isDarkTheme ? '#1f2937' : '#f3f4f6',
    cardBg: isDarkTheme ? 'bg-card-dark' : 'bg-white',
    textPrimary: isDarkTheme ? 'text-white' : 'text-gray-800',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-700',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-600',
    inputBg: isDarkTheme ? 'bg-gray-700' : 'bg-white',
    inputBorder: isDarkTheme ? 'border-gray-600' : 'border-gray-400',
    dividerColor: isDarkTheme ? 'border-gray-600' : 'border-gray-300',
    dividerPurple: isDarkTheme ? 'border-purple-header' : 'border-purple-600'
    }
};

export default themeSlice.reducer;