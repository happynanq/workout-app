import { useEffect } from 'react'
import { $axios } from '../../../api'
const USERS = '/users'

const Test = () => {
	useEffect(() => {
		const start = async () => {
			const a = await $axios.get(`/workouts/`)
		}
		start()
	}, [])

  const getFirstIdWorkout = async ()=>{
    const t = await $axios.get("/workouts/1")
  }
	return <button onClick={getFirstIdWorkout}>get first id</button>
}
export default Test
