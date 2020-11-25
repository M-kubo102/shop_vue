<template>
    <a class="addBtn" @click="$emit('add')" href="#top">カートに入れる</a>
</template>

<script>
export default {
    
}
</script>

<style>
    .addBtn{
        background: #ff6347;
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        transition: .2s;
        text-decoration: none;
    }

    .addBtn:hover{
        background: #ffa493;
    }
</style>