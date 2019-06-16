### Installation
Terminal:
```
npm install vue-fullpage-ssr

```


### Usage 
in nuxt.config.js
 ```
 plugins: [
    { src: '~/plugins/fullpage', ssr: false }
  ],
```
### example
```$xslt
  <div v-fullpage:myFullpage="options"></div>
```