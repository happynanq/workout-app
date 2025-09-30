import { $axios } from '../api'
import Cookies from 'js-cookie'
import { TOKEN } from '../app.constants'

const USERS = '/users'

class UserService {
	async getProfile() {
		
		return await $axios.get(`${USERS}/profile`)
	}
}

export default new UserService()
