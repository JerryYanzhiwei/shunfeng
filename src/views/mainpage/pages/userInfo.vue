<template>
  <div class="userInfo_container">
    <PublicTitle title="个人信息"/>
    <div class="user_contain">
      <div class="user_top">
        <div>
          <span>姓名: </span>
          <el-input v-model="userForm.name" size="mini"></el-input>
        </div>
        <div>
          <span>性别: </span>
          <el-input disabled v-model="gender" size="mini"></el-input>
        </div>
        <div>
          <span>手机: </span>
          <el-input disabled="" v-model="userForm.phone" size="mini"></el-input>
        </div>
        <div>
          <span>邮箱: </span>
          <el-input v-model="userForm.email" size="mini"></el-input>
        </div>
        <div>
          <span>学校: </span>
          <el-input v-model="userForm.school" size="mini"></el-input>
        </div>
        <div>
          <span>专业: </span>
          <el-input v-model="userForm.profession" size="mini"></el-input>
        </div>
        <div>
          <span>年级: </span>
          <el-input v-model="userForm.grade" size="mini"></el-input>
        </div>
        <div class="">
          <span>备注:</span>
          <el-input v-model="userForm.described" rows="3" resize="none" type="textarea"></el-input>
        </div>
        <div class="">
        </div>
      </div>
      <div class="btn_contain">
        <el-button @click="editUserInfo" size="mini">修改</el-button>
      </div>
    </div>
    <PublicTitle title="赛题详情下载"/>
    <div class="user_contain ops_contain">
      <p>
        包装类课题介绍
        <i class="iconfont icon-xiazai1 download_btn"
                @click="download(0)"></i>
      </p>
      <p>
        物流类课题介绍
        <i class="iconfont icon-xiazai1 download_btn"
                @click="download(1)"></i>
      </p>
    </div>
  </div>
</template>

<script>
import PublicTitle from '@/components/public_title.vue'

import { mapActions } from 'vuex'
export default {
  components: {
    PublicTitle
  },
  data () {
    return {
      userForm: {
        accountId: '',
        name: '',
        phone: '',
        email: '',
        school: '',
        profession: '',
        grade: '',
        described: ''
      },
      gender: ''
    }
  },
  created () {
    this.getUserInfo()
    console.log(this.$route.path)
  },
  methods: {
    ...mapActions(['GET_USER_INFO', 'PUT_USER_INFO', 'GET_DOWNLOAD_TEMPLATE']),
    // 下载附件
    async download (attachmentId) {
      this.GET_DOWNLOAD_TEMPLATE(attachmentId)
    },
    async editUserInfo () {
      const params = this.userForm
      const res = await this.PUT_USER_INFO(params)
      if (res.result === '0' && res.data) {
        this.$message.success('修改成功')
      }
      console.log(res)
    },
    async getUserInfo () {
      const res = await this.GET_USER_INFO()
      if (res.result === '0' && res.data) {
        this.userForm = res.data
        this.userForm.gender === 0 && (this.gender = '未知')
        this.userForm.gender === 1 && (this.gender = '男')
        this.userForm.gender === 2 && (this.gender = '女')
      }
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.userInfo_container {
  width: 100%;
  min-height: 100vh;

  // background-color: #f4f5f8;
  .user_contain {
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 20px 30px;

    background-color: #fff;
    box-shadow:0px 2px 6px rgba(0,0,0,0.2);
    border-radius: 8px;
    &.ops_contain {
      display: flex;
      p {
        margin-right: 20px;
        color: #dc1e32;
        .download_btn {
          margin-left: 5px;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
    .user_top {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 50%;
        margin: 10px 0;

        text-align: center;
        span {
          display: inline-block;

          width: 85px;
          margin-right: 10px;

          text-align: right;
        }
      }
    }
    .btn_contain {
      margin-top: 10px;

      text-align: center;
    }
  }
}
</style>

<style lang="scss">
  .userInfo_container .user_contain .user_top div.el-textarea {
    vertical-align: top;
    margin: 0;
  }
</style>
