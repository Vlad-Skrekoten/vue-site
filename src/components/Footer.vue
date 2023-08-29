<template>
    <footer class="footer">
        <div class="footer_block">
            <div class="footer_content">
                <div class="footer_title">
                    Web3 product studio
                </div>
                <div class="footer_text">
                    Feel free to reach out if you want to collaborate with us, or simply have a chat.
                </div>
                <div class="footer_mail-block">
                    <div class="footer_mail">
                        hello@thirdweb.studio
                    </div>
                    <div class="footer_mail-arrow">
                        <img src="../../public/images/arrow/arrowRight.svg" alt="arrow">
                    </div>
                </div>
            </div>
            <div class="footer_block-links">
                <div class="footer_links-left">
                    <div class="footer_link-bold">Our projects</div>
                    <div class="footer_links">
                        <div class="footer_link">WingRiders</div>
                        <div class="footer_link">Trackee</div>
                        <div class="footer_link">Worldcoin</div>
                        <div class="footer_link">Audience+</div>
                    </div>
                </div>
                <div class="footer_links-right">
                    <div class="footer_link-bold">Follow us</div>
                    <div class="footer_links">
                        <div class="footer_link">Facebook</div>
                        <div class="footer_link">Instagram</div>
                        <div class="footer_link">Dribble</div>
                        <div class="footer_link">Linkedin</div>
                    </div>
                </div>
            </div>
            <div class="footer_to-top">
                <div @click="scrollTop()" class="arrow_to-top go-top">
                    <img src="../../public/images/arrow/arrowTop.svg" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Top",
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
};
</script>

<style scoped></style>