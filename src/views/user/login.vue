<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { userLogin } from '@/api/user/user'
import {mapActions, mapMutations} from 'vuex'


  //var zhiManager = (getzhiSDKInstance());
  //再调用load方法
  var zhiManager = (getzhiSDKInstance());
  

  export default {
    
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    mounted () {
      //设置显示
      zhiManager.on("load", function() {
          zhiManager.initBtnDOM();
      });
      //设置位置
      zhiManager.set('location',2);
      //设置颜色
      zhiManager.set('color','FF5151');
    },
    methods: {
      ...mapActions([
        'loginAction'
      ]),
      ...mapMutations({
      
      }),
      importError(){
        this.$notify({
          title: '提示',
          message: '请填写用户名或密码'
        });
      },
      loginError(){
        this.$notify({
          title: '提示',
          message: '请填写用户名或密码'
        });
      },
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let [username,password] = [this.form.username ,this.form.username];
            this.loginAction({username,password}).then(res => {
            this.$router.push("/home");
          })
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          //this.loginError();
          } else {
            this.importError();
            // this.dialogVisible = true;
            // return false;
          }
        });
      },
      handleClose(){

      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>