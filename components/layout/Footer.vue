<template>
    <div class="footer dark:bg-[#272727] dark:border-[#1c1c1c] dark:text-slate-200 ">
        <p class="copy">
            {{ new Date().getFullYear() }}©
        </p>
        <p>
            sidoku
        </p>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .copy{
        color: #777986;
        font-weight: 700;
    }
    .footer{
        gap: 5px;
        color: #282A3A;
        -webkit-font-smoothing: antialiased;
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        align-items: center;
        background: rgb(245,245,245);
        height: 50px;
        width: 100%;
        border-top: 1px solid rgb(217, 217, 217);
    }
</style>