import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"
import "swiper/css/navigation"
import "swiper/css"

import "../../styles/global.css"
import Slide_1 from "../../assets/slide_1.svg"
import slide_1 from "../../assets/slide-1.png"
import slide_2 from "../../assets/slide-2.png"
import slide_3 from "../../assets/slide-3.png"

interface ISlider {
  navigation: boolean
  Autoplay: boolean
}

const Slider: FC<ISlider> = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <Swiper loop={true} spaceBetween={20} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src={Slide_1} alt={"items.alt"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_1} alt={"items.alt"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt={"items.alt"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt={"items.alt"} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export { Slider }
