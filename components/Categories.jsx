import React from 'react'

export default function Categories({ className }) {
  const categories = [
    "News",
    "Updates",
    "Guides",
    "Crafting",
    "Enchanting",
    "Events",
    "Players",
    "Pvp"
  ];

  return (
    <ul className={'uppercase font-bold ' + className}>
      {categories.map(item => 
        <li className='relative after:w-0 after:absolute after:-bottom-0.5 after:left-0 after:bg-enveus-primary hover:after:w-full after:h-1 after:transition-all'><a href="#">{item}</a></li>
      )}
    </ul>
  )
}
