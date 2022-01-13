import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './articlesReducer'

const store = configureStore({
    reducer: {
        articles: articlesReducer,
    },
})

export default store