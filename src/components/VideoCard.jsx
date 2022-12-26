import React from 'react'
import { Link } from 'react-router-dom'
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl
} from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => {
  return (
    <section className="flex flex-col pb-8 gradient-02 w-[358px] rounded-br-[40px] border-r-[10px] border-t-[10px] border-t-yellow-600 border-yellow-500 shadow-[12px_12px_6px_black]">
      <Link to={videoId ? `/video${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-[358px] h-[180px] "
        />
      </Link>
      <div className="drop-shadow-[1px_1px_1px_black]">
        <h3 className="px-2 mb-4 text-white font-bold drop-shadow-[1px_1px_1px_#DAA520]">
          {snippet?.title}
        </h3>
      </div>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
        className="px-2 font-extrabold text-white drop-shadow-[1px_1px_1px_black] gradient-01 w-[200px] ml-2 rounded-lg"
      >
        <span className='drop-shadow-[1px_1px_1px_black]'>{snippet?.channelTitle || demoChannelTitle}</span>
      </Link>
    </section>
  )
}

export default VideoCard
