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
                    {   title: "JavaScript",
                        subcategories: ["Algorithms", "Data structures", "Keyboard clacks", "hackings"]
                    },
                    {title: "Python",
                        subcategories: ["Sorting", "sneks", "Python clacks", "More hackings", "NSA SPoOks"]
                    },
                    {title: "Clojure",
                    subcategories: ["Beat up Supermans", "Parentheses", "Bad bears", "40oz"]},
                    {title: "Java",
                    subcategories: ["Why vim no format mai thiiings?", "BORING AS HECK", "fuck", "The JVM and you"]}
                ]
            }
        }
    }
</script>
