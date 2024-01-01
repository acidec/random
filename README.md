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

`nodejs`装包管理器`npm`与同时。然其静默不用法术，故加变量于其。

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
如此 dependence node modules 取得

没 error 即行，若有则

```powershell
rmdir /s /q node_modules
npm install
```

确认处`random`目录下，后

```powershell
npm run start
```

`Electron`启动一个窗口，为此网页。

呐，run 之。

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

于`forge.config.js`置图标，或替图标文件，务必 convert 成 .ico 并且用相同之名，size 议512x512

于`main.js`置启动长宽比和标题名。

余下可 [Electron Documents](https://www.electronjs.org/docs/latest/) 见。

icon 自稳定扩散画，甜糖模，在拥抱脸可能下载。

咒记，需甘城なつき之LoRA模，很难复现，可能要开低显存优化（即使君卡显存很大
    
    white hair, cat ears, blue eyes, ahoge, white background, smile <lora:甘城なつき:1>
    Negative prompt: EasyNegative, cat
    Steps: 20, Sampler: Euler a, CFG scale: 7, Seed: 20060523, Size: 512x512, Model hash: f1cf66d5b1, Model: sweetSugarSyndrome_rev15, VAE hash: f921fb3f29, VAE: animevae.pt, Clip skip: 2, Lora hashes: "甘城なつき: a9e374b22924", Version: v1.7.0-RC-39-g39ebd568
    
