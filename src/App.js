import './App.css';
import React from 'react'
import Blog from "./components/blog/Blog";
import Article from "./components/articles/Article";
import {Routes, Route, Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux";
import Notfound from "./components/notfound";
import Modal from "./components/modal/Modal";

function App() {
    const articles = useSelector((store) => store.articles.articles)
    const isActiveModal = useSelector((store) => store.articles.isActiveModal)
    return (
        <div className="container">
            {isActiveModal && <Modal/>}
            <Routes>
                <Route path='/' element={<Blog articles={articles}/>}/>
                <Route path='article' element={<Article articles={articles}/>}>
                    <Route path=':index' element={<Article articles={articles}/>}/>
                </Route>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </div>
    );
}

export default App;
