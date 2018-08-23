# static-server

经常会遇到在html里编写一些Demo，但是会遇到一些问题：
- 做请求的时候需要从服务端请求
- 一些外链兼容http和https使用`//`写法的时候会自动链到`file://`前缀

所以用这是express搭建的访问静态文件的服务
