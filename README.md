# LaTeX Live Preview — 图灵完备版 v2

一个基于 MathJax 3 的 LaTeX 公式实时预览与导出工具。支持语法高亮编辑、Word 式快速编辑、语法参考表、预览图放大等丰富交互，以及图灵完备的预处理器。

## 功能特性

### 🎨 UI/UX 升级
- **视口适配布局**：页面严格等于浏览器渲染视口，无页面级滚动条
- **预览图点击放大**：点击预览区域弹出 Lightbox，支持滚轮缩放（50%–800%）+ 拖拽平移
- **按钮微动效**：hover 上浮 + 阴影，折叠面板动画过渡
- **美化滚动条**：WebKit 自定义滚动条样式

### ✏️ 编辑器增强
- **语法高亮**：实时高亮 LaTeX 命令（蓝）、括号（灰）、上标下标（橙）、注释（绿）
- **快速编辑工具栏**：类似 Word 公式编辑器，一键插入分数/根号/上下标/求和/积分/矩阵/括号/希腊字母
- **选中文本包裹**：选中内容后点按钮自动包裹

### 📖 语法参考表
- 10 大分类（希腊字母/数学符号/箭头/关系符/函数/括号/矩阵/重音/字体样式）
- 搜索过滤 + 点击插入
- 200+ 条 LaTeX 命令速查

### 🔤 字体自由选择（可导入）
- 14 种预设字体 + Google Fonts 加载 + URL 导入 + 拖拽上传

### 📐 扩展 LaTeX 支持
- 9 个 MathJax 宏包（ams/mhchem/cancel/color/braket/physics 等）

### 📝 自定义命令
- 可视化宏管理 + JSON 导入导出

### 🧠 图灵完备预处理器
- 变量/条件/循环/算术/字符串操作

## 项目结构

```
LeTexLivePreview/
├── index.html              # 主页面
├── README.md
├── css/
│   └── style.css           # 统一样式表（含所有模块 CSS）
├── js/
│   ├── main.js             # 全局状态 & 初始化
│   ├── render.js           # MathJax 渲染管道
│   ├── export.js           # PNG/SVG 导出 & 剪贴板
│   ├── syntax-highlight.js # 语法高亮编辑器
│   ├── quick-edit.js       # Word 式快速编辑工具栏
│   ├── latex-ref.js        # LaTeX 语法参考表
│   ├── preview-zoom.js     # 预览图放大模态框
│   ├── font-manager.js     # 字体管理
│   ├── macros.js           # 自定义宏命令
│   ├── preprocessor.js     # 图灵完备预处理器
│   └── ui.js               # UI 事件绑定
└── assets/
    └── fonts/              # 本地字体存放目录
```

## 使用方式

直接在浏览器中打开 `index.html` 即可使用，无需构建工具或服务器。

## License

MIT
