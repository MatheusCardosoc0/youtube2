import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos, style}) => {
  return (
    <section className={`overflow-y-scroll flex flex-wrap gap-5 justify-center py-10 ${style && 'flex-col items-center'}`}>
      {videos?.map((item, idx) => (
        <div>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </div>
      ))}
    </section>
  )
}

export default Videos