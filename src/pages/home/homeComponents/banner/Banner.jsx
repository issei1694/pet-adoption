// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ban2 from '../../../../assets/banner1.jpg'
import ban3 from '../../../../assets/banner2.jpg'
import ban4 from '../../../../assets/banner3.jpg'
import ban5 from '../../../../assets/banner-4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
      >

        {/* Banner 1 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#FFF4D6]">
            <div className="hero-content flex-col lg:flex-row-reverse">

              <img src={ban2} className="w-6/12 rounded-lg" alt="" />

              <div>
                <h1 className="text-xl lg:text-6xl font-bold text-black">
                  Embrace Compassion: Rescue a Pet, Change a Life!
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  Make a difference in the world by opening your heart and home to a shelter animal.
                </p>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Banner 2 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#FBEDEC]">
            <div className="hero-content flex-col lg:flex-row-reverse">

              <img src={ban3} className="w-6/12 rounded-lg" alt="" />

              <div>
                <h1 className="text-xl lg:text-6xl font-bold text-black">
                  Discover Unconditional Love: Adopt a Pet Today!
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  Find your perfect companion and bring joy to your home by choosing adoption over buying.
                </p>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Banner 3 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#E8F6F3]">
            <div className="hero-content flex-col lg:flex-row-reverse">

              <img src={ban4} className="w-6/12 rounded-lg" alt="" />

              <div>
                <h1 className="text-xl lg:text-6xl font-bold text-black">
                  Every Pet Deserves a Loving Home!
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  Adopt today and give a rescued pet a second chance at happiness.
                </p>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Banner 4 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#F4F4F4]">
            <div className="hero-content flex-col lg:flex-row-reverse">

              <img src={ban5} className="w-6/12 rounded-lg" alt="" />

              <div>
                <h1 className="text-xl lg:text-6xl font-bold text-black">
                  Transform Lives: Choose Adoption, Choose Love!
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  Make a lasting impact by adopting a rescue pet and be a part of their incredible journey toward a brighter future.
                </p>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;