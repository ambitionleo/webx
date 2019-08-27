<template>
  <el-container style="height:100%;" >
    <el-container>
      <el-aside width="15%" class="abgc">
        <left></left>
      </el-aside>
      <el-container>
        <el-header class="hbgc">
        <img align="left" src="../../assets/wxjt.png"  >
        </el-header>
        <el-main class="mbgc">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import left from '@/layout/left'


export default {
  name : 'home',
  data(){
    return{

    }
  },
  components:{
    'left' : left,
  },
  mounted(){
    this.directiona();
  },
  methods:{
    directiona(){
      this.$router.push("/home/food")
    }
    
  }
}
</script>
<style scoped>
  .abgc{
    background-color:#545c64;
  }
  .hbgc{
    padding: 0px;
    background-color:rgb(255, 255, 255);
  }
  .mbgc{
    background-color: blanchedalmond;
  }
  img{
    height:100%;
  }
</style>