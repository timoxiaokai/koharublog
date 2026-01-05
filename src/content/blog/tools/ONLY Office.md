---
title: "ONLY Office：不只是「Office」的在线协作新选择"
date: 2026-01-01
category: 软件推荐
tags: ["ONLY Office", "在线协作", "开源", "Office 替代品", "文档编辑"]
description: 深度体验 ONLY Office 的协作、开源与私有化部署优势，看它如何在 Google Docs、微软 365 之外，给出第三条道路。
---

> 如果你受够了「云锁定」，又想要「多人实时协作」，ONLY Office 可能是 2026 年最值得尝试的第三条道路。

---

## 1. 什么是 ONLY Office？

ONLY Office 由拉脱维亚公司 Ascensio System SIA 推出，是一款**开源、可私有化部署**的在线办公套件，核心包含：

| 组件                    | 功能                                       |
|-----------------------|------------------------------------------|
| **Document**          | 文字、表格、幻灯片三件套，兼容 OOXML（.docx/.xlsx/.pptx） |
| **Spreadsheet**       | 400+ 函数、数据透视表、条件格式、图表                    |
| **Presentation**      | 动画、母版、演讲者模式，支持导出 PDF                     |
| **PDF**               | 阅读、批注、表单填写，2025 年底新增轻度编辑                 |
| **Mail/CRM/Projects** | 邮件客户端、轻量 CRM、项目看板（Workspace 版）           |

---

## 2. 为什么选择它？

### 2.1 真正的「开源」
- AGPL v3 协议，代码在 [GitHub](https://github.com/ONLYOFFICE) 全量公开
- 可二次开发：前端 React、后端 .NET Core，API 文档齐全
- 无「功能阉割」——社区版与商业版差异只在「技术支持」与「并发规模」

### 2.2 私有化 = 数据主权
- 一键 Docker Compose，5 分钟完成本地部署
- 支持 S3、MinIO、WebDAV 等外部存储，轻松对接 NAS
- 端到端加密（AES-256）+ 私有证书，满足 GDPR、国密要求

### 2.3 多人协作体验
- 同屏 100+ 人实时编辑，光标、批注、版本对比三合一
- 内置「严格共同编辑」与「段落锁定」模式，避免「冲突提示」刷屏
- 与飞书、Slack、Teams 双向通知，@成员直接定位到段落

---

## 3. 5 分钟本地部署（Docker 版）

```bash
# 1. 克隆官方仓库
git clone https://github.com/ONLYOFFICE/Docker-CommunityServer
cd Docker-CommunityServer

# 2. 启动（含 MySQL、Document Server、Control Panel）
docker-compose up -d

# 3. 访问
open http://localhost:80
```

首次登录需设置管理员邮箱与密码，随后即可上传文档、邀请协作。

---

## 4. 与竞品横向对比

| 维度   | ONLY Office | Microsoft 365 | Google Workspace | 飞书文档       |
|------|-------------|---------------|------------------|------------|
| 开源   | ✅           | ❌             | ❌                | ❌          |
| 私有化  | ✅           | ❌             | ❌                | ❌          |
| 离线编辑 | ✅ 桌面客户端     | 需付费           | 需插件              | ❌          |
| 价格   | 社区版 0 元     | ￥60/人/月起      | $6/人/月起          | 免费版 50G 限额 |
| 函数数量 | 400+        | 500+          | 400+             | 200+       |
| 中文排版 | ✅ 纵向排版、首行缩进 | ✅             | ✅                | ✅          |

---

## 5. 2025 年新功能速览

1. **AI 助手**：接入本地私有化大模型（Llama-3-8B），支持「生成 PPT 大纲」「Excel 公式自动补全」
2. **手写批注**：iPad 端 Apple Pencil 压感识别，笔迹可转文本
3. **插件市场**：新增「语音转写」「OCR 表格识别」「LaTeX 公式」等 30+ 插件
4. **深色模式**：全端适配，跟随系统级切换

---

## 6. 适用场景清单

| 场景     | 推荐用法                        |
|--------|-----------------------------|
| 中小企业   | 私有化部署，节省 365 订阅费            |
| 学校/教育局 | 与 Moodle、Canvas 集成，作业在线批注   |
| 研发团队   | API 嵌入 GitLab、Jira，需求文档双向同步 |
| 个人极客   | NAS + ONLY Office，实现「个人云」   |
| 政府/军工  | 国密算法 + 内网隔离，等保 3 级方案        |

---

## 7. 快速上手技巧

1. **快捷键**  
   `Ctrl+.` 打开快速导航；`Ctrl+Shift+M` 一键翻译选段
2. **Markdown 互转**  
   安装「Writer → Markdown」插件，支持表格、公式、代码块无损转换
3. **Excel 批量填表**  
   使用「表单」功能，把列名设为占位符，一键生成批量 Word 通知书
4. **PPT 远程演示**  
   点击「启动演示」→ 生成二维码，观众手机实时同步翻页，无需投影

---

## 8. 结语

ONLY Office 不是简单的「又一个 Office」，它把「开源」「私有化」「多人协作」这三张牌同时打出，为厌倦云锁定的用户提供了真正可掌控的第三条道路。2026 年，如果你正在寻找 **可二次开发、可内网部署、又不怕突然「砍功能」** 的办公套件，给它 30 分钟，它或许会还你一份惊喜。

---

## 附录：相关链接

- [官网](https://www.onlyoffice.com/)
- [GitHub 主仓库](https://github.com/ONLYOFFICE/DocumentServer)
- [中文论坛](https://forum.onlyoffice.com/c/chinese/15)
- [Docker 镜像](https://hub.docker.com/r/onlyoffice/documentserver)

> 如果本文对你有帮助，欢迎 Star & 转发，让更多人发现 ONLY Office 的好。
