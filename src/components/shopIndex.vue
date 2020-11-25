<template>
    <div class="container">
        <itemIndex :products="products"></itemIndex>
    </div>    
</template>

<script>
import itemIndex from '../components/itemIndex'

export default {
    name: 'Index',
    components:{
        itemIndex
    },
    data(){
        return{
            products:[
                {
                    name: '野菜チップス',
                    discription: '新鮮な野菜をチップスにしました。おやつ・おつまみにも。',
                    price: 200,
                    imgSrc: require('@/assets/yasai_chips.png'),
                },
                {
                    name: '野菜ピクルス',
                    discription: 'XX県産のキュウリ・ニンジン・白菜を使用したピクルスです。',
                    price: 150,
                    imgSrc: require('@/assets/pickles.png'),

                },
                {
                    name: 'バーニャカウダセット',
                    discription: '5種類の野菜スティックとアンチョビソースのセット商品。1～2人用サイズ。',
                    price: 300,
                    imgSrc: require('@/assets/bagna_cauda.png'),
                },
                {
                    name: 'レトルトカレー',
                    discription: '懐かしい味を再現したレトルトカレー。中辛。',
                    price: 250,
                    imgSrc: require('@/assets/retoruto_curry.png'),

                },
                {
                    name: '冷凍エビ（200g）',
                    discription: 'YY県産の大きなエビを冷凍でお届け。どの料理にもお使いいただけます。',
                    price: 400,
                    imgSrc: require('@/assets/reitou_ebi.png'),
                },
                {
                    name: 'サラダチキン（2パック）',
                    discription: '高タンパク質で話題のサラダチキン2パック。性別を問わずおすすめ。',
                    price: 300,
                    imgSrc: require('@/assets/salad_chicken.png'),

                },
            ]
        }
    }
}
</script>

<style>

</style>