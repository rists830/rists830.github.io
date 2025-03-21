var posts=["undefined/content/RGB及十六进制颜色值码/","undefined/content/Centos源停止维护导致源失效解决方案/","undefined/content/Dole/","undefined/content/Hexo 使用教程/","undefined/content/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };