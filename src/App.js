import './App.css';
import React from 'react'
import Blog from "./components/blog/Blog";
import Article from "./components/articles/Article";
import {Routes, Route} from "react-router-dom"
import Notfound from "./components/notfound";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<Blog/>}/>
                <Route path='article' element={<Article/>}>
                    <Route path=':index' element={<Article/>}/>
                </Route>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </div>
    );
}

export default App;
