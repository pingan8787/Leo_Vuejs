<template>
    <div id="home">
        <main-nav></main-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import mainNav from '../../components/common/main-nav'
export default { 
	data(){
		return{
		}
	},
	mounted(){
	},
    components:{
        mainNav
    },
};
</script>

<style>

</style>