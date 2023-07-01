import React from 'react'

export default function Footer() {
  return (
    <span
      className="mx-4 antialiased uppercase select-none flex text-sm md:text-xl font-semibold bg-gradient-to-tl bg-clip-text text-transparent to-indigo-500 via-purple-500 from-pink-500">
        MIT {new Date().getFullYear()} © Ganit Swayam Shikshak, Maverick Mandir.
    </span>
  )
}
