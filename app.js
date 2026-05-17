const languages = {
    de: { name: "Deutsch", locale: "de-DE", ui: { title: "🌍 Polyglot Learn", appLang: "📱 App-Sprache:", srcLang: "Ich spreche:", targetLang: "Ich lerne:", flip: "Umdrehen", wrong: "Falsch ❌", correct: "Richtig ✔️", next: "Nächstes Wort", progress: "Fortschritt:", listen: "🔊 Hören", errorSame: "Bitte unterschiedliche Sprachen wählen!", aiBtn: "✨ KI-Erklärung", settingsTitle: "⚙️ Einstellungen & Design", save: "Speichern", thinking: "⚡ Claude denkt nach..." }},
    en: { name: "Englisch", locale: "en-US", ui: { title: "🌍 Polyglot Learn", appLang: "📱 App Language:", srcLang: "I speak:", targetLang: "I learn:", flip: "Flip Card", wrong: "Wrong ❌", correct: "Correct ✔️", next: "Next Word", progress: "Progress:", listen: "🔊 Listen", errorSame: "Please select different languages!", aiBtn: "✨ AI Explain", settingsTitle: "⚙️ Settings & Theme", save: "Save", thinking: "⚡ Claude is thinking..." }},
    ru: { name: "Russisch", locale: "ru-RU", ui: { title: "🌍 Polyglot Learn", appLang: "📱 Язык приложения:", srcLang: "Я говорю на:", targetLang: "Я учу:", flip: "Перевернуть", wrong: "Неверно ❌", correct: "Правильно ✔️", next: "Следующее слово", progress: "Прогресс:", listen: "🔊 Слушать", errorSame: "Пожалуйста, выберите разные языки!", aiBtn: "✨ ИИ Объяснение", settingsTitle: "⚙️ Настройки и Дизайн", save: "Сохранить", thinking: "⚡ Клод думает..." }},
    fr: { name: "Französisch", locale: "fr-FR", ui: { title: "🌍 Polyglot Learn", appLang: "📱 Langue de l'app:", srcLang: "Je parle:", targetLang: "J'apprends:", flip: "Retourner", wrong: "Faux ❌", correct: "Correct ✔️", next: "Mot suivant", progress: "Progression:", listen: "🔊 Écouter", errorSame: "Veuillez choisir des langues différentes !", aiBtn: "✨ Explication IA", settingsTitle: "⚙️ Paramètres & Design", save: "Enregistrer", thinking: "⚡ Claude réfléchit..." }},
    es: { name: "Spanisch", locale: "es-ES", ui: { title: "🌍 Polyglot Learn", appLang: "📱 Idioma de la app:", srcLang: "Hablo:", targetLang: "Aprendo:", flip: "Voltear", wrong: "Incorrecto ❌", correct: "Correcto ✔️", next: "Siguiente palabra", progress: "Progreso:", listen: "🔊 Escuchar", errorSame: "¡Por favor, selecciona idiomas diferentes!", aiBtn: "✨ Explicación IA", settingsTitle: "⚙️ Ajustes und Design", save: "Guardar", thinking: "⚡ Claude está pensando..." }},
    it: { name: "Italienisch", locale: "it-IT", ui: { title: "🌍 Polyglot Learn", appLang: "📱 Lingua dell'app:", srcLang: "Parlo:", targetLang: "Imparo:", flip: "Capovolgi", wrong: "Sbagliato ❌", correct: "Giusto ✔️", next: "Prossima parola", progress: "Progresso:", listen: "🔊 Ascolta", errorSame: "Per favore, seleziona lingue diverse!", aiBtn: "✨ Spiegazione IA", settingsTitle: "⚙️ Impostazioni & Design", save: "Salva", thinking: "⚡ Claude sta pensando..." }},
    da: { name: "Dänisch", locale: "da-DK", ui: { title: "🌍 Polyglot Learn", appLang: "📱 App-sprog:", srcLang: "Jeg taler:", targetLang: "Jeg lærer:", flip: "Vend kort", wrong: "Forkert ❌", correct: "Rigtigt ✔️", next: "Næste ord", progress: "Fremskridt:", listen: "🔊 Lyt", errorSame: "Vælg venligst forskellige sprog!", aiBtn: "✨ AI Forklaring", settingsTitle: "⚙️ Indstillinger & Design", save: "Gem", thinking: "⚡ Claude tænker..." }},
    sv: { name: "Schwedisch", locale: "sv-SE", ui: { title: "🌍 Polyglot Learn", appLang: "📱 App-språk:", srcLang: "Jag talar:", targetLang: "Jag lär mig:", flip: "Vänd kort", wrong: "Fel ❌", correct: "Rätt ✔️", next: "Nästa ord", progress: "Framsteg:", listen: "🔊 Lyssna", errorSame: "Välj verschiedene sprog!", aiBtn: "✨ AI-förklaring", settingsTitle: "⚙️ Inställningar & Tema", save: "Spara", thinking: "⚡ Claude tänker..." }},
    sq: { name: "Albanisch", locale: "sq-AL", ui: { title: "🌍 Polyglot Learn", appLang: "📱 Gjuha e aplikacionit:", srcLang: "Unë flas:", targetLang: "Unë mësoj:", flip: "Ktheje kartën", wrong: "Gabim ❌", correct: "Saktë ✔️", next: "Fjala tjetër", progress: "Progresi:", listen: "🔊 Dëgjo", errorSame: "Ju lutem zgjidhni gjuha të ndryshme!", aiBtn: "✨ Shpjegim AI", settingsTitle: "⚙️ Cilësimet dhe Dizajni", save: "Ruaj", thinking: "⚡ Claude po mendon..." }},
    th: { name: "Thailändisch", locale: "th-TH", ui: { title: "🌍 Polyglot Learn", appLang: "📱 ภาษาของแอป:", srcLang: "ฉันพูดภาษา:", targetLang: "ฉันเรียนภาษา:", flip: "พลิกการ์ด", wrong: "ผิด ❌", correct: "ถูก ✔️", next: "คำต่อไป", progress: "ความคืบหน้า:", listen: "🔊 ฟัง", errorSame: "กรุณาเลือกภาษาที่แตกต่างกัน!", aiBtn: "✨ คำอธิบายจาก AI", settingsTitle: "⚙️ การตั้งค่าและธีม", save: "บันทึก", thinking: "⚡ โคลดกำลังคิด..." }}
};

const vocabulary = [
    { de: "Hallo", en: "Hello", ru: "Привет", fr: "Bonjour", es: "Hola", it: "Ciao", da: "Hej", sv: "Hej", sq: "Përshëndetje", th: "สวัสดี" },
    { de: "Danke", en: "Thank you", ru: "Спасибо", fr: "Merci", es: "Gracias", it: "Grazie", da: "Tak", sv: "Tack", sq: "Faleminderit", th: "ขอบคุณ" },
    { de: "Wasser", en: "Water", ru: "Вода", fr: "Eau", es: "Agua", it: "Acqua", da: "Vand", sv: "Vatten", sq: "Ujë", th: "น้ำ" },
    { de: "Brot", en: "Bread", ru: "Хлеб", fr: "Pain", es: "Pan", it: "Pane", da: "Brød", sv: "Bröd", sq: "Bukë", th: "ขนมปัง" }
];

let currentUiLang = 'de', currentSrc = 'de', currentTarget = 'en', currentDeck = [], currentCardIndex = 0;
let polyglotNetActive = false;
let currentAiMode = 'normal';
let deferredPrompt;

const uiSelect = document.getElementById('ui-lang'), srcSelect = document.getElementById('src-lang'), targetSelect = document.getElementById('target-lang');
const flashcard = document.getElementById('flashcard'), cardQuestion = document.getElementById('card-question'), cardAnswer = document.getElementById('card-answer');
const frontLabel = document.getElementById('front-lang-label'), backLabel = document.getElementById('back-lang-label');
const modal = document.getElementById('settings-modal'), aiBox = document.getElementById('ai-response-box'), aiContent = document.getElementById('ai-content'), aiLoading = document.getElementById('ai-loading');
const polyBtn = document.getElementById('polyglot-toggle');
const installBtn = document.getElementById('install-btn');

function init() {
    Object.keys(languages).forEach(code => {
        uiSelect.add(new Option(languages[code].name, code, code === 'de', code === 'de'));
        srcSelect.add(new Option(languages[code].name, code, code === 'de', code === 'de'));
        targetSelect.add(new Option(languages[code].name, code, code === 'en', code === 'en'));
    });

    uiSelect.addEventListener('change', (e) => { currentUiLang = e.target.value; updateUiText(); });
    srcSelect.addEventListener('change', (e) => { currentSrc = e.target.value; generateDeck(); });
    targetSelect.addEventListener('change', (e) => { currentTarget = e.target.value; generateDeck(); });
    
    document.getElementById('flip-btn').addEventListener('click', flipCard);
    document.getElementById('correct-btn').addEventListener('click', () => handleAnswer());
    document.getElementById('wrong-btn').addEventListener('click', () => handleAnswer());
    document.getElementById('next-btn').addEventListener('click', nextCard);
    document.getElementById('listen-btn').addEventListener('click', (e) => { e.stopPropagation(); speak(); });
    document.getElementById('ai-btn').addEventListener('click', (e) => { e.stopPropagation(); askClaude(); });
    flashcard.addEventListener('click', flipCard);

    polyBtn.addEventListener('click', togglePolyglotNet);

    document.getElementById('filter-normal').addEventListener('click', (e) => switchAiMode('normal', e.target));
    document.getElementById('filter-culture').addEventListener('click', (e) => switchAiMode('culture', e.target));
    document.getElementById('filter-slang').addEventListener('click', (e) => switchAiMode('slang', e.target));

    document.getElementById('settings-btn').addEventListener('click', openSettings);
    document.getElementById('close-modal-btn').addEventListener('click', () => modal.style.display = 'none');
    document.getElementById('cancel-settings-btn').addEventListener('click', () => modal.style.display = 'none');
    document.getElementById('save-settings-btn').addEventListener('click', saveSettings);
    document.getElementById('update-btn').addEventListener('click', () => window.location.reload());

    document.getElementById('preset-light').addEventListener('click', () => applyPreset('#4A90E2', '#F5F7FA', '#FFFFFF', '#333333'));
    document.getElementById('preset-dark').addEventListener('click', () => applyPreset('#61AFEF', '#1E1E24', '#282C34', '#ABB2BF'));
    document.getElementById('preset-cyber').addEventListener('click', () => applyPreset('#00FFCC', '#0F051D', '#1A0B2E', '#FF007F'));
    document.getElementById('preset-classic').addEventListener('click', () => applyPreset('#1B4965', '#BEE9E8', '#FFFFFF', '#113047'));

    // PWA Setup
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'block';
    });

    installBtn.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted install');
                }
                deferredPrompt = null;
                installBtn.style.display = 'none';
            });
        }
    });

    window.addEventListener('appinstalled', () => {
        installBtn.style.display = 'none';
    });

    loadSettingsAndTheme();
    updateUiText();
    generateDeck();
}

function applyPreset(primary, bg, card, text) {
    document.getElementById('color-primary').value = primary;
    document.getElementById('color-bg').value = bg;
    document.getElementById('color-card').value = card;
    document.getElementById('color-text').value = text;
    applyTheme(primary, bg, card, text);
}

function switchAiMode(mode, targetElement) {
    currentAiMode = mode;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    targetElement.classList.add('active');
    if (flashcard.classList.contains('flipped') && aiBox.style.display === 'block') {
        askClaude();
    }
}

function togglePolyglotNet() {
    polyglotNetActive = !polyglotNetActive;
    if (polyglotNetActive) {
        polyBtn.classList.add('active');
        polyBtn.innerText = "🔀 Polyglottes Netz: AKTIV";
        document.getElementById('lang-select-section').style.opacity = "0.3";
        document.getElementById('lang-select-section').style.pointerEvents = "none";
    } else {
        polyBtn.classList.remove('active');
        polyBtn.innerText = "🔀 Polyglottes Netz: AUS";
        document.getElementById('lang-select-section').style.opacity = "1";
        document.getElementById('lang-select-section').style.pointerEvents = "auto";
        currentSrc = srcSelect.value;
        currentTarget = targetSelect.value;
    }
    generateDeck();
}

function updateUiText() {
    const trans = languages[currentUiLang].ui;
    document.getElementById('ui-title').innerHTML = "🌍 Polyglot Learn";
    document.getElementById('ui-lang-label').innerText = trans.appLang;
    document.getElementById('ui-src-label').innerText = trans.srcLang;
    document.getElementById('ui-target-label').innerText = trans.targetLang;
    document.getElementById('flip-btn').innerText = trans.flip;
    document.getElementById('wrong-btn').innerText = trans.wrong;
    document.getElementById('correct-btn').innerText = trans.correct;
    document.getElementById('next-btn').innerText = trans.next;
    document.getElementById('listen-btn').innerText = trans.listen;
    document.getElementById('ai-btn').innerText = trans.aiBtn;
    document.getElementById('ui-settings-title').innerText = trans.settingsTitle;
    document.getElementById('save-settings-btn').innerText = trans.save;
    aiLoading.innerText = trans.thinking;
    updateProgressText();
}

function generateDeck() {
    currentDeck = [...vocabulary].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    showCard();
}

function showCard() {
    if (currentDeck.length === 0) return;
    flashcard.classList.remove('flipped');
    aiBox.style.display = 'none';
    document.getElementById('action-btns').style.display = 'none';
    document.getElementById('flip-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';

    if (polyglotNetActive) {
        const keys = Object.keys(languages);
        currentSrc = keys[Math.floor(Math.random() * keys.length)];
        let targetCandidate = keys[Math.floor(Math.random() * keys.length)];
        while (targetCandidate === currentSrc) {
            targetCandidate = keys[Math.floor(Math.random() * keys.length)];
        }
        currentTarget = targetCandidate;
    }

    frontLabel.innerText = languages[currentSrc].name;
    backLabel.innerText = languages[currentTarget].name;

    cardQuestion.innerText = currentDeck[currentCardIndex][currentSrc];
    cardAnswer.innerText = currentDeck[currentCardIndex][currentTarget];
    updateProgressText();
}

function updateProgressText() {
    if (currentDeck.length === 0) return;
    document.getElementById('progress-text').innerText = `${languages[currentUiLang].ui.progress} ${currentCardIndex + 1} / ${currentDeck.length}`;
}

function flipCard() {
    if (!flashcard.classList.contains('flipped')) {
        flashcard.classList.add('flipped');
        document.getElementById('flip-btn').style.display = 'none';
        document.getElementById('action-btns').style.display = 'flex';
        speak();
    }
}

function handleAnswer() {
    document.getElementById('action-btns').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= currentDeck.length) generateDeck(); else showCard();
}

function speak() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentDeck[currentCardIndex][currentTarget]);
        utterance.lang = languages[currentTarget].locale;
        window.speechSynthesis.speak(utterance);
    }
}

async function askClaude() {
    const apiKey = localStorage.getItem('anthropic_api_key');
    const modelName = localStorage.getItem('anthropic_model') || 'claude-3-5-sonnet-20241022';
    
    if (!apiKey) {
        alert("Bitte hinterlege zuerst einen API-Key in den Einstellungen (Zahnrad)!");
        openSettings();
        return;
    }

    aiBox.style.display = 'block';
    aiLoading.style.display = 'block';
    aiContent.innerHTML = '';

    const nativeWord = currentDeck[currentCardIndex][currentSrc];
    const learningWord = currentDeck[currentCardIndex][currentTarget];
    const systemPrompt = `You are an elite polyglot teacher and cultural expert. Always respond in ${languages[currentUiLang].name}.`;
    
    let modeInstruction = "";
    if (currentAiMode === 'culture') {
        modeInstruction = `Fokus auf KULTUR & ETIKETTE: Erkläre die tiefen sozialen Nuancen, Höflichkeitsformen oder kulturelle Missverständnisse rund um das Wort "${learningWord}" in der Kultur der Region, in der man es spricht.`;
    } else if (currentAiMode === 'slang') {
        modeInstruction = `Fokus auf JUGENDSPRACHE & STREET-SLANG: Wie würde man dieses Wort ("${learningWord}") oder ein äquivalentes Konzept in der echten Umgangssprache der Jugend oder auf der Straße ausdrücken? Gib unzensierte, echte Alltagsbeispiele.`;
    } else {
        modeInstruction = `Standard-Modus: Erstelle zwei einfache Alltags-Beispielsätze mit "${learningWord}" und deren Übersetzung ins ${languages[currentSrc].name}. Füge eine kurze Grammatiknotiz hinzu.`;
    }

    const userPrompt = `Der Schüler lernt ${languages[currentTarget].name} ausgehend von ${languages[currentSrc].name}. Aktuelles Wort: "${learningWord}" (Bedeutung: "${nativeWord}").\n\n${modeInstruction}\n\nFormatiere die Ausgabe leserlich mit HTML-Tags (<p>, <strong>, <ul>, <li>).`;

    try {
        const response = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://api.anthropic.com/v1/messages'), {
            method: 'POST',
            headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
            body: JSON.stringify({ model: modelName, max_tokens: 1000, system: systemPrompt, messages: [{ role: 'user', content: userPrompt }] })
        });
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();
        aiLoading.style.display = 'none';
        aiContent.innerHTML = data.content[0].text;
    } catch (error) {
        aiLoading.style.display = 'none';
        aiContent.innerHTML = `<span style="color:var(--danger)">Error: ${error.message}</span>`;
    }
}

function openSettings() {
    modal.style.display = 'flex';
    document.getElementById('api-key').value = localStorage.getItem('anthropic_api_key') || '';
    document.getElementById('ai-model').value = localStorage.getItem('anthropic_model') || 'claude-3-5-sonnet-20241022';
    
    const styles = getComputedStyle(document.documentElement);
    document.getElementById('color-primary').value = styles.getPropertyValue('--primary').trim();
    document.getElementById('color-bg').value = styles.getPropertyValue('--bg').trim();
    document.getElementById('color-card').value = styles.getPropertyValue('--card-bg').trim();
    document.getElementById('color-text').value = styles.getPropertyValue('--text').trim();
}

function saveSettings() {
    localStorage.setItem('anthropic_api_key', document.getElementById('api-key').value.trim());
    localStorage.setItem('anthropic_model', document.getElementById('ai-model').value);
    
    const p = document.getElementById('color-primary').value;
    const bg = document.getElementById('color-bg').value;
    const c = document.getElementById('color-card').value;
    const t = document.getElementById('color-text').value;

    localStorage.setItem('theme_primary', p);
    localStorage.setItem('theme_bg', bg);
    localStorage.setItem('theme_card', c);
    localStorage.setItem('theme_text', t);

    applyTheme(p, bg, c, t);
    modal.style.display = 'none';
}

function applyTheme(primary, bg, card, text) {
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--card-bg', card);
    document.documentElement.style.setProperty('--text', text);

    const hex = primary.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (brightness > 175) {
        document.documentElement.style.setProperty('--title-color', '#111111');
    } else {
        if (bg === '#1E1E24' || bg === '#0F051D') {
            document.documentElement.style.setProperty('--title-color', '#FFFFFF');
        } else {
            document.documentElement.style.setProperty('--title-color', primary);
        }
    }
}

function loadSettingsAndTheme() {
    const p = localStorage.getItem('theme_primary') || '#4A90E2';
    const bg = localStorage.getItem('theme_bg') || '#F5F7FA';
    const c = localStorage.getItem('theme_card') || '#FFFFFF';
    const t = localStorage.getItem('theme_text') || '#333333';
    applyTheme(p, bg, c, t);
}

window.onload = init;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker failed', err));
    });
}