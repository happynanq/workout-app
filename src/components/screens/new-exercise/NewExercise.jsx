import { useMutation } from '@tanstack/react-query'
import styles from './NewExercise.module.scss'
import ExerciseService from '../../../services/exercise/exercise.service'
import Layout from '../../layout/Layout'
import { Controller, useForm } from 'react-hook-form'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'
import cn from 'clsx'
import Alert from '../../ui/alert/Alert'
import { getIconPath } from './icon-path.util'
import IconSelector from './IconSelector'
import UseNewExercise from './UseNewExercise'

const NewExercise = () => {
	const {error, errors, isSuccess, isLoading, handleSubmit, onSubmit, register, control} = UseNewExercise()
	return (
    <>
		<Layout
			bgImage='/images/new-exercise-bg.jpg'
			heading='Create new exercise'
			backLink='/new-workout'
		/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error.message} />}
				{isSuccess && <Alert text='Exercise created' />}
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

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'times is required'
						}}
						placeholder='Enter times'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => {
							return (<IconSelector value={value} onChange={onChange}/>
							)
						}}
					/>
					{errors?.iconPath && (
						<div className="error">{errors?.iconPath?.message}</div>
					)}

						<Button> Create</Button>
				</form>
			</div>
    </>
	)
}

export default NewExercise
