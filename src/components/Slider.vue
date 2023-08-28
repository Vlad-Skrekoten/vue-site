<script>
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/scss';
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            EffectFade,
            Pagination
        };
    },
};

</script>

<template>
    <div class="slider">
        <div class="title_slider">Other objects</div>
        <div class="block_slider">
            <swiper slides-per-vie="3" :modules="[EffectFade, Pagination]" effect="fade" :grab-cursor="true" :loop="true"
                :pagination="true">
                <swiper-slide><img src="../../public/images/slider/slider1.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider2.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider3.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider1.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider2.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider3.svg" alt="image"></swiper-slide>
                <swiper-slide><img src="../../public/images/slider/slider1.svg" alt="image"></swiper-slide>
            </swiper>
        </div>
    </div>
</template>


<style>
.swiper-pagination-bullet {
    width: 24px;
    height: 2px;
    border-radius: 0;
    background: rgb(97, 97, 97);
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background-color: #FFFFFF;
    width: 30px;
}

.swiper-pagination {
    position: relative;
    text-align: left;
    margin-left: 30px;
}
</style>