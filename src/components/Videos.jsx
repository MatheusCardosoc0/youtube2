import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <section className='overflow-y-scroll flex flex-wrap gap-5 justify-center py-10'>
      {videos.map((item, idx) => (
        <div className=''>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </div>
      ))}
    </section>
  )
}

export default Videos