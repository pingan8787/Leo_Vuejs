<template>
<div class="main-div">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50"> 
        <div class="image-div">
            <div class="item" v-for="list in img_list" @click="image_detail(list.url,list.type)">
                <img :src="list.url" alt="">
            </div>
        </div>
        <load-list :isload="isload"></load-list>
    </div>
</div>
</template>

<script>
import loadList from '../common/loadmore'
export default {
    data(){
        return {
            loading:false,
            isload:false,
            start_img:0,
            img_list:[]
        }
    },
    methods:{
        loadMoreTop(){
            this.$ajax({
                methods:'GET',
                url:'https://gank.io/api/data/福利/10/'+this.start_img
            })
            .then((res) =>{
                let img_length = res.data.results.length;
                for(var i=0;i<img_length;i++){
                    this.img_list.push(res.data.results[i])
                }
                this.loading=false
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        loadMore(){
            this.loading=true,
            this.isload=true,
            this.start_img += 1;
            setTimeout(()=>{
                this.loadMoreTop()
            },1000)
        },
        image_detail(url,type){
            this.$router.push({name:'ImageDetail', params: { url: url,type:type}})
        }
    },
    components:{
        loadList
    }
}
</script>

<style scoped>
.image-div{
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}
.item{
    display:inline-block;
    height: 100px;
    flex-grow: 1;
    margin: 2px;
}
.item img{
    height: 100px;
    min-width: 100%;
    max-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
}
</style>