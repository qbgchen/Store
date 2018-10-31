<template>
  <div id="app"  class="app-container">
    <!--App.vue 根组件-->
    <!--1.顶部加固定导航栏-->
    <mt-header fixed title="唯品街" style="background:#FC81B9;"></mt-header>
    <!--2.显示子组件-->
    <router-view></router-view>
    <!--3.tabbar-->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-hotel"></span>
				<span class="mui-tab-label">商城</span>
			</router-link>
			<router-link class="mui-tab-item" to="/discovery">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<style>
  body{
    padding:1%;
  }
  .app-container{
    padding-top:40px;
    padding-bottom:50px;
    overflow-x:hidden;
  }

  .mui-bar-tab .mui-active {
    color: #F55FA2 !important;
  }

  .mui-bar-tab .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
  .mui-bar-tab .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
  }
</style>
