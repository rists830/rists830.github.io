var posts=["public/content/RGB及十六进制颜色值码/","public/content/Centos源停止维护导致源失效解决方案/","public/content/Dole/","public/content/Hexo 使用教程/","public/content/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };