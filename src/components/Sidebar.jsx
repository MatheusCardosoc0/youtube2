import React from 'react'
import { mainLinks, secondaryLinks, textTerms } from '../utils/IconsSidebar'
import CardSidebar from './CardSidebar'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <ul className='w-1/4 gradient-01 px-2 py-3 gap-4 flex flex-col border-r-8 border-black lg:w-1/6 h-[92vh] overflow-auto'>

      {mainLinks.map((icon, i) => (
        <CardSidebar setSelectedCategory={setSelectedCategory}  key={i} icon={icon} />
      ))}
      <hr className='border-4 border-black my-4' />

      {secondaryLinks.map((icon, i) => (
        <CardSidebar key={i} icon={icon} />
      ))}

      <hr className='border-4 border-black my-4' />

      {secondaryLinks.map((icon, i) => (
       <CardSidebar key={i} icon={icon} />
      ))}

      <hr className='border-4 border-black my-4' />

      {textTerms.map((icon, i) => (
        <li key={i} className='flex items-center gap-2 outline-double  cursor-pointer hover:brightness-150 tracking-wider shadow-[3px_3px_0px_black]'>

          <span className='text-lg font-bold'>{icon}</span>
        </li>
      ))}

      <hr className='border-4 border-black my-4' />
    </ul>
  )
}

export default Sidebar