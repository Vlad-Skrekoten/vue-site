<template>
    <header class="head">
        <nav class="nav">
            <div class="logo">
                <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.0013 48.5549C38.972 48.5549 49.4869 38.0401 49.4869 25.0693C49.4869 12.0986 38.972 1.58374 26.0013 1.58374C13.0305 1.58374 2.51569 12.0986 2.51569 25.0693C2.51569 38.0401 13.0305 48.5549 26.0013 48.5549Z"
                        stroke="white" stroke-width="1.69968" />
                    <path
                        d="M14.631 5.0075C14.9568 4.6995 15.6513 4.49985 16.9667 4.75194C18.2424 4.9964 19.8751 5.62867 21.7668 6.6336C25.5392 8.63761 30.164 12.0277 34.7242 16.3377C39.2844 20.6478 42.8713 25.0188 44.9916 28.5843C46.0549 30.3722 46.7238 31.9154 46.9825 33.1211C47.2492 34.3644 47.0379 35.0207 46.7121 35.3287C46.3862 35.6367 45.6918 35.8364 44.3763 35.5843C43.1006 35.3398 41.4679 34.7075 39.5762 33.7026C35.8038 31.6986 31.1791 28.3085 26.6189 23.9984C22.0587 19.6884 18.4718 15.3173 16.3514 11.7519C15.2882 9.96398 14.6192 8.42082 14.3606 7.21514C14.0939 5.97183 14.3051 5.31549 14.631 5.0075Z"
                        stroke="white" stroke-width="1.69968" />
                    <path
                        d="M38.2486 4.99762C38.5668 5.29837 38.776 5.95693 38.4865 7.22828C38.2067 8.45696 37.5056 10.0322 36.4022 11.859C34.2017 15.5019 30.5036 19.9784 25.8209 24.4042C21.1382 28.8301 16.4018 32.3253 12.5475 34.4051C10.6147 35.448 8.94805 36.1106 7.64806 36.3751C6.30293 36.6487 5.60615 36.4509 5.28794 36.1502C4.96973 35.8494 4.76048 35.1909 5.04998 33.9195C5.32976 32.6908 6.03089 31.1156 7.13434 29.2888C9.33483 25.6459 13.0328 21.1694 17.7156 16.7435C22.3983 12.3177 27.1346 8.82251 30.989 6.74274C32.9218 5.69982 34.5884 5.03715 35.8884 4.77271C37.2336 4.4991 37.9304 4.69687 38.2486 4.99762Z"
                        stroke="white" stroke-width="1.69968" />
                </svg>
            </div>
            <div class="type_link">
                <transition name="trans">
                    <ul class="block_menu" v-if="showMenu" key="menu">
                        <li class="link">Home</li>
                        <li class="link">About</li>
                        <li class="link">Contact</li>
                        <li class="link">Career</li>
                    </ul>
                </transition>

                <ul class=" block_menu-laptop">
                    <li class="link">Home</li>
                    <li class="link">About</li>
                    <li class="link">Contact</li>
                    <li class="link">Career</li>
                </ul>
            </div>
            <div class="window">Menu</div>
            <transition name="fade" mode="out-in">
                <i class="min-window" v-if="!showMenu" @click="toggleMenu()"><img src="../../public/images/menu/menu.svg"
                        alt="menu"></i>
                <i class="min-window" v-else @click="toggleMenu()"><img src="../../public/images/menu/cancel.svg"
                        alt="cancel"></i>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }


    }
};
</script>

<style scoped lang="scss"></style>