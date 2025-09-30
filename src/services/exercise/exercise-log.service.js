import { $axios } from '../../api'
import Cookies from 'js-cookie'
import { TOKEN } from '../../app.constants'
import { EXERCISE } from './exercise.service'

const LOG = `${EXERCISE}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	//name, times, iconPath
	async create( exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}
	// weight, repeat, isCompleted
	async updateTime(timeLogId, body) {
		return $axios.put(`${LOG}/time/${timeLogId}`, body)
	}
	// isCompleted
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body) // path для небольшого обновления полей
	}
}

export default new ExerciseLogService()
