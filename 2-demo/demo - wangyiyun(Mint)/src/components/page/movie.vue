<template>
<div class="main-div">
    <div class="movie-main">
        <mt-navbar v-model="selected" class="main-fixed">
            <mt-tab-item id="tab-container1">TOP250</mt-tab-item>
            <mt-tab-item id="tab-container2">正在热映</mt-tab-item>
            <mt-tab-item id="tab-container3">即将上映</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
            <mt-tab-container v-model="selected" style="margin-top: 5px;">
                <mt-tab-container-item id="tab-container1">
                    <movie-top></movie-top>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <movie-hot></movie-hot>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <movie-soon></movie-soon>
                </mt-tab-container-item>
            </mt-tab-container>
    </div>
</div>
</template>

<script >
import movieTop from './movie_top250'
import movieHot from './movie_hot'
import movieSoon from './movie_soon'
export default {
    data(){
        return{
            selected : 'tab-container1',
            list_data:[],
            start:1, //开始的地方
            count:20, //结束的地方
            loading:false,
            isload:false
        }
    },
    methods:{
    },
    components:{
        movieTop,
        movieHot,
        movieSoon
    }
}
</script>

<style>
.movie-main{
    padding-top:40px;
    font-size: 14px;
}
.movie-main>.main-fixed{
    background-color: #26a2ff;
    color:rgba(255, 255, 255, .54);
}
.movie-main>.main-fixed>.mint-tab-item.is-selected{
    color:#fff;
    margin-bottom:0;
    border-bottom:2px solid #F44336;
}
.mint-tab-container-item .mint-cell.movie_cell{
    height:80px;
    line-height:80px;
}
.mint-tab-container-item .mint-cell.movie_cell .mint-cell-wrapper{
    display: inline-flex;
} 
.mint-tab-container-item .mint-cell.movie_cell .mint-cell-wrapper .mint-cell-value{
    flex: 3;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 0;
}
.movie_cell_title{
    color:#000;
    margin-bottom:10px;
    font-size:16px;
}
.movie_cell_author{
    font-size:14px;
}
.mint-cell-title img{
    border-radius:25px;
}
</style>