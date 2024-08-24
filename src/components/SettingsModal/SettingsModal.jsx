import { FiEdit2 } from "react-icons/fi";
import { Field, Form, Formik } from 'formik'
import css from './SettingsModal.module.css'
import * as yup from 'yup'
import TimePicker from '../../helper/TimePeaker'
import { useDispatch } from 'react-redux'
import { apiUpdateUser } from '../../redux/auth/operation'
import { useEffect, useState } from 'react'
import { getWaterNorm } from "../../helper/NormaPerDay";

function SettingsModal({data, close}) {
    const dispatch = useDispatch()

    const [newValue, setNewValue] = useState()
    const [changeName, setChangeName] = useState(true)
    const [changeEmail, setChangeEmail] = useState(true)
    const [dailyCalc, setDailyCalc] = useState(data.dailyNorm)

    const schema = yup.object().shape({
        name: yup.string().min(3, "Please write more than 3").max(50, "Please write less than 50"),
        email: yup.string(),
        gender: yup.string().oneOf(["Male", "Female"]).default("undefined"),
        weight: yup
            .number()
            .nullable()
            .typeError('Weight must be a number')
            .min(0, 'Weight must be greater than or equal to 0')
            .max(200, 'Weight must be less than or equal to 200')
            .transform((value, originalValue) => {
                if (originalValue === '') return null;
                return value;
            }), 
        timeActive: yup
            .number()
    })

    const onNameChange = () => {
        setChangeName(!changeName)
    }

    const onEmailChange =() => {
        setChangeEmail(!changeEmail)
    }

    useEffect(() => {
        setDailyCalc(getWaterNorm( data.gender ,data.weight, data.timeActive))
    }, [data])


    const handleSubmit = async (values) => {
        values.timeActive = newValue
        try {
            const result = await dispatch(apiUpdateUser(values))
            if(!result) {
                console.log('error')
            }
            window.location.reload()
            return result
        } catch (error) {
            console.log(error)
        }
    }   
    
  return (
    <>
        <div className={css.modalBack} onClick={close}></div>
        <div className={css.modalBlock}>
            <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={schema} >
                {({values, handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={css.modalTitle}>Settings</div>
                        <div className={css.setBlock}>
                            <div className={css.nameChange}>
                                <div className={css.nameBlock}>
                                    {changeName ?
                                    <span className={css.noChangeName}>{values.name}</span> : <Field value={values.name } onChange={handleChange} className={css.typeName} id="name" />}
                                    <FiEdit2 onClick={onNameChange} />
                                </div>
                                <div className={css.emailBlock}>
                                {changeEmail ? <span className={css.email}>{values.email}</span> : <Field value={values.email } onChange={handleChange} className={css.typeEmail} id="email" />}
                                    <FiEdit2 onClick={onEmailChange} />
                                </div>
                            </div>
                                <ul className={css.blockToChange}>
                                    <li>
                                        <h2>Daily norm</h2>
                                        <div>{(dailyCalc ? dailyCalc : 2 )}</div>
                                    </li>
                                    <li>
                                        <label htmlFor='gender'>gender</label>
                                        <Field className={css.inpField} as="select" name="gender" id="gender">
                                            <option value="undefined"></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>
                                    </li>
                                    <li>
                                        <label htmlFor='timeActive'>Active time</label>
                                        <TimePicker timeActive={values.timeActive} ara={setNewValue} />
                                    </li>
                                    <li>
                                        <label htmlFor='weight'>Weight</label>
                                        <Field className={css.inpField} type="number" onChange={handleChange} id="weight" value={values.weight} />
                                    </li>
                                </ul>
                                <button type="submit" className={css.saveBtn}>Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </>
  )
}

export default SettingsModal