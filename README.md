### 原理：
使用[vue指令]([https://cn.vuejs.org/v2/api/#Vue-directive](https://cn.vuejs.org/v2/api/#Vue-directive)
)的方式,将[fullpage.js]([https://github.com/alvarotrigo/fullPage.js](https://github.com/alvarotrigo/fullPage.js)
)进行封装；使其可以与vue项目或者nuxt项目更优雅的结合。



### Installation
Terminal:
```
npm install vue-fullpage-ssr
```


### Usage 
* in Vue project:
```
import vFullpage from 'vue-fullpage-ssr/index'
Vue.use(vFullpage)
```
* in nuxt project:
需要创建 `plugins/fullpage.js` 文件：
```
import Vue from 'vue'
import fullpageDirective from 'vue-fullpage-ssr/index.js'

Vue.use(fullpageDirective)
```

然后在 `nuxt.config.js`
 ```
 plugins: [
    { src: '~/plugins/fullpage', ssr: false }
  ],
```
### 使用方式：
`v-fullpage:xxx='options'`
说明：options:必传
 xxx:非必需（xxx的作用即：对fullpage实列的引用,默认：myFullpage)
在组件中可以通过该实列去访问fullpage的方法。

### example
```
<template>
  <div>
  <div v-fullpage:myFullpage="options">
    ...
  </div>
  </div>
</template>
<script>
  export default {
   data(){
     return{
       options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        // 事件：
          afterLoad:afterLoad
            ....
             },
           }
       }
      methods: {
        afterLoad() {
          ...
        }，
      // 调用moveSectionDown方法：滚动到下一个section
       fullpageNext(){
        this.myFullpage.moveSectionDown（）
        }
      },
     mounted(){
     // this.myFullpage是fullpage的实列，可以通过该实列调用fullpage的方法
      console.log('myFullpage',this.myFullpage)
     }
    }
</script>
```
Methods
myFullpage：通过该实列可以条用fullpage的方法。