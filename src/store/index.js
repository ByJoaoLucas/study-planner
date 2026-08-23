import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import themeReducer from './slices/themeSlice';
import analyticReducer from './slices/analyticSlice';
import { loadState, saveState, throttle } from './localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer, 
    analytics: analyticReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

const throttledSaveState = throttle((state) => {
  saveState({
    tasks: state.tasks,
    theme: state.theme,
    analytics: state.analytics,
  });
}, 1000);

store.subscribe(() => {
  throttledSaveState(store.getState());
});