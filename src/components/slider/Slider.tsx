import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css/navigation"
import "swiper/css"

import "../../styles/global.css"
import Slide_1 from "../../assets/slide_1.svg"

interface ISlider {
  navigation: boolean
}

const Slider: FC<ISlider> = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <Swiper autoplay={true} spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Slide_1} alt={"items.alt"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide_1} alt={"items.alt"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide_1} alt={"items.alt"} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export { Slider }
