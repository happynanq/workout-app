import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useUpdateLogTime } from './useUpdateLogTime'
// запрос проброить выше 
export const useExerciseLog = () => {
	const [times, setTimes] = useState([])
	const { updateTime, error } = useUpdateLogTime(times)
	
	//setTimes(prev=>prev.map(time=>time.id == item.id?{...item} : null))
	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}
			return time
		})
		setTimes(newTimes)
	}
	const getTimeValue = timeId => {
		// console.log("tid:", times, timeId);

		const time = times?.find(time => time.id === timeId)
		return time
	}
	const getState = (timeId, key) => {
		const t = getTimeValue(timeId)
		
		if(t == undefined) return []
		return getTimeValue(timeId)[key]
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTimeValue(timeId)
		// console.log({isCompleted, repeat:+time.repeat, weight: +time.weight})
		// console.log("getTimeValue(timeId)",{...getTimeValue(timeId), isCompleted})
		updateTime({timeId, body: {isCompleted, repeat:+time.repeat, weight: +time.weight}})
	}

	return {
		onChangeState,
		getTimeValue,
		toggleTime,
		error,
		getState, 
		setTimes
	}
}
