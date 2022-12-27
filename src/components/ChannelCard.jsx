import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { SiVerizon } from 'react-icons/si'

const ChannelCard = ({ channel }) => {
  return (
    <Link
      to={`/channel/${channel?.id?.channelId}`}
      className="flex flex-col w-[358px] justify-center gap-2 gradient-01 items-center rounded-lg shadow-[10px_10px_10px_black] p-1"
    >
      <img
        src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channel?.snippet?.title}
        className={`rounded-full h-[180px] w-[180px] border-2 border-yellow-500 shadow-[3px_3px_1px] bg-gray-200`}
      />

      <span className="text-xl font-semibold text-white drop-shadow-[1px_1px_1px_black] flex items-center gap-2 px-1">
        {channel?.snippet?.title}
        <b className="bg-black rounded-full p-[0.5px]">
          <SiVerizon />
        </b>
      </span>

      {channel?.statistics?.subscriberCount && (
        <span className="text-xl font-semibold text-white flex items-center gap-2 px-1 gradient-02 rounded-lg">
          {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{' '}
          Inscritos
        </span>
      )}
    </Link>
  )
}

export default ChannelCard
