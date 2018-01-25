<template>
	<div class="top-nav">
		<mt-header :title="title" :fixed="isfixed"> 
			<router-link to="/movie" slot="left"> 
				<mt-button icon="back"></mt-button> 
			</router-link> 
			<mt-button icon="more" slot="right" @click.native="openActionsheet">
			</mt-button>
		</mt-header>
    <mt-actionsheet :actions="myactions" v-model="mysheetVisible" cancelText="取消">
    </mt-actionsheet>
	</div>
</template>

<script>

export default {
	data(){
		return{
			pagetitle:'',
			isfixed:true,
            myactions:[
                {name:'分享',method :this.actionsShare},
                {name:'后退',method :this.actionsOut}
            ],
            mysheetVisible:false
		}
	},
  	props:['title'],  //组件之间传递变量参数
	methods:{
        openActionsheet(){
            this.mysheetVisible = true
        }
	}
}
</script>

<style>

</style>