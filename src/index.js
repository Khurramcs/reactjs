import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import QA from './QA';
import Video from './Video';
import reportWebVitals from './reportWebVitals';
import Quotes from './Quotes';
import Users from './Users';
import Table from './Table';
import Github from './Github'
import List from './List';
import Weather from './Weather';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import News from './News';
import Album from './Album';



import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  
  domain="dev-4v1jbdw874povhki.us.auth0.com"
  clientId="Jl2VL56QCmyPiZdToIfnuxyZTnchN4qW"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/list"
    }}  > 
 
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
        
        <Route path="/list" element={<List/>}/>
        <Route path="/table" element={<Table />} />
        <Route path="/users" element={<Users />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/video" element={<Video />} />
        <Route path="/app" element={<App />} />
        <Route path="/github" element={<Github />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/news" element={<News />} />
        <Route path="/Album" element={<Album />} />


        
      </Routes>
    </BrowserRouter>
  
    
  </Auth0Provider>
);

reportWebVitals();