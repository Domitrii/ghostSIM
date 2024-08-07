import { useState } from 'react';
import css from './ModalForm.module.css';
import { currentTime } from '../TrackSecPage/MonthCount/Counts';
import { Formik, Form, Field } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { IoIosClose } from "react-icons/io";
import { apiAddWaterRecord } from '../../redux/water/operation';

function ModalForm({ text, choose, close, onSubmitData }) {
  const initialState = {
    amount: 0,
    time: currentTime(),
  };

  const [recordingTime, setRecordingTime] = useState(initialState.time);
  const [isCount, setIsCount] = useState(initialState.amount);

  const addMoreWater = () => {
    if (isCount === 1000) {
      return;
    }
    setIsCount(isCount + 50);
  };

  const lessWater = () => {
    if (isCount === 0) {
      return;
    }
    setIsCount(isCount - 50);
  };

  const closeToast = () => {
    toast.remove()
  }

  const handleSubmit = (values) => {
    if(values.amount === 0 || values.amount === '' ){
        values.amount = isCount
    }
    if(values.amount === 0){
        toast.custom(<div className={css.toastStyle}>
            Write your amount of water
            <p className={css.closeToast} onClick={closeToast}><IoIosClose className={css.closeBtn} /></p>
            </div>, {duration: 1300});
        return
    }
    onSubmitData(values)
    close()
  };

  return (
    <>
      <div className={css.modalBack} onClick={close}></div>
      <div className={css.modalBlock}>
        <Formik
          initialValues={{
            amount: isCount,
            time: recordingTime,
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className={css.modalBlockCont}>
                <div className={css.closeModal} onClick={close}><IoIosClose className={css.closeBtn} /></div>
              <h2 className={css.textTitle}>{text}</h2>
              <p className={css.firstText}>{choose}</p>
              <p>Amount of water:</p>
              <div className={css.addMinusBlock}>
                <div className={css.plusMinus} onClick={lessWater}>
                  <p></p>
                </div>
                <div className={css.amountToAdd}>{isCount}</div>
                <div className={css.plusMinus} onClick={addMoreWater}>
                  <p className={css.plusRotate}></p>
                  <p className={css.plusRotate}></p>
                </div>
              </div>
              <div className={css.recording}>
                <label htmlFor='recording'>Recording time:</label>
                <Field
                  type='time'
                  name='time'
                  value={values.time}
                  onChange={handleChange}
                  id='recording'
                />
              </div>
              <div className={css.recording}>
                <label htmlFor='amount'>Enter the value of water:</label>
                <Field
                  type='number'
                  name='amount'
                  value={values.amount}
                  onChange={handleChange}
                  id='amount'
                />
              </div>
              <button className={css.submitBtn} type='submit'>
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    <Toaster />
    </>
  );
}

export default ModalForm;
