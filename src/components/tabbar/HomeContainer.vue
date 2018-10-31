<template>
  <div class="app"> 
    <!--轮播图区-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!--灰色分割块-->
    <div class="divider"></div>
    <!--九宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/1.jpg" />
		      <div class="mui-media-body">人气女装</div>
        </a>
      </li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/2.jpg" />
		      <div class="mui-media-body">当季热卖</div>
        </a>
      </li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/3.jpg" />
		      <div class="mui-media-body">内衣百货</div>
        </a>
      </li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/4.jpg" />
		      <div class="mui-media-body">TOP鞋包</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/5.jpg" />
		      <div class="mui-media-body">美妆个护</div>
          </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
		      <img src="../../img/6.jpg" />
		      <div class="mui-media-body">9.9专区</div>
        </a>
      </li>            
    </ul> 
    <!--灰色分割块-->
    <div class="divider"></div>    
  
    <div class="model1"> 
      <div class="title">
        <div v-for="item in sy_list.slice(0,1)" :key="item.id">
          <img :src="item.u_img" />
        </div> 
        <div> 
        <h5>百变可妹er</h5>
        <h6>166cm 45kg | 闵行 | 自由</h6> 
        </div>
      </div>    
      <h5>#精致细节在双十一中博出位# 引领最潮撞色搭配！黄色</h5>
      <h5>格子衬衫明亮不扎眼，高级中带着一丝清爽。牛仔高腰...</h5>
      <a v-for="item in sy_list.slice(1,4)" :key="item.id" class="img">
        <img :src="item.u_img" />
      </a> 
    </div>

    <div class="model1"> 
      <div class="title">
        <div v-for="item in sy_list.slice(4,5)" :key="item.id">
          <img :src="item.u_img" />
        </div> 
        <div> 
        <h5>不太开心小刘</h5>
        <h6>162cm 41kg | 岳阳</h6> 
        </div>
      </div>    
      <h5>今天是贵妇小刘啦～毛毛外套 配针织裙 搭配袜子靴穿出</h5>
      <h5>去气场满分哦～#11.11购齐秋冬流行色##11.11联名款...</h5>
      <a v-for="item in sy_list.slice(5,8)" :key="item.id" class="img">
        <img :src="item.u_img" />
      </a>
    </div>

    <div class="model1"> 
      <div class="title">
        <div v-for="item in sy_list.slice(8,9)" :key="item.id">
          <img :src="item.u_img" />
        </div> 
        <div> 
        <h5>彤子蓝</h5>
        <h6>165cm 48kg</h6> 
        </div>
      </div>    
      <h5>毛衣搭配，秋冬还是爱黄色。穿了一夏天的黄色，秋冬也</h5>
      <h5>也要继续！zara的oversize大毛衣,明黄色超亮眼，很喜...</h5>
      <a v-for="item in sy_list.slice(9,12)" :key="item.id" class="img">
        <img :src="item.u_img" />
      </a>
    </div>
    <div class="model1"> 
      <div class="title">
        <div v-for="item in sy_list.slice(12,13)" :key="item.id">
          <img :src="item.u_img" />
        </div> 
        <div> 
        <h5>JolieHi啾黎</h5>
        <h6>企划</h6> 
        </div>
      </div>    
      <h5>格纹西装永远是经典中的经典，搭配简单的白色slogan  </h5>
      <h5>tee不至于非常严肃。裸色的高跟鞋和肤色...</h5>
      <a v-for="item in sy_list.slice(13,16)" :key="item.id" class="img">
        <img :src="item.u_img" />
      </a>
    </div>

  </div>
</template>
<script>
import {Toast} from 'mint-ui';
   //页面加载成功后发送请求获取图片内容
   export default{
      data(){
       return {
         list:[],
         sy_list:[]
       }
      },
     
      methods:{
        getLbList(){
          var url="http://127.0.0.1:3000/lbimagelist/list";
          this.$http.get(url).then(result=>{
            if(result.body.code==1){
              this.list=result.body.msg;
            }else{
              Toast("图片加载失败...")
            }           
          }); 
        },
        getSyList(){
          var url="http://127.0.0.1:3000/imagelist/sy_list";
          this.$http.get(url).then(result=>{
              if(result.body.code==1){
                this.sy_list=result.body.msg;
              }else{
                Toast("图片加载失败...")
              }       
          }); 
        }

      },
      created(){
        this.getLbList();
        this.getSyList();
      }
   } 

</script>

<link src="../../../public/css/Home.css">