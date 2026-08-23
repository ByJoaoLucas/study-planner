import { TaskItem } from '.'
import { selectTheme } from '../../store/slices/themeSlice'
import { useSelector } from 'react-redux'

function TaskSection({ title, tasks, borderColor = 'gray-600', onToggleComplete, onEdit, onDelete }) {
  const theme = useSelector(selectTheme)
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-purple-header text-paragraph-large font-medium">{title}</h2>
      </div>
      <div className={`border-b ${borderColor === 'purple-header' ? theme.dividerPurple : theme.dividerColor} mb-4`}></div>
      
      {tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task}
              onToggleComplete={onToggleComplete}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <p className={`${theme.textMuted} text-sm`}>
          {title === 'Para estudar' ? 'Nenhuma tarefa pendente' : 'Nenhuma tarefa concluída'}
        </p>
      )}
    </div>
  )
}

export default TaskSection