var posts=["2025/03/21/RGB及十六进制颜色值码/","2025/03/21/Centos源停止维护导致源失效解决方案/","2025/03/04/Dole/","2025/02/22/Hexo 使用教程/","2025/02/22/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };