/**
 * AI 视频竞品每日功能监控 —— 数据文件
 * 数据驱动：每日新增更新条目只需在下方 updates 数组顶部追加一条记录，无需改动 index.html。
 * 条目字段：competitor(竞品id) / date(YYYY-MM-DD) / title / details(功能点列表) / type(新功能|模型更新|产品升级|修复) / source / sourceName
 * 竞品 id：deevid / tapnow / libtv / higgsfield / xyq / runway / pika / kling / luma / vidu / jimeng / hailuo / sora / pixverse / runninghub / openart / updream / oiioii / rhtv / elser / pexo / shotlab / ltxstudio / skyreels / storyboarder
 */
window.COMPETITOR_DATA = {
  "site": {
    "title": "AI 视频竞品每日功能监控",
    "subtitle": "产品视角 · 每日追踪 DeeVid / TapNow / LibTV / Higgsfield / 小云雀AI / Runway / Pika / 可灵Kling / Luma / Vidu / 即梦AI / 海螺AI / Sora / PixVerse / RunningHub / RHTV / OpenArt / Updream / OiiOii / Elser.AI / Pexo / Shotlab / LTX Studio / SkyReels / Storyboarder 的功能动态",
    "updated": "2026-09-26"
  },
  "competitors": [
    {
      "id": "deevid",
      "name": "DeeVid",
      "url": "https://deevid.ai/",
      "tagline": "一站式 AI 导演平台：从文本、照片、视频到音频，全格式即提示词，覆盖视频、图像、数字人、语音与音乐创作，Agent + Canvas + Editor 一条龙。"
    },
    {
      "id": "tapnow",
      "name": "TapNow",
      "url": "https://www.tapnow.ai/",
      "tagline": "影视级全链路 AI 视觉创作引擎：以 Tapflow 节点式无限画布为核心，集成多模型，打通创意脚本、分镜、图像、视频、配音字幕到成片导出的完整工作流。"
    },
    {
      "id": "libtv",
      "name": "LibTV",
      "url": "https://www.liblib.art/",
      "tagline": "LiblibAI（哩布哩布AI）推出的一站式 AI 影视创作平台：以「无限画布 + 节点式工作流」为基础，面向 AI 短剧与专业影视团队，剧本、分镜、镜头、剪辑全环节结构化。"
    },
    {
      "id": "higgsfield",
      "name": "Higgsfield",
      "url": "https://higgsfield.ai/",
      "tagline": "全链路 AI 视频生成平台：以 Cinema Studio 为核心，整合 30+ 视频/图像模型，面向影视级广告与爆款短视频创作，从提示词到成片仅需一键。"
    },
    {
      "id": "xyq",
      "name": "小云雀AI",
      "url": "https://xyq.jianying.com/",
      "tagline": "抖音（字节跳动剪映团队）旗下的内容创作 Agent：围绕「一起创作好故事」，覆盖剧本、角色、场景、调度、后期全链路，从生成工具升级为专业创作平台。"
    },
    {
      "id": "runway",
      "name": "Runway",
      "url": "https://runway.com/",
      "tagline": "全栈 AI 视频创作平台：Gen-4.5 原生 4K 与原生音频、Aleph 2.0 视频编辑、Agent 2.0 全流程制作管线，从提示词到成片的一体化生产平台。"
    },
    {
      "id": "pika",
      "name": "Pika",
      "url": "https://pika.art/",
      "tagline": "面向创作者的 AI 创意平台：多模型聚合（Seedance 2.5 / Pika 2.5 / GPT Image 2.5 等），PikaStream 实时视频聊天 + Pikaffects 创意特效，主打快速、低价、效果丰富的社交视频。"
    },
    {
      "id": "kling",
      "name": "可灵 Kling",
      "url": "https://klingai.com/",
      "tagline": "快手旗下 AI 视频与图片生成平台：可灵 3.0 系列 All-in-One 全模态模型，原生 4K 直出、动作控制、多语言方言原生音频，重塑 AI 叙事标准。"
    },
    {
      "id": "luma",
      "name": "Luma Dream Machine",
      "url": "https://lumalabs.ai/dream-machine",
      "tagline": "物理级 AI 视频生成平台：Ray 系列模型原生 1080p/4K、3D 一致性与真实物理模拟，被称为「摄影师的偏爱」，面向独立电影人、游戏开发者与高端广告。"
    },
    {
      "id": "vidu",
      "name": "Vidu",
      "url": "https://www.vidu.com/",
      "tagline": "生数科技旗下 AI 视频平台：Q3 首个 16 秒原生音视频模型、S1/S2 实时交互模型，从「生成一段内容」迈向「持续互动」的实时视频生成。"
    },
    {
      "id": "jimeng",
      "name": "即梦AI",
      "url": "https://jimeng.jianying.com/",
      "tagline": "字节跳动旗下 AI 创作平台：Seedance 2.5 原生直出 30 秒视频、50 个全模态参考素材、精准时间戳控制，Maya/Blender 插件直连影视工业流程。"
    },
    {
      "id": "hailuo",
      "name": "海螺AI (MiniMax Hailuo)",
      "url": "https://hailuoai.com/",
      "tagline": "MiniMax 旗下全模态视频生成：H3（海螺 3.0）原生 2K + 一次生成声画同步、Omni-Reference 系统、开源权重，从画面到声音单次完成。"
    },
    {
      "id": "sora",
      "name": "Sora (OpenAI)",
      "url": "https://sora.com/",
      "tagline": "OpenAI 视频生成模型：Sora 2 物理更精准、更真实、更可控，同步对白与音效，融入 ChatGPT 生态，成为 AI 视频领域的标杆之一。"
    },
    {
      "id": "pixverse",
      "name": "PixVerse",
      "url": "https://pixverse.ai/",
      "tagline": "全球 AI 视频生成平台：V6 电影级镜头控制、原生音频与多镜头引擎，从创作工具升级为专业视频制作平台，CLI 支持开发者与智能体工作流。"
    },
    {
      "id": "runninghub",
      "name": "RunningHub",
      "url": "https://www.runninghub.cn/",
      "tagline": "海马云旗下原生 AI 智能体驱动的内容创作平台：中国最大 ComfyUI 云平台升级为全能创作平台，无限画布 + 模型/工作流/应用 API，聚合 Seedance 2.5、MiniMax H3、Wan 3.0 等满血模型。"
    },
    {
      "id": "openart",
      "name": "OpenArt",
      "url": "https://openart.ai/",
      "tagline": "AI Creator Studio：集图像与视频生成、编辑于一体，内置 Smart Shot、Dub Video、Lip-Sync、VFX 等创作工具，聚合 Seedance 2.5、GPT Image 2.5、Flux 3 等模型。"
    },
    {
      "id": "updream",
      "name": "Updream",
      "url": "https://www.updream.cn/",
      "tagline": "AI 视频创作助手：画布式创作 + 官方技能体系，覆盖剧本策划、分镜设计、美术资产与 Seedance 2.5 提示词优化，Previs Studio 3D 预演工作流直连主流视频模型。"
    },
    {
      "id": "oiioii",
      "name": "OiiOii",
      "url": "https://www.oiioii.tv/",
      "tagline": "专业动画创作 Agent 平台（.ai / .tv 双域名）：艺术总监、编剧、角色设计师等 7 大智能体模拟专业团队全流程协作，智能画布 + 拉片复刻 + Skill 库，零基础做动画。"
    },
    {
      "id": "rhtv",
      "name": "RHTV",
      "url": "https://www.runninghub.cn/",
      "tagline": "RunningHub 原生 AI 智能体全能内容创作平台：无限画布内嵌原生智能体，自然语言驱动脚本、分镜到成片全流程，节点透明可控，全量接入 RunningHub 生态模型与节点。"
    },
    {
      "id": "elser",
      "name": "Elser.AI",
      "url": "https://www.elser.ai/",
      "tagline": "多模型 AI 视频生成平台：聚合 Seedance 2 Fast、Veo 3.1、Kling 等主流视频模型，支持 7 层提示词公式与多语言口型同步，面向快速迭代与量产内容管线。"
    },
    {
      "id": "pexo",
      "name": "Pexo",
      "url": "https://pexo.ai/",
      "tagline": "AI Video Agent：以对话方式把想法变成可发布视频，支持文本/图片/URL/音频/脚本多入口，智能路由 Midjourney/Flux 与 10+ 视频模型，自动完成配音、配乐与成片。"
    },
    {
      "id": "shotlab",
      "name": "Shotlab",
      "url": "https://aigc.xinpianchang.com/",
      "tagline": "新片场旗下 AI 创作平台：AI 视频/图片/音乐一站式创作，全面接入 Seedance 2.5（30 秒原生直出、50 全模态素材），面向短剧、电商与影视专业创作场景。"
    },
    {
      "id": "ltxstudio",
      "name": "LTX Studio",
      "url": "https://ltx.studio/",
      "tagline": "Lightricks 旗下电影级 AI 创作平台：LTX-2.5 基础模型 4K 原生长视频，Canvas 协作画布 + Flows 节点式工作流 + Video to Video 控制，面向专业影视制作。"
    },
    {
      "id": "skyreels",
      "name": "SkyReels",
      "url": "https://www.skyreels.ai/",
      "tagline": "昆仑万维 AI 视频平台：SkyReels-V4 音画一体双流架构 + 全模态强化学习，Artificial Analysis 带音频文生/图生视频榜单全球第一，支持数字人、多语言与 Omni Reference。"
    },
    {
      "id": "storyboarder",
      "name": "Storyboarder",
      "url": "https://storyboarder.ai/",
      "tagline": "AI 故事板生成器：从剧本到分镜、镜头列表、动画预览（Animatic）与 Pitch Deck 全流程自动生成，3D Camera Angle Control 精准控制机位。"
    }
  ],
  "updates": [
    {
      "competitor": "kling",
      "date": "2026-09-26",
      "title": "可灵 Kling 上线团队工作区（Team Features）与桌面版 App",
      "details": [
        "全新团队工作区：无缝创意接力，个人工作区积分可一键转移至团队工作区，无需文件下载传输",
        "团队资产库三层结构（我的/共享/成员资产），创作资产与元素资产一键导入共享；角色权限管理（Owner/Admin/Collaborator，查看/编辑/删除分级）",
        "全新桌面版 App（Win/Mac）发布：一键启动、突破浏览器内存限制，团队数据与创意资产云端同步",
        "跨空间资产管理升级：积分、创作资产、元素资产从个人工作区一键迁移，助力团队复用好内容"
      ],
      "type": "产品升级",
      "source": "https://app.klingai.com/global/release-notes/v3c5osl0fp",
      "sourceName": "可灵AI 官方 Release Notes"
    },
    {
      "competitor": "kling",
      "date": "2026-09-25",
      "title": "Kling 4.0 泄露传闻：30 秒单次生成与实验性 2 分钟模式（未获官方确认）",
      "details": [
        "Discord 开发者模式泄露（Kol Tregaskes 9/24 披露）：Kling 4.0 Preview / 4.0 Flash / Image 4.0 正在准备中，快手官方未确认，属传闻",
        "泄露规格：单次生成最长 30 秒（现为 15 秒）、60 秒延长模式、实验性 120 秒长视频模式（1080p）；Omni Reference 预算提升至 15 个元素、支持最多 3 个语音参考",
        "Kling Image 4.0 传闻支持 1-9 张图像批量生成（最高 4K，或 8K）；Preview/Flash 命名暗示质量与速度双变体路线延续 3.0 代产品语言"
      ],
      "type": "模型更新",
      "source": "https://www.frontiernews.ai/news/article/kling-40-leak-hints-at-30-second-videos-and-experi-2355c08b",
      "sourceName": "FrontierNews"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-23",
      "title": "Higgsfield for Blender 插件发布：3D 视口内直接生成可编辑场景、网格与骨骼",
      "details": [
        "面向 Blender 5.1+ 的官方插件（Win/macOS），以浮动工具栏覆盖 3D 视口，内置 Scene Builder、3D Model、Character Animation、Image、Video、Camera、Asset 七大功能区",
        "生成结果返回 Blender 原生可编辑数据：Scene Builder 搭建对象/布局/灯光，3D Model 将带材质网格放入 3D Cursor，Character Animation 返回带权重骨骼与时间线关键帧的角色",
        "支持 MCP 桥接：AI Agent 可通过文档化端点直接访问与修改打开的工程；生成在 Higgsfield 云端执行，需账户、网络与积分"
      ],
      "type": "新功能",
      "source": "https://www.streamingmeme.com/articles/higgsfield-for-blender-launches-cloud-ai-tools-for-editable-3d-assets",
      "sourceName": "Streaming Meme"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-24",
      "title": "Higgsfield 年化收入突破 10 亿美元：推出 2000 万美元 API 现金返还计划",
      "details": [
        "18 个月达成年化收入 $1B（较 2025 年 9 月增长 20 倍），订阅收入占比超 60%，全球用户超 3000 万",
        "企业采用 6 月以来增长 10 倍，服务 Fortune 500 组织",
        "API 现金返还：9 月 30 日前新客户享 100% 费用返还，覆盖 Seedance 2.5 / Kling 3.0 / MiniMax H3 等模型，总池 $20M"
      ],
      "type": "产品升级",
      "source": "https://www.bottlerocketcontent.com/higgsfield-1-billion-run-rate-cashback",
      "sourceName": "Bottle Rocket Content"
    },
    {
      "competitor": "runway",
      "date": "2026-09-23",
      "title": "DaVinci Resolve Plugin 上线：剪辑软件内直接调用 Runway",
      "details": [
        "Runway 直接内嵌 DaVinci Resolve，无需切换标签页即可在现有剪辑中使用 Runway 工具",
        "面向付费计划用户开放，生成与编辑工作流无缝衔接"
      ],
      "type": "新功能",
      "source": "https://runway.com/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-23",
      "title": "Runway MCP 上线 Cursor Marketplace",
      "details": [
        "Runway MCP 现可在 Cursor 应用市场安装，将 Runway 生成能力直接接入 Cursor 工作流",
        "所有计划用户可用"
      ],
      "type": "产品升级",
      "source": "https://runway.com/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "pixverse",
      "date": "2026-09-22",
      "title": "PixVerse CLI 1.4.5 / 1.4.6：Canvas 布局自动整理与后端校验优化",
      "details": [
        "1.4.5：新增 canvas arrange 自动整理并保存整个 Canvas 项目的节点布局（纯 JSON 输出）；15 个项目级 Canvas 操作支持位置型 project ID 并保留 --project-id 兼容",
        "1.4.6：移除本地 music 提示词/歌词长度限制与 voice 文本长度限制，改由后端统一校验并透传错误",
        "CLI 与官网同模型同参数（V6 / C1 / Seedance 2.5 / MiniMax H3 等），面向 AI Agent 与开发者自动化工作流"
      ],
      "type": "产品升级",
      "source": "https://yarnpkg.com/en/package/pixverse",
      "sourceName": "PixVerse CLI Changelog"
    },
    {
      "competitor": "hailuo",
      "date": "2026-09-14",
      "title": "H3 开源生态更新：FastH3 / Sol-H3 / VDN / PDD / LightX2V",
      "details": [
        "FastH3（FastVideo、Nuva Lab、NVIDIA）：4 步蒸馏，支持 DGX Spark 与 Apple Silicon 本地运行",
        "Sol-H3（NVIDIA SANA 团队）：768p 视频+音频 15 秒，8×B300 上约 6.6 秒生成",
        "VDN（OpenVDN）：注意力重设计加速推理，权重与训练/推理代码开源；PDD（Alibaba PAI）8 步 LoRA 蒸馏并支持 ComfyUI",
        "LightX2V：4/8 步 Turbo LoRAs，覆盖文/图/参考条件视频+音频工作流"
      ],
      "type": "模型更新",
      "source": "https://www.vibeleaderboard.ai/intel/b240d3ef-6c01-4960-9fe2-354368bbac25",
      "sourceName": "VibeLeaderboard"
    },
    {
      "competitor": "kling",
      "date": "2026-09-11",
      "title": "Kling AI 3.0 平台发布：AI Director 范式，原生 4K 60fps 多镜头序列生成",
      "details": [
        "原生 4K（3840×2160）60fps、16-bit HDR，无上采样，单次最长 15 秒",
        "Multi-Shot AI Director：单次生成最多 6 个连接镜头，角色与环境跨镜头一致",
        "Elements 角色锁定：最多 4 张参考图锁定视觉身份，支持 3+ 多角色同框；Motion Control AI 提供 Curve Dolly 相机路径、多主体独立轨迹、相机抖动与运动笔刷",
        "5 语言口型同步（英/中/日/韩/西，含美式/英式/印度口音），支持多语混说与最多 3 说话人",
        "统一多模态视觉语言（MVL）架构，文生视频/图生视频/首尾帧插值；V3 电影真实感与 O3 Omni（48kHz 音频引擎、35% 更快推理）双变体"
      ],
      "type": "模型更新",
      "source": "https://usatoday.com/press-release/story/43054/kling-ai-launches-kling-3-0-kuaishous-ai-director-platform-delivers-native-4k-60fps-video-with-multi-shot-storyboarding-motion-control-and-5-language-lip-sync",
      "sourceName": "USA Today 新闻稿"
    },
    {
      "competitor": "openart",
      "date": "2026-09-24",
      "title": "OpenArt 官网上新：Dub Video 多语言配音、Seedance 2.5 逐帧编辑、GPT Image 2.5 上线",
      "details": [
        "Dub Video：一键将视频配音成 10 种语言，保留口型同步",
        "Seedance 2.5：30 秒视频原生直出 + 逐帧级编辑，细节更丰富",
        "GPT Image 2.5 智能创建与编辑上线；Flux 3 视频限免至 10 月 31 日；OpenArt Ad Awards 广告创作奖 5 万美元奖金池"
      ],
      "type": "新功能",
      "source": "https://openart.ai/",
      "sourceName": "OpenArt 官网"
    },
    {
      "competitor": "updream",
      "date": "2026-09-24",
      "title": "Updream 预演台 2.0 更新：一键生成 3D 场景建模，Seedance 2.0 Fast 限时 5 折",
      "details": [
        "预演台 2.0：无需会员一键生成 3D 场景建模，直连 Seedance 2.5 等模型渲染",
        "Seedance 2.0 Fast 限时 5 折低至 0.07 元/秒；特约导演计划上线，提交作品得积分奖励",
        "官方技能体系持续扩充：剧本策划、分镜光影设计、人物多视角生成、sd2.5 提示词优化等"
      ],
      "type": "产品升级",
      "source": "https://www.updream.cn/",
      "sourceName": "Updream 官网"
    },
    {
      "competitor": "storyboarder",
      "date": "2026-09-24",
      "title": "Storyboarder Video 2.0 上线：新增 3D Camera Angle Control 机位控制",
      "details": [
        "Video 2.0 新功能：3D 摄像机角度工具，为任意镜头找到精确机位，无需重拍",
        "完整流水线：上传剧本自动生成镜头列表、分镜、Animatic（带音频）与 Pitch Deck",
        "角色/场景/道具跨镜头一致性锁定，一次输入产出全套交付物"
      ],
      "type": "新功能",
      "source": "https://storyboarder.ai/",
      "sourceName": "Storyboarder 官网"
    },
    {
      "competitor": "elser",
      "date": "2026-09-24",
      "title": "Elser.AI 上线 Veo 3.1：原生音画同步 + 角色一致性 + 多场景合成",
      "details": [
        "Veo 3.1 登录 Elser AI：一次推理生成画面与同步音频，角色身份跨场景保持一致",
        "Seedance 2 Fast 影片生成模型：速度优化版，8+ 语言音素级口型同步",
        "支持 7 层提示词公式（机位/主体/动作/环境/光影/风格/音频），3 张参考图锁定外观"
      ],
      "type": "模型更新",
      "source": "https://www.elser.ai/",
      "sourceName": "Elser.AI 官网"
    },
    {
      "competitor": "rhtv",
      "date": "2026-09-08",
      "title": "RHTV 长内容创作能力升级：Blender 白模预演 + 逐秒抽帧修改 + SkillHub",
      "details": [
        "RHTV 无限画布可通过 Blender 插件接入白模预演，逐秒抽帧进行精准画面修改",
        "SkillHub 汇集「5 分钟长视频导演」「科幻镜场」等专业 Skill，快速调用长内容制作能力",
        "配合 RunningHub 全球 AIGC 长片创作大赛，作为长片工作台支撑 90 分钟级影视创作"
      ],
      "type": "新功能",
      "source": "https://www.runninghub.cn/",
      "sourceName": "RunningHub 官网"
    },
    {
      "competitor": "runninghub",
      "date": "2026-09-08",
      "title": "RunningHub 启动全球 AIGC 长片创作大赛：联动华语科幻星云奖，奖励池 550 万元",
      "details": [
        "联动第十七届华语科幻星云奖、金瞳奖，设置科幻/微光/品牌三个片场，总奖励 550 万元",
        "精选 10 部科幻文学作品开放限时免费改编授权，重点关注 90 分钟及以上电影与长剧",
        "获奖作品联动产业资源提供内容孵化、制作支持、展映与发行对接全链路扶持"
      ],
      "type": "产品升级",
      "source": "https://www.runninghub.cn/",
      "sourceName": "RunningHub 官网"
    },
    {
      "competitor": "pexo",
      "date": "2026-09-06",
      "title": "Pexo 2026 发布 AI Video Agent：静态图一键转带旁白视频 + 2D 动画引擎",
      "details": [
        "AI Video Agent：自然语言直接生成 2D 动画视频，无需骨骼绑定与关键帧技能，填补 Toon Boom 与入门工具间鸿沟",
        "图转视频：智能路由 Midjourney/Flux 生成图像后无缝衔接 Sora 2、Kling 3.0、Veo 3.1 等 10+ 视频模型",
        "自动添加旁白、配乐与音效，支持 16:9 / 9:16 / 1:1 输出，无需 API Key 与 Discord"
      ],
      "type": "新功能",
      "source": "https://pexo.ai/",
      "sourceName": "Pexo 官网"
    },
    {
      "competitor": "ltxstudio",
      "date": "2026-09-05",
      "title": "LTX Studio 发布 LTX-2.5 基础模型：4K 原生长视频 + Physical AI 开发者计划",
      "details": [
        "LTX-2.5 大幅提升文本到视频生成质量与物理一致性，上下文窗口指数级增长，支持 4K 长视频",
        "推出 LTXV 专用接口降低推理延迟，支持实时预览与交互式调整",
        "发布 Physical AI 世界模拟与仿真开发者计划；模型架构开源（HuggingFace/GitHub）"
      ],
      "type": "模型更新",
      "source": "https://ltx.studio/release-notes",
      "sourceName": "LTX Studio Release Notes"
    },
    {
      "competitor": "updream",
      "date": "2026-08-19",
      "title": "Updream 上线 Previs Studio：3D 预演工作流，Blockout 取代长提示词",
      "details": [
        "将影视行业预演工作流集成进创作画布：先搭建 3D Blockout 场景，设定机位与角色运动并录制预演视频",
        "预演视频可直连 Seedance、Kling、Wan、Gemini Veo 等视频模型完成最终渲染",
        "解决 AI 视频生成中 3D 空间与镜头运动的可控性难题，减少反复试错"
      ],
      "type": "新功能",
      "source": "https://chinaainews.org/news/ai-video-creation-enters-previsualization-era-3d-blockout-beats-2000-word-prompts",
      "sourceName": "China AI News"
    },
    {
      "competitor": "runninghub",
      "date": "2026-08-15",
      "title": "RunningHub 接入 Seedance 2.5：30 秒直出 + 50 多模态参考 + 时间戳级控制",
      "details": [
        "30 秒原生视频直出并支持多次延长，人物动作与场景变化更连贯",
        "最多 50 个多模态参考输入，新增白模与运动参考能力，支持时间戳级精准控制",
        "同步适配工作流：rhTV 局部编辑（指定时间/画面区域局部重绘）、RHSTORY 镜头模式（标准分镜 15 秒 / 自适应分镜 30 秒）"
      ],
      "type": "模型更新",
      "source": "https://www.xhby.net/content/s6a79532de4b027d1d0a36b89.html",
      "sourceName": "新华报业网"
    },
    {
      "competitor": "rhtv",
      "date": "2026-08-15",
      "title": "RHTV 新增局部编辑功能：指定区域局部重绘，逐帧精准修改",
      "details": [
        "rhTV 局部编辑：支持通过指定时间区域与画面区域对视频进行局部重绘与修改",
        "在保留已有画面基础上仅对需要优化的位置精准调整，适配 Seedance 2.5 新特性"
      ],
      "type": "新功能",
      "source": "https://baike.baidu.com/item/RHTV/67763946",
      "sourceName": "百度百科 RHTV"
    },
    {
      "competitor": "shotlab",
      "date": "2026-08-13",
      "title": "Shotlab AI 视频能力全面升级：Seedance 2.5 全量上线，限时 5.6 折",
      "details": [
        "Seedance 2.5 全量上线：30 秒单段原生直出、50 个全模态素材联合输入、可迭代编辑",
        "支持更换背景、人物服装等本地化编辑，搭配 11 国语言语音能力",
        "限时 5.6 折，720P 低至 0.38 元/秒"
      ],
      "type": "模型更新",
      "source": "https://www.toutiao.com/article/7673490467229434368",
      "sourceName": "新片场"
    },
    {
      "competitor": "shotlab",
      "date": "2026-08-07",
      "title": "Shotlab 正式接入 Seedance 2.5：30 秒原生视频生成，720P 低至 0.38 元/秒",
      "details": [
        "单段最长 30 秒原生视频生成（较 2.0 的 15 秒翻倍），支持高质量延长",
        "最多 50 个全模态素材联合输入，复杂多场景创作保持角色形象稳定",
        "支持本地化编辑与局部替换，广告等高频迭代场景无需整条重制"
      ],
      "type": "模型更新",
      "source": "https://www.sohu.com/a/1061146829_121655492",
      "sourceName": "搜狐科技"
    },
    {
      "competitor": "oiioii",
      "date": "2026-06-10",
      "title": "OiiOii 2.0 升级：智能画布 + 拉片复刻 + Skill 库，接入 Seedance 2.0",
      "details": [
        "智能画布：对画布说话即可创作，自动调度角色总监、分镜总监等 7 个 Agent，无需写提示词",
        "拉片复刻：从最多 18 个专业维度拆解参考视频，支持替换原片角色与场景",
        "Skill 库覆盖自媒体创作、广告营销、游戏素材、周边设计等垂类场景；接入满血版 Seedance 2.0"
      ],
      "type": "产品升级",
      "source": "https://caijing.chinadaily.com.cn/a/202606/10/WS6a28de26a310942cc49b0f3d.html",
      "sourceName": "中国日报网财经"
    },
    {
      "competitor": "oiioii",
      "date": "2026-06-01",
      "title": "OiiOii v5.0 多 Agent 流水线正式版：Sora 2 与 Veo 3.1 渲染后端上线",
      "details": [
        "7 个 Agent 流水线（艺术总监、编剧、角色设计师、场景师、动画师、剪辑师、音效师）正式可用",
        "新增 Sora 2 与 Veo 3.1 作为渲染后端",
        "新增英文、简体中文、日文、繁体中文原生 UI"
      ],
      "type": "产品升级",
      "source": "https://www.oiioii.ai/zh-Hant/changelog",
      "sourceName": "OiiOii Changelog"
    },
    {
      "competitor": "runninghub",
      "date": "2026-05-07",
      "title": "RunningHub 发布 RHTV：原生 AI 智能体全能内容创作平台",
      "details": [
        "将 AI 智能体直接嵌入无限画布，全量接入 RunningHub 生态的海量模型与节点资源",
        "内置品牌设计、TVC 广告短片、AI 漫剧、营销宣传册等行业级专业 Skills",
        "用户仅用自然语言下达需求，智能体自动调度全域模型、工作流与专业工具"
      ],
      "type": "新功能",
      "source": "https://news.sina.com.cn/sx/2026-05-22/detail-inhytyys6175044.shtml",
      "sourceName": "新浪网"
    },
    {
      "competitor": "rhtv",
      "date": "2026-04-19",
      "title": "RHTV 更新：智能体输入框与应用市场接入，支持「视频反推生视频」",
      "details": [
        "新增智能体输入框与应用市场接入功能",
        "智能体核心逻辑为「视频反推生视频」：上传参考视频，系统解析分镜结构并生成新内容",
        "从视频解析、脚本生成到视频渲染的自动化流水线打通"
      ],
      "type": "产品升级",
      "source": "https://baike.baidu.com/item/RHTV/67763946",
      "sourceName": "百度百科 RHTV"
    },
    {
      "competitor": "shotlab",
      "date": "2026-04-02",
      "title": "Shotlab 上线 Seedance 2.0 / 2.0 Fast：四模态混合输入 + 连贯叙事",
      "details": [
        "支持文字、图片、音频、视频四模态混合输入，单次最多 9 图 + 3 视频 + 1 音频参考",
        "单指令多场景连贯生成，双声道立体声输出，BGM/音效/台词多轨并行",
        "Seedance 2.0 Fast 极速版：30-60 秒产出 5-10 秒成片，积分消耗更少"
      ],
      "type": "模型更新",
      "source": "https://www.toutiao.com/article/7625975964350022186",
      "sourceName": "新片场"
    },
    {
      "competitor": "oiioii",
      "date": "2026-04-01",
      "title": "OiiOii v4.5 角色一致性引擎：跨数百镜头零漂移",
      "details": [
        "角色设计师 Agent 可跨数百镜头持久化身份，实现零漂移",
        "新增「参考图生成角色」模式"
      ],
      "type": "新功能",
      "source": "https://www.oiioii.ai/zh-Hant/changelog",
      "sourceName": "OiiOii Changelog"
    },
    {
      "competitor": "runninghub",
      "date": "2026-02-27",
      "title": "RunningHub 推出「无限画布」Beta：可视化 AI 工作流编排平台",
      "details": [
        "可视化的 AI 工作流编排平台，支持节点式画布创作",
        "后续演进为 rhTV 无限画布与原生 AI 智能体产品矩阵"
      ],
      "type": "新功能",
      "source": "https://baike.baidu.com/item/RunningHub/67615455",
      "sourceName": "百度百科 RunningHub"
    },
    {
      "competitor": "skyreels",
      "date": "2026-02-01",
      "title": "SkyReels-V4 发布：音画一体双流架构，带音频榜单全球第一",
      "details": [
        "发布时在 Artificial Analysis Text-to-Video（With Audio）与 Image to Video（With Audio）榜单均位列全球第一，超越 Kling 3.0、Veo 3.1、Sora 2",
        "双流架构支持音画同出，全模态强化学习注入逻辑推理能力",
        "新增多帧参考、网格图参考等高阶能力，全面提升一致性与稳定性；全面开放 API"
      ],
      "type": "模型更新",
      "source": "https://www.cnfin.com/announ/detail/index.html?announ=lc&dannoun=lcdetail&id=830309989140",
      "sourceName": "昆仑万维 2025 年报摘要"
    },
    {
      "competitor": "skyreels",
      "date": "2026-01-01",
      "title": "SkyReels-V3 正式开源：全球开源视频生成社区重要基础模型",
      "details": [
        "SkyReels-V3 于 2025 年 11 月发布，在参考图生视频、视频延长、音频驱动虚拟形象三大能力登顶行业 SOTA",
        "2026 年 1 月正式开源，成为全球开源视频生成社区重要基础模型之一"
      ],
      "type": "模型更新",
      "source": "https://www.cnfin.com/announ/detail/index.html?announ=lc&dannoun=lcdetail&id=830309989140",
      "sourceName": "昆仑万维 2025 年报摘要"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-24",
      "title": "Creative OS 更新：Astra 6 Studio 上线，按创作方向选择电影工作流",
      "details": [
        "Astra 6 Studio 上线 Creative OS App Store：按创作方向选择 Play，涵盖 3D previs（3D 预演）、motion design（动效设计）、depth filmmaking（深度电影制作）、fashion（时尚）等场景",
        "每个 Play 展示输入、输出与限制，可从示例开始或直接在 Agent 对话中调用"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-24",
      "title": "Seedance 2.5 Draft Mode 草稿模式与 Depth Filmmaking Studio 深度电影重拍上线",
      "details": [
        "Seedance 2.5 视频节点新增 Draft Mode：480P 预览动作、构图与参考效果，选择 Generate Final Video 复用草稿提示词与参考生成 1080P 成片，草稿修订与最终成片保留为独立画布节点",
        "Depth Filmmaking Studio：上传源动作视频 + 角色/场景/服装/道具参考，先生成可复用深度动作，再基于参考重拍镜头，结果作为新画布节点且源视频保留"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "sora",
      "date": "2026-09-24",
      "title": "Sora API 正式关停：OpenAI 关闭独立视频生成服务",
      "details": [
        "Sora API 于 2026 年 9 月 24 日正式停止服务，sora-2 系列等生成接口全部下线",
        "Sora 网页版与 App 已于 2026 年 4 月 26 日停服，用户需通过 sora.chatgpt.com/sunset 导出内容",
        "停服后 OpenAI 将永久删除与 Sora 使用相关的数据；已购 Sora 点数可转用于 Codex"
      ],
      "type": "产品升级",
      "source": "https://openai.com/Sora",
      "sourceName": "OpenAI 官方"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-23",
      "title": "Claude Opus 5.5 上线 Supercomputer",
      "details": [
        "Anthropic Opus 5.5 新版本上线 Supercomputer：agentic coding、长多步任务与知识工作（报告、分析、财务模型）更强",
        "更省 token、输出更清晰，图表/截图视觉解析更准，computer use 默认档位对标 Opus 5 高档"
      ],
      "type": "模型更新",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-22",
      "title": "GPT-6 Sol 与 GPT-6 Luna 上线 Supercomputer 和 MCP",
      "details": [
        "OpenAI 扩充 GPT-6 家族：GPT-6 Sol 定位复杂编码/Agent 任务/长多步场景与工具调用，GPT-6 Luna 为家族最廉价高吞吐模型",
        "GPT-6 Astra 保持旗舰地位；可通过 ChatGPT 插件或 Supercomputer 直接选用"
      ],
      "type": "模型更新",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-22",
      "title": "Brand Kits 上线 Runway MCP",
      "details": [
        "Runway MCP 新增 Brand Kits：外部 Agent 可读取品牌套件作为生成参考，保持内容品牌一致性",
        "MCP 侧为只读访问，品牌资产不离开受控工作流"
      ],
      "type": "新功能",
      "source": "https://runway.com/en/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "jimeng",
      "date": "2026-09-22",
      "title": "网页版新增「样片模式」：480P 比选 + 无损升清 1080P 成片",
      "details": [
        "新增独立模式区分「样片」与「成片」：样片 480P 反复比选，单条成本仅为 1080P 的 1/8",
        "选中素材后成片：画面不变、无损升清至 1080P，降低视频创作试错成本"
      ],
      "type": "新功能",
      "source": "https://www.sina.cn/media/7902366905",
      "sourceName": "即梦AI 官方微博"
    },
    {
      "competitor": "pixverse",
      "date": "2026-09-22",
      "title": "发布 R2 实时世界模型：迈向持久、可游玩的实时世界",
      "details": [
        "R2 以 Omni Causal AR 为能力引擎（单一持续训练的因果模型）+ 实时加速层压缩运行，替代多阶段训练管线，能力增长不牺牲实时速度",
        "7 月上线的 PixVerse Game Engine 已基于 R2 运行；CEO 称目标是从创作工具演进为可进入、可塑造的环境",
        "9 月在 Tech in Asia Conference 现场展示实时游戏引擎"
      ],
      "type": "模型更新",
      "source": "https://pixverse.ai/en/blog/pixverse-introduces-r2-real-time-world-model",
      "sourceName": "PixVerse 官网"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-20",
      "title": "Grok 4.7 上线 Supercomputer",
      "details": [
        "SpaceXAI 最强编码与知识工作模型 Grok 4.7 上线 Supercomputer",
        "比 Grok 4.6 更大、更长时任务训练：更仔细自查输出、上下文保持更长，文档与演示内容处理更佳"
      ],
      "type": "模型更新",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "pika",
      "date": "2026-09-20",
      "title": "新创意平台上线：Video Studio 3 分钟多镜头、多模型聚合与全套创意工具",
      "details": [
        "Pika 发布全新 AI 创意平台：Video Studio 支持从短片段到 3 分钟多镜头作品，可在提示词中 @ 引用角色、产品、场景与风格",
        "多模型聚合：Seedance 2.5、MiniMax H3、Wan 3.0、Google Veo 3.1、GPT Image 2.5、Grok Imagine 等可一键切换",
        "配套 Color Grade 调色、Extend Video 延长、Pika Soundtrack 配乐/氛围音、Character Studio、Image Studio、Product Shot、Speech Studio 等创意应用",
        "音频侧集成 Pika Speech、Pika Music、Pika Soundtrack 及 ElevenLabs 语音模型"
      ],
      "type": "产品升级",
      "source": "https://agihunt.info/en/p/1a0b121452fed859ae3a9786245",
      "sourceName": "AGI Hunt"
    },
    {
      "competitor": "pixverse",
      "date": "2026-09-20",
      "title": "获评美国 Google Play 商店本周 App of the Week",
      "details": [
        "PixVerse 被美国 Google Play 商店评为「本周应用」（App of the Week）"
      ],
      "type": "产品升级",
      "source": "https://pixverse.ai/en",
      "sourceName": "PixVerse 官网"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-19",
      "title": "接入 GPT-6 Astra 上线 ChatGPT 广告投放插件",
      "details": [
        "Higgsfield 推出与 OpenAI GPT-6 Astra 深度整合的 ChatGPT 插件，面向付费广告投放场景",
        "在 ChatGPT 对话框输入 @Higgsfield /marketing 即可直接运行广告投放流程：运营广告账户（投放新广告、测试创意素材、自动放量）、跨平台分析目标客户需求、基于产品卖点迭代广告 hook 文案与创意方向",
        "基于 OpenAI Apps SDK（MCP 协议）构建；Marketing Studio 上线首 30 天吸引 6.8 万名营销人员"
      ],
      "type": "新功能",
      "source": "https://www.ababnews.com/news/855ab30f-7044-4c97-911c-efee5684807f",
      "sourceName": "ABAB News"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-16",
      "title": "Higgsfield API 正式发布：一个 Key 调用 50+ 前沿模型",
      "details": [
        "面向开发者的自服务 API：一个 Key 打开 50+ 前沿图像/视频/音频模型（Seedance、Kling、Wan、MiniMax、LTX、PixVerse、Soul 2 等）",
        "按次付费、无订阅与席位限制，Higgsfield 负责队列、GPU 与扩缩容"
      ],
      "type": "产品升级",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "kling",
      "date": "2026-09-15",
      "title": "【虚拟试穿】3.0 版本正式上线（API）",
      "details": [
        "虚拟试穿能力全面升级：模特人脸一致性、画面质量显著提升",
        "支持平铺图、人台图、真人上身图等多种服饰图片输入；可锁定模特姿态、保留人脸与背景",
        "兼容存量调用：V1/V1.5 参数由工程侧适配，可平滑切换至 3.0 链路"
      ],
      "type": "新功能",
      "source": "https://klingai.com/document-api/updates/api",
      "sourceName": "可灵AI API 更新公告"
    },
    {
      "competitor": "pixverse",
      "date": "2026-09-15",
      "title": "CLI 1.4.4 新增 MiniMax H3 Max 视频模型",
      "details": [
        "PixVerse CLI 1.4.4（2026-09-15）新增 minimax-h3-max 视频模型，可用于 create video、create reference 与两帧过渡生成",
        "模型以速度为取向，支持 480p 等档位；开发者与智能体工作流可经 CLI/Skills 直接调用"
      ],
      "type": "模型更新",
      "source": "https://yarnpkg.com/en/package/pixverse",
      "sourceName": "PixVerse CLI Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-15",
      "title": "Agent in Asset Comments：Agent 接入资产评论区",
      "details": [
        "Runway Changelog 09-15 更新：Agent 现可参与资产（Asset）评论，将 Agent 工作流接入评审协作场景"
      ],
      "type": "产品升级",
      "source": "https://runway.com/en/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-12",
      "title": "Motion Designer：内嵌 After Effects / Premiere Pro 的 AI 视频生成插件",
      "details": [
        "以原生插件形式集成 Adobe After Effects 与 Premiere Pro：在时间线选取片段、输入文字提示即可原地生成或替换运动画面",
        "无需导出到外部平台，支持与现有合成工作流无缝衔接，已开放候补名单申请",
        "继 Runway 插件（09-08）之后，AI 视频生成插件向标准后期工具宿主渗透加速"
      ],
      "type": "新功能",
      "source": "https://transwonder.top/",
      "sourceName": "浅译快报"
    },
    {
      "competitor": "kling",
      "date": "2026-09-10",
      "title": "【视频生成-视频特效】10 款特效效果更新（API）",
      "details": [
        "更新 10 款特效效果：「3D卡通」「守护神」「蹦迪萌宠」「奔跑吧」「宠物摩托车手」「摇摆热舞」「延时摄影」「至尊王座」「滑板」「冲浪」",
        "价格变更详见特效价格列表，特效内容见特效模版中心"
      ],
      "type": "新功能",
      "source": "https://klingai.com/document-api/updates/api",
      "sourceName": "可灵AI API 更新公告"
    },
    {
      "competitor": "kling",
      "date": "2026-09-07",
      "title": "【口播带货】API 与 Agent 同步上线",
      "details": [
        "全新上线「口播带货」能力：上传人物形象与口播文案，快速生成口播视频",
        "按是否传入商品素材自动分流：仅人物+文案生成达人口播；带商品图与信息则生成人货同框、货品特写编排的口播带货",
        "同步提供 API 与 Agent 两种方式，Agent Market 在线可用；支持配置语速、画幅、清晰度、音色与背景音乐"
      ],
      "type": "新功能",
      "source": "https://klingai.com/document-api/updates/api",
      "sourceName": "可灵AI API 更新公告"
    },
    {
      "competitor": "kling",
      "date": "2026-09-03",
      "title": "【字幕译制】API 与 Agent 同步上线",
      "details": [
        "全新上线「字幕译制」能力：中文短剧一键译制为带英文硬字幕成片，自动完成对白识别、翻译、字幕节奏适配与画面烧录",
        "保留原片画面与原声，一次交付英文硬字幕 MP4 与 SRT/ASS 字幕文件，可直接用于海外分发",
        "支持术语表（最多 200 项）固定人名/专有名词译法；当前专注中→英，单次支持 500MB/5 分钟以内视频"
      ],
      "type": "新功能",
      "source": "https://klingai.com/document-api/updates/api",
      "sourceName": "可灵AI API 更新公告"
    },
    {
      "competitor": "luma",
      "date": "2026-09-23",
      "title": "Dream Machine v3：10 秒高结构完整性片段",
      "details": [
        "Dream Machine v3 可单次生成 10 秒片段并保持完美结构完整性（此前为 5 秒）",
        "定位「摄影师的偏爱」：专注高保真物理与真实运动，成为独立电影人、游戏开发者与高端广告的首选"
      ],
      "type": "模型更新",
      "source": "https://www.aitools-directory.com/?p=3712/",
      "sourceName": "AI Tools Directory"
    },
    {
      "competitor": "libtv",
      "date": "2026-09-22",
      "title": "团队版量产方案升级：分镜组、拼接剪辑、智能字幕擦除、720° 全景等新能力上线",
      "details": [
        "一次性生成九宫格全套叙事分镜，编剧/导演快速敲定整体视觉脚本，可筛选镜头自由组建新分镜组",
        "一站式视频拼接合成剪辑：多片段自由拖拽裁切、画面拼接、背景音乐搭配，最长可合成导出 20 分钟长视频",
        "一键画布规整排版：自动整齐排布所有素材与流程节点",
        "工作流永久沉淀一键复用、多版本历史记录溯源、分级权限审片（外部访客只读）",
        "智能字幕擦除：全域清除与精准框选两种模式",
        "720° 全景沉浸式内容生成：适配 VR 短剧、全景创意广告、实景漫游等新兴赛道",
        "人力精简：传统十人短剧团队依托团队版协同仅需 3 人完成全流程量产"
      ],
      "type": "产品升级",
      "source": "https://e.yeyulingfeng.com/a/475057.html",
      "sourceName": "夜雨聆风"
    },
    {
      "competitor": "libtv",
      "date": "2026-09-21",
      "title": "LibTV 1.5 版本更新：五大独家功能升级创作全流程",
      "details": [
        "角色造型：可视化调整五官、发型等细节并保存角色卡复用",
        "原创编剧：辅助创作剧本，改写台词时提示对大纲、伏笔的影响",
        "导演分身：支持导入个人创作方法，自动拆分镜、批量优化提示词",
        "3D-BOX 虚拟影棚：无需建模即可搭建场景、预演运镜",
        "成片精修：提供片头设计、字幕调整及口播视频自动粗剪与 B-Roll 匹配"
      ],
      "type": "产品升级",
      "source": "https://www.aiboss88.com/en/news/news-449539179-1789999387372-2",
      "sourceName": "AiBoss"
    },
    {
      "competitor": "runway",
      "date": "2026-09-18",
      "title": "Kling 模型上线 Runway MCP",
      "details": [
        "Kling O3 4K、Kling 3.0 Standard、Kling O3 Standard、Kling 3.0 Motion Control 现已在 Runway MCP 上可用"
      ],
      "type": "产品升级",
      "source": "https://runway.com/en/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-17",
      "title": "Runway MCP 接入 Grok Bot；Enhance Frame Rate 帧率增强上线",
      "details": [
        "Runway 以插件形式接入 Grok Bot，登录账号后可在聊天中直接生成图片与视频",
        "Enhance Frame Rate：任意视频（含外部导入）可转换至 25/30/48/60/120/59.94 fps，最高 4K、5 分钟，支持 Enhance 菜单、Tool Mode、Workflows 与 Agent"
      ],
      "type": "新功能",
      "source": "https://runway.com/en/changelog",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "jimeng",
      "date": "2026-09-17",
      "title": "全新网页版上线：Agent 能力完善 + 技能广场",
      "details": [
        "9 月上线全新网页版，进一步完善 Agent 能力，新增技能广场面向不同创作场景提供工具支持",
        "8 月推出内容厂牌「即梦片场」，面向电影、剧集项目开放征集",
        "携手 Yuri 打造 AI 原生偶像首场线下音乐会，AI 影像进入 99 米级舞台"
      ],
      "type": "产品升级",
      "source": "https://www.csdn.net/article/2026-09-17/165757110",
      "sourceName": "CSDN"
    },
    {
      "competitor": "vidu",
      "date": "2026-09-15",
      "title": "Vidu S2-Avatar 与 S2-Editing：实时交互与实时编辑模型",
      "details": [
        "S2-Avatar：实时语音交互 + 复杂动作控制，参考图可用于产品交互、换装与背景替换",
        "S2-Editing：用风格/服装/角色/背景参考图实时编辑视频流",
        "把视频视为可持续交互界面：会话运行中即可响应语音、动作与新视觉参考"
      ],
      "type": "模型更新",
      "source": "http://platform.vidu.com/docs/update",
      "sourceName": "Vidu Update Notice"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-12",
      "title": "Creative OS v2.17.0：画布节点堆叠与批量结果排列",
      "details": [
        "画布节点堆叠：选中多个图片/视频/音频/文本节点可折叠为一堆，最多容纳 50 个节点",
        "批量结果排列设置：Batch generation results 可选 Pile（堆叠）或 Spread（平铺）",
        "再次生成不再覆盖上一结果：新结果落在新节点，可并排对比多次尝试",
        "音频节点仍原地更新"
      ],
      "type": "产品升级",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-09",
      "title": "影视预演 App 上线 App Store；Seed audio 1.0 支持图片参考",
      "details": [
        "Film & Video Previsualization 上线：把脚本拆解为可预览的镜头、动作、节奏与转场，支持 Try in Chat / Add to Chat",
        "Seed audio 1.0 音频节点支持添加 1 张 JPG/PNG/WebP 图片参考（≤10MB）或最多 3 个参考音频剪辑"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-08",
      "title": "Creative OS App Store 与 Agent 任务进度追踪上线",
      "details": [
        "App Store 应用目录：Whitebox Video Previs、Image to 3D Modeling、Design Room、Casting Room、Film & Video Previsualization",
        "Agent 任务进度与历史追踪：长任务实时显示当前步骤与进度，完成后可展开任务历史复查"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-08",
      "title": "Runway Plugins for Adobe 上线：Premiere Pro / After Effects 面板内直接创作",
      "details": [
        "Runway 以面板形式嵌入 Adobe Premiere Pro 与 After Effects，无需离开剪辑环境即可生成图片与视频",
        "使用 Aleph 2 对时间线素材进行重风格化，结果直接放入合成或序列",
        "macOS 与 Windows 免费下载，适配现有付费套餐与积分"
      ],
      "type": "新功能",
      "source": "https://runway.com/changelog?ref=a1.gallery",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "runway",
      "date": "2026-09-04",
      "title": "Team Plan 团队套餐上线",
      "details": [
        "面向小型共创团队的自助套餐：每席位每月 6,900 积分汇入共享池，最多 9 人在共享项目工作区协作",
        "1TB 存储，支持在生成结果上评论、共享 Agent 技能并连接 Runway Agent"
      ],
      "type": "产品升级",
      "source": "https://runway.com/changelog?ref=a1.gallery",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-03",
      "title": "TapTV 创作者徽章体系上线",
      "details": [
        "创作者主页新增本地化身份徽章：Visual Ambassador、TapTV Signed Studio、TapNow Quality Creator、Pioneer Creator",
        "徽章同步展示在创作者身份信息中，按创作者档案差异化显示"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "deevid",
      "date": "2026-09-02",
      "title": "DeeVid App 2.6.0 更新",
      "details": [
        "更新 AI Music：单条提示词即可创作热门风格音乐",
        "视频功能提供更全面的参考能力",
        "支持一键分享到 Facebook",
        "修复已知问题"
      ],
      "type": "产品升级",
      "source": "https://4phone.app/deevidai-video-generator/ai.deevid.aivideogenerator",
      "sourceName": "4phone"
    },
    {
      "competitor": "tapnow",
      "date": "2026-09-02",
      "title": "画布媒体批量下载",
      "details": [
        "多选画布上的图片、视频或音频节点，点击 Batch download 批量下载",
        "Creative OS 打包可用源文件后下载"
      ],
      "type": "新功能",
      "source": "https://docs.tapnow.ai/en/docs/changelog",
      "sourceName": "TapNow Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-02",
      "title": "发布全链路 AI 视频生成平台：从提示词到成片仅需一键",
      "details": [
        "全栈式一体化架构：整合提示词解析、角色一致性、物理模拟与渲染，无需切换多个工具",
        "生成速度 15 秒/4K 首帧，相比上一代工具提升 40%",
        "角色一致性 0.92 跨镜头保持度：基于向量嵌入的角色锁定技术",
        "API 延迟 <200ms，支持实时集成",
        "智能提示词工程：内置高级语义模型自动拆解复杂指令；物理引擎参数可微调物体运动轨迹与重力效果"
      ],
      "type": "产品升级",
      "source": "https://www.s5l.com/news/higgsfield-ai-video-platform-launch",
      "sourceName": "Agent Development Kit"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-09-01",
      "title": "发布 Genjutsu：视频局部重拍与动作迁移工具",
      "details": [
        "Genjutsu 对现有视频重建局部内容：可替换画面中的人物、地点或物体，其余部分保持原拍摄不变，无需重新拍摄",
        "Motion Transfer：提取源视频的运动、运镜与节奏，围绕其重建新场景与新角色；Object Swap：仅替换指定元素，其余画面保持原样",
        "无需完整提示词，可结合参考图或预设使用；单次支持 4–30 秒输入视频与最多 30 张参考图，最高 1080p 输出",
        "9 月 1 日发布，9 月 3 日上架 Product Hunt"
      ],
      "type": "新功能",
      "source": "https://higgsfield.ai/blog/higgsfield-genjutsu",
      "sourceName": "Higgsfield Blog"
    },
    {
      "competitor": "libtv",
      "date": "2026-09-01",
      "title": "新增深度视频提取与口播智能剪辑",
      "details": [
        "一键深度提取：源视频转为灰度深度视频后喂给模型，动作、运镜、空间关系被保留，身份与风格干扰大幅下降",
        "口播智能剪辑：自动去除填充词、粗剪确认、自动审查、自然语言微调，全程在一个画布内完成",
        "深度参考对分层清晰、运动量大的实拍素材效果最佳"
      ],
      "type": "新功能",
      "source": "https://agihunt.info/en/p/1a05d304c42523852d55f3414e4",
      "sourceName": "AGI Hunt"
    },
    {
      "competitor": "xyq",
      "date": "2026-09-01",
      "title": "品牌升级：从生成工具到专业创作伙伴",
      "details": [
        "新定位「一起创作好故事」，升级产品能力、创作者扶持政策与内容生态",
        "自研剧本模型辅助故事构思与剧本打磨；基于 Seedream 底座的自研生图模型 AnyCook",
        "自由画布串联角色、服化道、场景等创作节点；3D 导演台支持白模调整站位、动作、运镜和机位",
        "与剪映深度打通，连接内容生成与后期剪辑环节",
        "未来 3 年投入一亿积分；创作者计划新增精品 IP 创作激励；上线分层式课程中心"
      ],
      "type": "产品升级",
      "source": "https://economy.gmw.cn/2026-09/01/content_38979737.htm",
      "sourceName": "光明网"
    },
    {
      "competitor": "runway",
      "date": "2026-08-31",
      "title": "Runway Ruby 在 Tool Mode 独立上线",
      "details": [
        "Ruby 作为独立模型进入 Tool Mode 模型选择器，配备专属 UI",
        "支持导入 Runway 外部视频，用 Ruby 进行调色处理"
      ],
      "type": "新功能",
      "source": "https://runway.com/changelog?ref=a1.gallery",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-08-28",
      "title": "模型上新：MiniMax H3 Max 与 Gemini Omni 1.1 Flash 上线",
      "details": [
        "MiniMax H3 Max：文生视频、图生视频、定向帧过渡；为速度而生，上限 768p",
        "Gemini Omni 1.1 Flash（Google 多模态模型）：支持首尾帧设定，生成帧间过渡",
        "Gemini Omni 草稿模式：360p 低成本快速测试想法，保留满意片段再放大",
        "单次生成最长 10 秒，支持 360p / 720p / 1080p / 4K"
      ],
      "type": "模型更新",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-08-27",
      "title": "FLUX 3 视频放大器上线；MCP 修复；Recraft V4 系列图像模型上线",
      "details": [
        "FLUX 3 Video Upscaler：任意视频提升至 1080p/2K/4K，保持运动流畅与音画同步；Precise / Creative 双模式",
        "修复 Higgsfield MCP 调用失败问题",
        "Recraft V4.1（主模型）、Recraft Styles（参考风格迁移，最多 10 个参考无需训练）、Recraft Utility（扁平光、正对构图，适合 mockup 与产品图）"
      ],
      "type": "新功能",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "pika",
      "date": "2026-08-27",
      "title": "Gemini Omni Flash 1.1 接入 Pika",
      "details": [
        "Gemini Omni Flash 1.1 新增视频参考、10 秒延长、首尾帧控制",
        "提供 360p 草稿与 4K 放大，可通过 Pika API Club 访问"
      ],
      "type": "模型更新",
      "source": "https://www.ai-primer.com/creative/tools/pika",
      "sourceName": "AI Primer"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-08-26",
      "title": "GLM-5.3 Flash 上线 Supercomputer；Higgsfield Apps 恢复运行",
      "details": [
        "Ox Alpha 隐身期结束，揭晓为 GLM-5.3 Flash（智谱 AI 轻量模型），按积分计费",
        "专为速度与低成本调优，适合对话、代码与快速响应场景",
        "Higgsfield Apps 恢复上线运行"
      ],
      "type": "模型更新",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-08-25",
      "title": "Ad Multiplier：为 Claude 打造的新技能",
      "details": [
        "一条视频广告生成多个变体：同一视频、剪辑与节奏，替换新角色、服装、地点和物体",
        "通过 Higgsfield MCP 连接器运行，单个或多个元素逐变体替换"
      ],
      "type": "新功能",
      "source": "https://higgsfield.ai/creator-hub/changelog",
      "sourceName": "Higgsfield Changelog"
    },
    {
      "competitor": "jimeng",
      "date": "2026-08-25",
      "title": "智能多帧上线：10 张关键帧生成 54 秒长镜头",
      "details": [
        "最多上传 10 张关键帧图片，AI 自动生成最长 54 秒连贯长镜头视频",
        "相邻帧间可独立设置提示词与时长参数，支持推拉、跟踪、环绕等高级运镜",
        "多帧约束 + 逻辑理解，长序列生成中保持主体一致性"
      ],
      "type": "新功能",
      "source": "https://wechild.cn/news-detail-1151.html",
      "sourceName": "文趣文化"
    },
    {
      "competitor": "tapnow",
      "date": "2026-08-24",
      "title": "接入阿里云 Wan 3.0 模型",
      "details": [
        "阿里云 Wan 3.0 正式上线当天，TapNow 作为首批企业同步公布接入并使用该模型"
      ],
      "type": "模型更新",
      "source": "https://baike.baidu.com/item/TapNow%20AI/67405776",
      "sourceName": "百度百科"
    },
    {
      "competitor": "runway",
      "date": "2026-08-24",
      "title": "Wan 3.0 模型上线 Runway",
      "details": [
        "Wan 3.0 在 Tool Mode 与 Workflows 中可用，支持多图片/视频/音频参考输入",
        "生成带音频视频，支持 480p / 720p / 1080p 分辨率"
      ],
      "type": "模型更新",
      "source": "https://runway.com/changelog?ref=a1.gallery",
      "sourceName": "Runway Changelog"
    },
    {
      "competitor": "hailuo",
      "date": "2026-08-24",
      "title": "H3 开源权重：开源阵营第一",
      "details": [
        "H3 开源权重为开源视频模型阵营第一，独立评测在视频编辑项拿下开源第一",
        "本地跑仅到 768p，真正 2K 需走云端 API"
      ],
      "type": "产品升级",
      "source": "https://rar.design/posts/minimax-h3-open-weights-video-model",
      "sourceName": "RAR設計攻略"
    },
    {
      "competitor": "xyq",
      "date": "2026-08-22",
      "title": "Seedance 2.5 正式发布：AI 视频进入「导演可控」新时代",
      "details": [
        "单段生成时长翻倍：最长 30 秒连贯叙事（旧版 15 秒），搭配延长功能单条成片最长可至 90 秒",
        "最多 50 份参考素材输入（图片、视频、纯音频），稳定锁定角色五官与穿搭",
        "商用级 4K 画质，光影融合自然，多人同框、环绕运镜流畅度显著提升",
        "与 3D 导演台深度打通：上传参考图快速搭建 3D 白模场景，内置动作库、运镜机位，AI 按预演分镜生成正片"
      ],
      "type": "模型更新",
      "source": "https://www.toutiao.com/a7676803528232288770",
      "sourceName": "今日头条"
    },
    {
      "competitor": "pika",
      "date": "2026-08-20",
      "title": "Pika Music 上线：4 输入扩散模型",
      "details": [
        "Pika Music 接受文本、歌词、人声、音乐参考四类输入，可单独或组合喂给同一扩散解码器",
        "通过 Pika API Club 提供，官方称成本效率比其他音乐模型最高提升 10 倍"
      ],
      "type": "新功能",
      "source": "https://www.ai-primer.com/creative/tools/pika",
      "sourceName": "AI Primer"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-08-13",
      "title": "Cinema Studio 4.0：新一代 AI 电影制作环境",
      "details": [
        "单次生成最长 30 秒，可承载完整场景叙事",
        "最多 50 张参考图：锁定人脸、产品形态或风格",
        "30+ 运镜预设（POV、机械臂、左摇、直升机镜头等），4 种相机类型（Modern / DV / 35mm / 8mm）",
        "Emotion Wheel 情绪轮：8+ 情绪类型直接控制角色表演",
        "Era selector 时代选择器：按年代自动匹配颗粒、调色与镜头风格",
        "前后向延长：上传视频实现无缝续接或开场；50+ 调色预设"
      ],
      "type": "产品升级",
      "source": "https://higgsfield.ai/blog/cinema-studio-4-0",
      "sourceName": "Higgsfield Blog"
    },
    {
      "competitor": "libtv",
      "date": "2026-08-09",
      "title": "全面上线 Seedance 2.5：六大独家功能重构 AI 视频工业化创作流程",
      "details": [
        "完整接入火山引擎 Seedance 2.5 满血模型：原生 30 秒单段成片、50 份多素材同步参考、高精度指令执行",
        "片段重拍：精准选中任意时间段单独生成，画质无损无缝替换，广告/短剧微调刚需",
        "智能逐帧拉片：自动拆解运镜、关键帧、色调、配乐、时间线，拆解不消耗积分",
        "Auto Link 智能引用：自动解析剧本语义，匹配角色/场景素材嵌入提示词，多人物 MV 效率翻倍",
        "720P 生成低至 0.4 元/秒，老会员同步享受 30 天折扣"
      ],
      "type": "模型更新",
      "source": "https://www.chooseai.net/news/5630",
      "sourceName": "ChooseAI"
    },
    {
      "competitor": "tapnow",
      "date": "2026-08-07",
      "title": "Seedance 2.5 API 上线",
      "details": [
        "火山引擎最新发布的 Seedance 2.5 API 服务在 TapNow 平台同步上线"
      ],
      "type": "模型更新",
      "source": "https://baike.baidu.com/item/TapNow%20AI/67405776",
      "sourceName": "百度百科"
    },
    {
      "competitor": "runway",
      "date": "2026-08-06",
      "title": "Runway API 接入 Seedance 2.5",
      "details": [
        "文生视频 / 图生视频 / 视频生视频，可携带可选音频，输出 4-30 秒、480p/720p",
        "扩大参考素材预算，扩展文生与视频工作流"
      ],
      "type": "模型更新",
      "source": "https://releasebot.io/updates/runwayai/runwayml-api",
      "sourceName": "Releasebot"
    },
    {
      "competitor": "jimeng",
      "date": "2026-08-05",
      "title": "Seedance 2.5 专业创作工具上线：Maya/Blender 插件 + 智能编辑",
      "details": [
        "同步上线 Maya / Blender 插件，打通三维资产、绿幕素材与 AI 创作流程",
        "网页版新增「智能编辑」模式，适配视频局部增删改；多帧编辑突破单帧限制",
        "超长生成模式最长可生成 3 分钟视频片段",
        "携手上海电影集团、电影频道、艾菲奖等行业伙伴探索专业交付实践"
      ],
      "type": "产品升级",
      "source": "https://www.leiphone.com/category/industrynews/ME02O5J26zzAWXeo.html",
      "sourceName": "雷峰网"
    },
    {
      "competitor": "xyq",
      "date": "2026-08-04",
      "title": "首发官方版 Seedance 2.5，推动 AI 视频迈向专业创作",
      "details": [
        "3D 导演台全面升级：支持角色动作设计、K 帧控制、运镜库，镜头设计从试错变为可视化控制",
        "新增绿幕编辑、片段重拍、分段编辑与单秒级时间戳控制，局部精准编辑无需重新生成整条视频",
        "创作 Agent 正式接入画布，不会写 Prompt 也能开始创作",
        "联合欢娱合作推出 AI 短片《美人》，验证专业影视工作流"
      ],
      "type": "模型更新",
      "source": "https://news.zol.com.cn/1226/12267246.html",
      "sourceName": "中关村在线"
    },
    {
      "competitor": "hailuo",
      "date": "2026-08-03",
      "title": "MiniMax H3 开源权重发布 + ComfyUI 原生支持",
      "details": [
        "依 MiniMax H3 Community License Agreement 释出开源权重（FL2VA 与 Ref2VA）",
        "同日 ComfyUI 原生支持（PR #15224）"
      ],
      "type": "产品升级",
      "source": "https://datanorth.ai/news/minimax-releases-minimax-h3",
      "sourceName": "DataNorth AI"
    },
    {
      "competitor": "tapnow",
      "date": "2026-07-31",
      "title": "Creative OS 正式发布：AI 原生创作系统",
      "details": [
        "Brainstorm 头脑风暴：非专业用户把模糊想法转为结构化视觉提案",
        "Skill 技能封装：把成功工作流沉淀为可复用技能，实现可重复、一致的视频生产",
        "Plugins 插件：集成 Notion、Slack、Frame.io，跨部门无缝协作",
        "Style-Lock 风格锁定：上传参考资产实时微调 LoRA，解决角色漂移问题",
        "Director-Agent 架构编排多模型；与主流云厂商合作提供 Render-on-Demand 云渲染；RBAC 角色权限与版本历史"
      ],
      "type": "新功能",
      "source": "https://setupai.cc/update/tapnow-launches-860fa9d",
      "sourceName": "SetupAI"
    },
    {
      "competitor": "xyq",
      "date": "2026-07-31",
      "title": "3D 导演台升级与全模态参考扩容：直出能力大提升",
      "details": [
        "上传场景概念图一键转换可编辑 3D 空间白模基底，拖拽调整角色位置、朝向与姿态",
        "单段原生直出 30 秒，支持 2 次视频延长，最长可达 90 秒",
        "全模态参考素材扩容：最多 50 个同时输入，图片 9→30 张、视频 3→10 个",
        "新增片段重拍：生成后局部元素修改无需整段重跑"
      ],
      "type": "产品升级",
      "source": "https://new.qq.com/rain/a/20260731A0BGT700",
      "sourceName": "腾讯新闻"
    },
    {
      "competitor": "xyq",
      "date": "2026-07-31",
      "title": "上线 7000+ 角色库、独家捏脸与多语言能力",
      "details": [
        "AI 角色库：7000+ 角色可选，按年代、性别、年龄、物种、体型、发长、发色、气质等组合筛选",
        "独家捏脸：自定义五官、发型、妆容、皮肤质感、表情，角色资产含三视图与九宫格，一键发送画布",
        "上线字节自研音频模型 Seed Audio 1.0：参考音频生成的人物音色更可控",
        "支持 10+ 种全球语言：按目标语言准确书写发音，并可随语种替换匹配人物面孔",
        "Seedance 2.5 最多支持 10 条语音参考"
      ],
      "type": "新功能",
      "source": "https://new.qq.com/rain/a/20260731A086YE00",
      "sourceName": "腾讯新闻"
    },
    {
      "competitor": "jimeng",
      "date": "2026-07-31",
      "title": "即梦 Seedance 2.5 全球首发",
      "details": [
        "字节跳动发布最新视频生成模型 Seedance 2.5，即梦 AI 首发接入",
        "原生直出 30 秒视频，单次最多 50 个多模态参考素材（白模、绿幕等）",
        "精准时间戳控制，时间误差严控 1 秒以内；大幅优化画质、音质与运动质量",
        "参考素材上限提升至 50 个：30 张图 + 10 段视频 + 10 段音频"
      ],
      "type": "模型更新",
      "source": "https://www.leiphone.com/category/industrynews/ME02O5J26zzAWXeo.html",
      "sourceName": "雷峰网"
    },
    {
      "competitor": "hailuo",
      "date": "2026-07-31",
      "title": "MiniMax H3（海螺 3.0）发布：全模态视频生成模型",
      "details": [
        "统一理解文本、图像、视频、声音组成的多模态上下文，输出带「原生双声道」音视频",
        "最高 15 秒 2K（2560x1440）@24fps，画面、对白、音效同一次生成、天然同步",
        "Omni-Reference 系统：单次最多 9 图 + 3 视频 + 3 音频（12 文件）参考",
        "支持自然语言指令迭代编辑已生成片段；价格约 $0.13/秒（2K）"
      ],
      "type": "模型更新",
      "source": "https://www.toutiao.com/article/7668570809539052047",
      "sourceName": "今日头条"
    },
    {
      "competitor": "deevid",
      "date": "2026-07-29",
      "title": "Seedance 2.5 Preview：更长视频、更多参考、更强的编辑模型",
      "details": [
        "预期提升：更长 AI 视频、更多参考素材、更优编辑模型",
        "多视频参考控制：相机移动、动作节奏、视觉风格、过渡、节奏、灯光、场景流",
        "编辑能力从「从头生成」转向「编辑已有内容」：换背景、换服装、延长场景、改运镜",
        "Seedance Mini 同步发布：更快更便宜，适合草稿、广告变体测试、社媒实验等高量级迭代"
      ],
      "type": "模型更新",
      "source": "https://deevid.ai/blog/seedance-2-5-preview",
      "sourceName": "DeeVid Blog"
    },
    {
      "competitor": "deevid",
      "date": "2026-07-29",
      "title": "下一代视频平台：引入 Veo 3.1 与 Nano Banana",
      "details": [
        "平台支持 Veo 3.1、Nano Banana 等多模型并行",
        "早期采用者报告多媒体生产时间减少 40-50%",
        "计划 Q3 2026 分阶段整合北美、欧洲、亚洲云提供商"
      ],
      "type": "模型更新",
      "source": "https://aibucket.io/post/deevid-ai-launches-next-gen-video-platform",
      "sourceName": "Ai Bucket"
    },
    {
      "competitor": "deevid",
      "date": "2026-07-29",
      "title": "AI Video Agent 增强：脚本、场景、语音、音乐一体化工作流",
      "details": [
        "升级为「生产伙伴」模式：定义目标→梳理节奏点→创建场景变体→配音对齐→配乐",
        "集成 Text to Speech：逐场景生成台词，避免节奏错配；语音风格跨系列保持一致",
        "集成 AI Music generator：按情绪目标选曲，维持品牌听觉识别",
        "覆盖广告、电商、社媒系列、教育内容，减少返工、提升跨片段一致性"
      ],
      "type": "产品升级",
      "source": "https://news.theatlanticreport.com/story/526914/deevid-ai-enhances-its-ai-video-agent-one-workflow-for-script-scenes-voice-and-music.html",
      "sourceName": "The Atlantic Report"
    },
    {
      "competitor": "luma",
      "date": "2026-07-29",
      "title": "Dream Machine v3.5：物理感知最强者",
      "details": [
        "首个真正理解重力、碰撞与流体动力学的模型，角色不再漂浮、物体不穿模",
        "Character Seeds（C-Seed）跨场景角色一致性、4K 60fps 原生输出、电影级镜头控制、音频反应唇形同步"
      ],
      "type": "模型更新",
      "source": "https://aivideoadvisor.com/luma-dream-machine-v35-review-2026-the-physics-aware-ai-video-generator/",
      "sourceName": "AI Video Advisor"
    },
    {
      "competitor": "deevid",
      "date": "2026-07-21",
      "title": "DeeVid Viral Studio 上线：把爆款密码拆成可编辑模板",
      "details": [
        "粘贴视频链接或上传素材，自动拆解开头钩子、场景结构、镜头语言、视觉风格与节奏",
        "生成可定制的提示词与视觉参考，可替换人物、产品、地点、背景、服装等元素",
        "覆盖创作者、社媒运营、品牌、代理机构与数字创业者",
        "产品页：https://deevid.ai/app/viral-studio；官方明确仅用于创意分析与改编，用户须拥有上传素材权利并自行承担版权合规责任"
      ],
      "type": "新功能",
      "source": "https://www.valuespectrum.com/corporate_news/1459156-deevid-launches-viral-studio-to-help-creators-turn-trending-videos-into-new-content-faster",
      "sourceName": "ValueSpectrum"
    },
    {
      "competitor": "pika",
      "date": "2026-07-20",
      "title": "Pika 2.5 旗舰模型：深度创意特效 + 实时 Agent 视频转向",
      "details": [
        "Pika 2.5 为 Pika Labs 旗舰视频模型，驱动 Web 与 iOS 全部工具（文生视频 / 图生视频 / 创意操控套件）",
        "定位差异化：放弃 Elo 榜单竞争，主打最快、最便宜、特效丰富的社交视频（Pikaffects 等）",
        "同步押注 PikaStream 实时视频，面向 AI Agent 的实时视频生成"
      ],
      "type": "模型更新",
      "source": "https://awesomeagents.ai/models/pika-2-5",
      "sourceName": "Awesome Agents"
    },
    {
      "competitor": "libtv",
      "date": "2026-07-14",
      "title": "LibTV Agent 发布：Skill Hub 将 AI 视频从单镜头生成推向成片交付",
      "details": [
        "统一能力基线：Agent 围绕成片能力构建，可自主完成创意理解、镜头规划、视频生成和成片优化全链路",
        "Skill Hub：首批上线超 100 个 Video Skill，覆盖韦斯·安德森、王家卫、是枝裕和、新海诚、皮克斯等电影美学",
        "双视图创作：Agent 同时输出 Storyboard 与 Node Workflow，支持自然语言与节点级工作流切换",
        "Agent 驱动剪辑：支持自然语言持续修改画面、节奏、字幕、配音和包装，一键生成多语言多平台版本",
        "「Skill 超创激励计划」投入 1000 万元创作激励"
      ],
      "type": "新功能",
      "source": "https://www.chooseai.net/news/5059",
      "sourceName": "ChooseAI"
    },
    {
      "competitor": "luma",
      "date": "2026-07-05",
      "title": "Ray3.2：16 关键帧 + HDR/EXR + 20 秒 1080p",
      "details": [
        "Ray3.2 模型支持 16 关键帧、HDR/EXR 输出、20 秒 1080p 片段",
        "界面聚合 Veo 3、Kling 等多模型，一个接口多模型切换"
      ],
      "type": "模型更新",
      "source": "https://aitooltier.com/tools/luma",
      "sourceName": "AIToolTier"
    },
    {
      "competitor": "runway",
      "date": "2026-07-04",
      "title": "2026 最大更新波次：Agent 2.0 / Aleph 2.0 / Edit Studio / 原生 4K",
      "details": [
        "Runway Agent 2.0：端到端营销活动创建",
        "Aleph 2.0 视频编辑模型 + 新 Edit Studio",
        "Studio Trim 不离开平台完成成片精修；API 上线专业视频放大器",
        "生成端点全面支持原生 4K 输出，定位从视频生成器转向完整生产管线"
      ],
      "type": "产品升级",
      "source": "https://www.geniusfirms.com/news/runway-ships-its-biggest-update-wave-of-2026",
      "sourceName": "GeniusFirms"
    },
    {
      "competitor": "vidu",
      "date": "2026-07-03",
      "title": "Vidu S1 实时交互模型发布",
      "details": [
        "在 2026 全球数字经济大会发布：面向实时交互场景的新一代视频模型",
        "支持实时视频通话与语音控制视频走向，无限时长连续互动",
        "540P（960x540）@25FPS（最高 42FPS），任意初始形象 + 个性化音色创建专属交互角色"
      ],
      "type": "模型更新",
      "source": "https://tech.chinadaily.com.cn/a/202607/06/WS6a4b12eea310d709c2fbbecb.html",
      "sourceName": "中国日报网"
    },
    {
      "competitor": "libtv",
      "date": "2026-07-01",
      "title": "上线人像调节与虚拟角色功能，优化 3D 导演台",
      "details": [
        "人像调节、虚拟角色功能：赋予 AI 真人短剧角色更灵动鲜活的表现力，从观感上消除「AI 脸」的不适感",
        "同步带来全新 Storyboard 脚本工作流等多项能力升级"
      ],
      "type": "新功能",
      "source": "https://baike.baidu.com/item/%E6%BC%94%E8%AF%AD%E7%A7%91%E6%8A%80LibTV/68634817",
      "sourceName": "百度百科"
    },
    {
      "competitor": "libtv",
      "date": "2026-06-30",
      "title": "导演台功能上线：3D 画布自由调度，告别「玄学」生成",
      "details": [
        "3D 画布中自由摆放人物模型、调整镜头角度，截图作为参考图交给 AI 生成",
        "解决 AI 缺乏空间感的核心痛点"
      ],
      "type": "新功能",
      "source": "https://www.tahou.com/article/211769778362680325",
      "sourceName": "塔猴"
    },
    {
      "competitor": "kling",
      "date": "2026-06-26",
      "title": "Kling VIDEO 3.0 Omni：统一多模态视频生成",
      "details": [
        "文本、图像、音频统一进单一工作流，15 秒高清片段 + 同步对白",
        "AI Director 自动运镜剪辑；Character Identity 3.0 保障主体一致性；精准文字渲染"
      ],
      "type": "模型更新",
      "source": "https://app.klingai.com/global/blog/kling-video-3-omni-multi-shot-native-audio-guide",
      "sourceName": "可灵AI Blog"
    },
    {
      "competitor": "deevid",
      "date": "2026-06-23",
      "title": "2026 视频创作套件：AI Video Agent 将生产时间从 8 小时降至 2.5 小时/分钟",
      "details": [
        "AI Video Agent 理解创意意图，自动处理场景、节奏、音乐，相当于 AI 导演",
        "支持 6 种视频格式：explainer、product demos、social clips、training modules、documentary shorts、cinematic narratives",
        "实时风格迁移与上下文感知编辑：自动插入反应镜头、根据叙事张力调整转场速度",
        "企业协作云工作区：时间戳评论、版本控制、Agent 落实修订",
        "AI Video Doctor 运行 37 项质量检查（唇形同步、连续性、背景干扰等）"
      ],
      "type": "产品升级",
      "source": "https://resource.digen.ai/deevid-ai-video-creation-2026",
      "sourceName": "Digen AI"
    },
    {
      "competitor": "sora",
      "date": "2026-06-22",
      "title": "Sora 向所有客户开放：进入 ChatGPT 工作流",
      "details": [
        "Sora 向所有客户开放，创作者可在 ChatGPT 内直接调用视频生成",
        "与 Seedance、Grok 等形成免费/低价分层竞争，AI 视频成本持续下降"
      ],
      "type": "产品升级",
      "source": "https://aivideoadvisor.com/openai-sora-now-available-to-all-customers-what-creators-get-in-2026",
      "sourceName": "AI Video Advisor"
    },
    {
      "competitor": "kling",
      "date": "2026-06-17",
      "title": "可灵 3.0 系列升级：3.0 Turbo 发布，3.0 Omni 编辑能力升级",
      "details": [
        "可灵 3.0 Turbo 正式发布，可灵 3.0 Omni 视频编辑能力升级"
      ],
      "type": "模型更新",
      "source": "https://klingai.com/release-note",
      "sourceName": "可灵AI Release Notes"
    },
    {
      "competitor": "jimeng",
      "date": "2026-06-16",
      "title": "即梦 Seedance 2.0 mini 上线",
      "details": [
        "即梦宣布 Seedance 2.0 mini 上线，轻量化视频生成模型"
      ],
      "type": "模型更新",
      "source": "https://baike.baidu.com/item/AI%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7/68054585",
      "sourceName": "百度百科"
    },
    {
      "competitor": "higgsfield",
      "date": "2026-06-13",
      "title": "新增多模型对比与基准测试：2026 AI 视频标准",
      "details": [
        "提供 Sora 2.0、Kling 2.5、Runway Gen-4 等 6 大模型并排性能对比",
        "评测维度：时间一致性、运动模糊精度、提示词遵循度、角色身份保持等",
        "用户可按商业美学或长叙事场景选择优化预设"
      ],
      "type": "新功能",
      "source": "https://reel-stack.com/news/higgsfield-higgsfield-adds-multi-model-comparison-and-benchmarking-for--2026-06-13",
      "sourceName": "ReelStack"
    },
    {
      "competitor": "pika",
      "date": "2026-06-11",
      "title": "实时文生视频 + SceneFlow 多场景叙事",
      "details": [
        "支持实时文生视频：1080p 片段 30 秒内出片",
        "新增 SceneFlow 功能，支持多场景叙事与流畅镜头衔接"
      ],
      "type": "产品升级",
      "source": "https://resource.digen.ai/pika-labs-review-2026-features",
      "sourceName": "Digen AI"
    },
    {
      "competitor": "deevid",
      "date": "2026-06-02",
      "title": "视频 Agent 工作流升级：微钩子优化、角色一致性引擎等",
      "details": [
        "Micro-Hook Optimization：每 7-15 秒自动插入注意力元素（TikTok）/ 22-38 秒（YouTube）",
        "Sentence Complexity Analyzer 与 Jargon Detector 辅助脚本优化",
        "Character Consistency Engine：追踪 147 个面部特征与 82 项身体比例指标，跨镜头保持形象统一",
        "3D Asset Importer：从照片生成写实产品模型与转台动画",
        "Cinematic Flow Analysis、Smart Trim、B-Roll Matching、Continuity Guardian、Directorial Styles 预设",
        "Voiceover & Sound Design：Vocal Fingerprint 声音指纹（30 秒样本捕捉音色）、Mood-to-Music 配乐生成"
      ],
      "type": "产品升级",
      "source": "https://resource.digen.ai/deevid-ai-video-agent-workflow-tutorial-2026",
      "sourceName": "Digen AI"
    },
    {
      "competitor": "luma",
      "date": "2026-05-29",
      "title": "Dream Machine 升级长影片叙事能力，切入专业影视市场",
      "details": [
        "强化角色一致性、镜头运动与场景连续性",
        "支持更长时间影片生成，新增电影级运镜控制与多场景切换",
        "同步强化团队协作：影视团队在线共同管理素材与生成流程"
      ],
      "type": "产品升级",
      "source": "https://news.pchome.com.tw/living/mypeople/20260529/index-78002748904453219009.html",
      "sourceName": "PChome新闻"
    },
    {
      "competitor": "pika",
      "date": "2026-05-24",
      "title": "Pika 1.5：Pikaffects 物理颠覆式特效",
      "details": [
        "Pikaffects 预设特效集：挤压、膨胀、扭曲等物理违和效果，面向 TikTok / Reels / 短视频传播",
        "上传图片或提示词即可应用特效，主打视觉冲击而非写实"
      ],
      "type": "模型更新",
      "source": "https://www.positioniseverything.net/pika-1-5-launches-with-physics-defying-ai-special-effects",
      "sourceName": "Position Is Everything"
    },
    {
      "competitor": "luma",
      "date": "2026-05-23",
      "title": "Dream Machine 扩展为完整创意平台 + 移动 App",
      "details": [
        "从独立视频生成器扩展为跨制作流程的创意工作区：风格、连续性、迭代与输出管理",
        "完整接入移动端工作流，可在手机上生成与迭代视频创意"
      ],
      "type": "产品升级",
      "source": "https://www.techbloat.com/luma-expands-dream-machine-ai-video-model-into-full-creative-platform-mobile-app.html",
      "sourceName": "TechBloat"
    },
    {
      "competitor": "sora",
      "date": "2026-05-22",
      "title": "Sora 实时 AI 视频背景编辑",
      "details": [
        "Sora Pro / Enterprise 用户可实时修改视频背景，无需暂停或重新渲染",
        "创作、活动与商业场景的交互式视频编辑新范式"
      ],
      "type": "新功能",
      "source": "https://aidailyshot.com/blog/openai-sora-real-time-ai-video-background-editing",
      "sourceName": "AI Daily Shot"
    },
    {
      "competitor": "sora",
      "date": "2026-05-20",
      "title": "可复用「角色」与视频拼接功能上线",
      "details": [
        "可复用「角色」跨多个生成场景保持连续性",
        "视频拼接工具将独立片段组合为更长的连贯序列"
      ],
      "type": "新功能",
      "source": "https://www.positioniseverything.net/openai-adds-reusable-characters-and-video-stitching-to-sora",
      "sourceName": "Position Is Everything"
    },
    {
      "competitor": "libtv",
      "date": "2026-05-18",
      "title": "LibTV 团队版正式上线",
      "details": [
        "支持根据团队规模、项目周期与生成需求，灵活采购席位数与生成资源",
        "适合已进入持续化生产阶段的 AI 视频团队；超 300 家短剧公司和影视工作室成为 B 端客户"
      ],
      "type": "产品升级",
      "source": "https://baike.baidu.com/item/%E6%BC%94%E8%AF%AD%E7%A7%91%E6%8A%80LibTV/68634817",
      "sourceName": "百度百科"
    },
    {
      "competitor": "sora",
      "date": "2026-05-18",
      "title": "宠物 AI 视频 + 社交功能 + Android 版计划",
      "details": [
        "新增创作宠物主题 AI 视频的工具，以及更多分享功能，向创意社交平台演进",
        "官方确认 Android 版计划，扩大 iOS 优先之外的受众"
      ],
      "type": "新功能",
      "source": "https://www.techbloat.com?p=1548228/",
      "sourceName": "TechBloat"
    },
    {
      "competitor": "runway",
      "date": "2026-05-13",
      "title": "Gen-4.5 原生音频生成与编辑；GWM-1 通用世界模型家族",
      "details": [
        "Gen-4.5 支持原生音频生成 + 原生音频编辑：同一生成过程输出同步音频，无需第三方工具后配",
        "GWM-1（General World Model）家族发布：面向 Worlds / Avatars / Robotics，扩展 3D 环境合成与具身 Agent 训练"
      ],
      "type": "模型更新",
      "source": "https://aitooltier.com/tools/runway",
      "sourceName": "AIToolTier"
    },
    {
      "competitor": "libtv",
      "date": "2026-05-08",
      "title": "分镜组功能上线",
      "details": [
        "多选节点一键打组合并分镜组，多图收纳进整齐宫格，画布瞬间清爽",
        "智能排序：自动从左到右、从上到下排列",
        "一键导出带序号的 4K 大图"
      ],
      "type": "新功能",
      "source": "https://libtv.gongke.net/",
      "sourceName": "LibTV 导航"
    },
    {
      "competitor": "libtv",
      "date": "2026-04-27",
      "title": "HappyHorse 1.0 模型全网首发",
      "details": [
        "支持文生、图生、参考图生成视频，3-15 秒时长任选",
        "支持最多 9 张图像参考图，智能多镜头调度与分镜编排",
        "动作自然度、微表情刻画、对白真实感三方面显著提升"
      ],
      "type": "模型更新",
      "source": "https://libtv.gongke.net/",
      "sourceName": "LibTV 导航"
    },
    {
      "competitor": "sora",
      "date": "2026-04-26",
      "title": "OpenAI 发布 Sora 2",
      "details": [
        "最新视频生成模型：物理更精准、更真实、更可控，支持同步对白与音效",
        "可通过全新 Sora App 使用；同日旧 Sora 独立产品下线，能力融入 ChatGPT 生态",
        "Sora 2 可生成最长 25 秒视频，需 ChatGPT Plus（$20/月）或 Pro（$200/月）订阅"
      ],
      "type": "模型更新",
      "source": "https://openai.com/pt-BR/index/sora-2/",
      "sourceName": "OpenAI 官方"
    },
    {
      "competitor": "kling",
      "date": "2026-04-23",
      "title": "全球首个原生 4K 直出视频模型",
      "details": [
        "可灵AI 支持原生 4K 直出，媲美院线级质感",
        "已在历史剧《太平年》、亚马逊剧集《大卫之家》等影视制作中用于视觉特效镜头"
      ],
      "type": "模型更新",
      "source": "https://app.klingai.com/global/release-history",
      "sourceName": "可灵AI Release Notes"
    },
    {
      "competitor": "vidu",
      "date": "2026-04-13",
      "title": "Vidu Q3 系列 reference2video 扩展",
      "details": [
        "reference2video 新增 viduq3-mix、viduq3-turbo、viduq3 模型",
        "高效生成高质量音视频内容，让视频内容更生动、立体"
      ],
      "type": "模型更新",
      "source": "http://platform.vidu.com/docs/update",
      "sourceName": "Vidu Update Notice"
    },
    {
      "competitor": "deevid",
      "date": "2026-04-10",
      "title": "Q2 2026 更新：多模型打包成为核心优势",
      "details": [
        "新增模型：Sora 2、Veo 3.1、Kling、Runway、Pika 等，支持多模型打包订阅",
        "定价：Lite $10 / Pro $25 / Premium $119，角色一致性纳入所有套餐（含 Lite）",
        "1080p 为输出上限，更高分辨率需外部放大",
        "评测建议：新用户先用前 50 积分在三个模型上跑同一提示词，选出契合风格"
      ],
      "type": "产品升级",
      "source": "https://deevidreview.com/blog/deevid-ai-q2-2026-update/",
      "sourceName": "Deevid Review"
    },
    {
      "competitor": "pixverse",
      "date": "2026-04-07",
      "title": "PixVerse C1：面向电影制作的 AI 视频模型",
      "details": [
        "PixVerse 发布 C1，一个为电影制作打造的 AI 视频模型"
      ],
      "type": "模型更新",
      "source": "https://pixverse.ai",
      "sourceName": "PixVerse 官网"
    },
    {
      "competitor": "pika",
      "date": "2026-04-02",
      "title": "PikaStream 1.0：AI Agent 实时视频聊天",
      "details": [
        "与 AI Agent 进行面对面实时视频对话，24 FPS、约 1.5 秒语音转视频延迟",
        "可邀请 Pika AI Self 直接加入 Google Meet 实时参会",
        "面向其他 Agent 的 Skill 已在 GitHub 开源"
      ],
      "type": "新功能",
      "source": "https://experiment.pika.art/blog/introducing-real-time-video-chat",
      "sourceName": "Pika Blog"
    },
    {
      "competitor": "pixverse",
      "date": "2026-04-01",
      "title": "R1 实时世界模型更新：共享世界与个性化虚拟形象",
      "details": [
        "R1 Real-Time World Model 新增共享世界与个性化虚拟形象"
      ],
      "type": "产品升级",
      "source": "https://pixverse.ai",
      "sourceName": "PixVerse 官网"
    },
    {
      "competitor": "pixverse",
      "date": "2026-03-31",
      "title": "从创作工具升级为制作平台：Studio 与开发者版本",
      "details": [
        "PixVerse 从 AI 视频创作工具进化为制作平台，推出 Studio 与开发者版本"
      ],
      "type": "产品升级",
      "source": "https://pixverse.ai",
      "sourceName": "PixVerse 官网"
    },
    {
      "competitor": "pixverse",
      "date": "2026-03-30",
      "title": "PixVerse V6 发布：电影级镜头控制 + 原生音频",
      "details": [
        "20+ 电影级摄影机控制（推轨、摇臂、环绕、跟拍等，参数化可调）",
        "原生音频同步：环境音、音效与对话随视频一同生成",
        "多镜头引擎：单次生成定义多场景序列；最长 15 秒 1080p（此前 8 秒 720p）",
        "CLI 支持 Claude Code、Codex、Cursor、OpenClaw 等编程智能体工作流"
      ],
      "type": "模型更新",
      "source": "https://pixverse.ai/zh/blog/pixverse-launches-v6-advancing-ai-video-generation",
      "sourceName": "PixVerse 官方博客"
    },
    {
      "competitor": "xyq",
      "date": "2026-03-19",
      "title": "短剧 Agent 上线：全球首个 Seedance 系列短剧 Agent",
      "details": [
        "上传剧本并确认基础需求后，自动完成故事蓝图构建、角色设计、分镜生成等流程",
        "搭载 Seedance 2.0 模型，最多上传 10 万字剧本直出视频成片",
        "内测阶段制作的《万兽独尊》上线 4 天抖音播放量破亿"
      ],
      "type": "新功能",
      "source": "https://baike.baidu.com/item/%E5%B0%8F%E4%BA%91%E9%9B%80/67428202",
      "sourceName": "百度百科"
    },
    {
      "competitor": "pixverse",
      "date": "2026-03-18",
      "title": "团队计划 / Mini Apps / 开发者 CLI 工具上线",
      "details": [
        "推出团队计划、Mini Apps 迷你应用、开发者 CLI 工具与企业级功能",
        "从 AI 视频生成工具全面升级为专业视频制作平台"
      ],
      "type": "产品升级",
      "source": "https://www.pixverse.blog/zh/updates",
      "sourceName": "PixVerse 产品动态"
    },
    {
      "competitor": "kling",
      "date": "2026-03-16",
      "title": "可灵 AI 团队功能上线 + 全新桌面端",
      "details": [
        "资产一键共享、权限精细管控，团队高效共创",
        "全新桌面端同步发布，灵感无缝流转"
      ],
      "type": "新功能",
      "source": "https://app.klingai.com/global/release-history",
      "sourceName": "可灵AI Release Notes"
    },
    {
      "competitor": "kling",
      "date": "2026-03-04",
      "title": "可灵视频 3.0 动作控制上线",
      "details": [
        "媲美专业动作捕捉技术，动态捕捉全面升级",
        "30 秒高难度动作一镜到底，肢体动作、表情、口型、手势全面掌控，角色面部高度一致"
      ],
      "type": "新功能",
      "source": "https://app.klingai.com/global/release-history",
      "sourceName": "可灵AI Release Notes"
    },
    {
      "competitor": "xyq",
      "date": "2026-02-28",
      "title": "v1.2.6 版本：新增「照片跟我动」并开放 Seedance 2.0",
      "details": [
        "新增「照片跟我动」功能，正式上线帮助中心",
        "集成并向用户开放体验 Seedance 2.0（因访问量大出现卡顿，官方计划推出 2.0 Fast 版缓解压力）"
      ],
      "type": "新功能",
      "source": "https://baike.baidu.com/item/%E5%B0%8F%E4%BA%91%E9%9B%80/67428202",
      "sourceName": "百度百科"
    },
    {
      "competitor": "pixverse",
      "date": "2026-02-28",
      "title": "R1 重大更新：个性化虚拟形象与共享世界",
      "details": [
        "从照片生成个性化虚拟形象",
        "无时间限制的持续共享世界、多用户实时互动"
      ],
      "type": "新功能",
      "source": "https://www.pixverse.blog/zh/updates",
      "sourceName": "PixVerse 产品动态"
    },
    {
      "competitor": "jimeng",
      "date": "2026-02-12",
      "title": "接入 Seedance 2.0 与 Seedream 5.0 Lite",
      "details": [
        "正式接入视频生成模型 Seedance 2.0 与图片生成模型 Seedream 5.0 Lite",
        "Seedance 2.0 模式支持主题参考、智能多帧、首尾帧与全能参考模式"
      ],
      "type": "模型更新",
      "source": "https://www.baike.com/wikiid/7383573569643806720",
      "sourceName": "快懂百科"
    },
    {
      "competitor": "vidu",
      "date": "2026-02-11",
      "title": "Vidu Q3-turbo / Q3-pro 模型支持扩展",
      "details": [
        "text2video 与 image2video、start-end2video 新增 viduq3-turbo 支持",
        "start-end2video 新增 viduq3-pro 支持，高效生成高质量音视频内容"
      ],
      "type": "模型更新",
      "source": "http://platform.vidu.com/docs/update",
      "sourceName": "Vidu Update Notice"
    },
    {
      "competitor": "kling",
      "date": "2026-02-05",
      "title": "可灵 3.0 系列模型全球上线：All in One, One for All",
      "details": [
        "可灵视频 3.0 / 3.0 Omni 与可灵图片 3.0 / 3.0 Omni 全球上线",
        "全模态输入输出：文本、图像、音频、视频统一工作流",
        "最长 15 秒视频、多语言方言原生音频、智能多镜头叙事、图生视频 + 主体参考",
        "图片 3.0 Omni 强化影视级叙事表达，2K/4K 超高清直出、系列组图功能"
      ],
      "type": "模型更新",
      "source": "https://ir.kuaishou.com/zh-hans/news-releases/news-release-details/keling30xiliemoxingquanmianshangxian",
      "sourceName": "快手科技新闻稿"
    },
    {
      "competitor": "vidu",
      "date": "2026-02-04",
      "title": "动作同步能力 + 一键解决方案场景",
      "details": [
        "动作同步：输入动作参考视频 + 角色图，生成角色按参考视频动作运动的视频",
        "一键通用电影：适配甜宠剧、直播剧、广告、纪录片等场景",
        "一键广告片、一键 AI MV（音频+图片合成 MV）、一键热门视频复制"
      ],
      "type": "新功能",
      "source": "http://platform.vidu.com/docs/update",
      "sourceName": "Vidu Update Notice"
    },
    {
      "competitor": "vidu",
      "date": "2026-01-30",
      "title": "Vidu Q3 发布：行业首个原生音视频长视频模型",
      "details": [
        "Q3 为行业首个长视频 AI 模型：原生音频与视频单次输出，音画同步叙事",
        "Artificial Analysis 榜单位列中国第一、全球第二"
      ],
      "type": "模型更新",
      "source": "https://www.prnewswire.com/news-releases/vidu-showcases-china-speed-in-advancing-ai-video-into-production-at-global-creativity-week-302675040.html",
      "sourceName": "PR Newswire"
    },
    {
      "competitor": "luma",
      "date": "2026-01-26",
      "title": "Ray3.14：原生 1080p，4 倍更快、3 倍更便宜",
      "details": [
        "原生 1080p 覆盖 Dream Machine 核心工作流",
        "720p 生成速度比 Ray3 快 4 倍、成本便宜 3 倍",
        "提示遵循更好、伪影更少，Modify Video 跨帧主体/物体/风格一致性提升，支持最长 18 秒"
      ],
      "type": "模型更新",
      "source": "https://lumalabs.ai/news/ray3_14",
      "sourceName": "Luma AI News"
    }
  ]
};
