import React from 'react';
import BlogItem from "./BlogItem";
import style from './blog.module.css'
import {openModal} from "../../redux-toolkit/articlesReducer";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../modal/Modal";

const Blog = () => {
    const articles = useSelector((store) => store.articles.articles)
    const dispatch = useDispatch()
    const isActiveModal = useSelector((store) => store.articles.isActiveModal)
    return (
        <>
            {isActiveModal && <Modal/>}
            <div className={style.box}>
                {articles.map((item, index) => <BlogItem key={`${articles.header}_${index}`} index={index}
                                                         header={item.header}
                                                         content={item.content}/>)}
            </div>
            <button onClick={() => dispatch(openModal())}
                    className={style.fixed}>+ Добавить
            </button>
        </>
    );
};

export default Blog;