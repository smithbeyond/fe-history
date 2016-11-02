<template>
    <div>
        <div>这里是app.vue</div>
        <div>{{msg}}</div>
        <button v-on:click="show">点击显示</button>
        <br>
        {{showText}}
        <br><br><br>
        <button v-on:click="showAgain">点击显示222</button>
        <br>
        {{showTextAgain}}
    </div>
</template>

<script>
    var $ = require('jquery');
    export default {
        data() {
            return {
                 msg: "vue生效",
                 showText: 'showText',
                 showTextAgain: 'showTextAgain'
            }
        },
        methods: {
            show: function() {
                var self = this;
                $.ajax({
                    url: '/api/show.ajax',
                    data: {},
                    // dataType:'json',
                    type: 'POST',
                    cache: false,
                    async: true,
                    success: function(data) {
                        console.log(data);
                        self.showText = data;
                    }
                });
            },

            showAgain: function() {
                var self = this;
                var params = {
                    // name: 'guohafieng'
                }
                var ok = $.ajax('/api/show.ajax', params).then(
                    function (res) {
                        return {
                            status: 1,
                            data: res.data,
                            errorMsg: res.errorMsg
                        }
                    },
                    function (res) {
                        return {
                            status: res.status,
                            errorMsg: res.errorMsg
                        }
                    }
                ).always(function(data) {
                    self.showTextAgain = data.data
                })
            }
        }
    }
</script>