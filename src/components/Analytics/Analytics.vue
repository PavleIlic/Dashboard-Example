<template src="./template.html"></template>
<style src="./style.css" scoped></style>


<script>
import Sidebar from '../../components/Sidebar/sidebar';
import Navbar from '../../components/Navbar/navbar';
import LineChart from '../../LineChart.js';
import NewAccounts from '../../NewAccounts.js';
import LastYear from '../../LastYear.js';
// import NextPrev from '../../NextPrev.js';

    export default {
        data(){
            return {
                datacollection: null,
                animate: true,
                slide: 0,
                sliding: null,
            }
        },
        components: {
            Sidebar,
            Navbar  ,
            LineChart,
            NewAccounts,
            LastYear,
            // NextPrev
        },
        methods: {
            onSlideStart(){
                this.sliding = true;
            },
            onSlideEnd(){
                this.sliding = false;
            },

            next(){
              this.$refs.myCarousel.next();
            },
            prev(){
              this.$refs.myCarousel.prev();
            },
            firstGraph(){
                this.$refs.myCarousel.setSlide('0')
            },
            secondGraph(){
                this.$refs.myCarousel.setSlide('1')
            },
            thirdGraph(){
                this.$refs.myCarousel.setSlide('2')
            }
        }
    }
</script>