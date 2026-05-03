# 思维碎片

> 记录技术学习与认知跃迁的个人博客

🔗 **线上地址**：[si-wei-sui-pian.vercel.app](https://si-wei-sui-pian.vercel.app)

_自动部署验证：2026-05-03_

---

## 栏目

| 栏目 | 说明 |
|------|------|
| **技术** | 编程、系统设计、工具链 |
| **认知** | 心智模型、深度工作、知识管理 |
| **摄影** | 审美提升、光影构图、器材思考 |

---

## 项目结构

```
blog/
├── index.html          # 首页（全部文章）
├── tech.html           # 技术分类页
├── cognition.html      # 认知分类页
├── photography.html    # 摄影分类页
├── about.html          # 关于页
├── 404.html            # 404 页
├── css/
│   └── style.css       # 全局样式（含深色模式、玻璃导航、TOC）
├── js/
│   ├── theme.js        # 主题切换（深色/浅色，持久化）
│   ├── toc.js          # 悬浮目录（自动提取 h2，IntersectionObserver）
│   └── utils.js        # 公共工具（返回顶部等）
└── posts/              # 所有文章 HTML
    ├── llm-thinking.html
    ├── mental-models.html
    ├── rust-ownership.html
    ├── deep-work.html
    ├── system-design.html
    ├── second-brain.html
    ├── seeing-light.html
    └── composition-notes.html
```

---

## 新增文章

1. 在 `posts/` 目录下复制任意一篇文章作为模板
2. 修改标题、日期、分类 tag、正文内容
3. 在对应分类页（`tech.html` / `cognition.html` / `photography.html`）和 `index.html` 添加文章卡片
4. `git add . && git commit -m "post: 文章标题" && git push`
5. Vercel 自动部署，约 30 秒后上线 ✅

---

## 技术栈

- **纯静态 HTML/CSS/JS**，零框架，零构建工具
- **部署**：Vercel（GitHub 自动触发）
- **评论**：Giscus（GitHub Discussions）
- **字体**：Noto Serif SC + JetBrains Mono（Google Fonts）
- **功能**：深色模式 · 玻璃导航 · 悬浮 TOC · 入场动画 · 移动端适配

---

## 本地预览

```bash
# 方式一：VS Code + Live Server 插件（推荐）
# 安装插件后右键 index.html → Open with Live Server

# 方式二：Python 内置服务器
cd blog
python3 -m http.server 8080
# 访问 http://localhost:8080
```

---

## 多端同步

```bash
# 开始工作前同步
git pull

# 完成后发布
git add .
git commit -m "post: 文章标题 / fix: 修复说明"
git push
```

© 2026 思维碎片
