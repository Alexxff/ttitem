<template>
<div class='login'>
    <el-card class='login-card'>
        <div class=title>
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <el-form :model="ruleForm" :rules="rule" ref="loginForm">
            <el-form-item prop="mobile">
                <el-input v-model="ruleForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input v-model="ruleForm.code" style="width:65%" placeholder="请输入验证码"></el-input>
                <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
            <el-form-item prop="check">
                <el-checkbox v-model="ruleForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button @click="login" style="width:100%" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</div>
</template>

<script>
export default {
  data () {
    var func = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        return callback(new Error('您必须同意'))
      }
    }
    return {
      ruleForm: {
        mobile: '',
        code: '',
        check: false
      },
      rule: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码必须为6位' }
        ],
        check: [
          {
            // message: '您必须无条件被坑'
            validator: func
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOk => {
        if (isOk) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.ruleForm
          }).then((result) => {
            // console.log(data)
            // console.log(result.data)
            window.localStorage.setItem('user-info', JSON.stringify(result.data))
            this.$router.push('/home')
          })
          // .catch(() => {
          //   this.$message({
          //     message: '当前用户名或者密码错误',
          //     type: 'waring'
          //   })
          // })
        }
        // console.log('验证成功')

        // .catch((error) => {
        //   console.log(error)
        // })
      })
    },
    get () {
      console.log(JSON.parse(window.localStorage.getItem('usr-info')))
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="less" scoped>
.login{
    width:100%;
    height:100vh;
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width:420px;
        height:360px;
        .title{
            text-align: center;
            margin-bottom:30px;
            img{
                width: 200px;
                height: 45px;
            }
        }
    }
}

</style>
