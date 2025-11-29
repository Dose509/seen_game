// ========= بيانات الفئات والأسئلة =========
// تقدر تزود عدد الأسئلة لكل فئة براحتك
// اللعبة تختار عشوائياً 2 أسئلة من كل مستوى نقاط (100 / 300 / 500) لكل فئة يتم اختيارها

const CATEGORIES = [
  // ========== 1) ثقافة عامة ==========
  {
    id: "general",
    name: "ثقافة عامة",
    tag: "أسئلة منوعة",
    image: "general.png",
    questions: [
      // 100
      {
        points: 100,
        q: "كم عدد قارات العالم؟",
        options: ["خمس", "ست", "سبع", "ثمان"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هي عاصمة فرنسا؟",
        options: ["مدريد", "روما", "باريس", "برلين"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هي عاصمة مصر؟",
        options: ["الرياض", "القاهرة", "الخرطوم", "طرابلس"],
        correct: 1,
      },
      {
        points: 100,
        q: "كم عدد أيام الأسبوع؟",
        options: ["خمسة", "ستة", "سبعة", "ثمانية"],
        correct: 2,
      },

      // 300
      {
        points: 300,
        q: "ما هو أطول نهر في العالم؟",
        options: ["الأمازون", "النيـل", "الفرات", "الدانوب"],
        correct: 1,
      },
      {
        points: 300,
        q: "ما هي العملة الرسمية في بريطانيا؟",
        options: ["اليورو", "الدولار", "الجنيه الإسترليني", "الفرنك"],
        correct: 2,
      },
      {
        points: 300,
        q: "أي مدينة تُلقّب بمدينة الضباب؟",
        options: ["باريس", "لندن", "روما", "برلين"],
        correct: 1,
      },
      {
        points: 300,
        q: "ما هي اللغة الرسمية في البرازيل؟",
        options: ["الإسبانية", "البرتغالية", "الإنجليزية", "الفرنسية"],
        correct: 1,
      },

      // 500
      {
        points: 500,
        q: "أيّ من هذه الدول لا تطل على البحر؟",
        options: ["السعودية", "الأردن", "العراق", "المغرب"],
        correct: 2,
      },
      {
        points: 500,
        q: "أيّ من هذه المدن تقع في قارة آسيا؟",
        options: ["ساو باولو", "نيروبي", "طوكيو", "تورنتو"],
        correct: 2,
      },
      {
        points: 500,
        q: "أي دولة من هذه تُعد دولة حبيسة (بدون سواحل بحرية)؟",
        options: ["سويسرا", "إيطاليا", "البرتغال", "اليونان"],
        correct: 0,
      },
      {
        points: 500,
        q: "أي من هذه الدول تقع بالكامل في نصف الكرة الجنوبي؟",
        options: ["إسبانيا", "المكسيك", "أستراليا", "المغرب"],
        correct: 2,
      },
    ],
  },

  // ========== 2) إسلاميات ==========
  {
    id: "islamic",
    name: "إسلاميات",
    tag: "قرآن وسيرة وفقه",
    image: "islamic.png",
    questions: [
      // 100
      {
        points: 100,
        q: "كم عدد أركان الإسلام؟",
        options: ["ثلاثة", "أربعة", "خمسة", "ستة"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هي أول سورة في المصحف؟",
        options: ["البقرة", "الفاتحة", "الإخلاص", "الناس"],
        correct: 1,
      },
      {
        points: 100,
        q: "في أي شهر يصوم المسلمون فريضة الصيام؟",
        options: ["رجب", "شعبان", "رمضان", "شوال"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هو الركن الثاني من أركان الإسلام؟",
        options: ["الصلاة", "الزكاة", "الصوم", "الحج"],
        correct: 0,
      },

      // 300
      {
        points: 300,
        q: "في أي شهر فُرض صيام رمضان؟",
        options: ["رجب", "شعبان", "رمضان", "ذو الحجة"],
        correct: 2,
      },
      {
        points: 300,
        q: "من هو أول الخلفاء الراشدين؟",
        options: ["عثمان بن عفان", "عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق"],
        correct: 3,
      },
      {
        points: 300,
        q: "ما هي القبلة الأولى للمسلمين قبل التحويل إلى الكعبة؟",
        options: ["الكعبة", "بيت المقدس", "المسجد النبوي", "لا شيء مما سبق"],
        correct: 1,
      },
      {
        points: 300,
        q: "في أي مدينة يوجد المسجد الأقصى؟",
        options: ["مكة", "المدينة", "القدس", "دمشق"],
        correct: 2,
      },

      // 500
      {
        points: 500,
        q: "كم عدد السور المكية تقريبًا (تقريب تقريبي وليس دقيق)؟",
        options: ["حوالي 30", "حوالي 50", "حوالي 80", "حوالي 100"],
        correct: 1,
      },
      {
        points: 500,
        q: "ما اسم الهجرة الأولى للمسلمين قبل الهجرة إلى المدينة؟",
        options: ["إلى الشام", "إلى الطائف", "إلى الحبشة", "إلى مصر"],
        correct: 2,
      },
      {
        points: 500,
        q: "أي من هؤلاء يُلقّب بـ (الفاروق)؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"],
        correct: 1,
      },
      {
        points: 500,
        q: "في أي سنة تقريبية كانت الهجرة النبوية إلى المدينة؟",
        options: ["610م", "622م", "630م", "632م"],
        correct: 1,
      },
    ],
  },

  // ========== 3) علوم ==========
  {
    id: "science",
    name: "علوم",
    tag: "كيمياء وفيزياء وأحياء",
    image: "science.png",
    questions: [
      // 100
      {
        points: 100,
        q: "ما هو الكوكب الأحمر؟",
        options: ["الزهرة", "المريخ", "عطارد", "المشتري"],
        correct: 1,
      },
      {
        points: 100,
        q: "ما هي حالة الماء عند درجة حرارة 0 م°؟",
        options: ["سائلة", "صلبة", "غازية", "بلازمية"],
        correct: 1,
      },
      {
        points: 100,
        q: "أي جزء من النبات يقوم بعملية التمثيل الضوئي بشكل رئيسي؟",
        options: ["الجذر", "الساق", "الأوراق", "الزهور"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هو الغاز الضروري لعملية التنفس عند الإنسان؟",
        options: ["ثاني أكسيد الكربون", "الهيليوم", "الأكسجين", "النيتروجين"],
        correct: 2,
      },

      // 300
      {
        points: 300,
        q: "أي عضو يضخ الدم في جسم الإنسان؟",
        options: ["الكبد", "القلب", "الرئة", "الكلى"],
        correct: 1,
      },
      {
        points: 300,
        q: "ما هي وحدة قياس شدة التيار الكهربائي؟",
        options: ["الفولت", "الأمبير", "الأوم", "الواط"],
        correct: 1,
      },
      {
        points: 300,
        q: "ما اسم أكبر كوكب في المجموعة الشمسية؟",
        options: ["الأرض", "زحل", "المشتري", "أورانوس"],
        correct: 2,
      },
      {
        points: 300,
        q: "في أي جزء من الخلية يوجد الحمض النووي DNA غالبًا؟",
        options: ["السيتوبلازم", "النواة", "الجدار الخلوي", "الغشاء البلازمي"],
        correct: 1,
      },

      // 500
      {
        points: 500,
        q: "ما هو العنصر الكيميائي الذي يرمز له بـ Fe؟",
        options: ["النحاس", "الحديد", "الفضة", "الذهب"],
        correct: 1,
      },
      {
        points: 500,
        q: "أيّ من هذه الغازات يشكل النسبة الأكبر في الهواء الجوي؟",
        options: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيليوم"],
        correct: 1,
      },
      {
        points: 500,
        q: "أي من هذه الوحدات تُستخدم لقياس الطاقة؟",
        options: ["نيوتن", "جول", "أوم", "أمبير"],
        correct: 1,
      },
      {
        points: 500,
        q: "ما اسم العملية التي يتحول فيها السائل إلى غاز عند السطح فقط؟",
        options: ["الانصهار", "التبخر", "التكاثف", "التجمد"],
        correct: 1,
      },
    ],
  },

  // ========== 4) تاريخ (عام) ==========
  {
    id: "history",
    name: "تاريخ",
    tag: "أحداث وشخصيات",
    image: "history.png",
    questions: [
      // 100
      {
        points: 100,
        q: "في أي قارة تقع مصر؟",
        options: ["آسيا", "أوروبا", "أفريقيا", "أمريكا الجنوبية"],
        correct: 2,
      },
      {
        points: 100,
        q: "في أي قارة تقع المملكة العربية السعودية؟",
        options: ["أوروبا", "آسيا", "أفريقيا", "أمريكا الشمالية"],
        correct: 1,
      },
      {
        points: 100,
        q: "أي من هذه الدول تقع في قارة أوروبا؟",
        options: ["البرازيل", "اليابان", "ألمانيا", "المكسيك"],
        correct: 2,
      },
      {
        points: 100,
        q: "أي مدينة كانت عاصمة الخلافة الأموية؟",
        options: ["بغداد", "دمشق", "قرطبة", "القاهرة"],
        correct: 1,
      },

      // 300
      {
        points: 300,
        q: "في أي عام تقريبًا انتهت الحرب العالمية الثانية؟",
        options: ["1918", "1930", "1945", "1960"],
        correct: 2,
      },
      {
        points: 300,
        q: "من القائد المسلم في معركة حطين؟",
        options: ["خالد بن الوليد", "صلاح الدين الأيوبي", "سعد بن أبي وقاص", "طارق بن زياد"],
        correct: 1,
      },
      {
        points: 300,
        q: "أي من هذه الدول كانت تُسمى سابقًا (بلاد فارس)؟",
        options: ["إيران", "العراق", "تركيا", "أفغانستان"],
        correct: 0,
      },
      {
        points: 300,
        q: "في أي قارة تقع حضارة الإنكا القديمة؟",
        options: ["أفريقيا", "أوروبا", "أمريكا الجنوبية", "آسيا"],
        correct: 2,
      },

      // 500
      {
        points: 500,
        q: "أيّ من هذه المدن كانت عاصمة الدولة العباسية لفترة طويلة؟",
        options: ["دمشق", "بغداد", "القاهرة", "قرطبة"],
        correct: 1,
      },
      {
        points: 500,
        q: "أيّ من هذه الدول لم تكن مستعمَرة من بريطانيا؟",
        options: ["الهند", "مصر", "الجزائر", "الأردن"],
        correct: 2,
      },
      {
        points: 500,
        q: "أي شخصية تاريخية قادت الفتح الإسلامي للأندلس؟",
        options: ["طارق بن زياد", "خالد بن الوليد", "سعد بن أبي وقاص", "عمرو بن العاص"],
        correct: 0,
      },
      {
        points: 500,
        q: "أي دولة أوروبية كانت تُعرف باسم (الإمبراطورية النمساوية المجرية)؟",
        options: ["ألمانيا", "النمسا والمجر معًا", "إيطاليا", "اليونان"],
        correct: 1,
      },
    ],
  },

  // ========== 5) رياضة عامة ==========
  {
    id: "sports",
    name: "رياضة",
    tag: "مختلف الألعاب",
    image: "sports.png",
    questions: [
      // 100
      {
        points: 100,
        q: "كم عدد اللاعبين في فريق كرة القدم داخل الملعب؟",
        options: ["9", "10", "11", "12"],
        correct: 2,
      },
      {
        points: 100,
        q: "ما هي الرياضة التي تُلعب بالكرة والسلة؟",
        options: ["كرة اليد", "كرة السلة", "التنس", "البيسبول"],
        correct: 1,
      },
      {
        points: 100,
        q: "ما هي الرياضة التي تُلعب بمضرب وكرة صفراء على ملعب عشبي أو صلب؟",
        options: ["كرة الطاولة", "التنس", "البيسبول", "الجولف"],
        correct: 1,
      },
      {
        points: 100,
        q: "أي رياضة يُستخدم فيها المرمى والشبكة العالية وأيدَي اللاعبين فقط؟",
        options: ["كرة اليد", "الكرة الطائرة", "كرة السلة", "التنس"],
        correct: 1,
      },

      // 300
      {
        points: 300,
        q: "كم مدة الشوط الواحد في كرة القدم (بدون الوقت بدل الضائع)؟",
        options: ["30 دقيقة", "35 دقيقة", "45 دقيقة", "60 دقيقة"],
        correct: 2,
      },
      {
        points: 300,
        q: "أي من هذه الرياضات تُلعب على الجليد؟",
        options: ["الهوكي", "كرة اليد", "السباحة", "كرة الطاولة"],
        correct: 0,
      },
      {
        points: 300,
        q: "في أي قارة نشأت الألعاب الأولمبية الحديثة؟",
        options: ["أوروبا", "آسيا", "أفريقيا", "أمريكا الجنوبية"],
        correct: 0,
      },
      {
        points: 300,
        q: "كم عدد الحلقات في شعار الألعاب الأولمبية؟",
        options: ["أربع", "خمس", "ست", "سبع"],
        correct: 1,
      },

      // 500
      {
        points: 500,
        q: "أي من هذه الدول استضافت كأس العالم لكرة القدم من قبل؟",
        options: ["قطر", "المغرب", "النرويج", "اليونان"],
        correct: 0,
      },
      {
        points: 500,
        q: "أي رياضة يُستخدم فيها المضرب وكرة صغيرة على طاولة؟",
        options: ["التنس الأرضي", "الإسكواش", "كرة الطاولة", "البيسبول"],
        correct: 2,
      },
      {
        points: 500,
        q: "أي من هذه البطولات تُعد بطولة عالمية لرياضة السيارات؟",
        options: ["NBA", "Formula 1", "UEFA", "NFL"],
        correct: 1,
      },
      {
        points: 500,
        q: "أي رياضة يُستخدم فيها لوح طويل للتزلج على الأمواج؟",
        options: ["التجديف", "التزلج على الجليد", "ركوب الأمواج", "التجديف بالقارب"],
        correct: 2,
      },
    ],
  },

  // باقي الفئات من عندك (puzzle, which_country, copa_america,..., guess_football_image)
  // تقدر تترك أسئلتها مثل ما هي الآن (6 أسئلة)، أو تزودها بنفس الطريقة:
  //  - تضيف أسئلة جديدة بنقاط 100 / 300 / 500 داخل نفس المصفوفة questions

  // أنا ما غيرت IDs ولا الأسماء ولا الصور عشان ما تخرب الصور اللي جهزتها.
  // فقط غيرت المنطق تحت (buildBoard) عشان يعتمد على تجميع حسب النقاط والاختيار العشوائي.
];

// ========= خريطة الفئات =========
const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

// ========= عناصر DOM =========

// شاشات
const teamsScreen = document.getElementById("teams-screen");
const categoriesScreen = document.getElementById("categories-screen");
const boardScreen = document.getElementById("board-screen");

// شاشة الفرق
const team1Input = document.getElementById("team1-input");
const team2Input = document.getElementById("team2-input");
const toCategoriesBtn = document.getElementById("to-categories-btn");

// شاشة الفئات
const categoriesGrid = document.getElementById("categories-grid");
const selectedCountEl = document.getElementById("selected-count");
const backToTeamsBtn = document.getElementById("back-to-teams-btn");
const startGameBtn = document.getElementById("start-game-btn");

// لوحة
const boardContainer = document.getElementById("board-container");
const backToCategoriesBtn = document.getElementById("back-to-categories-btn");

const team1NameEl = document.getElementById("team1-name");
const team2NameEl = document.getElementById("team2-name");
const team1ScoreEl = document.getElementById("team1-score");
const team2ScoreEl = document.getElementById("team2-score");
const currentTeamLabelEl = document.getElementById("current-team-label");
const team1BoxEl = document.getElementById("team1-box");
const team2BoxEl = document.getElementById("team2-box");
const timerEl = document.getElementById("timer");

// مودال السؤال
const questionModal = document.getElementById("question-modal");
const modalCategoryLabel = document.getElementById("modal-category-label");
const modalPointsLabel = document.getElementById("modal-points-label");
const questionTextEl = document.getElementById("question-text");
const optionsButtons = Array.from(document.querySelectorAll(".option-btn"));
const statusTextEl = document.getElementById("status-text");
const closeQuestionBtn = document.getElementById("close-question-btn");

// lifelines داخل المودال
const lifelineTeamNameEl = document.getElementById("lifeline-team-name");
const lifelineFiftyCountEl = document.getElementById("lifeline-fifty-count");
const lifelineCallCountEl = document.getElementById("lifeline-call-count");
const lifelineButtons = Array.from(document.querySelectorAll(".lifeline-btn"));

// ========= حالة اللعبة =========
let team1Name = "الفريق 1";
let team2Name = "الفريق 2";
let team1Score = 0;
let team2Score = 0;

let currentTeam = 1; // 1 أو 2
let nextStartingTeam = 1; // من يبدأ السؤال القادم

const FIRST_CHANCE_SECONDS = 60;
const SECOND_CHANCE_SECONDS = 15;
const CALL_FRIEND_SECONDS = 90; // 1:30

let timerIntervalId = null;
let remainingSeconds = FIRST_CHANCE_SECONDS;

// phase = "idle" | "first" | "second"
let phase = "idle";
let questionEnded = false;

let selectedCategoryIds = []; // 6 فئات
let currentCategoryId = null;
let currentQuestionIndex = null;
let currentQuestion = null;
let currentTileButton = null;

// lifelines state لكل فريق
const lifelines = {
  1: { fifty: 1, call: 1 },
  2: { fifty: 1, call: 1 },
};

// ========= دوال مساعدة للأسئلة =========
function groupQuestionsByPoints(cat) {
  const result = {
    100: [],
    300: [],
    500: [],
  };

  cat.questions.forEach((q, idx) => {
    if (result[q.points]) {
      result[q.points].push({ index: idx, question: q });
    }
  });

  return result;
}

function pickRandomQuestions(arr, count) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

// ========= دوال مساعدة عامة =========
function formatTime(seconds) {
  const s = seconds % 60;
  const m = Math.floor(seconds / 60);
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function setActiveTeamUI() {
  team1BoxEl.classList.toggle("active", currentTeam === 1);
  team2BoxEl.classList.toggle("active", currentTeam === 2);
  currentTeamLabelEl.textContent = currentTeam === 1 ? team1Name : team2Name;
}

function stopTimer() {
  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function startTimer(seconds) {
  stopTimer();
  remainingSeconds = seconds;
  timerEl.textContent = formatTime(remainingSeconds);

  timerIntervalId = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      timerEl.textContent = "00:00";
      stopTimer();
      handleTimeUp();
    } else {
      timerEl.textContent = formatTime(remainingSeconds);
    }
  }, 1000);
}

function resetOptionsState() {
  optionsButtons.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
    btn.style.display = "block";
    btn.style.opacity = 1;
  });
}

function getCurrentTeamName() {
  return currentTeam === 1 ? team1Name : team2Name;
}

function updateLifelinesUI() {
  lifelineTeamNameEl.textContent = getCurrentTeamName();
  lifelineFiftyCountEl.textContent = lifelines[currentTeam].fifty;
  lifelineCallCountEl.textContent = lifelines[currentTeam].call;

  lifelineButtons.forEach((btn) => {
    const type = btn.dataset.type;
    const count = lifelines[currentTeam][type];
    btn.disabled = count <= 0;
  });
}

// ========= انتقال شاشة الفرق → الفئات =========
toCategoriesBtn.addEventListener("click", () => {
  team1Name = (team1Input.value || "الفريق 1").trim() || "الفريق 1";
  team2Name = (team2Input.value || "الفريق 2").trim() || "الفريق 2";

  team1NameEl.textContent = team1Name;
  team2NameEl.textContent = team2Name;

  teamsScreen.classList.add("hidden");
  categoriesScreen.classList.remove("hidden");

  buildCategoriesGrid();
});

// ========= شاشة الفئات =========
function buildCategoriesGrid() {
  categoriesGrid.innerHTML = "";
  selectedCategoryIds = [];
  selectedCountEl.textContent = "0";
  startGameBtn.disabled = true;

  CATEGORIES.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.id = cat.id;

    card.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}" class="category-image" />
      <div class="category-body">
        <div class="category-title">${cat.name}</div>
        <div class="category-tag">${cat.tag}</div>
      </div>
    `;

    card.addEventListener("click", () => toggleCategorySelect(cat.id, card));
    categoriesGrid.appendChild(card);
  });
}

function toggleCategorySelect(id, cardEl) {
  const index = selectedCategoryIds.indexOf(id);
  if (index === -1) {
    if (selectedCategoryIds.length >= 6) return;
    selectedCategoryIds.push(id);
    cardEl.classList.add("selected");
  } else {
    selectedCategoryIds.splice(index, 1);
    cardEl.classList.remove("selected");
  }

  selectedCountEl.textContent = selectedCategoryIds.length.toString();
  startGameBtn.disabled = selectedCategoryIds.length !== 6;
}

backToTeamsBtn.addEventListener("click", () => {
  categoriesScreen.classList.add("hidden");
  teamsScreen.classList.remove("hidden");
});

// ========= بدء اللعبة وبناء اللوحة =========
startGameBtn.addEventListener("click", () => {
  if (selectedCategoryIds.length !== 6) return;

  categoriesScreen.classList.add("hidden");
  boardScreen.classList.remove("hidden");

  team1Score = 0;
  team2Score = 0;
  team1ScoreEl.textContent = "0";
  team2ScoreEl.textContent = "0";

  currentTeam = 1;
  nextStartingTeam = 1;
  setActiveTeamUI();

  lifelines[1] = { fifty: 1, call: 1 };
  lifelines[2] = { fifty: 1, call: 1 };
  updateLifelinesUI();

  buildBoard();
});

function createTile(cat, qIndex) {
  const qObj = cat.questions[qIndex];
  if (!qObj) return null;

  const tile = document.createElement("button");
  tile.className = "question-tile";
  tile.textContent = qObj.points;
  tile.dataset.categoryId = cat.id;
  tile.dataset.questionIndex = qIndex.toString();
  tile.addEventListener("click", () => handleTileClick(tile));
  return tile;
}

function buildBoard() {
  boardContainer.innerHTML = "";

  selectedCategoryIds.forEach((id) => {
    const cat = CATEGORY_MAP[id];
    if (!cat) return;

    const col = document.createElement("div");
    col.className = "board-column";
    col.dataset.categoryId = cat.id;

    const layout = document.createElement("div");
    layout.className = "column-layout";

    const leftCol = document.createElement("div");
    leftCol.className = "points-column points-left";

    const rightCol = document.createElement("div");
    rightCol.className = "points-column points-right";

    const mainCat = document.createElement("div");
    mainCat.className = "category-main";
    mainCat.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}" class="column-image" />
      <div class="column-title">${cat.name}</div>
    `;

    const grouped = groupQuestionsByPoints(cat);

    [100, 300, 500].forEach((points) => {
      const candidates = grouped[points] || [];
      const chosen = pickRandomQuestions(candidates, 2);

      const leftMeta = chosen[0];
      const rightMeta = chosen[1];

      if (leftMeta) {
        const leftTile = createTile(cat, leftMeta.index);
        if (leftTile) leftCol.appendChild(leftTile);
      }

      if (rightMeta) {
        const rightTile = createTile(cat, rightMeta.index);
        if (rightTile) rightCol.appendChild(rightTile);
      }
    });

    layout.appendChild(leftCol);
    layout.appendChild(mainCat);
    layout.appendChild(rightCol);

    col.appendChild(layout);
    boardContainer.appendChild(col);
  });
}

// الرجوع من اللوحة إلى اختيار الفئات
backToCategoriesBtn.addEventListener("click", () => {
  stopTimer();
  questionModal.classList.add("hidden");
  boardScreen.classList.add("hidden");
  categoriesScreen.classList.remove("hidden");
});

// ========= فتح سؤال من البلاطة =========
function handleTileClick(tile) {
  if (tile.classList.contains("used")) return;

  const catId = tile.dataset.categoryId;
  const qIndex = parseInt(tile.dataset.questionIndex, 10);
  const cat = CATEGORY_MAP[catId];
  if (!cat || !cat.questions[qIndex]) return;

  currentCategoryId = catId;
  currentQuestionIndex = qIndex;
  currentQuestion = cat.questions[qIndex];
  currentTileButton = tile;

  phase = "first";
  questionEnded = false;

  currentTeam = nextStartingTeam;
  setActiveTeamUI();
  updateLifelinesUI();

  modalCategoryLabel.textContent = cat.name;
  modalPointsLabel.textContent = `${currentQuestion.points} نقطة`;
  questionTextEl.textContent = currentQuestion.q;

  resetOptionsState();
  optionsButtons.forEach((btn, idx) => {
    const text = currentQuestion.options[idx];
    if (typeof text === "string") {
      btn.textContent = text;
      btn.dataset.index = String(idx);
      btn.style.display = "block";
      btn.disabled = false;
    } else {
      btn.style.display = "none";
    }
  });

  statusTextEl.textContent = "";
  closeQuestionBtn.disabled = false;

  startTimer(FIRST_CHANCE_SECONDS);
  questionModal.classList.remove("hidden");
}

// ========= عند ضغط خيار =========
optionsButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleOptionClick(btn));
});

function handleOptionClick(btn) {
  if (!currentQuestion) return;

  const selectedIndex = parseInt(btn.dataset.index, 10);
  const correctIndex = currentQuestion.correct;

  optionsButtons.forEach((b) => (b.disabled = true));
  stopTimer();

  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    statusTextEl.textContent = `إجابة صحيحة ✅ لـ ${getCurrentTeamName()}`;

    if (currentTeam === 1) {
      team1Score += currentQuestion.points;
      team1ScoreEl.textContent = team1Score.toString();
    } else {
      team2Score += currentQuestion.points;
      team2ScoreEl.textContent = team2Score.toString();
    }

    finishQuestion();
  } else {
    btn.classList.add("wrong");

    if (phase === "first") {
      statusTextEl.textContent = `إجابة خاطئة ❌ من ${getCurrentTeamName()}، فرصة للفريق الآخر`;
      giveSecondChance();
    } else {
      const correctBtn = optionsButtons.find(
        (b) => parseInt(b.dataset.index, 10) === correctIndex
      );
      if (correctBtn) correctBtn.classList.add("correct");

      statusTextEl.textContent = "إجابة خاطئة من الفريقين ❌";
      finishQuestion();
    }
  }
}

// ========= انتهاء الوقت =========
function handleTimeUp() {
  if (!currentQuestion) return;
  const correctIndex = currentQuestion.correct;

  if (phase === "first") {
    statusTextEl.textContent = `انتهى وقت ${getCurrentTeamName()} ⏰، فرصة للفريق الآخر`;
    giveSecondChance();
  } else {
    optionsButtons.forEach((btn) => {
      btn.disabled = true;
      const idx = parseInt(btn.dataset.index, 10);
      if (idx === correctIndex) btn.classList.add("correct");
    });
    statusTextEl.textContent = "انتهى الوقت على الفريقين ⏰";
    finishQuestion();
  }
}

// ========= فرصة للفريق الثاني =========
function giveSecondChance() {
  phase = "second";
  currentTeam = currentTeam === 1 ? 2 : 1;
  setActiveTeamUI();
  updateLifelinesUI();

  optionsButtons.forEach((btn) => {
    if (!btn.classList.contains("wrong")) {
      btn.disabled = false;
    }
  });

  startTimer(SECOND_CHANCE_SECONDS);
}

// ========= إنهاء السؤال =========
function finishQuestion() {
  questionEnded = true;

  if (currentTileButton) {
    currentTileButton.classList.add("used");
    currentTileButton.disabled = true;
  }

  nextStartingTeam = nextStartingTeam === 1 ? 2 : 1;
}

// زر إغلاق السؤال
closeQuestionBtn.addEventListener("click", () => {
  questionModal.classList.add("hidden");
  stopTimer();
  phase = "idle";
  currentQuestion = null;
  currentCategoryId = null;
  currentQuestionIndex = null;
  currentTileButton = null;
});

// ========= وسائل المساعدة =========
lifelineButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleLifelineClick(btn));
});

function handleLifelineClick(btn) {
  const type = btn.dataset.type;
  const team = currentTeam;

  if (lifelines[team][type] <= 0) return;

  if (!currentQuestion || phase === "idle") {
    statusTextEl.textContent = "استخدم وسيلة المساعدة داخل السؤال فقط.";
    return;
  }

  if (type === "fifty") {
    applyFiftyFifty();
  } else if (type === "call") {
    applyCallFriend();
  }

  lifelines[team][type] -= 1;
  updateLifelinesUI();
}

function applyFiftyFifty() {
  const correctIndex = currentQuestion.correct;
  const wrongButtons = optionsButtons.filter((btn) => {
    const idx = parseInt(btn.dataset.index, 10);
    return idx !== correctIndex;
  });

  if (wrongButtons.length < 2) return;

  const shuffled = [...wrongButtons].sort(() => Math.random() - 0.5);
  const toHide = shuffled.slice(0, 2);
  toHide.forEach((btn) => {
    btn.disabled = true;
    btn.style.opacity = 0.4;
  });

  statusTextEl.textContent = "تم حذف إجابتين خاطئتين 🎯";
}

function applyCallFriend() {
  if (phase !== "first") {
    statusTextEl.textContent = "اتصال بصديق فقط في فرصة الفريق الأولى.";
    return;
  }
  startTimer(CALL_FRIEND_SECONDS);
  statusTextEl.textContent = "اتصال بصديق 🔔 لديك دقيقة ونصف للتشاور.";
}

// ========= تهيئة أولية =========
updateLifelinesUI();
console.log("SeenGame-board loaded ✅");
