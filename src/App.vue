<template>
    <div>
        <router-view name="dashboard"></router-view>
        <router-view name="collections" :cards="cards"></router-view>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
        data() {
            return {
                cards: [
                    {title: "JavaScript"},
                    {title: "Python"},
                    {title: "Clojure"},
                    {title: "Java"}
                ]
            }
        }
    }
</script>
