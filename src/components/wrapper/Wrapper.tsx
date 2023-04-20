import React, { FC, ReactElement, ReactNode } from "react"

interface IWrapper {
  children: string | ReactElement | ReactNode
  className?: string
}

const Wrapper: FC<IWrapper> = ({ children, className }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] rounded-[20px] bg-white px-8 md:px-5 ${className || ""}`}
    >
      {children}
    </div>
  )
}

export { Wrapper }
