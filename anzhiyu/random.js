var posts=["undefined/视频测试/","undefined/EasyTier/","undefined/Markdown语法/","undefined/提问的智慧/","undefined/RGB及十六进制颜色值码/","undefined/Centos源停止维护导致源失效解决方案/","undefined/Dole/","undefined/Hexo 使用教程/","undefined/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };