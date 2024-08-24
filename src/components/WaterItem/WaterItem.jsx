import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import css from './WaterItem.module.css'
import ModalForm from "../ModalForm/ModalForm";

function WaterItem({resp, setEditModal}) {
  console.log(resp)
  const handleEdit = () => {
    setEditModal(resp.amount)
  }
  return (
    <div className={css.itemBlock}>
      <div className={css.infoItemBlock}>
        <div>{resp.time.slice(-5)}</div>
        <span>{resp.amount} ml</span>
      </div>
      <div className={css.buttons}>
        <FiEdit className={css.buttonsBtn} onClick={handleEdit} />
        <FaTrash className={css.buttonsBtn} />
      </div>
    </div>
  )
}

export default WaterItem