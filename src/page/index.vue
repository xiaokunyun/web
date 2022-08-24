<template>
    <div class="warp">
        <Center class="center" />
        <div class="bg"></div>
        <div class="beian">版权所有 © 2022-至今 AKUN</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
    .beian {
        font-size: 14px !important;
    }
}

.warp {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s;
    z-index: 5;

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
    }

    .bg {
        width: 100%;
        height: 100vh;
        animation: change 15s infinite;
        background: linear-gradient(125deg, #2980b9, #633bd3, #8e44ad, #192f44, #27ae60);
        background-size: 800%;
        z-index: -99;
    }

    @keyframes change {
        0% {
            background-position-x: 0%;
        }

        50% {
            background-position-x: 100%;
        }

        100% {
            background-position-x: 0%;
        }
    }

    .beian {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 16px;
        white-space: nowrap;
    }
}
</style>
