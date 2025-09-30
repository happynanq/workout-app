import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants'
import { getPath } from './utils/getPath'
export const $axios = axios.create({
	baseURL: getPath("/api/"),
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
