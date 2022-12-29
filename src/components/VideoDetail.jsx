import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchVideos'
import { AiFillEye, AiFillLike, AiOutlineShareAlt } from 'react-icons/ai'
import { SiVerizon } from 'react-icons/si'
import VideoCard from './VideoCard'
import Videos from './Videos'
import Navbar from './Navbar'

const VideoDetail = () => {
  const { id } = useParams()
  const [VideoDetail, setVideoDetail] = useState(null)
  const [VideoRelated, setVideoRelated] = useState(null)

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then(data => {
      setVideoDetail(data.items[0])
    })

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => {
        setVideoRelated(data.items)
      }
    )
  }, [id])

  if (!VideoDetail?.snippet || !VideoRelated) return 'Carregando...'

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = VideoDetail

  return (
    <section>
      <Navbar />
      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="md:w-3/4 md:overflow-y-scroll">
          <div className="border-4 md:border-8 border-yellow-600 w-full h-[400px] md:h-[700px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width={'100%'}
              controls={true}
            />
          </div>

          <main className="px-2 gradient-01 pb-6">
            <h2 className="text-2xl text-white drop-shadow-[1px_1px_1px_black]">
              <b className="drop-shadow-[1px_1px_1px_#DAA520]">{title}</b>
            </h2>

            <Link to={`/channel/${channelId}`}>
              <span className="text-xl font-semibold text-white drop-shadow-[1px_1px_1px_black] flex items-center gap-2 px-1 gradient-02 w-[300px] rounded-lg">
                {channelTitle}
                <b className="bg-black rounded-full p-[0.5px]">
                  <SiVerizon />
                </b>
              </span>
            </Link>

            <div className="flex justify-between text-white drop-shadow-[1px_1px_1px_black]">
              <div className="flex gap-4">
                <span className="flex items-center">
                  <AiFillLike />
                  {likeCount}
                </span>

                <span className="flex items-center">
                  <AiFillEye />
                  {viewCount}
                </span>
              </div>

              <button className="gradient-02 p-1 rounded-lg">
                <span className="flex items-center gap-1 gradient-01 rounded-lg p-1 text-xl text-white drop-shadow-[1px_1px_1px_black]">
                  <b className="flex items-center drop-shadow-[1px_1px_1px_black] gap-1">
                    <AiOutlineShareAlt />
                    Compartilhar
                  </b>
                </span>
              </button>
            </div>
          </main>
        </div>

        <div className="bg-zinc-700 md:w-1/4 md:overflow-y-scroll">
          <Videos style={true} videos={VideoRelated} />
        </div>
      </div>
    </section>
  )
}

export default VideoDetail
