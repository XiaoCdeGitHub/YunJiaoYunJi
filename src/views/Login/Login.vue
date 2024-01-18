<!--
 * 登录注册页面
 * @author: zsy
 * @since: 2024-01-17
 * Login.vue
-->
<template>
  <div class="container">
    <div class="bg">
      <div class="circle">
        <div class="form">
          <img src="@/assets/img/login/quxiao.png" alt="quxiao" class="quxiao">
          <div class="form-center">
            <div class="logo">
              <img src="@/assets/img/login/logo.png" alt="logo">
              <h5>YUNDING ACADEMY</h5>
            </div>
            <h1>登录 Log In</h1>
            <div class="StuId">
              <h3>学号 Student Id</h3>
              <input type="text" name="studentId" id="studentId" value="id">
              <img src="@/assets/img/login/学号.png" alt="StuId">
            </div>
            <div class="Name">
                <h3>姓名 Name</h3>
                <input type="text" name="name" id="name">
                <img src="@/assets/img/login/姓名.png" alt="Nm">
              </div>
              <div class="PWord">
                <h3>密码 Password</h3>
                <input type="password" name="password" id="password">
                <img src="@/assets/img/login/Password.png" alt="Pw">
              </div>
            <input type="button" value="确认" class="confirm" @click="login()">
            <h6>忘记密码？</h6>
          </div>
          <div class="form-right" @click="toSignUp()">
            <img src="@/assets/img/login/right.png" >
          </div>
        </div>
        <img src="@/assets/img/login/xiaoren1.png" alt="quxiao" class="xiaoren1">
        <img src="@/assets/img/login/xiaoren2.png" alt="quxiao" class="xiaoren2">
        <div class="footer"></div>
      </div>
      </div>
    </div>
</template>

<script setup>
  const router = useRouter()

const login = () => {
  router.push('/user')
}
const toSignUp = () => {
  setTimeout(() => {
    router.push('/signup')
},300)
}

</script>

<style scoped lang="less">
.bg{
  height:100vh;
  width:100%;
  background-color: #EFF4FF;
  // position: relative;
  display: flex;
  flex-direction: column;

  .circle{
    height:450px;
    width:450px;
    margin:auto;
    background-color: #EFF4FF;
    z-index:100;
    position: relative;

    .form{
      height:410px;
      width:350px;
      margin:0 auto;
      background-color: #ECEEEF;
      border-radius:20px ;
      box-shadow: 6px 6px 5px 5px #D7DDF8  ;
      //z-index:100;
      .form-center{
        width: 300px;
        height:80%;
        margin-left: auto;
        margin-right: auto;
        //background-color: yellow;
        padding-top: 10px;
        position: relative;

        .logo{
          img{
            width:30px;
            height:20px;
            margin-right:10px;
          }
          h5{
            padding-top: 3px;
            font-family:sans-serif;
          }
          display: flex;
          flex-direction: row;
          color:#294AC1;
          margin-bottom: 10px;
          //margin-top: 10px;
        }
        h1{
          color:#1F1467;
          font-family:sans-serif;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        h3{
          color:#6C6FA3;
          font-family:sans-serif;
          margin-bottom: 5px;

        }
        h6{
          text-align: center;
          color:#9393B9;
          //margin:auto 0;
          font-family:sans-serif;
        }

       .StuId{
        position: relative;
            input{
              border:none;
              width: 300px;
              height:35px;
              margin-top: 5px;
              margin-bottom: 5px;
              border-radius: 10px;
              border:solid 3px #6C6FA3;
              background-color: #ECEEEF;
              transition: transform 0.2s; /* 添加过渡效果 */
            }
            input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}

            img{
              width:35px;
              height: 25px;
              position: absolute;
              left:85%;
              top:54%;
            }
       }
       .Name{
        position: relative;
            input{
              border:none;
              width: 300px;
              height:35px;
              margin-top: 5px;
              margin-bottom: 5px;
              border-radius: 10px;
              border:solid 3px #6C6FA3;
              background-color: #ECEEEF;
              transition: transform 0.2s; /* 添加过渡效果 */

            }
            input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}
            img{
              width:20px;
              height: 25px;
              position: absolute;
              left:88%;
              top:52%;
            }
       }
       .PWord{
        position: relative;
            input{
              border:none;
              width: 300px;
              height:35px;
              margin-top: 5px;
              margin-bottom: 5px;
              border-radius: 10px;
              border:solid 3px #6C6FA3;
              background-color: #ECEEEF;
              transition: transform 0.2s; /* 添加过渡效果 */

            }
            input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}
            img{
              width:25px;
              height: 25px;
              position: absolute;
              left:88%;
              top:54%;
            }
       }

       .confirm{
          border:none;
          font-family:sans-serif;
          border:none;
          width: 300px;
          height:40px;
          margin-top: 5px;
          margin-bottom: 5px;
          border-radius: 10px;
          border:solid 3px #1F1467;
          background: #1F1467;
          color:white;
          font-weight: bold;
          font-size: 18px;
          padding-top: 5px;
          padding-bottom: 5px;
          letter-spacing: 2px;
          transition: transform 0.2s, box-shadow 0.2s; /* 添加过渡效果和阴影过渡 */
       }
       .confirm:active {
  /* 点击时的放大效果和抖动效果 */
  transform: scale(1.35);
  // animation: shake 0.2s infinite;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(5px);
  }100% {
    transform: translateX(0);
  }
}

      }
      .quxiao{
        position: absolute;
        width:13px;
        height:13px;
        margin-top: 15px;
        //left:5%;
        margin-left: 6px;
      }
      .form-right{
        position: absolute;
        top:-20px;
        left:320px;
        background-color: #3C66FD;
        height:100px;
        width:100px;
        border-radius: 20px;
        padding: 20px;
        transition: transform 0.4s, box-shadow 0.2s; /* 添加过渡效果和阴影过渡 */
        img{
          width: 60px;
          height: 60px;
        }
      }
      .form-right:active {
  /* 点击时的放大效果和抖动效果 */
  transform: scale(1.35);
  // animation: shake 0.2s infinite;
}
      }
      .xiaoren1{
        position:absolute;
        width:170px;
        height:230px;
        left:-40px;
        top:44%;
        z-index: -1;
      }
      .xiaoren2{
        position:absolute;
        width:150px;
        height:200px;
        left:355px;
        top:70px;
        z-index: -1;
      }
    .footer{
    height:30px;
    width:300px;
    margin:0 auto;
    background-color: #ECEEEF;
    border-radius: 0 0 20px 20px;
    box-shadow: #B4B9DB 0 5px 5px 5px;
  }
  }
}
</style>
