import React from 'react'
import { Link } from 'react-router-dom'
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl
} from '../utils/constants'
import { SiVerizon } from 'react-icons/si'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => {
  return (
    <section className="flex flex-col pb-8 gradient-02 md:w-[358px] w-[200px] rounded-br-[40px] border-r-[10px] border-t-[10px] border-t-yellow-600 border-yellow-500 shadow-[16px_16px_12px_black] rounded-tl-[13px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
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
        <span className="drop-shadow-[1px_1px_1px_black] flex items-center gap-2">
          {snippet?.channelTitle || demoChannelTitle}
          <b className="bg-black rounded-full p-[0.5px]">
            <SiVerizon />
          </b>
        </span>
      </Link>
    </section>
  )
}

export default VideoCard
