import React from 'react'

const CardSidebar = ({icon}) => {
  return (
    <li
      className="flex items-center gap-2 outline-double bg-black text-yellow-500 shadow-[3px_3px_0px_black] px-[2%] cursor-pointer hover:brightness-200 tracking-wider"
    >
      {icon.icon}
      <span className="text-2xl">{icon.name}</span>
    </li>
  )
}

export default CardSidebar
