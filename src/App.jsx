import { ThemeProvider } from './contexts/ThemeContext'
import StudyPlannerPage from './pages/StudyPlannerPage'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <StudyPlannerPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App