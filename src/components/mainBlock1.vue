<template>
        <div class="main_block-1">
            <div class="block1_content">
                <div class="title_block-1">
                    <div class="block1-title_first">Design studio</div>
                    <div class="block1-title_second">for the</div>
                    <div class="block1-title_third">web3 world</div>
                </div>

                <div class="block1_image"><img src="../../public/images/block1/phone.svg" alt="phone"></div>
            </div>
            <div class="block1_link">
                <div @click="scrollToTop()" class="block1_arrow">
                    <img src="../../public/images/arrow/arrowBottom.svg" alt="arrow">
                </div>
                <div class="block1_text">
                    We help companies design their products to be ready for web3 world
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        scrollToTop() {
            window.scrollTo(0, document.body.scrollHeight);
        }
    },


};
</script>