import {
  MdHomeFilled, MdOutlineSlowMotionVideo,
  MdSubscriptions, MdOutlineVideoLibrary,
  MdHistory, MdOutlineSmartDisplay,
  MdOutlineWatchLater, MdThumbUpAlt,
  MdSettings, MdOutlinedFlag,
  MdOutlineHelpOutline, MdOutlineFeedback,
  MdOutlineSportsVolleyball,
  MdOutlineFlag, MdSchool
} from 'react-icons/md'
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { FaRegCompass, FaMicrophone } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import {BsController, BsMusicNote} from 'react-icons/bs'

export const mainLinks = [
  {
    icon: <MdSchool className='text-xl' />,
    name: "Education"
  },
  {
    icon: <FaMicrophone className='text-xl' />,
    name: "Podcast"
  },
  {
    icon: <BsController className='text-xl' />,
    name: "Gaming"
  },
  {
    icon: <BsMusicNote className='text-xl' />,
    name: "Music"
  },
]

export const subscriptionLinks = [
  {
    icon: <TbMusic className='text-xl' />,
    name: "Music"
  },
  {
    icon: <MdOutlineSportsVolleyball className='text-xl' />,
    name: "Sport"
  },
  {
    icon: <TbDeviceGamepad2 className='text-xl' />,
    name: "Gaming"
  },
  {
    icon: <GiFilmStrip className='text-xl' />,
    name: "Films"
  },
]

export const helpLinks = [
  {
    icon: <MdSettings className='text-xl' />,
    name: "Settings"
  },
  {
    icon: <MdOutlineFlag className='text-xl' />,
    name: "Report history"
  },
  {
    icon: <MdOutlineHelpOutline className='text-xl' />,
    name: "Help"
  },
  {
    icon: <MdOutlineFeedback className='text-xl' />,
    name: "Feedback"
  },
]


export const secondaryLinks = [
  {
    icon: <MdOutlineVideoLibrary className='text-xl' />,
    name: "Library"
  },
  {
    icon: <MdHistory className='text-xl' />,
    name: "History"
  },
  {
    icon: <MdOutlineSmartDisplay className='text-xl' />,
    name: "Your Videos"
  },
  {
    icon: <MdOutlineWatchLater className='text-xl' />,
    name: "Watch later"
  },
  {
    icon: <MdThumbUpAlt className='text-xl' />,
    name: "Liked videos"
  },
]

export const textTerms = [
  [
    "About Press Copyright",
    "Contact us Creator",
    "Advertise Developers",
  ],
  [
    "Terms Privacy",
    "Policy & Safety",
    "How Youtube works",
    "Test new features"
  ],
  [
    '@ 2022 Google'
  ],
]
