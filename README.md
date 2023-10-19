# 抽号机

数学老师的任务。代码公开项目。

## 搭建环境
首先你得有`nodejs`、可用的网络（别用残废的China Mainland局域网）、`git`

装一个罢

[nodejs](https://nodejs.org/en)

也可选用`winget`安装
```powershell
winget install OpenJS.NodeJS
winget install Git.Git

```

当然`nodejs`会同时装包管理器`npm`。但是它默认不会用梯子，这几个变量加上。

注意`electron`那条是这个。
```text
ELECTRON_GET_USE_PROXY
```
<img width="232" alt="image" src="https://github.com/acidec/random/assets/117443292/c80a85d0-7d4d-4a74-904a-4675b63a5508">

如果你用`Clash`的话，端口就是和我一样的7890，不是的话看你代理软件的端口设置。

然后来个[Git](https://mirrors.bfsu.edu.cn/github-release/git-for-windows/git/LatestRelease/)

装好后，配置下`Git`

```powershell
git config --global user.name 名字，可以随便填
git config --global user.email 邮箱，要能用的，要是就看看代码也可以随便填
git config --global http.sslVerify false
```

## 跑
```powershell
git clone https://github.com/acidec/random.git
```
代码下来了

```powershell
cd random
npm install
```
这样把依赖node modules都装上

**这步建议梯子开全局代理**

看没**error**就行了，有就

```powershell
rmdir /s /q node_modules
npm install
```

差不多了，看看你是不是在`random`目录下，是的话就

```powershell
npm run start
```

这就会开一个`Electron`窗口，跑的就是这个网页。

呐，跑起来了。

## 结构

.gitignore -> 忽略一些构建生成和node modules，要不这几百M放Github上每次还得更新

forge.config.js -> 打包工具的依赖

index.html -> 网页

main.js -> 启动脚本

package(-lock).json -> npm的购物清单

script.js -> JavaScript代码

namelist.json -> new feature的名单，已打码（new feature暂时还未实现、、

css & fonts & js -> Bootstrap CSS

## 打包

如果你想打个和我一样的`zip`包，直接
```powershell
npm run make
```
`forge`会打个包，生成二进制

如果你想改的话，在`forge.config.js`改图标啥的，或者直接把我那个图标替换，一定要convert成.ico并且用一样的名字，大小推荐512x512

在`main.js`改启动长宽比和标题名。

剩下的可以去[Electron文档](https://www.electronjs.org/docs/latest/)看。

## 杂记

1.  图标用稳定扩散画的，用的QteaMix模型，在拥抱脸上能下。

    参数不写了，复现不了的，我这GA107M，和我另一张GA102的3080怎么跑都不能复现，而GA104和GA102出图就是能复现的

2.  构建后确实挺大的，电子包传统

3.  不一定会更新，但是可能加点新功能
