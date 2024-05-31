import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import 'reset-css'
import './index.css'
import '../mock'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={rootStore.store}>
        <App />
    </Provider>
)

// 使用 React.StrictMode 标签包裹，会执行两遍，生产环境不受影响
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )