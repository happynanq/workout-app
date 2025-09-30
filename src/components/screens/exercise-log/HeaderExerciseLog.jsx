import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

import styles from './ExerciseLog.module.scss'
import { getPath } from '../../../utils/getPath'

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
  return (
    <div
      className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
      style={{
        backgroundImage: `url('/images/ex-bg-1.jpg')`,
        height: 300
      }}
    >
      <Header
        backLink={
          isSuccess ? `/workout/${exerciseLog.workoutLogId}` : '/workouts'
        }
      />

      {isSuccess && (
        <div className={styles.heading}>
          <img
            src={
              getPath(exerciseLog.exercise.iconPath)
            }
            height='34'
            alt=''
            draggable={false}
          />
          <h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
        </div>
      )}
    </div>
  )
}

export default HeaderExerciseLog
