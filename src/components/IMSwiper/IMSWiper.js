import { classNames as cn } from 'utils';

import styles from './IMSwiper.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/scss/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
/**
 * A basic Container Wrapper component
 * @param {Props} props The props object.
 * @param {string} props.content The content as string.
 * @param {string} props.className An optional className to be added to the container.
 * @param {React.ReactElement} props.children The children to be rendered.
 * @return {React.ReactElement} The ContentWrapper component.
 */
export default function IMSwiper() {
  return (
      <>
        <Swiper 
        modules={[Navigation, Autoplay]} 
        // navigation={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        className={styles.swiper}>
            <SwiperSlide className=' text-'>
                <img src='https://innovatemap.com/wp-content/uploads/2021/12/Encamp-Showcase-Featured-Image-1-2048x1319.png' />
                <h2>Encamp</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://innovatemap.com/wp-content/uploads/2020/08/JLL-2048x1320.png' />
                <h2>JLL Spaces</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://innovatemap.com/wp-content/uploads/2020/08/canvas-1-2048x1320.png' />
                <h2>Canvas</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://innovatemap.com/wp-content/uploads/2020/07/jobvite-2048x1320.png' />
                <h2>Jobvite</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://innovatemap.com/wp-content/uploads/2020/07/groundwork-2048x1320.png' />
                <h2>Groundwork</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://innovatemap.com/wp-content/uploads/2020/06/authenticx-2048x1320.png' />
                <h2>Authenticx</h2>
            </SwiperSlide>
        </Swiper>
    </>
  );
}
