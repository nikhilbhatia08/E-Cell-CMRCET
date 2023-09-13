import { configureStore } from '@reduxjs/toolkit'
import logReducer from './log'

export default configureStore({
  reducer: {
    log: logReducer,
  },
})