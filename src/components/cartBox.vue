<template>
    <div class="cartBoxContainer">
        <h1>カートの中身</h1>
        <ul v-for="(cartItem, index) in cartItems" :key="`first-${index}`" class="cartList">
            <li>
                <p>商品名：{{cartItem.name}}</p>
                <p>価格（税抜）：{{cartItem.price}}円</p>
                <p>数量：{{cartItem.quantity}}</p>
            </li>
        </ul>
        <p class="total">合計金額（税込）：{{total}}円</p>
        <resetBtn @reset="$emit('reset')"></resetBtn>
    </div>
</template>

<script>
import resetBtn from '../components/resetBtn'

export default {
    props:['cartItems', 'total'],
    components:{
        resetBtn
    }
}
</script>

<style>
    .cartBoxContainer{
        background: #fffdf9;
        border: 2px solid #e0dacf;
        margin: 10px;
        width: 300px;
    }

    .cartBoxContainer h1{
        font-size: 20px;
        margin: 20px;
    }

    .cartBoxContainer .total{
        padding: 10px;
        margin: 0;
    }

    .cartList{
        list-style: none;
        padding: 5px 10px;
        margin: 0;
    }

    .cartList li{
        border: 1px solid #e0dacf;
        padding: 0 5px;
    }

    .cartList li p{
        margin: 10px 0;
    }

</style>