<template>
  <div class="layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <div class="logo"></div>
          <div class="collapseIcon">
            <Icon type="navicon-round" size="24" class="icon" :class="rotateIcon" :style="{margin: '20px 20px 0'}"></Icon>
          </div>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-aside style="width:200px;">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu  class="el-menu-vertical-demo" :unique-opened="uniqueOpened" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1',
        uniqueOpened: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapse ? 'rotate-icon' : ''
        ];
      }
    },
  }
</script>
<style>
  .el-header {
     padding: 0;
  }
  .logo{
    width: 120px;
    height: 30px;
    background: #5b6270;
    float: left;
    border-radius: 3px;
    position: relative;
    top: 15px;
    left: 20px;
    margin-right:35px;
  }
  .collapseIcon{
    float: left;
    color:#fff;
  }
  .collapseIcon:hover{
      cursor:pointer;
      border:0;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  .icon{
    border:none;
  }
</style>
