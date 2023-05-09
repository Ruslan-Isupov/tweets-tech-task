// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazyt } from 'react';
import { Layout } from "./Layout/Layout";


const HomePage = lazy(() => import('../pages/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));


export const App = () => {
 
  return (
    <div>
    <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/Tweets" element={<TweetsPage/>}/>
       {/* <Route path="/Tweets" element={<TweetsPage/>}/> */}
</Route>
            </Routes>
            </div>
  )
};
