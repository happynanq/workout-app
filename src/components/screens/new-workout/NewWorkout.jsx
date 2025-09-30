import { useMutation } from '@tanstack/react-query'


import Layout from '../../layout/Layout'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'
import Alert from '../../ui/alert/Alert'
import UseNewWorkout from './UseNewWorkout'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises'

const NewWorkout = () => {
	const {
		error,
		errors,
		isSuccess,
		isLoading,
		handleSubmit,
		onSubmit,
		register,
		control
	} = UseNewWorkout()
	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new Workout'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error.message} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>
					<Link to="/new-exercise" className='dark-link'>Add new exercise</Link>

          <SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button> Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
