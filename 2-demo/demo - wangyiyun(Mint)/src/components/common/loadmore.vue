<template>
    <div>
        <div v-if="isload">
            <mt-spinner type="fading-circle" color="#26a2ff;"></mt-spinner>
            加载中...
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:['isload']
}
</script>
<style>

</style>
