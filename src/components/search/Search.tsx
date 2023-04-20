import React, { FC, useState } from "react"

import SearchIcon from "../../assets/search.svg"
import CloseIcon from "../../assets/close.svg"

const Search: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="w-50 relative flex sm:w-[100%]">
      <img src={SearchIcon} alt="search" className="absolute left-[3%] top-[30%] h-[18px] w-[18px]" />
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Поиск..."
        className="focus:border-red radius-[8px] ease placeholder:text-black/7 w-full
          rounded-lg border-[1px] px-8 py-[8px] text-black/40 outline-none duration-150
          focus:border-black/5 focus:text-black/40 focus:outline-none focus:ring-[1px]
        "
      />
      {inputValue && (
        <img
          onClick={() => setInputValue("")}
          src={CloseIcon}
          alt="close"
          className="absolute right-[3%] top-[30%] h-[20px] w-[20px] cursor-pointer"
        />
      )}
    </div>
  )
}

export { Search }
