<template>
  <div class="layout-wrap">
    <el-menu
      class="el-menu-vertical-demo" 
      unique-opened
      :collapse="isCollapse">
      <div class="menu-header clearfix">
        <el-avatar :size="50" class="user-header" v-show="!isCollapse"></el-avatar>
        <i class="iconfont btn-control" @click.self="isCollapse = !isCollapse">&#xe63c;</i>
      </div>
      <el-submenu index="1-4" title="导航">
        <template slot="title">
           <i class="el-icon-location"></i>
            <span>导航一</span>
        </template>
        <el-menu-item class="" v-for="(item, index) in menuList" :key="index" @click="handleAdd(item)">
          <router-link tag="div" :to="item.path">
            <i class="el-icon-document"></i>
            {{item.title}}
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="container">
      <el-tabs 
        v-model="editableTabsValue"
        type="card"
        class="my-tabs"
        closable
        @tab-click="clickTab"
        @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="index"
          :name='item.name'
          :label="item.title"
        ></el-tab-pane>
      </el-tabs>
      <div class="content-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      editableTabsValue: 'index',
      editableTabs: [
        {
          title: "首页",
          name: 'index',
          path: 'index'
        }
      ],
      menuList: [
        {
          title: '首页',
          path: 'index',
          name: 'index'
        },
        {
          title: '在线考试',
          path: 'onlineExam',
          name: 'onlineExam'
        },
        {
          title: '随堂考',
          path: 'quizzes',
          name: 'quizzes'
        }
      ]
    };
  },
  created () {
    
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name
              this.$router.push(nextTab.path)
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleAdd(item) {
      this.editableTabsValue = item.name
      for (let a = 0; a < this.editableTabs.length; a++) {
        if (item.name === this.editableTabs[a].name) {
          return
        }
      }
      console.log('1')
      this.editableTabs.push(item)
    },
    clickTab (tab) {
      // console.log(tab.name, this.$route.name)
      if (tab.name === this.$route.name) return false
      this.$router.push({name: tab.name})
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-wrap {
  position: relative;
}
.my-tabs {
  // width: 80%;
}
.el-menu-vertical-demo {
  position: absolute;
  top: 0;
  bottom: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
.menu-header {
  height: 60px;
  line-height: 60px;
  margin-top: 80px;
  .user-header {
    margin: 5px 10px;
  }
  .btn-control {
    float: right;
    display: block;
    height: 40px;
    width: 50px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #f5f5f5;
    margin: 9px 10px;
    cursor: pointer;
  }
  .btn-control:hover {
    background: #bbb;
  }
}
.container {
  position: absolute;
  left: 240px;
  right: 24px;
  // width: 80%;
  min-width: 350px;
  // display: inline-block;
  margin-top: 100px;
  margin-left: 24px;
  .content-wrap {
    background: #555;
  }
}
</style>