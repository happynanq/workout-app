import Auth from '../components/screens/auth/Auth'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Test from '../components/screens/test/Test'
import ListWorkouts from '../components/screens/workout/list/ListWorkouts'
import Workout from '../components/screens/workout/detail/Workout'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		exact: false,
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		exact: false,
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		isAuth: true
	},
	{ path: '/new-exercise', component: NewExercise, auth: true }, 
	// { path: '/workout/:id', component: Sin, auth: true }, 
	{ path: '/workouts', component: ListWorkouts, auth: true }, 
	{ path: '/workout/:id', component: Workout, auth: true }, 
	{ path: '/exercise/:id', component: ExerciseLog, auth: true }, 
	{ path: '/test', component: Test, auth: true }, 
	
]
