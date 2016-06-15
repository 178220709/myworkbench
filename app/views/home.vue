<template>
    <!--<div class="LoginDiv">-->
    <!--<span>授权码：</span>-->
    <!--<input class="OrderTextBox" type="text" v-model="code" @keyup.enter="checkClick">-->
    <!--<input type="button" value="验证" @click="checkClick">-->
    <!--</div>-->

    <div class="login-box" style="min-height: 565px;" id="divLogin">
        <div class="login-logo" style="color: white">
            <b>销售引擎</b>后台管理
        </div><!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <form>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Name" v-model="name">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" v-model="password"
                           @keyup.enter="checkClick">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                    </div><!-- /.col -->
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary btn-block btn-flat" @click="checkClick">Sign In
                        </button>
                    </div><!-- /.col -->
                </div>
            </form>
        </div><!-- /.login-box-body -->
    </div>


</template>

<script type="text/babel">
    import util from '../libs/util'
    export default {
        data (){
            return {
                code: "",
                name: "",
                password: ""
            }
        },
        methods: {
            checkClick(){
                localStorage.setItem("login.key", this.name + this.password)
                if (util.hasLogin()) {
                    $("#divTopContainer").show()
                    this.$route.router.go({name: 'dashboard'});
                } else {
                    alert("登录失败")
                }
            }
        },
        route: {
            data (transition){
                transition.next()
            }
        },
        ready(){
            $("#divTopContainer").show()
        }
    }
</script>

<style>

    /*.LoginDiv {*/
    /*text-align: center;*/
    /*margin: 50px 0;*/
    /*font-size: 30px;*/
    /*}*/

    /*.OrderTextBox {*/
    /*text-align: center;*/
    /*font-family: 'Arabic Typesetting', Arial, 微软雅黑;*/
    /*}*/

</style>
