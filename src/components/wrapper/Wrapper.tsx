import React, { FC, ReactElement, ReactNode } from "react"

interface IWrapper {
  children: string | ReactElement | ReactNode
  className?: string
}

const Wrapper: FC<IWrapper> = ({ children, className }) => {
  return (
    <div className={` mx-auto w-full max-w-[1080px] rounded-[20px] bg-white px-5 md:px-10 ${className || ""}`}>
      {children}
    </div>
  )
}

export { Wrapper }
