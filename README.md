# Random

以魔法挑选幸运序号之机器。代码公开项目。

## 搭建环境
先决`nodejs`、连通广袤世界之网络、`git`

[nodejs](https://nodejs.org/en)
[git](https://mirrors.bfsu.edu.cn/github-release/git-for-windows/git/LatestRelease/)

`winget`安装可能用
```powershell
winget install OpenJS.NodeJS
winget install Git.Git

```

`nodejs`装包管理器`npm`与同时。然其静默不用梯子，加变量于其。

```text
ELECTRON_GET_USE_PROXY
```
<img width="232" alt="image" src="https://github.com/acidec/random/assets/117443292/c80a85d0-7d4d-4a74-904a-4675b63a5508">

## 启
```powershell
git clone https://github.com/acidec/random.git
```
辑`.npmrc`，加

```
electron_mirror=https://npmmirror.com/mirrors/electron/
```
<img width="475" alt="image" src="https://github.com/acidec/random/assets/117443292/67f1ba1c-8350-442a-9a78-146989fa7ba2">


```powershell
cd random
npm install
```
如此把依赖 node modules 都装上

看没 error 即可，有就

```powershell
rmdir /s /q node_modules
npm install
```

确认在`random`目录下，然后

```powershell
npm run start
```

`Electron`启动一个窗口，是这个网页。

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

## 杂记

在`forge.config.js`改图标，或者直接把图标文件替换，一定要convert成.ico并且用一样的名字，大小推荐512x512

在`main.js`改启动长宽比和标题名。

余下可去 [Electron Documents](https://www.electronjs.org/docs/latest/) 见。

图标用稳定扩散画的，用的甜糖模型，在拥抱脸可能下。

咒语，需甘城なつき之LoRA模，很难复现，可能要开低显存优化（即使君卡显存很大
    
    white hair, cat ears, blue eyes, ahoge, white background, smile <lora:甘城なつき:1>
    Negative prompt: EasyNegative, cat
    Steps: 20, Sampler: Euler a, CFG scale: 7, Seed: 20060523, Size: 512x512, Model hash: f1cf66d5b1, Model: sweetSugarSyndrome_rev15, VAE hash: f921fb3f29, VAE: animevae.pt, Clip skip: 2, Lora hashes: "甘城なつき: a9e374b22924", Version: v1.7.0-RC-39-g39ebd568
    
