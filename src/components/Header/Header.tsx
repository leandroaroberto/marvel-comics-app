import React from 'react'

type Props = {
    children: string;
  }

const Header = ({children} : Props ) => {
  return (
    <div className="flex justify-center font-sans font-bold text-5xl py-4">
        {children}
    </div>
  )
}

export default Header