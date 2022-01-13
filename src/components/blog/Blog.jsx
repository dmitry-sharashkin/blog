import React from 'react';
import BlogItem from "./BlogItem";
import style from './blog.module.css'
import {openModal} from "../../redux-toolkit/articlesReducer";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Blog = ({articles}) => {
    const dispatch = useDispatch()

    return (
        <>

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