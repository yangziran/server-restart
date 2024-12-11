# server-restart

用于重启阿里云轻量应用服务器，基于Node.js应用镜像。

## 安装
- 将项目上传到服务器
- 安装依赖包：`npm install`

## 配置
- 默认监听端口为`3000`，如需要修改，修改`server.js`文件中，`port`对应的参数
- 修改`server.js`文件中，`req.query.x`对应的参数
- 修改`start.sh`文件中，`${pwd}`对应的参数为真实服务器目录

## 启动
- 启动服务：`sh start.sh`
- 添加开机启动，在`/etc/rc.d/rc.local`中添加`sh /data/server-restart/start.sh`

## 访问
- 服务器状态
`http://8.219.63.73:3000/restart`
- 服务器重启
`http://8.219.63.73:3000/restart?x=KsqrJ$xOgCCiifJET!ZxwnEgxnF!nNZrZ_uxZFRDMtC`