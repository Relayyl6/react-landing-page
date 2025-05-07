import React from 'react'

const tick = ({ children }) => {
  return (
    <ul className="space-y-2">
        <li className="flex">
          <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
            <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
            <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
            <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
          </svg>
          <p className="ml-3">
            {children}
            <code className="font-mono font-medium text-gray-950 dark:text-white">@theme</code>
          </p>
        </li>
    </ul>
  )
}

export default tick