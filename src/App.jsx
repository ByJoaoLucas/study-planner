import { TaskProvider } from './contexts/TaskContext'
import { ThemeProvider } from './contexts/ThemeContext'
import StudyPlannerPage from './pages/StudyPlannerPage'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <TaskProvider>
          <StudyPlannerPage />
        </TaskProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App