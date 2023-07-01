import React from 'react'
import Logo from './logo'

export default function Title() {
  return (
    <>
      <Logo/>
      <span
          className="mx-2 pl-2 antialiased uppercase select-none flex text-2xl lg:text-3xl font-extrabold bg-gradient-to-tl bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500">
          <span className="md:hidden"> GSS </span>
          <span className="hidden md:inline-block lg:hidden"> Ganit SS</span>
          <span className="hidden lg:inline-block"> Ganit Swayam Shikshak</span>
      </span>
    </>
  )
}
