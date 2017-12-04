<template>
    <div class="collection">
        <el-carousel :interval="4000" type="card" height="200px" trigger="click" @change="selectCard">
            <el-carousel-item name="card.title" v-for="card in cards" key="card.title">
                <h3>{{ card.title }}</h3>
            </el-carousel-item>
        </el-carousel>
        <ul class="subcategories">
            <li v-for="category in currentCard.subcategories">{{category}}</li>
        </ul>

    </div>
</template>

<style scoped>

    .collection {
        margin-top: 150px;
    }

    .subcategories {
        list-style: none;
        margin: 20px auto;
        width: 50vw;
        text-align: center;
        font-size: 32px;
        color: #666;
        font-weight: bold;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 24px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<script>
    export default {
        props: {
            cards: {
                type: Array
            }
        },
        data() {
            return {
                currentCard: this.cards[0]
            }
        },
        methods: {
            selectCard(newCard) {
                this.currentCard = this.cards[newCard];
            }
        }
    }
</script>

