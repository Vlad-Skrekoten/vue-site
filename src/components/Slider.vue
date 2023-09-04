<template>
    <div class="slider_container">
        <div class="slider_content">
            <swiper :slidesPerView="1" :spaceBetween="0" :loop="true" :pagination="{
                clickable: true,
            }" :breakpoints="{
    '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}" :navigation="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider1.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider2.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider3.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider1.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider2.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider3.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider1.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider1.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider2.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider3.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider1.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider2.svg"
                        alt="slider"></swiper-slide>
                <swiper-slide><img class="img-slider" src="../../public/images/slider/slider3.svg"
                        alt="slider"></swiper-slide>

            </swiper>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style lang="css">
.swiper-pagination {
    text-align: center;
    position: relative;
    margin-top: 15px;
}

.swiper-pagination-bullet {
    border-radius: 0;
    width: 20px;
    height: 3px;
    background: var(--swiper-pagination-bullet-inactive-color, #FFF);
    ;
}

.swiper-button-prev,
.swiper-button-next {
    color: rgba(245, 241, 241, 0.629);
}

@media (max-width:800px) {
    .swiper-button-prev, .swiper-button-next {
        display: none;
    }
}
</style>