# 我的博客

基于 VitePress 构建的个人博客，自动部署到 GitHub Pages。

## 📖 关于

这是一个使用 VitePress 搭建的个人博客，用于记录技术学习和分享实践经验。

## 🚀 特性

- ⚡️ 基于 Vite，构建速度快
- 📝 使用 Markdown 编写文章
- 🎨 简洁美观的默认主题
- 🔍 内置全文搜索
- 📱 响应式设计，支持移动端
- 🤖 GitHub Actions 自动部署

## 📦 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自动化

## 🛠️ 本地开发

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run docs:dev
\`\`\`

访问 http://localhost:5173 查看博客。

### 构建生产版本

\`\`\`bash
npm run docs:build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run docs:preview
\`\`\`

## 📝 写作指南

1. 在 \`docs/posts/\` 目录下创建新的 Markdown 文件
2. 在文件中编写你的文章内容
3. 在 \`docs/.vitepress/config.mts\` 中更新侧边栏配置
4. 提交并推送到 main 分支，GitHub Actions 会自动部署

## 🚢 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

当你推送代码到 \`main\` 分支时，GitHub Actions 会自动：

1. 安装依赖
2. 构建静态站点
3. 部署到 GitHub Pages

### 配置 GitHub Pages

1. 进入仓库的 Settings > Pages
2. 在 "Build and deployment" 下选择 "Source"
3. 选择 "GitHub Actions"

部署完成后，你的博客将在 \`https://<username>.github.io/myblog/\` 访问。

## 📄 许可

MIT License

---

**Enjoy blogging! ✨**
