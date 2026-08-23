import StudyPlannerPage from './pages/StudyPlannerPage'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
          <StudyPlannerPage />
    </Provider>
  )
}

export default App