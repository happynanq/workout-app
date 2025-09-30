import styles from '../ExerciseLog.module.scss'
const itemTableHeader = ["Previous", "Repeat & Weight","Completed" ]
const TableHeader = () => {
  return (
    <div className={styles.row}>
      {itemTableHeader.map((item, idx)=>{
        return <div key={idx}>
          <span>{item}</span>
        </div>
      })}
    </div>
  )
}

export default TableHeader
