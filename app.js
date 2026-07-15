// ======================================================
// 1. Constants & Dictionary Configuration Lookups
// ======================================================
const PHONE_PROFILES = {
  // Apple 系列
  ip16pm:  { name: "iPhone 16 Pro Max (19.5:9)", w: 440, h: 956, safe: 80, cat: "Apple" },
  ip16p:   { name: "iPhone 16 Pro (19.5:9)", w: 402, h: 874, safe: 76, cat: "Apple" },
  ip16:    { name: "iPhone 16 / 15 / 14 Pro / 14 (19.5:9)", w: 393, h: 852, safe: 76, cat: "Apple" },
  ip15pm:  { name: "iPhone 15 Pro Max / 14 Pro Max (19.5:9)", w: 430, h: 932, safe: 80, cat: "Apple" },
  ip13pm:  { name: "iPhone 13 Pro Max / 12 Pro Max (19.5:9)", w: 428, h: 926, safe: 72, cat: "Apple" },
  ip13:    { name: "iPhone 13 / 13 Pro / 12 / 12 Pro (19.5:9)", w: 390, h: 844, safe: 72, cat: "Apple" },
  ip11pm:  { name: "iPhone 11 Pro Max / XS Max (19.5:9)", w: 414, h: 896, safe: 72, cat: "Apple" },
  ip11:    { name: "iPhone 11 / XR (19.5:9)", w: 414, h: 896, safe: 68, cat: "Apple" },
  ip11p:   { name: "iPhone 11 Pro / XS / X (19.5:9)", w: 375, h: 812, safe: 68, cat: "Apple" },
  ip_mini: { name: "iPhone 13 mini / 12 mini (19.5:9)", w: 360, h: 780, safe: 68, cat: "Apple" },
  ip_se:   { name: "iPhone SE 3 / SE 2 / 8 / 7 (16:9)", w: 375, h: 667, safe: 30, cat: "Apple" },

  // Samsung 系列
  sam_s24u:{ name: "Galaxy S24 Ultra (19.5:9)", w: 385, h: 856, safe: 52, cat: "Samsung" },
  sam_s23u:{ name: "Galaxy S23 Ultra / S22 Ultra (20:9)", w: 384, h: 854, safe: 52, cat: "Samsung" },
  sam_s24: { name: "Galaxy S24 / S23 / S22 (20:9)", w: 360, h: 800, safe: 48, cat: "Samsung" },
  sam_a55: { name: "Galaxy A55 / A54 / A35 (20:9)", w: 412, h: 915, safe: 50, cat: "Samsung" },
  sam_fold:{ name: "Galaxy Z Fold 6 外螢幕 (21.4:9)", w: 402, h: 958, safe: 52, cat: "Samsung" },

  // Google 系列
  px9_xl:  { name: "Pixel 9 Pro XL (20.2:9)", w: 412, h: 926, safe: 56, cat: "Google" },
  px9_pro: { name: "Pixel 9 Pro / Pixel 9 (19.5:9)", w: 412, h: 892, safe: 56, cat: "Google" },
  px8_pro: { name: "Pixel 8 Pro (20:9)", w: 384, h: 864, safe: 54, cat: "Google" },
  px8:     { name: "Pixel 8 / 7a / 7 (19.5:9)", w: 412, h: 892, safe: 54, cat: "Google" },

  // 其他品牌與自訂
  sony_1:  { name: "Xperia 1 / 5 系列 (21:9)", w: 384, h: 896, safe: 44, cat: "其他品牌" },
  mi_14:   { name: "小米 Xiaomi 14 Ultra (20:9)", w: 360, h: 800, safe: 48, cat: "其他品牌" },
  custom:  { name: "自訂尺寸 (自行輸入寬高)", w: 393, h: 852, safe: 76, cat: "自訂" }
};

const SECTIONS_ORDERED = [
  { name: "1", time: "08:10\n09:00", index: 1 },
  { name: "2", time: "09:10\n10:00", index: 2 },
  { name: "3", time: "10:10\n11:00", index: 3 },
  { name: "4", time: "11:10\n12:00", index: 4 },
  { name: "A", time: "12:10\n13:00", index: 5 },
  { name: "5", time: "13:10\n14:00", index: 6 },
  { name: "6", time: "14:10\n15:00", index: 7 },
  { name: "7", time: "15:10\n16:00", index: 8 },
  { name: "8", time: "16:10\n17:00", index: 9 },
  { name: "9", time: "17:10\n18:00", index: 10 },
  { name: "10", time: "18:25\n19:15", index: 11 }
];

const FONTS_POOL = {
  standard: '"Noto Sans TC", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  academic: '"Noto Serif TC", "Times New Roman", Georgia, serif',
  handwritten: '"LXGW WenKai TC", cursive',
  monospace: '"Courier New", "Noto Sans TC", monospace'
};

const PRESET_THEMES = {
  glass:    { bg: 'rgba(255, 255, 255, 0.75)', txt: '#1D1D1F' },
  white:    { bg: 'rgba(255, 255, 255, 0.95)', txt: '#1D1D1F' },
  dark:     { bg: 'rgba(28, 28, 30, 0.85)',    txt: '#FFFFFF' },
  academic: { bg: 'rgba(253, 251, 247, 0.80)', txt: '#4A4A4A' },
  minimal:  { bg: 'rgba(255, 255, 255, 0.40)', txt: '#1D1D1F' },
  colorful: { bg: 'rgba(255, 255, 255, 0.70)', txt: '#000000' }
};

const PRESET_BACKGROUNDS = [
  { type: 'gradient', val: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
  { type: 'gradient', val: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)' },
  { type: 'gradient', val: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)' },
  { type: 'gradient', val: 'linear-gradient(135deg, #111111 0%, #333333 100%)' },
  { type: 'gradient', val: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { type: 'gradient', val: 'linear-gradient(120deg, #fdfbf7 0%, #ebeae6 100%)' },
  { type: 'gradient', val: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)' },
  { type: 'solid',    val: '#E5E5EA' },
  { type: 'solid',    val: '#F2F2F7' },
  { type: 'solid',    val: '#3a3a3c' },
  { type: 'solid',    val: '#1c1c1e' },
  { type: 'gradient', val: 'linear-gradient(210deg, #d4fc79 0%, #96e6a1 100%)' }
];

const STORAGE_KEY = 'SHU_TIMETABLE_STATE_v2';

// ======================================================
// 2. Centralized State Machine
// ======================================================
let state = {
  device: { current: 'ip16pm', custom: { w: 440, h: 956, safe: 80 } },
  wallpaper: { bgIndex: 0, customImage: null, maskType: 'black', maskOpacity: 0 },
  theme: { current: 'glass', globalOpacity: 0.75 },
  ui: { activeTab: 0, previewMode: 'real' },
  export: { format: 'image/png' },
  layoutMode: 'auto',
  canvasTextColor: '#1D1D1F',
  course: {
    advanced: { shadowIntensity: 40, fontSize: 12, borderRadius: 14, rowHeight: 52 },
    list: [
      { id: 1001, name: "影像敘事", room: "傳院C302", type: "必修", day: 1, start: 2, end: 3, color: "#FFDFBA", visible: true },
      { id: 1002, name: "軟體工程", room: "管院M401", type: "必修", day: 3, start: 6, end: 8, color: "#BAE1FF", visible: true },
      { id: 1003, name: "當代思潮", room: "大禮堂", type: "通識", day: 5, start: 4, end: 5, color: "#BAFFC9", visible: true }
    ]
  }
};

// ======================================================
// 3. Utility Core Functions
// ======================================================
function hexToRgba(hex, opacity) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function saveStateToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadStateFromStorage() {
  const cache = localStorage.getItem(STORAGE_KEY);
  if (cache) {
    try {
      const saved = JSON.parse(cache);
      // deep merge：確保新版 state 結構的預設值不會被舊快取覆蓋消失
      deepMerge(state, saved);
    } catch (e) { console.error("解析快取失敗", e); }
  }
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function showNativeToast(text) {
  const toast = document.getElementById("ios-toast");
  if (toast) {
    toast.innerText = text;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  }
}

function createGridNode(text, className) {
  const el = document.createElement("div");
  el.classList.add("mesh-node", className);
  el.innerText = text;
  return el;
}

// ======================================================
// 4. Phone Setup & Dropdown Loop Generator (P1 Remake)
// ======================================================
function buildDeviceSelectorUI() {
  const select = document.getElementById("phone-model");
  select.innerHTML = "";

  const groups = {};
  Object.entries(PHONE_PROFILES).forEach(([id, p]) => {
    if (!groups[p.cat]) groups[p.cat] = [];
    groups[p.cat].push({ id, ...p });
  });

  Object.entries(groups).forEach(([cat, models]) => {
    const groupEl = document.createElement("optgroup");
    groupEl.label = cat;
    models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.innerText = m.name;
      groupEl.appendChild(opt);
    });
    select.appendChild(groupEl);
  });
  select.value = state.device.current;
}

// ======================================================
// 5. Modular Pipeline Rendering Engine (P0 Renderer Architecture)
// ======================================================
window.updateMasterRender = function() {
  window.renderPhone();
  window.renderBackground();
  window.renderClock();
  window.renderGrid();
  window.applyThemeEngine();
  saveStateToStorage();
};

window.renderPhone = function() {
  let w, h, safe;
  if (state.device.current === "custom") {
    w = state.device.custom.w; h = state.device.custom.h; safe = state.device.custom.safe;
  } else {
    const profile = PHONE_PROFILES[state.device.current] || PHONE_PROFILES.ip16pm;
    w = profile.w; h = profile.h; safe = profile.safe;
  }

  const shell = document.getElementById("phone-shell");
  if (shell) {
    shell.style.width = (w * 0.74) + "px";
    shell.style.height = (h * 0.74) + "px";
  }
  document.documentElement.style.setProperty('--dynamic-safe-top', safe + "px");
  window.updateMetaLabel();
};

window.renderBackground = function() {
  const canvas = document.getElementById('wallpaper-target');
  const overlay = document.getElementById('canvas-dim-overlay');
  if (!canvas || !overlay) return;

  if (state.wallpaper.customImage) {
    canvas.style.background = `url('${state.wallpaper.customImage}') center/cover no-repeat`;
  } else {
    const bg = PRESET_BACKGROUNDS[state.wallpaper.bgIndex];
    canvas.style.background = bg.val;
    canvas.style.backgroundSize = 'cover';
    canvas.style.backgroundPosition = 'center';
  }
  const colorStr = state.wallpaper.maskType === 'black' ? '0, 0, 0' : '255, 255, 255';
  overlay.style.backgroundColor = `rgba(${colorStr}, ${state.wallpaper.maskOpacity})`;
};

window.renderClock = function() {
  const now = new Date();
  const weekDays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  const dateEl = document.getElementById("ios-date-label");
  const clockEl = document.getElementById("ios-clock-label");
  const statusEl = document.getElementById("status-bar-time");

  if (dateEl) dateEl.innerText = `${now.getMonth() + 1}月${now.getDate()}日 ${weekDays[now.getDay()]}`;
  const clockStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  if (clockEl) clockEl.innerText = clockStr;
  if (statusEl) statusEl.innerText = clockStr;
};

window.renderGrid = function() {
  const timetableEl = document.getElementById("timetable");
  if (!timetableEl) return;
  timetableEl.innerHTML = "";
  timetableEl.style.gridAutoRows = "var(--grid-row-height)";

  let activeDays = [1, 2, 3, 4, 5];
  let activeSections = SECTIONS_ORDERED.slice(0, 9);

  // 智慧自動佈局邏輯
  const dayMap = {}; const secMap = {};
  state.course.list.forEach(c => {
    if (!c.visible) return;
    dayMap[c.day] = true;
    for (let s = c.start; s <= c.end; s++) { secMap[s] = true; }
  });

  activeDays = [1, 2, 3, 4, 5, 6].filter(d => dayMap[d] === true);
  if (activeDays.length === 0) activeDays = [1, 2, 3, 4, 5];

  let minActive = 11, maxActive = 1; let hasClasses = false;
  Object.keys(secMap).forEach(sStr => {
    const s = parseInt(sStr);
    if (s < minActive) minActive = s;
    if (s > maxActive) maxActive = s;
    hasClasses = true;
  });
  activeSections = hasClasses ? SECTIONS_ORDERED.filter(sec => sec.index >= minActive && sec.index <= maxActive) : SECTIONS_ORDERED.slice(0, 9);

  document.documentElement.style.setProperty('--visible-days-count', activeDays.length);
  document.documentElement.style.setProperty('--grid-font-size', state.course.advanced.fontSize + 'px');
  document.documentElement.style.setProperty('--course-radius', state.course.advanced.borderRadius + 'px');
  document.documentElement.style.setProperty('--grid-row-height', state.course.advanced.rowHeight + 'px');

  timetableEl.appendChild(createGridNode("", "node-header"));
  const dayLabels = { 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };
  activeDays.forEach(d => timetableEl.appendChild(createGridNode(dayLabels[d], "node-header")));

  activeSections.forEach((sec) => {
    timetableEl.appendChild(createGridNode(`${sec.name}\n${sec.time}`, "node-time"));
    activeDays.forEach(d => {
      const cell = document.createElement("div");
      cell.classList.add("mesh-node");
      cell.id = `cell-${d}-${sec.index}`;
      timetableEl.appendChild(cell);
    });
  });

  state.course.list.forEach((course) => {
    if (!course.visible || !activeDays.includes(course.day)) return;

    const startCell = document.getElementById(`cell-${course.day}-${course.start}`);
    if (startCell) {
      startCell.classList.add("node-course");

      const currentOp = getComputedStyle(document.documentElement).getPropertyValue('--op').trim() || "0.75";
      startCell.style.backgroundColor = hexToRgba(course.color, currentOp);
      const typeLabel = course.type || '必修';
      startCell.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;gap:1px;"><span style="font-size:0.7em;opacity:0.75;font-weight:500;">${typeLabel}</span><strong style="font-weight:700;display:block;line-height:1.15;">${course.name}</strong><span style="font-size:0.72em;opacity:0.7;font-weight:600;">${course.room}</span></div>`;

      const startIdx = activeSections.findIndex(s => s.index === course.start);
      const endIdx = activeSections.findIndex(s => s.index === course.end);
      if (startIdx !== -1 && endIdx !== -1) {
        startCell.style.gridRow = `span ${endIdx - startIdx + 1}`;
        for (let s = startIdx + 1; s <= endIdx; s++) {
          const hideCell = document.getElementById(`cell-${course.day}-${activeSections[s].index}`);
          // 必須用 visibility:hidden 而非 display:none
          // display:none 會把格子從 CSS Grid flow 移除，導致後面的 node-time / day cell
          // 自動補位到錯誤的 column，造成整個 grid 排版崩潰。
          // visibility:hidden 讓格子繼續佔位但不可見，spanning card 視覺上蓋過它。
          if (hideCell) {
            hideCell.style.visibility = 'hidden';
            hideCell.style.pointerEvents = 'none';
          }
        }
      }
    }
  });
};

window.applyThemeEngine = function() {
  const root = document.documentElement;
  const t = PRESET_THEMES[state.theme.current] || PRESET_THEMES.glass;

  root.style.setProperty('--course-bg', t.bg);
  root.style.setProperty('--course-text', t.txt);

  // 動態計算陰影：強度 0~100 映射到具體陰影像素値
  const si = (state.course.advanced.shadowIntensity ?? 50) / 100;
  const isDark = state.theme.current === 'dark';
  const a1 = (isDark ? 0.30 : 0.12) * si;
  const a2 = (isDark ? 0.26 : 0.10) * si;
  const insetOpacity = (isDark ? 0.07 : 0.55) * Math.min(si * 1.5, 1);
  const courseShadow = si === 0
    ? 'none'
    : `0 1px 1px rgba(${isDark ? '255,255,255' : '255,255,255'},${insetOpacity.toFixed(3)}) inset, 0 4px 10px rgba(0,0,0,${a1.toFixed(3)}), 0 14px 32px rgba(0,0,0,${a2.toFixed(3)})`;
  root.style.setProperty('--course-shadow', courseShadow);

  const canvasColor = state.canvasTextColor || '#1D1D1F';
  const dynamicCourseText = (canvasColor === '#FFFFFF' && state.theme.current === 'dark') ? '#FFFFFF' : t.txt;
  root.style.setProperty('--course-text-color', dynamicCourseText);
};

window.resetThemeDefaults = function() {
  state.course.advanced.shadowIntensity = 40;
  state.course.advanced.fontSize = 12;
  state.course.advanced.borderRadius = 14;
  state.course.advanced.rowHeight = 52;

  window.syncAdvancedSlidersUI();
  window.updateMasterRender();
};

// ======================================================
// 7. Course CRUD Operations & Data Validation
// ======================================================
window.renderCourseInputs = function() {
  const container = document.getElementById("course-list-container");
  if (!container) return;
  container.innerHTML = "";
  state.course.list.forEach((course, index) => {
    const row = document.createElement("div");
    row.classList.add("course-dynamic-row");
    row.dataset.index = index;
    const dayLabels = ["一", "二", "三", "四", "五", "六"];
    const isChecked = course.visible ? 'checked' : '';
    const courseType = course.type || '必修';

    row.innerHTML = `
      <input type="checkbox" ${isChecked} class="crud-visible" style="width:16px; height:16px; cursor:pointer;">
      <input type="text" value="${course.name}" class="crud-name" placeholder="課名">
      <input type="text" value="${course.room}" class="crud-room" placeholder="教室">
      <select class="crud-type">
        <option value="必修" ${courseType==='必修'?'selected':''}>必修</option>
        <option value="選修" ${courseType==='選修'?'selected':''}>選修</option>
        <option value="通識" ${courseType==='通識'?'selected':''}>通識</option>
      </select>
      <select class="crud-day">
        ${Array.from({length: 6}, (_, i) => `<option value="${i+1}" ${course.day === i+1 ? 'selected' : ''}>週${dayLabels[i]}</option>`).join('')}
      </select>
      <select class="crud-start">
        ${SECTIONS_ORDERED.map((s) => `<option value="${s.index}" ${course.start === s.index ? 'selected' : ''}>${s.name}節</option>`).join('')}
      </select>
      <select class="crud-end">
        ${SECTIONS_ORDERED.map((s) => `<option value="${s.index}" ${course.end === s.index ? 'selected' : ''}>${s.name}節</option>`).join('')}
      </select>
      <div class="color-picker-wrapper">
        <input type="color" class="color-picker-input crud-color" value="${course.color}">
      </div>
      <button class="btn-delete crud-del-btn">×</button>
    `;
    container.appendChild(row);
  });
};

window.handleCourseCrud = function(index, field, value) {
  state.course.list[index][field] = value;
  window.renderGrid();
  if (field === 'visible') window.renderCourseInputs();
  saveStateToStorage();
};

window.inputCourseRoom = function(index, val) {
  state.course.list[index].room = val;
  window.renderGrid();
  saveStateToStorage();
};

window.deleteCourseRow = function(index) {
  state.course.list.splice(index, 1);
  window.renderGrid();
  window.renderCourseInputs();
  saveStateToStorage();
};

window.addCourseRow = function() {
  state.course.list.push({ id: Date.now(), name: "新課程", room: "教室", type: "必修", day: 1, start: 2, end: 2, color: "#BAE1FF", visible: true });
  window.renderGrid();
  window.renderCourseInputs();
  saveStateToStorage();
};

// ======================================================
// 8. Event Delegation Binding (Pure JS / Decoupled)
// ======================================================
window.switchTab = function(tabIndex) {
  document.querySelectorAll('.hig-tab-bar .hig-tab-item').forEach((btn, idx) => btn.classList.toggle('active', idx === tabIndex));
  document.querySelectorAll('.tab-panel').forEach((panel, idx) => panel.classList.toggle('active', idx === tabIndex));
};

window.handleDeviceChange = function(profileId) {
  state.device.current = profileId;
  const customPanel = document.getElementById('custom-size-panel');
  if (customPanel) customPanel.style.display = (profileId === 'custom') ? 'grid' : 'none';
  window.renderPhone();
  saveStateToStorage();
};



window.handlePreviewModeChange = function(mode) {
  state.ui.previewMode = mode;
  // 用 data-preview 屬性找按鈕，而非不存在的 ID
  document.querySelectorAll('#preview-toggle-row .opt-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.preview === mode);
  });
  document.getElementById('ui-preview-overlay').style.opacity = (mode === 'real') ? "1" : "0";
  saveStateToStorage();
};

window.selectPresetBg = function(index, bgStr) {
  state.wallpaper.bgIndex = index;
  state.wallpaper.customImage = null;
  window.renderBackground();
  document.querySelectorAll('.bg-thumb').forEach((t, i) => t.classList.toggle('active', i === index));
  saveStateToStorage();
};

window.handleCustomBgUpload = function(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      state.wallpaper.customImage = event.target.result;
      window.renderBackground();
      document.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
      saveStateToStorage();
    };
    reader.readAsDataURL(file);
  }
};

window.handleMaskTypeChange = function(type) {
  state.wallpaper.maskType = type;
  document.querySelectorAll('#mask-toggle-row .opt-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mask === type);
  });
  window.renderBackground();
  // 自動連動文字色：打暗→白字，調亮→黑字
  const autoColor = type === 'black' ? '#FFFFFF' : '#1D1D1F';
  window.handleCanvasTextColorChange(autoColor);
  saveStateToStorage();
};

window.handleMaskOpacityChange = function(val) {
  state.wallpaper.maskOpacity = val / 100;
  window.renderBackground();
  saveStateToStorage();
};

window.handleThemePresetChange = function(theme) {
  state.theme.current = theme;
  document.querySelectorAll('#theme-preset-row .opt-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === theme);
  });
  document.getElementById("wallpaper-target").setAttribute("data-theme", theme);
  const t = PRESET_THEMES[theme];
  if (t) window.handleCanvasTextColorChange(t.txt);
  window.applyThemeEngine();
  window.renderGrid();
  saveStateToStorage();
};

window.handleFontFamilyChange = function(val) {
  document.documentElement.style.setProperty('--selected-font', FONTS_POOL[val]);
};

window.handleCanvasTextColorChange = function(colorStr) {
  state.canvasTextColor = colorStr;
  document.documentElement.style.setProperty('--canvas-text-color', colorStr);
  document.querySelectorAll('#textcolor-toggle-row .opt-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.color === colorStr);
  });

  const courseTextColor = (colorStr === '#FFFFFF' && state.theme.current === 'dark') ? '#FFFFFF' : '#1D1D1F';
  document.documentElement.style.setProperty('--course-text-color', courseTextColor);
  window.renderGrid();
  saveStateToStorage();
};

window.handleGlobalOpacityChange = function(val) {
  state.theme.globalOpacity = val;
  document.documentElement.style.setProperty('--op', val);
  window.renderGrid();
  saveStateToStorage();
};

window.handleAdvancedTuning = function(cssToken, cssVal, stateKey, rawVal) {
  state.course.advanced[stateKey] = parseInt(rawVal);
  if (cssToken) document.documentElement.style.setProperty(cssToken, cssVal);
  if (stateKey === 'rowHeight' || stateKey === 'fontSize') window.renderGrid();
  if (stateKey === 'shadowIntensity') window.applyThemeEngine();
  // update badge
  const badgeMap = { shadowIntensity: 'val-shadow', fontSize: 'val-font-size', borderRadius: 'val-radius', rowHeight: 'val-row-height' };
  const unitMap = { shadowIntensity: '', fontSize: 'px', borderRadius: 'px', rowHeight: 'px' };
  const badge = document.getElementById(badgeMap[stateKey]);
  if (badge) badge.textContent = rawVal + (unitMap[stateKey] || '');
  saveStateToStorage();
};

window.syncAdvancedSlidersUI = function() {
  const adv = state.course.advanced;
  const setSlider = (id, val, badgeId, unit) => {
    const el = document.getElementById(id);
    const badge = document.getElementById(badgeId);
    if (el) el.value = val;
    if (badge) badge.textContent = val + unit;
  };
  setSlider('slider-shadow',     adv.shadowIntensity ?? 50, 'val-shadow',      '');
  setSlider('slider-font-size',  adv.fontSize,     'val-font-size',   'px');
  setSlider('slider-radius',     adv.borderRadius, 'val-radius',      'px');
  setSlider('slider-row-height', adv.rowHeight,    'val-row-height',  'px');

  const root = document.documentElement;
  root.style.setProperty('--grid-font-size', adv.fontSize + 'px');
  root.style.setProperty('--course-radius', adv.borderRadius + 'px');
  root.style.setProperty('--grid-row-height', adv.rowHeight + 'px');
};

window.handleExportFormatChange = function(val) {
  state.export.format = val;
  window.updateMetaLabel();
};

window.updateMetaLabel = function() {
  const format = state.export.format === "image/png" ? "PNG" : "JPG";
  let w, h;
  if (state.device.current === "custom") {
    w = state.device.custom.w * 3; h = state.device.custom.h * 3;
  } else {
    const profile = PHONE_PROFILES[state.device.current] || PHONE_PROFILES.ip16pm;
    w = profile.w * 3; h = profile.h * 3;
  }
  document.getElementById("download-meta").innerText = `${format} 格式 • 高解析度 ${w} x ${h} 導出`;
};

// ======================================================
// 9. Exception Safe Wallpaper Export Engine (P0 Engine)
// ======================================================
window.exportWallpaper = function() {
  const target = document.getElementById("wallpaper-target");
  const extension = state.export.format === "image/png" ? "png" : "jpg";
  const overlayLayer = document.getElementById("ui-preview-overlay");

  const cachedOpacity = overlayLayer.style.opacity || "1";
  overlayLayer.style.opacity = "0";

  try {
    setTimeout(() => {
      html2canvas(target, { scale: 3, useCORS: true }).then(canvas => {
        const link = document.createElement("a");
        link.download = `SHU_Wallpaper_${Date.now()}.${extension}`;
        link.href = canvas.toDataURL(state.export.format, 0.95);
        link.click();

        overlayLayer.style.opacity = cachedOpacity;
        showNativeToast("📥 下載成功！");
      }).catch(err => {
        console.error("html2canvas Error", err);
        overlayLayer.style.opacity = cachedOpacity;
        showNativeToast("❌ 導出失敗");
      });
    }, 60);
  } catch (error) {
    overlayLayer.style.opacity = cachedOpacity;
    showNativeToast("❌ 系統錯誤");
  }
};

function handleFormDelegation(e) {
  const row = e.target.closest(".course-dynamic-row");
  if (!row) return;
  const index = parseInt(row.dataset.index);
  const target = e.target;

  if (target.classList.contains("crud-visible")) state.course.list[index].visible = target.checked;
  if (target.classList.contains("crud-name")) state.course.list[index].name = target.value;
  if (target.classList.contains("crud-room")) state.course.list[index].room = target.value;
  if (target.classList.contains("crud-type")) state.course.list[index].type = target.value;
  if (target.classList.contains("crud-day")) state.course.list[index].day = parseInt(target.value);
  if (target.classList.contains("crud-color")) state.course.list[index].color = target.value;

  if (target.classList.contains("crud-start") || target.classList.contains("crud-end")) {
    let startVal = parseInt(row.querySelector(".crud-start").value);
    let endVal = parseInt(row.querySelector(".crud-end").value);
    if (endVal < startVal) {
      endVal = startVal;
      row.querySelector(".crud-end").value = endVal;
    }
    state.course.list[index].start = startVal;
    state.course.list[index].end = endVal;
  }

  window.renderGrid();
  if (target.classList.contains("crud-visible")) window.renderCourseInputs();
  saveStateToStorage();
}

// ======================================================
// 10. Initialization Bridge & UI Populator
// ======================================================
function buildBackgroundPresetsUI() {
  const grid = document.getElementById('bg-preset-grid');
  if (!grid) return;
  grid.innerHTML = "";
  PRESET_BACKGROUNDS.forEach((bg, idx) => {
    const thumb = document.createElement('div');
    thumb.className = `bg-thumb ${idx === state.wallpaper.bgIndex ? 'active' : ''}`;
    thumb.id = `thumb-${idx}`;
    thumb.style.background = bg.val;
    thumb.onclick = () => window.selectPresetBg(idx, bg.val);
    grid.appendChild(thumb);
  });
}

function initApplication() {
  loadStateFromStorage();
  buildDeviceSelectorUI();
  buildBackgroundPresetsUI();

  const advToggle = document.getElementById('advanced-toggle-trigger');
  if (advToggle) {
    advToggle.onclick = function() {
      document.getElementById('advanced-panel').classList.toggle('open');
    };
  }

  const addBtn = document.getElementById("btn-add-course-row");
  if (addBtn) addBtn.onclick = window.addCourseRow;

  const fontSel = document.getElementById("font-selector");
  if (fontSel) {
    fontSel.onchange = function() {
      document.documentElement.style.setProperty('--selected-font', FONTS_POOL[this.value]);
    };
  }

  const dimRange = document.getElementById("bg-dim-range");
  if (dimRange) {
    dimRange.oninput = function() {
      window.handleMaskOpacityChange(this.value);
    };
  }

  const bgUploadBtn = document.getElementById("bg-upload-btn");
  if (bgUploadBtn) {
    bgUploadBtn.onclick = function() {
      document.getElementById('bg-upload').click();
    };
  }

  const tabNav = document.getElementById("tab-navigation-bar");
  if (tabNav) {
    tabNav.onclick = function(e) {
      const btn = e.target.closest(".hig-tab-bar .hig-tab-item");
      if (!btn) return;
      const idx = parseInt(btn.dataset.tab);
      state.ui.activeTab = idx;
      window.switchTab(idx);
      saveStateToStorage();
    };
  }



  const previewToggleRow = document.getElementById("preview-toggle-row");
  if (previewToggleRow) {
    previewToggleRow.onclick = function(e) {
      if (!e.target.classList.contains("opt-btn")) return;
      window.handlePreviewModeChange(e.target.dataset.preview);
    };
  }

  const maskToggleRow = document.getElementById("mask-toggle-row");
  if (maskToggleRow) {
    maskToggleRow.onclick = function(e) {
      if (!e.target.classList.contains("opt-btn")) return;
      window.handleMaskTypeChange(e.target.dataset.mask);
    };
  }

  const themePresetRow = document.getElementById("theme-preset-row");
  if (themePresetRow) {
    themePresetRow.onclick = function(e) {
      if (!e.target.classList.contains("opt-btn")) return;
      window.handleThemePresetChange(e.target.dataset.theme);
    };
  }

  const textcolorToggleRow = document.getElementById("textcolor-toggle-row");
  if (textcolorToggleRow) {
    textcolorToggleRow.onclick = function(e) {
      if (!e.target.classList.contains("opt-btn")) return;
      window.handleCanvasTextColorChange(e.target.dataset.color);
    };
  }

  const opacityPresetRow = document.getElementById("opacity-preset-row");
  if (opacityPresetRow) {
    opacityPresetRow.onclick = function(e) {
      if (!e.target.classList.contains("opt-btn")) return;
      window.handleGlobalOpacityChange(parseFloat(e.target.dataset.opacity));
    };
  }

  const courseListContainer = document.getElementById("course-list-container");
  if (courseListContainer) {
    courseListContainer.addEventListener("input", handleFormDelegation);
    courseListContainer.addEventListener("change", handleFormDelegation);
    courseListContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("crud-del-btn")) {
        const index = e.target.closest(".course-dynamic-row").dataset.index;
        window.deleteCourseRow(index);
      }
    });
  }



  // phone-model select 事件
  const phoneSel = document.getElementById('phone-model');
  if (phoneSel) {
    phoneSel.onchange = function() { window.handleDeviceChange(this.value); };
  }

  // custom size inputs
  ['custom-w', 'custom-h', 'custom-safe'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.oninput = function() {
      const key = id === 'custom-w' ? 'w' : id === 'custom-h' ? 'h' : 'safe';
      state.device.custom[key] = parseInt(this.value) || 0;
      if (state.device.current === 'custom') window.renderPhone();
    };
  });

  // download btn
  const dlBtn = document.getElementById('download-btn');
  if (dlBtn) dlBtn.onclick = window.exportWallpaper;

  // format select
  const fmtSel = document.getElementById('img-format');
  if (fmtSel) fmtSel.onchange = function() { window.handleExportFormatChange(this.value); };

  // bg upload file input
  const bgUpload = document.getElementById('bg-upload');
  if (bgUpload) bgUpload.onchange = function() { window.handleCustomBgUpload(this); };

  // advanced sliders 統一綁定
  document.querySelectorAll('.advanced-panel input[type="range"]').forEach(slider => {
    slider.oninput = function() {
      const token = this.dataset.token || null;
      const key   = this.dataset.key;
      const unit  = this.dataset.unit || '';
      if (key) {
        window.handleAdvancedTuning(token, token ? this.value + unit : null, key, this.value);
      }
    };
  });

  // theme reset btn
  const resetBtn = document.getElementById('btn-theme-reset');
  if (resetBtn) resetBtn.onclick = window.resetThemeDefaults;

  window.renderClock();
  setInterval(window.renderClock, 1000);

  window.switchTab(state.ui.activeTab);
  window.handleDeviceChange(state.device.current);
  window.syncAdvancedSlidersUI();
  window.handleGlobalOpacityChange(state.theme.globalOpacity);

  window.renderCourseInputs();
  window.updateMasterRender();
}

document.addEventListener('DOMContentLoaded', initApplication);