import { $axios } from '../../api'
import Cookies from 'js-cookie'
import { TOKEN } from '../../app.constants'

export const WORKOUT = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(`${WORKOUT}`)
	}

	async update(id) {
		return $axios.get(`${WORKOUT}/${id}`)
	}

	//name, exerciseIds
	async create(body) {
		return $axios.post(`${WORKOUT}`, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUT}/${id}`, body)
	}
	async delete(id) {
		return $axios.delete(`${WORKOUT}/${id}`)
	}
}

export default new WorkoutService()
