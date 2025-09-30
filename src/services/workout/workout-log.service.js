import { $axios } from '../../api'
import Cookies from 'js-cookie'
import { TOKEN } from '../../app.constants'
import { WORKOUT } from './workout.service'

const LOG = `${WORKOUT}/log`

class WorkoutLogService {
	async getById(id) {
		// debugger
		return $axios.get(`${LOG}/${id}`)
	}
	//name, times, iconPath
	async create( workoutId) {
		return $axios.post(`${LOG}/${workoutId}`)
	}
	
	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`) // path для небольшого обновления полей
	}
}

export default new WorkoutLogService()
