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
                <div @click="cancel()">
                  <img src="@/assets/img/signUp/关闭.png" alt="quxiao" class="quxiao" style="z-index:99" >
                </div>
                    <div class="form-center">
                        <div class="logo">
                            <img src="@/assets/img/signUp/logo.png" alt="logo">
                            <h5>YUNDING ACADEMY</h5>
                        </div>
                        <h1>注册 Sign Up Now</h1>
                        <div class="department">
                            <h3>部门 Department</h3>
                            <select>
                                <option value="none" selected></option>
                                <option value="kaifa">开发</option>
                                <option value="sheji">设计</option>
                                <option value="mishuchu">秘书处</option>
                            </select>
                            <img src="@/assets/img/signUp/xiala.png" alt="">
                        </div>
                        <div class="StuId">
                            <h3>学号 Student Id</h3>
                            <input type="text" name="studentId" id="studentId">
                            <img src="@/assets/img/signUp/学号.png" alt="StuId">
                        </div>
                        <div class="Name">
                            <h3>姓名 Name</h3>
                            <input type="text" name="name" id="name">
                            <img src="@/assets/img/signUp/姓名.png" alt="Nm">
                        </div>
                        <div class="PWord">
                            <h3>密码 Password</h3>
                            <input type="password" name="password" id="password">
                            <img src="@/assets/img/signUp/passWord.png" alt="Pw">
                        </div>
                        <input type="button" value="确认" class="confirm" @click="signUp()">
                        <h6>忘记密码？</h6>
                    </div>
                </div>
                <img src="@/assets/img/login/xiaoren1.png" alt="xiaoren1" class="xiaoren1">
                <img src="@/assets/img/login/xiaoren2.png" alt="xiaoren2" class="xiaoren2">
                <div class="footer"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
  const router = useRouter()

const cancel = () => {
  console.log(1);
  router.push('/login')
}
const signUp = () => {
  ElMessage.success('注册成功')
  router.push('/login')

}
</script>

<style scoped lang="less">
.bg {
    height: 100vh;
    width: 100%;
    background-color: #EFF4FF;
    // position: relative;
    display: flex;
    flex-direction: column;

    .circle {
        height: 520px;
        width: 450px;
        margin: auto;
        background-color: #EFF4FF;
        z-index: 100;

        .form {
            height: 490px;
            width: 400px;
            margin: 0 auto;
            background-color: #3C66FD;
            border-radius: 20px;
            //box-shadow: 6px 6px 5px 5px #D7DDF8;

            //z-index:100;
            .form-center {
                width: 300px;
                height: 80%;
                margin-left: auto;
                margin-right: auto;
                //background-color: yellow;
                padding-top: 10px;
                position: relative;

                .logo {
                    img {
                        width: 30px;
                        height: 20px;
                        margin-right: 10px;
                        // margin-top: 10px;
                    }

                    h5 {
                        padding-top: 3px;
                        font-family: sans-serif;
                    }

                    display: flex;
                    flex-direction: row;
                    color:white;
                    margin-bottom: 10px;
                    //margin-top: 10px;
                }

                h1 {
                    color: white;
                    font-family: sans-serif;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                h3 {
                    // color: #6C6FA3;
                    color: white;
                    font-family: sans-serif;
                    margin-bottom: 5px;

                }

                h6 {
                    // color: #9393B9;
                    color: white;

                    //margin:auto 0;
                    font-family: sans-serif;
                    position: absolute;
                    left: 42%;
                }

                .department{
                    position: relative;
                    select{
                        //border: solid 3px white;
                        padding-right: 20px;
                        width: 300px;
                        height: 38px;
                        -webkit-appearance:none;
                        -moz-appearance:none;
                        appearance:none;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        border: solid 3px white;
                        background-color: #3C66FD;
                        //background: url("@/assets/img/signUp/xiala.png") no-repeat scroll right center transparent;
                    }
                    img{
                        position: absolute;
                        left: 85%;
                        top: 56%;
                        height:15px;
                        width:33px;
                    }
                    //select::-ms-expand {
                    //    display: none;
                    //}
                }

                .StuId {
                    position: relative;

                    input {
                        border: none;
                        width: 300px;
                        height: 35px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        border: solid 3px white;
                        background-color: #3C66FD;
                        transition: transform 0.2s; /* 添加过渡效果 */
                    }
                    input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}

                    img {
                        width: 35px;
                        height: 23px;
                        position: absolute;
                        left: 85%;
                        top: 54%;
                    }
                }

                .Name {
                    position: relative;

                    input {
                        border: none;
                        width: 300px;
                        height: 35px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        border: solid 3px white;
                        background-color: #3C66FD;
                        transition: transform 0.2s; /* 添加过渡效果 */
                    }
                    input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}

                    img {
                        width: 20px;
                        height: 25px;
                        position: absolute;
                        left: 87%;
                        top: 52%;
                    }
                }

                .PWord {
                    position: relative;

                    input {
                        border: none;
                        width: 300px;
                        height: 35px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        border: solid 3px white;
                        background-color: #3C66FD;
                        transition: transform 0.2s; /* 添加过渡效果 */
                      }
                      input:focus {
  /* 点击时的放大效果 */
  transform: scale(1.05);
}

                    img {
                        width: 22px;
                        height: 22px;
                        position: absolute;
                        left: 87%;
                        top: 54%;
                    }
                }

                .confirm {
                    border: none;
                    font-family: sans-serif;
                    border: none;
                    width: 300px;
                    height: 40px;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    border-radius: 10px;
                    border: solid 3px white;
                    background: white;
                    color: #3C66FD;
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

            .quxiao {
                position: absolute;
                width: 30px;
                height: 30px;
                margin-top: 15px;
                left:58%;
                margin-left: 6px;
            }

        }

        .xiaoren1 {
            position: absolute;
            width: 200px;
            height: 260px;
            left: 330px;
            top: 44%;
            z-index: -1;
        }

        .xiaoren2 {
            position: absolute;
            width: 140px;
            height: 200px;
            left: 780px;
            top: 80px;
            z-index: -1;
        }

        .footer {
            height: 30px;
            width: 300px;
            margin: 0 auto;
            background-color: #ECEEEF;
            border-radius: 0 0 20px 20px;
            box-shadow: #C5C8E2 0 5px 5px 5px;
        }
    }
}</style>
