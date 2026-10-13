# IconHub — Cloudflare Pages 纯静态图标分发库

专为 App 图标、组件图标、品牌 Logo 与矢量资产设计的纯静态图床与分发平台。

---

## ✨ 核心资产

- **总收录图标**：1,408 款全球主流应用、编程语言、硬件芯片、云服务与社交平台
- **文件格式**：每款均包含高清无损矢量 `.svg` 与 512×512 透明底 `.png`（共 2,816 个图标文件）
- **自动检索**：提供 `icons.json` 多级索引（支持中文别名、官方译名、拼音与行业标签）
- **CORS 跨域**：内置 `_headers` 配置，支持任意外部网站直接引用，已开启全球边缘长缓存

---

## ⚙️ Cloudflare Pages 部署配置

将本仓库推送到 GitHub / GitLab 并连接至 Cloudflare Pages 时：

- **Framework preset**: `None`
- **Build command**: `(留空，无需任何构建命令)`
- **Build output directory**: `/` (根目录)

> 纯静态免构建，5~10 秒内极速发布至 Cloudflare 全球 Anycast CDN。

---

## 📄 开源协议

本项目遵循 [MIT License](LICENSE) 协议。
