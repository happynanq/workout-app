import { getPath } from "../../../utils/getPath"
import { getIconPath } from "./icon-path.util"
import styles from "./NewExercise.module.scss"
import cn from "clsx"
const ICONS = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const IconSelector = ({value, onChange}) => {
	return (
		<div className={styles.images}>
			{ICONS.map(name => (
				<img
					key={`ex img ${name}`}
					src={getPath(getIconPath(name))}
					alt={name}
					className={cn({
						[styles.active]: value === getIconPath(name)
					})}
					onClick={() => onChange(getIconPath(name))}
					draggable={false}
					height={45}
				/>
			))}
		</div>
	)
}

export default IconSelector
