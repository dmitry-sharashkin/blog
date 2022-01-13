import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import style from './article.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeArticle, deleteArticle} from "../../redux-toolkit/articlesReducer";
import {useForm} from "react-hook-form";

const Article = () => {
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const index = useParams()
    const article = useSelector((state) => state.articles.articles[index.index])
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data)
        dispatch(changeArticle({
            index: +index.index, newArticle: {header: data.header, content: data.content}
        }))
        setEditMode(false)
    }


    if (editMode === true) {
        return <>
            <button onClick={()=>setEditMode(false)}>назад</button>
            <form className={style.editForm} onSubmit={handleSubmit(onSubmit)}>
                <h2>запись: {article?.header}</h2>
                <input defaultValue={article?.header} {...register("header", {required: true})} />
                <label className={style.danger}>
                    {errors.header && <span>This field is required</span>}
                </label>
                <textarea defaultValue={article?.content}  {...register("content", {required: true})} />
                <div className={style.danger}>
                    {errors.content && <span>This field is required</span>}
                </div>
                <div className={style.buttons}>
                    <button onClick={() => dispatch(deleteArticle(+index.index))} className='buttonRed'>Удалить</button>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </>
    }
    return (<>
            <Link to='/'>
                <button>назад</button>
            </Link>
            <article>
                <h2>{article?.header}</h2>
                <p>{article?.content}</p>
                <div className={style.buttons}>
                    <button onClick={() => dispatch(deleteArticle(+index.index))} className='buttonRed'>Удалить</button>
                    <button onClick={() => setEditMode(true)}>Редактировать</button>
                </div>
            </article>
        </>
    );
};

export default Article;