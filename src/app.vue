<style>
    .word-select, .word-normal:hover {
        border: 1px solid #1C90F3;
    }
    .word-normal {
        display: inline-block;
        margin: 2px 3px;
        top: 7px;
        right: 5px;
        text-align: center;
        font-size: 20px;
        border-radius: 20px;
        z-index: 30;
        color: #7f94a1;
        line-height: 23px;
        padding: 0 7px;
        transition: all .1s;
        letter-spacing: 1px;
        text-decoration: none;
    }
</style>
<template>
    <div>
        <a href="#" v-for="word in words" class="word-normal" :class="{'word-select': wordFlags[$index].flag}" v-on:click="selectWord($index)">
            <span>{{word}}</span>
        </a>
    </div>
</template>

<script>
    var $ = require('jquery');
    export default {
        data() {
            return {
                words: ['CSS', 'is', 'a', 'greate', 'tool', '.'],
                wordFlags: [
                    {flag: false},
                    {flag: false},
                    {flag: false},
                    {flag: false},
                    {flag: false},
                    {flag: false}
                ]
            }
        },
        methods: {
            selectWord: function(index) {
                var self = this
                var wordFlag = self.wordFlags[index];
                wordFlag.flag = !wordFlag.flag
            }
        }
    }
</script>