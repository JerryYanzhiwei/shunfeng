<template>
  <div class="login_container"
    :style="{
      background: `url(${bg}) repeat center`,
      backgroundSize: 'cover'
    }">
    <!-- 登录 -->
    <div v-if="isLogin" class="login_content">
      <p class="login_txt">登录</p>
      <div class="form_item">
        <span class="label_title">手机号</span>
        <el-input v-model="loginForm.phone" size="mini"></el-input>
      </div>
      <div v-if="!loginType" class="form_item">
        <span class="label_title">密码</span>
        <el-input type="password" v-model="loginForm.password" size="mini"></el-input>
      </div>
      <div v-else class="form_item msg_input">
        <span class="label_title">验证码</span>
        <el-input v-model="loginForm.verificationCode" size="mini"></el-input>
        <span class="send_msg">发送验证码</span>
      </div>
      <div class="btn_contain">
        <span @click="isLogin = false">注册</span>
        <el-button v-if="!loginType" @click="passwordLogin">登录</el-button>
        <el-button v-if="loginType" @click="codeLogin">登录</el-button>
        <span @click="changeLoginType">
          <!-- {{
            !loginType ? '验证码登录' : '密码登录'
          }} -->
        </span>
      </div>
    </div>
    <!-- 注册 -->
    <div v-else class="registry_content">
      <p class="registry_txt">
        <span @click="isLogin = true">返回登录</span>
        注册
      </p>
      <div class="login_form_contain">
        <el-form
          :model="registryForm"
          ref="registryForm"
          :rules="rules"
          >
          <!-- 姓名 -->
          <el-form-item
            prop="name"
            label="姓名">
            <el-input
              v-model="registryForm.name"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item
            prop="phone"
            label="手机号">
            <el-input
              v-model="registryForm.phone"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item
            prop="verificationCode"
            label="验证码">
            <el-input
              v-model="registryForm.verificationCode"
              size="mini"
              >
            </el-input>
            <span v-if="!showCount" @click="getRegistryCode" class="get_code">获取验证码</span>
            <span v-if="showCount" class="get_code">{{count}}</span>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item
            prop="password"
            label="密码">
            <el-input
              type="password"
              v-model="registryForm.password"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item
            prop="email"
            label="邮箱">
            <el-input
              v-model="registryForm.email"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 学校 -->
          <el-form-item
            prop="school"
            label="学校">
            <el-input
              v-model="registryForm.school"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 专业 -->
          <el-form-item
            prop="profession"
            label="专业">
            <el-input
              v-model="registryForm.profession"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 年级 -->
          <el-form-item
            prop="grade"
            label="年级">
            <el-input
              v-model="registryForm.grade"
              size="mini"
              >
            </el-input>
          </el-form-item>
          <!-- 备注 -->
          <el-form-item
            label="备注">
            <el-input
              v-model="registryForm.described"
              size="mini"
              >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn_contain">
        <el-button @click="submitRegistry" size="mini">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import bg from '@/assets/bg.png'
export default {
  data () {
    return {
      bg,
      showCount: false,
      count: 0,
      timer: null,
      // true: 登录  false: 注册
      isLogin: true,
      // false: 密码登录  true: 验证码登录
      loginType: false,
      loginForm: {
        phone: '',
        password: '',
        verificationCode: ''
      },
      registryForm: {
        name: '',
        phone: '',
        verificationCode: '',
        password: '',
        email: '',
        school: '',
        profession: '',
        grade: '',
        described: ''
      },
      rules: {
        name: [
          { required: true, message: '', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '', trigger: 'blur' }
        ],
        profession: [
          { required: true, message: '', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['login', 'POST_GET_CODE', 'POST_REGISTRY']),
    // 密码登录
    async passwordLogin () {
      const res = await this.login(this.loginForm)
      if (res.result === '0') {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data))
        this.$router.push('/moduleSelect')
      }
      console.log('密码登录', res)
    },
    codeLogin () {
      console.log('密码登录')
    },
    // 切换登录方式
    changeLoginType () {
      this.loginType = !this.loginType
    },
    // 获取注册验证码
    async getRegistryCode () {
      const res = await this.POST_GET_CODE({
        phone: this.registryForm.phone
      })
      if (res.result === '0' && res.data) {
        this.$message.success('发送成功')
        this.count = 60
        this.showCount = true
        this.timer = setInterval(() => {
          this.count--
          console.log(this.count, 111)
          if (this.count === 0) {
            clearInterval(this.timer)
            this.timer = null
            this.showCount = false
            this.count = 60
          }
        }, 1000)
      }
    },
    // 注册账号
    submitRegistry () {
      this.$refs.registryForm.validate(async (valid) => {
        if (valid) {
          const params = this.registryForm
          const res = await this.POST_REGISTRY(params)
          if (res.result === '0' && res.data) {
            this.$message.success('注册成功')
            location.reload()
          }
          console.log('通过', res)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login_container{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    .login_content {
      width: 400px;
      padding: 20px;

      box-shadow: 0 0 3px 3px #eee;
      border-radius: 8px;
      background-color: #fff;
      .login_txt {
        text-align: center;
        font-size: 18px;
      }
      .form_item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        margin-top: 20px;
        .label_title {
          width: 80px;
        }
        .send_msg {
          position: absolute;
          bottom: 5px;
          right: 40px;

          font-size: 12px;
          color: #409EFF;
          cursor: pointer;
        }
      }
      .btn_contain {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 30px;
        padding: 0 20px;
        span {
          font-size: 12px;
          color: #409EFF;
          cursor: pointer;
        }
      }
    }
    .registry_content {
      width: 400px;
      padding: 20px;

      box-shadow: 0 0 3px 3px #eee;
      border-radius: 8px;
      .registry_txt {
        position: relative;

        margin-bottom: 10px;

        text-align: center;
        font-size: 18px;
        span {
          position: absolute;
          left: 0;
          top: 5px;

          font-size: 12px;
          color: #409EFF;
          cursor: pointer;
        }
      }
    }
    .btn_contain {
      margin-top: 15px;
      text-align: center;
    }
  }
</style>

<style lang="scss">
  .el-input {
    width: 230px;
  }
  .msg_input {
    .el-input--mini .el-input__inner {
      padding-right: 80px;
    }
  }
  .login_form_contain {
    .el-form-item__label {
      width: 80px;
    }
    .el-form-item {
      position: relative;

      margin-bottom: 5px;
      .get_code {
        position: absolute;
        right: 60px;
        top: 2px;
        width: 60px;
        text-align: center;

        font-size: 12px;
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
  .el-form-item__error {
    display: none;
  }
</style>
