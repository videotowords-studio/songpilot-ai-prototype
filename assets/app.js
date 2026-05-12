const SITE = (() => {
  const routes = [
    { id: "home", href: "index.html", icon: "⌂", group: "main", badge: "" },
    { id: "createSong", href: "create-song.html", icon: "♪", group: "main", badge: "" },
    { id: "musicVideo", href: "music-video.html", icon: "▣", group: "media", badge: "" },
    { id: "singingVideo", href: "singing-video.html", icon: "◉", group: "media", badge: "" },
    { id: "createPhoto", href: "create-photo.html", icon: "▧", group: "media", badge: "" },
    { id: "dancingVideo", href: "dancing-video.html", icon: "♟", group: "media", badge: "new" },
    { id: "lyricsVideo", href: "lyrics-video.html", icon: "T", group: "media", badge: "new" },
    { id: "seedance", href: "seedance.html", icon: "▤", group: "media", badge: "new" },
    { id: "stemSplitter", href: "stem-splitter.html", icon: "✂", group: "tools", badge: "" },
    { id: "vocalRemover", href: "vocal-remover.html", icon: "✄", group: "tools", badge: "" },
    { id: "musicPrompt", href: "music-prompt.html", icon: "☷", group: "tools", badge: "" },
    { id: "projects", href: "projects.html", icon: "▦", group: "workspace", badge: "" },
    { id: "credits", href: "credits.html", icon: "◍", group: "workspace", badge: "" },
    { id: "license", href: "license-center.html", icon: "☑", group: "workspace", badge: "" },
    { id: "account", href: "account.html", icon: "◌", group: "workspace", badge: "" },
    { id: "pricing", href: "pricing.html", icon: "$", group: "bottom", badge: "" },
    { id: "contact", href: "contact.html", icon: "✉", group: "bottom", badge: "" }
  ];

  const i18n = {
    zh: {
      langName: "中文",
      signIn: "登录",
      signOut: "退出",
      demoLogin: "演示登录",
      email: "邮箱",
      password: "密码",
      continue: "继续",
      close: "关闭",
      credits: "Credits 余额",
      new: "NEW",
      navGroups: {
        main: "",
        media: "Video & Photo",
        tools: "Music Tools",
        workspace: "Workspace",
        bottom: ""
      },
      nav: {
        home: "Home",
        createSong: "Create Song",
        musicVideo: "Music Video",
        singingVideo: "Singing Video",
        createPhoto: "Create Photo",
        dancingVideo: "AI Dancing Video",
        lyricsVideo: "Lyrics Video",
        seedance: "Seedance 2.0",
        stemSplitter: "Stem Splitter",
        vocalRemover: "Vocal Remover",
        musicPrompt: "Music Prompt",
        projects: "Projects",
        credits: "Credits",
        license: "License Center",
        account: "Account",
        pricing: "Pricing",
        contact: "Contact"
      },
      common: {
        settings: "设置",
        estimatedCost: "生成前报价",
        balance: "余额",
        refund: "失败自动返还",
        generate: "生成",
        result: "生成结果",
        upload: "上传文件",
        prompt: "提示词",
        examples: "示例",
        faq: "常见问题"
      },
      pages: {
        home: {
          title: "AI Song & Video Generator",
          desc: "从歌词、prompt、音频或图片开始，生成歌曲、封面、音乐视频、歌词视频和可下载授权凭证。",
          cards: ["低门槛生成入口", "透明 credits", "发布素材闭环"]
        },
        createSong: {
          title: "AI Song Generator",
          desc: "歌词成歌、Prompt 成歌和纯伴奏生成。每次生成前展示 credits、余额和失败返还规则。",
          mainLabel: "歌词或歌曲描述",
          placeholder: "输入歌词、主题、风格、情绪、用途...",
          generate: "Generate Music",
          cost: "3",
          resultA: "歌曲版本 A",
          resultB: "自动封面"
        },
        musicVideo: {
          title: "AI Music Video",
          desc: "上传歌曲或选择项目歌曲，生成适合 TikTok、Shorts 和 MV 预告的音乐视频。",
          mainLabel: "视频描述",
          placeholder: "描述场景、镜头、色彩、节奏和转场...",
          generate: "Generate Video",
          cost: "48",
          resultA: "竖版音乐视频",
          resultB: "镜头时间线"
        },
        singingVideo: {
          title: "AI Singing Video",
          desc: "用头像、照片或角色图生成对口型唱歌视频。",
          mainLabel: "表演描述",
          placeholder: "微笑、近景、明亮舞台、跟随副歌加强表情...",
          generate: "Generate Singing Video",
          cost: "36",
          resultA: "唱歌视频",
          resultB: "头像封面"
        },
        createPhoto: {
          title: "AI Image Generator",
          desc: "生成封面、角色图、视频首帧和社媒宣传图。",
          mainLabel: "图片描述",
          placeholder: "霓虹流行歌曲封面，城市倒影，强标题排版...",
          generate: "Generate Image",
          cost: "6",
          resultA: "封面图 A",
          resultB: "竖版海报"
        },
        dancingVideo: {
          title: "AI Dancing Video",
          desc: "上传人物或角色图，让舞蹈动作与歌曲节拍同步。",
          mainLabel: "舞蹈描述",
          placeholder: "K-pop 风格，副歌动作有记忆点，明亮棚拍...",
          generate: "Generate Dance",
          cost: "52",
          resultA: "舞蹈视频",
          resultB: "节拍地图"
        },
        lyricsVideo: {
          title: "Lyric Video Generator",
          desc: "把歌曲、歌词和封面快速变成竖版歌词视频。",
          mainLabel: "歌词",
          placeholder: "粘贴歌词，系统会生成同步字幕...",
          generate: "Generate Lyric Video",
          cost: "18",
          resultA: "竖版歌词视频",
          resultB: "动态封面背景"
        },
        seedance: {
          title: "Seedance 2.0",
          desc: "文字、图片或音频驱动的视频生成入口，适合音乐视觉短片和动态封面。",
          mainLabel: "视频提示词",
          placeholder: "电影感霓虹城市，镜头缓慢推进，粒子跟随音乐跳动...",
          generate: "Generate Seedance",
          cost: "50",
          resultA: "动态视频",
          resultB: "Storyboard"
        },
        stemSplitter: {
          title: "Stem Splitter",
          desc: "上传音频并分离 vocals、drums、bass、other。",
          mainLabel: "处理说明",
          placeholder: "可选：说明需要保留的人声或乐器重点...",
          generate: "Split Stems",
          cost: "10",
          resultA: "Vocals",
          resultB: "Drums / Bass"
        },
        vocalRemover: {
          title: "Vocal Remover",
          desc: "从歌曲里移除人声，得到伴奏和清唱轨。",
          mainLabel: "处理说明",
          placeholder: "可选：降噪、保留混响或增强伴奏...",
          generate: "Remove Vocals",
          cost: "8",
          resultA: "Instrumental",
          resultB: "Acapella"
        },
        musicPrompt: {
          title: "Music Prompt Guide",
          desc: "把灵感拆成场景、风格、情绪、人声和用途，生成更稳定的音乐提示词。"
        },
        projects: {
          title: "Projects",
          desc: "所有歌曲、封面、视频、授权和导出记录都归属项目。"
        },
        credits: {
          title: "Credits",
          desc: "每一次扣费、返还、订阅发放和申诉都清楚可追踪。"
        },
        license: {
          title: "License Center",
          desc: "每个商用资产都有 License Card，可下载、可追溯。"
        },
        account: {
          title: "Account",
          desc: "管理登录信息、订阅、隐私、语言和通知。"
        },
        pricing: {
          title: "Pricing",
          desc: "清楚说明每档 credits、可生成次数、商用授权和取消规则。"
        },
        contact: {
          title: "Contact",
          desc: "客服、版权申诉、企业合作和 API 接入入口。"
        }
      }
    },
    en: {
      langName: "English",
      signIn: "Sign In",
      signOut: "Sign Out",
      demoLogin: "Demo Login",
      email: "Email",
      password: "Password",
      continue: "Continue",
      close: "Close",
      credits: "Credits balance",
      new: "NEW",
      navGroups: {
        main: "",
        media: "Video & Photo",
        tools: "Music Tools",
        workspace: "Workspace",
        bottom: ""
      },
      nav: {
        home: "Home",
        createSong: "Create Song",
        musicVideo: "Music Video",
        singingVideo: "Singing Video",
        createPhoto: "Create Photo",
        dancingVideo: "AI Dancing Video",
        lyricsVideo: "Lyrics Video",
        seedance: "Seedance 2.0",
        stemSplitter: "Stem Splitter",
        vocalRemover: "Vocal Remover",
        musicPrompt: "Music Prompt",
        projects: "Projects",
        credits: "Credits",
        license: "License Center",
        account: "Account",
        pricing: "Pricing",
        contact: "Contact"
      },
      common: {
        settings: "Settings",
        estimatedCost: "Estimated cost",
        balance: "Balance",
        refund: "Failure refund",
        generate: "Generate",
        result: "Result",
        upload: "Upload",
        prompt: "Prompt",
        examples: "Examples",
        faq: "FAQ"
      },
      pages: {
        home: {
          title: "AI Song & Video Generator",
          desc: "Start from lyrics, prompts, audio, or images to create songs, covers, videos, lyric videos, and downloadable license cards.",
          cards: ["Low-friction creation", "Transparent credits", "Publishing asset workflow"]
        },
        createSong: {
          title: "AI Song Generator",
          desc: "Generate songs from lyrics, prompts, or instrumental briefs with upfront credits and refund rules.",
          mainLabel: "Lyrics or song brief",
          placeholder: "Enter lyrics, theme, genre, mood, voice, and usage...",
          generate: "Generate Music",
          cost: "3",
          resultA: "Song Version A",
          resultB: "Auto Cover"
        },
        musicVideo: {
          title: "AI Music Video",
          desc: "Upload a song or select a project track to create short-form music videos.",
          mainLabel: "Video prompt",
          placeholder: "Describe scenes, camera, color, rhythm, and transitions...",
          generate: "Generate Video",
          cost: "48",
          resultA: "Vertical Music Video",
          resultB: "Scene Timeline"
        },
        singingVideo: {
          title: "AI Singing Video",
          desc: "Create lip-sync singing videos from portraits, avatars, or illustrated characters.",
          mainLabel: "Performance direction",
          placeholder: "Smile, close-up camera, bright stage, stronger chorus expression...",
          generate: "Generate Singing Video",
          cost: "36",
          resultA: "Singing Video",
          resultB: "Avatar Cover"
        },
        createPhoto: {
          title: "AI Image Generator",
          desc: "Create cover art, characters, video keyframes, and social posters.",
          mainLabel: "Image prompt",
          placeholder: "Neon pop album cover, reflective city, bold title typography...",
          generate: "Generate Image",
          cost: "6",
          resultA: "Cover Option A",
          resultB: "Vertical Poster"
        },
        dancingVideo: {
          title: "AI Dancing Video",
          desc: "Upload a character or portrait and sync dance motion to your music.",
          mainLabel: "Dance prompt",
          placeholder: "K-pop inspired dance, memorable chorus move, clean studio light...",
          generate: "Generate Dance",
          cost: "52",
          resultA: "Dance Video",
          resultB: "Beat Map"
        },
        lyricsVideo: {
          title: "Lyric Video Generator",
          desc: "Turn a song, lyrics, and cover into a vertical lyric video.",
          mainLabel: "Lyrics",
          placeholder: "Paste lyrics for synchronized subtitles...",
          generate: "Generate Lyric Video",
          cost: "18",
          resultA: "Vertical Lyric Video",
          resultB: "Motion Cover"
        },
        seedance: {
          title: "Seedance 2.0",
          desc: "Generate motion video from text, image, or audio direction.",
          mainLabel: "Video prompt",
          placeholder: "Cinematic neon city, slow camera push-in, particles reacting to music...",
          generate: "Generate Seedance",
          cost: "50",
          resultA: "Motion Video",
          resultB: "Storyboard"
        },
        stemSplitter: {
          title: "Stem Splitter",
          desc: "Upload audio and split vocals, drums, bass, and other stems.",
          mainLabel: "Processing note",
          placeholder: "Optional: specify vocal or instrument priorities...",
          generate: "Split Stems",
          cost: "10",
          resultA: "Vocals",
          resultB: "Drums / Bass"
        },
        vocalRemover: {
          title: "Vocal Remover",
          desc: "Remove vocals from a song and export instrumental plus acapella tracks.",
          mainLabel: "Processing note",
          placeholder: "Optional: noise reduction, reverb handling, instrumental boost...",
          generate: "Remove Vocals",
          cost: "8",
          resultA: "Instrumental",
          resultB: "Acapella"
        },
        musicPrompt: {
          title: "Music Prompt Guide",
          desc: "Build stronger prompts from scene, genre, mood, voice, and usage."
        },
        projects: { title: "Projects", desc: "Manage songs, covers, videos, licenses, and exports in project folders." },
        credits: { title: "Credits", desc: "Track deductions, refunds, subscription grants, and disputes." },
        license: { title: "License Center", desc: "Every commercial asset has a downloadable, traceable License Card." },
        account: { title: "Account", desc: "Manage sign-in, subscription, privacy, language, and notifications." },
        pricing: { title: "Pricing", desc: "Transparent plans with credits, generation estimates, commercial rights, and cancellation rules." },
        contact: { title: "Contact", desc: "Support, billing, license disputes, enterprise, and API requests." }
      }
    }
  };

  const state = {
    page: document.body.dataset.page || "home",
    lang: localStorage.getItem("sp_lang") || "zh",
    credits: Number(localStorage.getItem("sp_credits") || 343),
    user: JSON.parse(localStorage.getItem("sp_user") || "null"),
    running: false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const t = () => i18n[state.lang] || i18n.zh;

  function route(id) {
    return routes.find(item => item.id === id);
  }

  function pageText(id = state.page) {
    return t().pages[id] || t().pages.home;
  }

  function init() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = `${pageText().title} | SongPilot`;
    $("#app").innerHTML = renderShell();
    bindEvents();
    updateAuth();
    updateCredits();
  }

  function renderShell() {
    return `
      <div class="shell">
        ${renderSidebar()}
        <main class="main">
          ${renderTopbar()}
          ${renderPage()}
        </main>
      </div>
      ${renderLoginModal()}
      <div class="toast" id="toast" role="status" aria-live="polite"></div>
    `;
  }

  function renderSidebar() {
    const groups = ["main", "media", "tools", "workspace", "bottom"];
    return `
      <aside class="sidebar" id="sidebar">
        <a class="brand" href="index.html">
          <div class="logo">♪</div>
          <b>SongPilot</b>
        </a>
        ${groups.map(group => `
          <div class="nav-section">
            ${t().navGroups[group] ? `<div class="nav-title">${t().navGroups[group]}</div>` : ""}
            ${routes.filter(item => item.group === group).map(renderNavItem).join("")}
          </div>
        `).join("")}
        <div class="sidebar-footer">
          <div class="balance-card">
            <span>${t().credits}</span>
            <strong id="sideCredits">${state.credits}</strong>
            <div class="meter"><i></i></div>
          </div>
        </div>
      </aside>
    `;
  }

  function renderNavItem(item) {
    return `
      <a class="nav-item ${item.id === state.page ? "active" : ""}" href="${item.href}">
        <span>${item.icon}</span>
        <span>${t().nav[item.id]}</span>
        ${item.badge ? `<small class="badge">${t().new}</small>` : ""}
      </a>
    `;
  }

  function renderTopbar() {
    const top = ["createSong", "musicVideo", "createPhoto", "pricing", "contact"];
    return `
      <header class="topbar">
        <button class="mobile-toggle" id="mobileMenu" aria-label="menu">☰</button>
        <a class="top-logo" href="index.html">
          <span>♫</span>
          <span>SongPilot</span>
          <small>AI</small>
        </a>
        <nav class="top-nav" aria-label="top navigation">
          ${top.map(id => `<a class="${id === state.page ? "active" : ""} ${id === "createPhoto" ? "has-dot" : ""}" href="${route(id).href}">${t().nav[id]}</a>`).join("")}
        </nav>
        <div class="account">
          <select class="select-pill" id="langSelect" aria-label="language">
            <option value="zh" ${state.lang === "zh" ? "selected" : ""}>中文</option>
            <option value="en" ${state.lang === "en" ? "selected" : ""}>English</option>
          </select>
          <button class="${state.user ? "avatar-btn" : "sign-in"}" id="authButton">
            ${state.user ? `<span class="avatar-dot">${state.user.email.slice(0, 1).toUpperCase()}</span><span>${state.user.email.split("@")[0]}</span>` : t().signIn}
          </button>
        </div>
      </header>
    `;
  }

  function renderPage() {
    if (state.page === "home") return renderHome();
    if (["pricing", "contact", "projects", "credits", "license", "account", "musicPrompt"].includes(state.page)) {
      return renderSpecialPage(state.page);
    }
    return renderToolPage(state.page);
  }

  function renderHero(id = state.page) {
    const p = pageText(id);
    return `<section class="page-hero"><h1>${p.title}</h1><p>${p.desc}</p></section>`;
  }

  function renderHome() {
    const p = pageText("home");
    const quick = ["createSong", "musicVideo", "singingVideo", "lyricsVideo", "dancingVideo", "seedance"];
    return `
      <section class="hero">
        <h1>${p.title}</h1>
        <p>${p.desc}</p>
      </section>
      <section class="quick-tabs">
        ${quick.map(id => `<a class="quick-tab ${id === "createSong" ? "active" : ""}" href="${route(id).href}">${route(id).icon} ${t().nav[id]} ${["musicVideo", "singingVideo", "lyricsVideo", "dancingVideo", "seedance"].includes(id) ? `<span class="new">${t().new}</span>` : ""}</a>`).join("")}
      </section>
      <section class="page-wrap">
        ${renderSongGeneratorCard("homeResult")}
        <div class="result-zone" id="homeResult">${renderResultGrid(pageText("createSong"))}</div>
      </section>
      <section class="section-head"><div><h2>${p.cards[0]}</h2><p>${p.desc}</p></div></section>
      <section class="info-grid page-wrap">
        ${p.cards.map((card, index) => `<article class="stat-card"><h3>${card}</h3><p>${homeCardText(index)}</p></article>`).join("")}
      </section>
    `;
  }

  function homeCardText(index) {
    const zh = [
      "首页直接给生成器入口，像 MakeSong 一样低门槛。",
      "每次生成前展示 credits、余额、预计结果和失败返还。",
      "歌曲、封面、歌词视频、授权和导出记录都在同一项目链路里。"
    ];
    const en = [
      "The homepage opens directly with the creation surface.",
      "Every run shows credits, balance, output scope, and refund rules upfront.",
      "Songs, covers, lyric videos, licenses, and exports stay in one project workflow."
    ];
    return (state.lang === "zh" ? zh : en)[index];
  }

  function renderSongGeneratorCard(targetId) {
    const p = pageText("createSong");
    return `
      <div class="generator-card">
        <div class="generator-inner">
          <div class="mode-row">
            <div class="segmented">
              <button class="active" type="button">Lyric to Music</button>
              <button type="button">Prompt to Music</button>
            </div>
            <button class="model-select" type="button"><span>V5</span><span class="mini-new">${t().new}</span><span>⌄</span></button>
          </div>
          <div class="field-block">
            <textarea class="counted" maxlength="5000" placeholder="${p.placeholder}"></textarea>
            <div class="field-footer">
              <button class="ghost-pill fill-demo" type="button">lyrics generate ✨</button>
              <span class="counter"><span>0</span>/5000</span>
            </div>
          </div>
          <div class="control-grid">
            <div class="control-field"><label>Styles</label><input class="control-input" placeholder="Pop, Rock, Jazz, Female voice"></div>
            <div class="control-field"><label>Title</label><input class="control-input" placeholder="Midnight Launch"></div>
          </div>
          ${renderCostStrip(p.cost)}
          <button class="generate run-btn" data-cost="${p.cost}" data-target="${targetId}" type="button">${p.generate}</button>
          <p class="generate-note">Generating once costs ${p.cost} credits · License Card is created for commercial exports</p>
        </div>
      </div>
    `;
  }

  function renderToolPage(id) {
    const p = pageText(id);
    return `
      ${renderHero(id)}
      <section class="page-wrap">
        <div class="tool-card">
          <div class="tool-inner tool-grid">
            <div class="input-panel">
              <div class="panel-title"><h2>${p.title}</h2><span>${p.cost} credits</span></div>
              ${renderPrimaryInput(id, p)}
              <div class="result-zone" id="${id}Result">${renderResultGrid(p)}</div>
            </div>
            <aside class="settings-panel">
              ${renderSettings(id)}
              ${renderQuoteBox(id, p)}
            </aside>
          </div>
        </div>
      </section>
      ${renderSamples(id)}
      ${renderFaq(id)}
    `;
  }

  function renderPrimaryInput(id, p) {
    const uploadFirst = ["musicVideo", "singingVideo", "dancingVideo", "stemSplitter", "vocalRemover", "lyricsVideo"].includes(id);
    return `
      ${uploadFirst ? renderUploadBox(id) : ""}
      <div class="control-field">
        <label>${p.mainLabel}</label>
        <textarea class="control-input counted" maxlength="1600" placeholder="${p.placeholder}"></textarea>
      </div>
      ${id === "singingVideo" || id === "dancingVideo" ? renderUploadBox("portrait") : ""}
      ${id === "createPhoto" || id === "seedance" ? `<div class="control-grid">${renderUploadBox("reference")}${renderUploadBox("optionalAudio")}</div>` : ""}
    `;
  }

  function renderUploadBox(kind) {
    const copy = {
      musicVideo: ["♪", "Upload audio or select project", "MP3/WAV or an existing SongPilot song."],
      lyricsVideo: ["T", "Select song and lyrics", "Auto-read lyrics or paste synchronized lines."],
      singingVideo: ["☻", "Upload portrait", "Portrait, avatar, or illustrated character."],
      dancingVideo: ["♟", "Upload dancer image", "Full-body image works best."],
      stemSplitter: ["↥", "Drop MP3/WAV here", "Split vocals, drums, bass, and other stems."],
      vocalRemover: ["♪", "Upload song", "Export instrumental and acapella tracks."],
      portrait: ["☻", "Face or character image", "Used for expression and lip-sync motion."],
      reference: ["▧", "Reference image", "Optional image for first frame or style."],
      optionalAudio: ["♫", "Optional audio", "Sync camera intensity to the beat."]
    }[kind] || ["↥", "Upload file", "Drag and drop or select from project library."];
    return `<div class="upload-box"><div><div class="upload-icon">${copy[0]}</div><strong>${copy[1]}</strong><p>${copy[2]}</p></div></div>`;
  }

  function renderSettings(id) {
    const ratio = ["9:16", "1:1", "16:9"];
    const mode = id === "createSong" ? ["Lyric", "Prompt", "Instrumental"] :
      id === "stemSplitter" ? ["4 Stems", "2 Stems", "Pro"] :
      id === "vocalRemover" ? ["Clean", "Fast", "Pro"] :
      ["Minimal", "Dynamic", "Cinematic"];
    return `
      <div class="setting-card">
        <h3>${t().common.settings}</h3>
        <div class="chip-grid">${mode.map((item, i) => `<button class="option-chip ${i === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}</div>
        <div class="chip-grid">${ratio.map((item, i) => `<button class="option-chip ${i === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}</div>
        <div class="control-grid">
          <div class="control-field"><label>Quality</label><select><option>720p</option><option>1080p</option></select></div>
          <div class="control-field"><label>Privacy</label><select><option>Private</option><option>Public</option></select></div>
        </div>
      </div>
    `;
  }

  function renderQuoteBox(id, p) {
    return `
      <div class="quote-box">
        <span>${t().common.estimatedCost}</span>
        <div class="big">${p.cost}</div>
        <div class="quote-line"><span>${t().common.balance}</span><strong class="balanceText">${state.credits}</strong></div>
        <div class="quote-line"><span>${t().common.refund}</span><strong>100%</strong></div>
        <button class="primary-btn run-btn" data-cost="${p.cost}" data-target="${id}Result" type="button">${p.generate}</button>
      </div>
    `;
  }

  function renderCostStrip(cost) {
    return `
      <div class="control-grid">
        <div class="stat-card"><h3>${t().common.estimatedCost}</h3><p>${cost} credits</p></div>
        <div class="stat-card"><h3>${t().common.balance}</h3><p><span class="balanceText">${state.credits}</span> credits</p></div>
      </div>
    `;
  }

  function renderResultGrid(p) {
    return `
      <div class="output-grid two">
        <article class="output-card">
          <div class="visual"><div class="wave">${"<i></i>".repeat(10)}</div></div>
          <h3>${p.resultA || "Output A"}</h3>
          <p>${state.lang === "zh" ? "已保存到项目库，可继续下载或生成下一步素材。" : "Saved to projects. Continue to download or create the next asset."}</p>
        </article>
        <article class="output-card">
          <div class="visual alt">${p.resultB || "Output B"}</div>
          <h3>${p.resultB || "Output B"}</h3>
          <p>${state.lang === "zh" ? "自动写入生成记录，并可生成 License Card。" : "Generation metadata is stored and ready for a License Card."}</p>
        </article>
      </div>
    `;
  }

  function renderSamples(id) {
    const labels = state.lang === "zh" ? ["产品发布", "播客片头", "游戏主题"] : ["Product Launch", "Podcast Intro", "Game Theme"];
    return `
      <section class="section-head"><div><h2>${t().common.examples}</h2><p>${state.lang === "zh" ? "页面级示例帮助用户理解这个工具能做什么。" : "Page-level examples clarify what each tool can create."}</p></div></section>
      <section class="sample-grid page-wrap">
        ${labels.map((label, index) => `<article class="sample-card"><div class="visual ${index === 1 ? "alt" : index === 2 ? "green" : ""}">${label}</div><h3>${label}</h3><p>${state.lang === "zh" ? "点击可填入一组推荐参数。" : "Click to fill a recommended setup."}</p></article>`).join("")}
      </section>
    `;
  }

  function renderFaq(id) {
    const qs = state.lang === "zh"
      ? [["失败会扣费吗？", "系统失败、渲染超时、内容安全拒绝均自动返还。"], ["能商用吗？", "付费生成资产会生成可下载 License Card。"], ["能继续编辑吗？", "结果会进入项目库，可继续生成封面、视频或分轨。"]]
      : [["Do failures cost credits?", "System failures, render timeouts, and safety rejections are refunded."], ["Can I use outputs commercially?", "Paid generations include a downloadable License Card."], ["Can I keep editing?", "Results are saved to Projects for covers, videos, stems, and exports."]];
    return `<section class="section-head"><div><h2>${t().common.faq}</h2></div></section><section class="info-grid page-wrap">${qs.map(q => `<article class="stat-card"><h3>${q[0]}</h3><p>${q[1]}</p></article>`).join("")}</section>`;
  }

  function renderSpecialPage(id) {
    if (id === "pricing") return renderPricing();
    if (id === "contact") return renderContact();
    if (id === "musicPrompt") return renderPromptBuilder();
    if (id === "projects") return renderProjects();
    if (id === "credits") return renderCredits();
    if (id === "license") return renderLicense();
    if (id === "account") return renderAccount();
    return renderHome();
  }

  function renderPricing() {
    const plans = [
      ["Free", "$0", "30", "Start Free"],
      ["Creator", "$12", "600", "Choose Creator"],
      ["Studio", "$29", "1800", "Choose Studio"],
      ["Team", "$79", "6000", "Contact Sales"]
    ];
    return `${renderHero("pricing")}<section class="pricing-grid page-wrap">${plans.map((p, i) => `<article class="plan-card ${i === 1 ? "featured" : ""}"><h3>${p[0]}</h3><div class="price">${p[1]} <small>/ month</small></div><p>${p[2]} credits</p><ul><li><span class="check">✓</span><span>Commercial license</span></li><li><span class="check">✓</span><span>Failure refunds</span></li><li><span class="check">✓</span><span>Transparent credit ledger</span></li></ul><button class="${i === 1 ? "primary-btn" : "small-btn"}" type="button" data-toast="${p[0]} selected">${p[3]}</button></article>`).join("")}</section>${renderFaq("pricing")}`;
  }

  function renderContact() {
    return `${renderHero("contact")}<section class="page-wrap"><div class="tool-card"><div class="tool-inner tool-grid"><div class="input-panel"><div class="panel-title"><h2>Support Ticket</h2><span>SLA 24h</span></div><div class="control-grid"><div class="control-field"><label>${t().email}</label><input class="control-input" placeholder="you@example.com"></div><div class="control-field"><label>Topic</label><select class="control-input"><option>Billing / Credits</option><option>License</option><option>API / Team</option></select></div></div><div class="control-field"><label>Message</label><textarea class="control-input" placeholder="Describe your issue"></textarea></div><button class="primary-btn" type="button" data-toast="Ticket created">Submit Ticket</button></div><aside class="settings-panel"><div class="setting-card"><h3>Support SLA</h3><ul class="list"><li><span class="check">✓</span><span>Creator / Studio: 24h first response</span></li><li><span class="check">✓</span><span>Team: 8h first response</span></li><li><span class="check">✓</span><span>Credit disputes attach task logs</span></li></ul></div></aside></div></div></section>`;
  }

  function renderPromptBuilder() {
    return `${renderHero("musicPrompt")}<section class="page-wrap"><div class="tool-card"><div class="tool-inner tool-grid"><div class="input-panel"><div class="panel-title"><h2>Prompt Builder</h2><span>Free</span></div><div class="control-grid"><div class="control-field"><label>Scene</label><input class="control-input" id="promptScene" placeholder="Product launch video"></div><div class="control-field"><label>Genre</label><input class="control-input" id="promptGenre" placeholder="Pop electronic"></div><div class="control-field"><label>Mood</label><input class="control-input" id="promptMood" placeholder="bright, confident"></div><div class="control-field"><label>Voice</label><input class="control-input" id="promptVoice" placeholder="female vocal"></div></div><div class="control-field"><label>Generated Prompt</label><textarea class="control-input" id="builtPrompt"></textarea></div><button class="primary-btn" id="buildPrompt" type="button">Build Prompt</button></div><aside class="settings-panel"><div class="setting-card"><h3>Formula</h3><ul class="list"><li><span class="check">✓</span><span>Scene + Style + Mood + Voice</span></li><li><span class="check">✓</span><span>Describe structure and hook</span></li><li><span class="check">✓</span><span>Avoid real artists or copyrighted songs</span></li></ul></div></aside></div></div></section>`;
  }

  function renderProjects() {
    const rows = [["Launch Pulse", "Song + Cover + Lyric Video", "Ready"], ["Indie Game Menu", "Instrumental Loop", "Licensed"], ["Wedding Chorus", "Lyrics Draft", "Draft"]];
    return `${renderHero("projects")}<section class="page-wrap"><div class="content-card"><table class="table"><thead><tr><th>Project</th><th>Assets</th><th>Status</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="status-pill">${r[2]}</span></td></tr>`).join("")}</tbody></table></div></section>`;
  }

  function renderCredits() {
    const rows = [["Generate Song", "-3", "TASK-1842"], ["Render failed refund", "+18", "REF-1020"], ["Studio monthly grant", "+1800", "SUB-2026"]];
    return `${renderHero("credits")}<section class="page-wrap"><div class="content-card"><table class="table"><thead><tr><th>Event</th><th>Credits</th><th>Trace</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div></section>`;
  }

  function renderLicense() {
    return `${renderHero("license")}<section class="page-wrap"><div class="content-card"><h3>License SP-20260512-1842</h3><p>Launch Pulse · Song + Cover + Lyric Video</p><ul class="list"><li><span class="check">✓</span><span>Generated under Studio Plan</span></li><li><span class="check">✓</span><span>Commercial use allowed</span></li><li><span class="check">✓</span><span>Prompt hash and model version stored</span></li></ul><button class="primary-btn" type="button" data-toast="License PDF queued">Download License PDF</button></div></section>`;
  }

  function renderAccount() {
    const email = state.user ? state.user.email : "Not signed in";
    return `${renderHero("account")}<section class="page-wrap"><div class="tool-card"><div class="tool-inner tool-grid"><div class="input-panel"><div class="panel-title"><h2>Profile</h2><span>${email}</span></div><div class="control-grid"><div class="control-field"><label>Email</label><input class="control-input" value="${email}" readonly></div><div class="control-field"><label>Language</label><select class="control-input" id="accountLang"><option value="zh" ${state.lang === "zh" ? "selected" : ""}>中文</option><option value="en" ${state.lang === "en" ? "selected" : ""}>English</option></select></div></div><button class="primary-btn" type="button" id="accountLogin">${state.user ? t().signOut : t().signIn}</button></div><aside class="settings-panel"><div class="setting-card"><h3>Subscription</h3><ul class="list"><li><span class="check">✓</span><span>Creator Plan</span></li><li><span class="check">✓</span><span>${state.credits} credits remaining</span></li><li><span class="check">✓</span><span>Cancel anytime from billing portal</span></li></ul></div></aside></div></div></section>`;
  }

  function renderLoginModal() {
    return `
      <div class="modal-backdrop" id="loginModal">
        <div class="modal">
          <div class="modal-head">
            <h2>${t().signIn}</h2>
            <button class="small-btn" id="closeLogin" type="button">${t().close}</button>
          </div>
          <form id="loginForm">
            <div class="control-field"><label>${t().email}</label><input class="control-input" id="loginEmail" type="email" placeholder="videotowords@gmail.com" required></div>
            <div class="control-field"><label>${t().password}</label><input class="control-input" id="loginPassword" type="password" placeholder="••••••••" required></div>
            <button class="primary-btn" type="submit">${t().continue}</button>
            <button class="small-btn" id="demoLogin" type="button">${t().demoLogin}</button>
          </form>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    $("#mobileMenu")?.addEventListener("click", () => $("#sidebar").classList.toggle("open"));
    $("#langSelect")?.addEventListener("change", event => {
      localStorage.setItem("sp_lang", event.target.value);
      state.lang = event.target.value;
      init();
    });
    $("#authButton")?.addEventListener("click", () => state.user ? location.href = "account.html" : openLogin());
    $("#closeLogin")?.addEventListener("click", closeLogin);
    $("#demoLogin")?.addEventListener("click", () => login("videotowords@gmail.com"));
    $("#loginForm")?.addEventListener("submit", event => {
      event.preventDefault();
      login($("#loginEmail").value || "user@example.com");
    });
    $("#accountLogin")?.addEventListener("click", () => state.user ? logout() : openLogin());
    $("#accountLang")?.addEventListener("change", event => {
      localStorage.setItem("sp_lang", event.target.value);
      state.lang = event.target.value;
      init();
    });
    $("#buildPrompt")?.addEventListener("click", buildPrompt);
    $$(".run-btn").forEach(button => button.addEventListener("click", () => runTask(button)));
    $$(".fill-demo").forEach(button => button.addEventListener("click", () => fillDemo(button)));
    $$(".counted").forEach(textarea => textarea.addEventListener("input", () => updateCounter(textarea)));
    $$(".option-chip").forEach(chip => chip.addEventListener("click", () => {
      $$(".option-chip", chip.parentElement).forEach(item => item.classList.remove("active"));
      chip.classList.add("active");
    }));
    $$("[data-toast]").forEach(el => el.addEventListener("click", () => showToast(el.dataset.toast)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        $("#sidebar")?.classList.remove("open");
        closeLogin();
      }
    });
  }

  function openLogin() {
    $("#loginModal")?.classList.add("active");
  }

  function closeLogin() {
    $("#loginModal")?.classList.remove("active");
  }

  function login(email) {
    state.user = { email, signedInAt: new Date().toISOString() };
    localStorage.setItem("sp_user", JSON.stringify(state.user));
    closeLogin();
    init();
    showToast(state.lang === "zh" ? "已登录演示账号。" : "Signed in with demo account.");
  }

  function logout() {
    localStorage.removeItem("sp_user");
    state.user = null;
    init();
    showToast(state.lang === "zh" ? "已退出登录。" : "Signed out.");
  }

  function updateAuth() {
    // Shell is rerendered from state; this hook is reserved for backend integration.
  }

  function updateCredits() {
    localStorage.setItem("sp_credits", String(state.credits));
    $("#sideCredits") && ($("#sideCredits").textContent = state.credits);
    $$(".balanceText").forEach(item => item.textContent = state.credits);
  }

  function updateCounter(textarea) {
    const counter = textarea.closest(".field-block, .control-field")?.querySelector(".counter span");
    if (counter) counter.textContent = textarea.value.length;
  }

  function fillDemo(button) {
    const textarea = button.closest(".generator-card, .tool-card").querySelector("textarea");
    textarea.value = state.lang === "zh"
      ? "一首适合科技产品发布短片的流行电子歌，主题是把复杂工作变简单。副歌有记忆点，女声，90 秒。"
      : "A confident pop electronic song for a product launch video. Bright female vocal, memorable chorus hook, 90 seconds.";
    updateCounter(textarea);
    showToast(state.lang === "zh" ? "已填入示例内容。" : "Demo prompt inserted.");
  }

  function runTask(button) {
    const cost = Number(button.dataset.cost || 0);
    if (!state.user) {
      openLogin();
      showToast(state.lang === "zh" ? "请先登录以保存项目和授权记录。" : "Sign in to save projects and licenses.");
      return;
    }
    if (state.running) return;
    if (cost > state.credits) {
      showToast(state.lang === "zh" ? "Credits 不足，请升级套餐。" : "Not enough credits. Please upgrade.");
      return;
    }
    const result = $(`#${button.dataset.target}`);
    const progress = createProgress(button);
    state.running = true;
    state.credits -= cost;
    updateCredits();
    result?.classList.remove("active");
    progress.classList.add("active");
    const bar = $(".progress-track i", progress);
    const label = $(".progress-head span:first-child", progress);
    const percent = $(".progress-head span:last-child", progress);
    const steps = [
      [18, state.lang === "zh" ? "分析输入" : "Analyzing input"],
      [42, state.lang === "zh" ? "生成素材" : "Generating assets"],
      [68, state.lang === "zh" ? "渲染与质检" : "Rendering and checking"],
      [88, state.lang === "zh" ? "保存项目与授权" : "Saving project and license"],
      [100, state.lang === "zh" ? "完成" : "Done"]
    ];
    let value = 0;
    let index = 0;
    const timer = window.setInterval(() => {
      const target = steps[index];
      value += Math.max(4, Math.ceil((target[0] - value) / 2));
      if (value >= target[0]) {
        value = target[0];
        label.textContent = target[1];
        index += 1;
      }
      bar.style.width = `${value}%`;
      percent.textContent = `${value}%`;
      if (value >= 100) {
        window.clearInterval(timer);
        state.running = false;
        window.setTimeout(() => {
          progress.classList.remove("active");
          result?.classList.add("active");
          showToast(state.lang === "zh" ? "生成完成，已写入项目和授权记录。" : "Generation complete. Project and license updated.");
        }, 450);
      }
    }, 320);
  }

  function createProgress(button) {
    let progress = button.nextElementSibling?.classList?.contains("progress-wrap") ? button.nextElementSibling : null;
    if (!progress) {
      progress = document.createElement("div");
      progress.className = "progress-wrap";
      progress.innerHTML = '<div class="progress-head"><span>Queued</span><span>0%</span></div><div class="progress-track"><i></i></div>';
      button.insertAdjacentElement("afterend", progress);
    }
    $(".progress-track i", progress).style.width = "0%";
    $(".progress-head span:last-child", progress).textContent = "0%";
    return progress;
  }

  function buildPrompt() {
    const scene = $("#promptScene")?.value || "short video";
    const genre = $("#promptGenre")?.value || "pop electronic";
    const mood = $("#promptMood")?.value || "bright and confident";
    const voice = $("#promptVoice")?.value || "female vocal";
    $("#builtPrompt").value = `Create a ${genre} song for ${scene}. Mood: ${mood}. Voice: ${voice}. Include a memorable chorus hook, clean intro, and a strong ending for social video publishing.`;
    showToast(state.lang === "zh" ? "Prompt 已生成。" : "Prompt generated.");
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("active");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("active"), 2800);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", SITE.init);
