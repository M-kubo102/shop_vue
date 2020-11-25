<template>
    <a class="resetBtn" @click="$emit('reset')" href="#top">カートを空にする</a>
</template>

<script>
export default {
    
}
</script>

<style>
    .resetBtn{
        background: #adaaa3;
        width: 120px;
        font-size: 14px;
        text-align: center;
        padding: 8px;
        margin: 10px;
        user-select: none;
        cursor: pointer;
        border-radius: 10px;
        color: #fffdf9;
        transition: .2s;
        text-decoration: none;
    }

    .resetBtn:hover{
        background: #e0dacf;
    }
</style>