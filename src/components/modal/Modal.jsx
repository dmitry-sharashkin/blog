import React from 'react';
import {useForm} from "react-hook-form";
import style from './modal.module.css'
import {addArticle, closeModal} from "../../redux-toolkit/articlesReducer";
import {useDispatch} from "react-redux";

const Modal = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        dispatch(addArticle({header: data.header, content: data.content}))
        dispatch(closeModal())
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("header", {required: true})} />
            <label className={style.danger}>
                {errors.header && <span>This field is required</span>}
            </label>
            <textarea {...register("content", {required: true})} />
            <div className={style.danger}>
                {errors.content && <span>This field is required</span>}
            </div>
            <div className={style.buttons}>
                <button onClick={() => dispatch(closeModal())} className='buttonRed'>Отмена</button>
                <button type="submit">Сохранить</button>
            </div>
        </form>
    );
};

export default Modal;