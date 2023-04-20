import React, { FC, ReactElement } from "react"

interface IButton {
  children?: string | React.ReactElement | React.ReactNode;
  className?: string
}

const Button: FC<IButton> = ({ children, className }) => {
  return (
    <div
      className={`flex h-[58px] w-[325px] cursor-pointer items-center justify-center rounded-[15px] bg-[#9DD458] ease duration-100 text-[18px] font-medium text-white hover:bg-[#8BBE4C] ${
        className || ""
      }`}
    >
      {children}
    </div>
  )
}

export { Button }
