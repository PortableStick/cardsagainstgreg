<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item name="title" v-for="card in cards">
                <h3>{{ card.title }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style>
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
    import Card from "./Card.vue";

    export default {
        components: {
            Card: Card
        },
        props: {
            cards: {
                type: Array
            }
        }
    }
</script>

