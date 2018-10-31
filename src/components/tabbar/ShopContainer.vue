<template>
  <div class="app">
    <div class="grid">
      <a v-for="item in slist.slice(0,6)" :key="item.id">
        <img :src="item.u_img" />
        <p>{{item.title}}</p>
      </a>
    </div>
    <!--灰色分割块-->
    <div class="divider"></div>    
    <a class="dt" v-for="item in slist.slice(6,7)" :key="item.id">
      <img :src="item.u_img" />
    </a>
    <!--灰色分割块-->
    <div class="divider"></div>
    <div class="list">
      <a class="z1 z2">气质毛呢</a>
      <a class="z1 z3" @click="warm()">温暖棉服</a>
      <a class="z1 z4">甜美毛衣</a>
    </div>
    <div class="list1">
      <a class="xt" v-for="item in slist.slice(15,19)" :key="item.id">
        <img :src="item.u_img" />
      </a>
    </div>
    <div class="list2">
      <a class="xt" v-for="item in slist.slice(11,15)" :key="item.id">
        <img :src="item.u_img" />
      </a>
    </div>
    <div class="list3">
      <a class="xt" v-for="item in slist.slice(7,11)" :key="item.id">
        <img :src="item.u_img" />
      </a>
    </div>

  </div>
</template>
<script>
import {Toast} from 'mint-ui';
  export default {
     data(){
         return {
           slist:[]
         }
     },
     methods:{
        getShopList(){
          var url="http://127.0.0.1:3000/imagelist/shop_list";
          this.$http.get(url).then(result=>{
              if(result.body.code==1){
                this.slist=result.body.msg;
              }else{
                Toast("图片加载失败...")
              }       
          }); 
        },
        warm(){
          this.list3.style.display=none;
        }

     },
     created(){
        this.getShopList();
      }

  }
</script>
<link src="../../../public/css/Shop.css">