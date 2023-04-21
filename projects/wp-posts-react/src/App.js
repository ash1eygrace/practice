import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsGrid from './PostsGrid';
import SinglePost from './SinglePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>WordPress Posts Grid</h1>
        <Routes>
          <Route index element={<PostsGrid />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
