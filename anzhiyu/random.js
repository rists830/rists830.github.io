var posts=["dataRGB及十六进制颜色值码/","dataCentos源停止维护导致源失效解决方案/","dataDole/","dataHexo 使用教程/","data这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };