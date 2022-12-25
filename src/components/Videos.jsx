import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <section className='overflow-y-scroll'>
      {videos.map((item, idx) => (
        <div>
          {item.id.videoId && <VideoCard />}
          {item.id.channelId && <VideoCard />}
        </div>
      ))}
    </section>
  )
}

export default Videos