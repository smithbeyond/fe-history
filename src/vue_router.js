module.exports = function(router){
    //路由表
    router.map({
        //首页
        '/home':{
            name:'home',
            component: require('./app.vue')
        }

    });

    //默认List主页
    router.redirect({
        '/':"/home"
    });


    //注册路由切换前
    router.beforeEach(function (transition) {
        transition.next();

    });


    //注册路由切换后
    router.afterEach(function (transition) {
        //console.log('成功浏览到: ' + transition.to.path)
    });

};