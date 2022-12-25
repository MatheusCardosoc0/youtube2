import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import Sidebar from './components/Sidebar'
import VideoDetail from './components/VideoDetail'

const App = () => {
  return (
    <BrowserRouter>
      <main className="overflow-hidden">
        <Navbar />
        <div className="flex">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
