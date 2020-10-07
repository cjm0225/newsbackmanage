<template>
  <el-container>
    <el-aside width="200px">
      <div class="top">黑马头条</div>
      <el-row class="navRow">
        <el-col :span="24">
          <el-menu
            default-active="1"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="1" :route="{ path: '/home/articleList' }">
              <i class="el-icon-menu"></i>
              <span slot="title">文章详情</span>
            </el-menu-item>
            <el-menu-item index="2" :route="{ path: '/home/editArticle' }">
              <i class="el-icon-setting"></i>
              <span slot="title">文章编辑</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-container>
      <el-header height="80px">
        <img src="../assets/logo.png" alt="logo" class="avatar" />
        <div class="nickname">nickname</div>
        <div class="logout">退出</div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
.el-container {
  height: 100vh;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .nickname {
      margin-right: 100px;
    }
    .logout {
      margin-right: 30px;
      color: blue;
      cursor: pointer;
    }
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    .top {
      height: 80px;
      color: #fff;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      background-color: black;
    }
    .navRow {
      width: 100%;
    }
  }
  .el-main {
    background-color: #ccc;
    color: black;
    text-align: center;
  }
}
</style>