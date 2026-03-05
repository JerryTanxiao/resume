# 谭杰的网页版简历部署指南

项目位于：`D:\work\work\web-resume`

## 如何预览
1. 进入目录：`cd D:\work\work\web-resume`
2. 运行：`npm run dev`
3. 在浏览器打开显示的本地链接。

## 如何发布到 GitHub Pages
我们建议使用 GitHub Actions 自动部署，或者手动上传 `dist` 目录：

### 方法 A: 手动上传
1. 在 GitHub 创建新仓库 `resume`。
2. 运行 `npm run build` 生成 `dist` 文件夹。
3. 将 `dist` 文件夹内的所有文件上传到仓库根目录。
4. 在仓库 Settings -> Pages 中开启服务。

### 方法 B: 命令行（推荐）
```bash
git init
git add .
git commit -m "feat: init web resume"
# 替换为你自己的仓库地址
git remote add origin https://github.com/你的用户名/resume.git
git push -u origin main
```

## 设计亮点
- **深色科技风**: 采用 #030303 背景与霓虹青/紫配色。
- **玻璃拟态 (Glassmorphism)**: 所有的项目卡片均带有模糊背景效果。
- **3D 交互**: 英雄区拥有一个实时旋转的 3D 技术方块。
- **动态光效**: 背景拥有跟随鼠标移动的流光效果。
