<template>
    <div class="productContainer">
        <img :src="product.imgSrc">

        <section class="proInfoArea">
            <div>
                <h1 id="name">{{product.name}}</h1>
                <p id="price">{{product.price}}円（税抜）</p>
            </div>
            <p id="text">{{product.discription}}</p>

            <addBtn @add="$emit('add')"></addBtn>
        </section>
    </div>
</template>

<script>
import addBtn from '../components/addBtn'

export default {
    props:['product'],
    components:{
        addBtn
    }
}
</script>

<style>
    .productContainer{
        background: #fffdf9;
        display: flex;
        width: 600px;
        border: 2px solid #e0dacf;
        margin: 10px 0;
    }

    .productContainer img{
        width: 150px;
        height: 150px;
        padding: 10px;
        margin: auto 0;
    }

    .proInfoArea{
        padding: 10px;
    }

    .proInfoArea>div{
        display: flex;
    }

    .proInfoArea #name{
        margin: 10px 0;
        line-height: 30px;
        font-size: 20px;
    }

    .proInfoArea #text{
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .proInfoArea #price{
        margin: 10px;
        line-height: 35px;
    }
</style>