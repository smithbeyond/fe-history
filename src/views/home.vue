<template>
<div>
  <p>你好vue</p>
  <br/>
    <p class="name">{{name}}</p>
    {{logo}}
</div>
</template>

<script>
export default {
    data() {
        return {
        	 name: "这里是首页",
             logo: 'logo'
        }
    }
}
</script>

