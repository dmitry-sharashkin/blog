import React from 'react';
import style from './blogItem.module.css'
import {Link} from "react-router-dom";

const BlogItem = ({header, content, index}) => {

    return (
        <article className={style.blogItem}>
            <h3 className={style.head}>{header}</h3>
            <p>{content}</p>
            <Link to={`article/${index}`}>
                <button>перейти</button>
            </Link>
        </article>
    );
};

export default BlogItem;