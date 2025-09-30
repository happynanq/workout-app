import { useMutation, useQueryClient } from '@tanstack/react-query'
import exerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useNavigate, useParams } from 'react-router-dom'

export const useCompleteLog = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { mutate, error: errorCompleted } = useMutation({
		mutationKey: ['update log time '],
		mutationFn: (body) => {
			return exerciseLogService.complete(id, body)
		},
		onSuccess: ({data}) => {
			navigate(`/workout/${data.workoutLogId}`)
			// queryClient.invalidateQueries(['get exercise log', id])
		}
	})
  return {completeLog:mutate, errorCompleted}
}
