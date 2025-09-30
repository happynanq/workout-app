import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import styles from './Auth.module.scss'
import AuthServices from '../../../services/auth.services'
import { useAuth } from '../../../hooks/use.auth'
import { useNavigate } from 'react-router-dom'
import { useAuthPage } from './useAuthPage'

const Auth = (email, password) => {
	// const {mutate, isLoading } = useMutation(['auth'], (email, password)=> AuthServices.main(email, password, type), {
	//   onSuccess: data=>{
	//     alert("Success")
	//   }
	// })
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}> Sign In</Button>
						<Button clickHandler={() => setType('register')}> Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
