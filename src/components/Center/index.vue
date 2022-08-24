<template>
    <div>
        <div id="center">
            <div class="text">
                <div class="text--backing">LONGJIE</div>
                <div class="text--left">
                    <div class="inner">LONGJIE</div>
                </div>
                <div class="text--right">
                    <div class="inner">LONGJIE</div>
                </div>
            </div>
            <div class="loading">
                <div class="status online"></div>
                <div class="status invisible"></div>
                <div class="status idle"></div>
                <div class="status offline"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
@media screen and (max-width: 700px) {
    #center {
        font-size: 24px;

        // .navgation i {
        //     margin: 6px;
        // }

        // .talk-method i {
        //     font-size: 14px;
        // }
    }
}

#center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .text {
        position: relative;

        .text--backing {
            opacity: 0;
        }

        .text--left {
            position: absolute;
            top: 0;
            left: 0;
            width: 51%;
            height: 100%;
            overflow: hidden;
        }

        .text--left .inner {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -webkit-animation: text-left 6s ease-in-out infinite;
            animation: text-left 6s ease-in-out infinite;
        }

        .text--right {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            overflow: hidden;
        }

        .text--right .inner {
            -webkit-transform: translateX(-200%);
            transform: translateX(-200%);
            -webkit-animation: text-right 6s ease-in-out infinite;
            animation: text-right 6s ease-in-out infinite;
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;

        .status {
            margin-left: 10px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin: 10px;
            animation: pulse 1.5s infinite ease-in;
        }

        .online {
            background: #72ff7d;
        }

        .offline {
            background: #DC143C;
        }

        .invisible {
            background: #42e5ff;
        }

        .idle {
            background: #ffda72;
        }

        @keyframes pulse {
            from {
                transform: scale(0.5);
                opacity: 1;
            }

            to {
                transform: scale(1.5);
                opacity: 0;
            }
        }
    }
}
@-webkit-keyframes text-left {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  10% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  58% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  70% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
}
@keyframes text-left {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  10% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  58% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  70% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
}
@-webkit-keyframes text-right {
  0% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  10% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  58% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  70% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}
@keyframes text-right {
  0% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  10% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  58% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  70% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}
</style>
