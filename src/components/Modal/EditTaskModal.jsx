import { useState, useEffect } from 'react'
import { selectTheme } from '../../store/slices/themeSlice'
import { useSelector } from 'react-redux'

function EditTaskModal({ isOpen, onClose, onEditTask, task }) {
  const theme = useSelector(selectTheme)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title || '')
      setTaskDescription(task.description || '')
      // Converter data brasileira para formato ISO
      if (task.date) {
        const [day, month, year] = task.date.split('/')
        setTaskDate(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`)
      }
    }
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskTitle.trim()) {
      onEditTask(task.id, {
        title: taskTitle.trim(),
        description: taskDescription.trim(),
        date: new Date(taskDate + 'T00:00:00').toLocaleDateString('pt-BR')
      })
      onClose()
    }
  }

  const handleClose = () => {
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    onClose()
  }

  if (!isOpen || !task) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${theme.cardBg} rounded-2xl w-full max-w-md mx-4`}>
        <div className="bg-purple-header rounded-t-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-icons text-white text-lg">edit</span>
              <h2 className="text-white font-medium text-lg">Editar Tarefa</h2>
            </div>
            <button 
              onClick={handleClose}
              className="material-icons text-white hover:text-gray-300 transition-colors"
            >
              close
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className={`block ${theme.textSecondary} text-label font-medium mb-2`}>
              Título da tarefa
            </label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className={`w-full px-3 py-2 ${theme.inputBg} ${theme.textPrimary} rounded-lg border ${theme.inputBorder} focus:border-purple-header focus:outline-none`}
              placeholder="Digite o título da tarefa..."
              autoFocus
            />
          </div>
          
          <div className="mb-4">
            <label className={`block ${theme.textSecondary} text-label font-medium mb-2`}>
              Data
            </label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className={`w-full px-3 py-2 ${theme.inputBg} ${theme.textPrimary} rounded-lg border ${theme.inputBorder} focus:border-purple-header focus:outline-none`}
            />
          </div>
          
          <div className="mb-6">
            <label className={`block ${theme.textSecondary} text-label font-medium mb-2`}>
              Descrição (opcional)
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className={`w-full px-3 py-2 ${theme.inputBg} ${theme.textPrimary} rounded-lg border ${theme.inputBorder} focus:border-purple-header focus:outline-none h-20 resize-none`}
              placeholder="Digite uma descrição..."
            />
          </div>
          
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleClose}
              className={`px-4 py-2 ${theme.textSecondary} hover:${theme.textPrimary.replace('text-', 'text-')} transition-colors`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-header hover:bg-purple-dark transition-colors text-white rounded-lg font-medium"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTaskModal