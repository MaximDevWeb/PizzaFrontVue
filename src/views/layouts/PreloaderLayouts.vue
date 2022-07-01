<template>
    <div class="loader">
    </div>
</template>

<style lang="scss" scoped>
    .loader {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
            content: '';
            position: absolute;
            border-radius: 50%;
            border: 2px solid #ff6900;
            opacity: 0;
            animation: circles 2s 0.5s infinite;
        }

        &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            border: 2px solid #ff6900;
            opacity: 0;
            animation: circles 2s 1.5s infinite;
        }

    }

    @keyframes circles {
       0% {
          height: 0;
          width: 0;
          opacity: 1;
       }

       100% {
          height: 80px;
          width: 80px;
          opacity: 0;
       }
    }
</style>