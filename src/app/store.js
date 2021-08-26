import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import galleryReducer from '../features/RightComponent/GallerySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer
  },
})
