<template>
  <div class="body">
    <header-tpl class="header"></header-tpl>
    <section id="sec-2">
            <div class="container">
                <h1>Qui sommes nous? </h1>
                <a href="#sec-3">
                    <div class="scroll-down"></div>
                </a>
            </div>
    </section>

    <section id="sec-3" >
            <div class="container">
                <h1>Nos algorithmes</h1>
                <a href="#sec-2">
                    <div class="scroll-down"></div>
                </a>
            </div>
    </section>
  </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.body {
    background-image: url("../assets/Fond.png");
    background-size: cover;
}

html {
  scroll-behavior: smooth;
  }

.header {
  width: 100%;
}
section {
  height: 1000px;
}

.scroll-down {
  height: 50px;
  width: 30px;
  border: 2px solid rgb(255, 254, 254);
  left: 50%;
  bottom: 20px;
  position: absolute;
  border-radius: 50px;
  cursor: pointer;
}
        
        .scroll-down::before,
        .scroll-down::after {
            content: "";
            position: absolute;
            top: 20%;
            left: 50%;
            height: 10px;
            width: 10px;
            transform: translate(-50%, -100%) rotate(45deg);
            border: 2px solid rgb(255, 252, 252);
            border-top: transparent;
            border-left: transparent;
            animation: scroll-down 1s ease-in-out infinite;
        }
        
        .scroll-down::before {
            top: 30%;
            animation-delay: 0.3s;
        }
        
        @keyframes scroll-down {
            0% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
            60% {
                opacity: 1;
            }
            100% {
                top: 90%;
                opacity: 0;
            }
        }
</style>
