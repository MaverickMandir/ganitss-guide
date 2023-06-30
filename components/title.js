import React from 'react'

export default function Title() {
  return (
    <span
        className="mx-2 antialiased uppercase select-none flex text-2xl lg:text-3xl font-extrabold bg-gradient-to-tl bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500">
        <span className="sm:hidden"> GSS </span>
        <span className="hidden sm:inline-block lg:hidden"> Ganit SS</span>
        <span className="hidden lg:inline-block"> Ganit Swayam Shikshak</span>
    </span>
  )
}
