import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import css from './WaterItem.module.css'

function WaterItem({resp, setEditModal, handleDelete, setItemId}) {
  const hanEdit = () => {
    setItemId(resp._id)
    setEditModal(resp.amount)
  }
  return (
    <div className={css.itemBlock}>
      <div className={css.infoItemBlock}>
        <div>{resp.time.slice(-5)}</div>
        <span>{resp.amount} ml</span>
      </div>
      <div className={css.buttons}>
        <FiEdit className={css.buttonsBtn} onClick={hanEdit} />
        <FaTrash className={css.buttonsBtn} onClick={() => handleDelete(resp)} />
      </div>
    </div>
  )
}

export default WaterItem