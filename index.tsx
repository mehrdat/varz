import React from 'react';
import ReactDOM from 'react-dom/client';

// --- TRANSLATIONS & DATA ---

const translations = {
  en: {
    title: '100H Fast',
    historyButton: '📊 History',
    progressTitle: 'Progress to 100 Hours',
    complete: 'complete',
    startFastingNow: 'Start Fasting Now',
    setCustomStartTime: 'Set Custom Start Time',
    startFasting: 'Start Fasting',
    saving: 'Saving...',
    endFasting: 'End Fasting',
    started: 'Started',
    historyTitle: 'Fasting History',
    noHistory: 'No fasting history yet.',
    clearHistory: 'Clear History',
    back: 'Back',
    duration: 'Duration',
    confirmClearHistory: 'Are you sure you want to delete all history? This cannot be undone.',
    hours: 'h',
    minutes: 'm',
    seconds: 's'
  },
  fa: {
    title: 'روزه ۱۰۰ ساعته',
    historyButton: '📊 تاریخچه',
    progressTitle: 'پیشرفت تا ۱۰۰ ساعت',
    complete: 'کامل',
    startFastingNow: 'شروع روزه',
    setCustomStartTime: 'تنظیم زمان شروع سفارشی',
    startFasting: 'شروع روزه',
    saving: 'درحال ذخیره...',
    endFasting: 'پایان روزه',
    started: 'شروع شد',
    historyTitle: 'تاریخچه روزه',
    noHistory: 'هنوز تاریخچه ای ثبت نشده است.',
    clearHistory: 'پاک کردن تاریخچه',
    back: 'بازگشت',
    duration: 'مدت زمان',
    confirmClearHistory: 'آیا از حذف تمام تاریخچه مطمئن هستید؟ این عمل غیرقابل بازگشت است.',
    hours: 'ساعت',
    minutes: 'دقیقه',
    seconds: 'ثانیه'
  }
};

const fastingStagesData = [
    {
      megaGroup: "I. Early Phase: Dominant Energy Shift",
      subGroup: "Digestion & Glucose Surge",
      stages: [
        { time: "0-2", description: { en: "Food from last meal digests. Blood Glucose and Insulin spike. Body absorbs nutrients.", fa: "غذا از آخرین وعده هضم می شود. قند خون و انسولین افزایش می یابد. بدن مواد مغذی را جذب می کند." } },
        { time: "2-4", description: { en: "Insulin levels decrease. Body starts using stored glycogen.", fa: "سطح انسولین کاهش می یابد. بدن شروع به استفاده از گلیکوژن ذخیره شده می کند." } }
      ],
    },
    {
      megaGroup: "I. Early Phase: Dominant Energy Shift",
      subGroup: "Glycogen Mobilization",
      stages: [
        { time: "4-6", description: { en: "Body starts utilizing glycogen to maintain energy levels.", fa: "بدن برای حفظ سطح انرژی شروع به استفاده از گلیکوژن می کند." } },
        { time: "6-8", description: { en: "Body continues utilizing glycogen to maintain energy levels.", fa: "بدن برای حفظ سطح انرژی به استفاده از گلیکوژن ادامه می دهد." } }
      ],
    },
    {
      megaGroup: "II. Peak Metabolic Shift: Ketosis & Early Repair",
      subGroup: "Initial Fat Oxidation",
      stages: [
        { time: "8-10", description: { en: "Reduced Insulin Level starts to signal fat cells to release fatty acids", fa: "کاهش سطح انسولین به سلول های چربی سیگنال می دهد تا اسیدهای چرب آزاد کنند." } },
        { time: "10-12", description: { en: "Body increasing uses of fat for energy which leads stable blood sugar.", fa: "استفاده روزافزون بدن از چربی برای انرژی منجر به قند خون پایدار می شود." } }
      ],
    },
    {
      megaGroup: "II. Peak Metabolic Shift: Ketosis & Early Repair",
      subGroup: "Initial Ketogenesis and Early Autophagy",
      stages: [
        { time: "12-14", description: { en: "The liver begins producing ketones as glycogen is further depleted.", fa: "کبد با کاهش بیشتر گلیکوژن شروع به تولید کتون می کند." } },
        { time: "14-16", description: { en: "Autophagy initiates at a low level.", fa: "اتوفاژی در سطح پایینی آغاز می شود." } }
      ],
    },
    {
      megaGroup: "II. Peak Metabolic Shift: Ketosis & Early Repair",
      subGroup: "More Established Ketosis and Extended Autophagy",
      stages: [
        { time: "16-18", description: { en: "Ketone production increases significantly, becoming a major energy source.", fa: "تولید کتون به طور قابل توجهی افزایش یافته و به یک منبع اصلی انرژی تبدیل می شود." } },
        { time: "18-20", description: { en: "Autophagy activity increases, removing damaged or dysfunctional cellular components", fa: "فعالیت اتوفاژی افزایش یافته و اجزای سلولی آسیب دیده یا ناکارآمد را حذف می کند." } }
      ],
    },
    {
      megaGroup: "III. Advanced Repair & Optimization: Maximizing Benefits",
      subGroup: "Stable Fat Metabolism",
      stages: [{ time: "20-24", description: { en: "Increase use of fat for energy, and less and less depend on glucose", fa: "افزایش استفاده از چربی برای انرژی و وابستگی کمتر و کمتر به گلوکز." } }],
    },
    {
      megaGroup: "III. Advanced Repair & Optimization: Maximizing Benefits",
      subGroup: "Immune and Body Restoration",
      stages: [
        { time: "24-30", description: { en: "Body begins the process of eliminating damaged cells, proteins and toxins", fa: "بدن فرآیند حذف سلول های آسیب دیده، پروتئین ها و سموم را آغاز می کند." } },
        { time: "30-36", description: { en: "Body starts the process of healing and repair - Energy and clear minds", fa: "بدن فرآیند بهبود و ترمیم را آغاز می کند - انرژی و ذهن شفاف." } }
      ],
    },
    {
      megaGroup: "IV. Prolonged Fasting: Cautious Deep Dive",
      subGroup: "Extended Fasting Benefits & Potential Risks",
      stages: [
        { time: "36-48", description: { en: "Advanced autophagy and stem cell-based regeneration, supporting the growth of neurons and enhancing cognitive funtions and support of body healing", fa: "اتوفاژی پیشرفته و بازسازی مبتنی بر سلول های بنیادی، حمایت از رشد نورون ها و تقویت عملکردهای شناختی و حمایت از بهبودی بدن." } },
        { time: "48-72", description: { en: "Studies in mice suggest that prolonged fasting may help regenerate immune cells", fa: "مطالعات روی موش ها نشان می دهد که روزه داری طولانی مدت ممکن است به بازسازی سلول های ایمنی کمک کند." } }
      ],
    },
    {
      megaGroup: "IV. Prolonged Fasting: Cautious Deep Dive",
      subGroup: "Prolonged Fasting - Extreme Stem Cell Activation",
      stages: [{ time: "72-100", description: { en: "The body has maximized autophagy and now begins the process of generating new cells and tissues, enhancing stem cells.", fa: "بدن اتوفاژی را به حداکثر رسانده و اکنون فرآیند تولید سلول ها و بافت های جدید را آغاز کرده و سلول های بنیادی را تقویت می کند." } }]
    },
];

// --- HISTORY VIEW COMPONENT ---

function HistoryView({ history, setView, clearHistory, t, language }) {
  const formatDuration = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}${t('hours')} ${m}${t('minutes')} ${s}${t('seconds')}`;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#2d3748', margin: 0 }}>{t('historyTitle')}</h2>
        <button onClick={() => setView('timer')} style={{ background: 'transparent', color: '#667eea', border: '2px solid #667eea', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>{t('back')}</button>
      </div>
      {history.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {history.map(session => (
            <div key={session.id} style={{ background: '#f7fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontWeight: '500', color: '#4a5568' }}>{new Date(session.startTime).toLocaleString(language === 'fa' ? 'fa-IR' : 'en-US')}</p>
              <p style={{ margin: '4px 0', color: '#718096', fontSize: '14px' }}>{t('duration')}: {formatDuration(session.duration)}</p>
            </div>
          )).reverse()}
          <button onClick={clearHistory} style={{ background: '#e53e3e', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', marginTop: '20px' }}>{t('clearHistory')}</button>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#718096' }}>{t('noHistory')}</p>
      )}
    </div>
  );
}

// --- MAIN COMPONENT ---

function MainComponent() {
  const [fastingState, setFastingState] = React.useState("stopped");
  const [startTime, setStartTime] = React.useState(null);
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [manualStartTime, setManualStartTime] = React.useState("");
  const [showManualInput, setShowManualInput] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [view, setView] = React.useState('timer'); // 'timer' or 'history'
  const [history, setHistory] = React.useState([]);
  const [language, setLanguage] = React.useState('fa'); // Default to Farsi

  const t = (key) => translations[language][key] || key;

  // Load history from localStorage on initial render
  React.useEffect(() => {
    try {
      const savedState = localStorage.getItem('fastingAppState');
      if (savedState) {
          const { fastingState, startTime, language } = JSON.parse(savedState);
          setFastingState(fastingState || 'stopped');
          setStartTime(startTime ? new Date(startTime) : null);
          setLanguage(language || 'fa'); // Default to Farsi if not set
      }
      const savedHistory = localStorage.getItem('fastingHistory');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load state from localStorage", error);
    }
  }, []);
  
  // Save active fast state to localStorage
  React.useEffect(() => {
    try {
      const stateToSave = {
          fastingState,
          startTime: startTime ? startTime.toISOString() : null,
          language
      };
      localStorage.setItem('fastingAppState', JSON.stringify(stateToSave));
    } catch(error) {
        console.error("Failed to save state to localStorage", error);
    }
  }, [fastingState, startTime, language]);


  // Update current time every second
  React.useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getFastingDuration = () => {
    if (!startTime) return 0;
    return Math.floor((currentTime.getTime() - new Date(startTime).getTime()) / 1000);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startFasting = (time = null) => {
    const startDateTime = time || new Date();
    setStartTime(startDateTime);
    setFastingState("running");
    setShowManualInput(false);
  };

  const stopFasting = () => {
    if (!startTime) return;
    setSaving(true);
    const endTime = new Date();
    const newSession = {
      id: Date.now(),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration: getFastingDuration(),
    };
    
    setTimeout(() => { // Simulate save time for better UX
        try {
            const updatedHistory = [...history, newSession];
            setHistory(updatedHistory);
            localStorage.setItem('fastingHistory', JSON.stringify(updatedHistory));
        } catch (error) {
            console.error("Failed to save to localStorage", error);
        } finally {
            setFastingState("stopped");
            setStartTime(null);
            setSaving(false);
        }
    }, 500);
  };
  
  const clearHistory = () => {
    if (window.confirm(t('confirmClearHistory'))) {
        setHistory([]);
        localStorage.removeItem('fastingHistory');
    }
  };

  const handleManualStart = () => {
    if (manualStartTime) {
      const manualTime = new Date(manualStartTime);
      if (manualTime <= new Date()) {
        startFasting(manualTime);
        setManualStartTime("");
      }
    }
  };

  const getCurrentFastingStage = (hoursFasted) => {
    if (hoursFasted >= 72) {
        const lastMegaGroup = fastingStagesData[fastingStagesData.length - 1];
        return {
            megaGroup: lastMegaGroup.megaGroup,
            subGroup: lastMegaGroup.subGroup,
            stage: lastMegaGroup.stages[lastMegaGroup.stages.length-1],
        };
    }
    for (const megaGroup of fastingStagesData) {
      for (const stage of megaGroup.stages) {
        const [minTime, maxTime] = stage.time.split("-").map(Number);
        if (hoursFasted >= minTime && hoursFasted < maxTime) {
          return { megaGroup: megaGroup.megaGroup, subGroup: megaGroup.subGroup, stage: stage };
        }
      }
    }
    return null;
  };

  const currentDuration = getFastingDuration();
  const currentHours = Math.floor(currentDuration / 3600);
  const currentStage = getCurrentFastingStage(currentHours);

  const megaGroupColors = {
    "I. Early Phase: Dominant Energy Shift": "#f9d71c",
    "II. Peak Metabolic Shift: Ketosis & Early Repair": "#3498db",
    "III. Advanced Repair & Optimization: Maximizing Benefits": "#2ecc71",
    "IV. Prolonged Fasting: Cautious Deep Dive": "#e74c3c",
  };
  const progressBarColor = currentStage ? megaGroupColors[currentStage.megaGroup] : "#e2e8f0";

  const getMegaGroupIcon = (megaGroup) => {
    switch (megaGroup) {
      case "I. Early Phase: Dominant Energy Shift": return "☀️";
      case "II. Peak Metabolic Shift: Ketosis & Early Repair": return "🔥";
      case "III. Advanced Repair & Optimization: Maximizing Benefits": return "🌿";
      case "IV. Prolonged Fasting: Cautious Deep Dive": return "✨";
      default: return "💡";
    }
  };
  
  const megaGroupLabels = Object.keys(megaGroupColors);
  const calculateSegmentPosition = (index) => (index / megaGroupLabels.length) * 100;

  return (
    <div dir={language === 'fa' ? 'rtl' : 'ltr'} style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "20px", fontFamily: language === 'fa' ? "'Vazirmatn', system-ui, sans-serif" : "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto", background: "rgba(255, 255, 255, 0.95)", borderRadius: "24px", padding: "30px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: "28px", fontWeight: "300", color: "#2d3748", margin: 0 }}>{t('title')}</h1>
          <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <button onClick={() => setView('history')} style={{ background: "rgba(102, 126, 234, 0.1)", color: "#667eea", border: "2px solid #667eea", padding: "6px 12px", borderRadius: "8px", textDecoration: "none", fontSize: "12px", fontWeight: "500", cursor: 'pointer' }}>{t('historyButton')}</button>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ border: '2px solid #667eea', borderRadius: '8px', padding: '6px', background: 'transparent', color: '#667eea', fontWeight: '500' }}>
              <option value="en">EN</option>
              <option value="fa">FA</option>
            </select>
          </div>
        </div>

        {view === 'timer' ? (
          <>
            {/* Main Timer Display */}
            <div style={{ textAlign: "center", marginBottom: "30px", padding: "20px", background: "rgba(102, 126, 234, 0.1)", borderRadius: "16px", border: "1px solid rgba(102, 126, 234, 0.2)" }}>
              <div style={{ fontSize: "48px", fontWeight: "200", color: "#4a5568", fontFamily: "Monaco, monospace", letterSpacing: "2px", wordBreak: "break-word" }} aria-live="polite" aria-atomic="true">
                {formatTime(currentDuration)}
              </div>
            </div>

            {/* Progress Bar and Stage Info */}
            {fastingState === "running" && (
              <div style={{ marginBottom: "30px", padding: "20px", background: "rgba(72, 187, 120, 0.1)", borderRadius: "16px", border: "2px solid rgba(72, 187, 120, 0.2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div style={{ fontSize: "14px", color: "#2d3748", fontWeight: "500" }}>{t('progressTitle')}</div>
                  <div style={{ fontSize: "16px", color: progressBarColor, fontWeight: "600", fontFamily: "Monaco, monospace" }}>{currentHours}/100h</div>
                </div>
                <div style={{ width: "100%", height: "35px", background: "#e2e8f0", borderRadius: "10px", overflow: "hidden", position: "relative" }} role="progressbar" aria-valuenow={currentHours} aria-valuemin={0} aria-valuemax={100} aria-label="Fasting progress">
                  {megaGroupLabels.map((label, index) => <div key={label} style={{ position: "absolute", left: `${calculateSegmentPosition(index)}%`, width: `${100 / megaGroupLabels.length}%`, height: "100%", backgroundColor: megaGroupColors[label], opacity: 0.2, zIndex: 1 }} />)}
                  <div style={{ height: "100%", background: progressBarColor, width: `${Math.min((currentHours / 100) * 100, 100)}%`, borderRadius: "10px", transition: "width 0.3s ease", position: "absolute", top: 0, left: 0, zIndex: 2 }} />
                </div>
                <div style={{ fontSize: "12px", color: "#718096", marginTop: "8px", textAlign: "center" }}>{Math.round((currentHours / 100) * 100)}% {t('complete')}</div>
                {currentStage && (
                  <div style={{ marginTop: "10px", textAlign: "center", fontSize: "14px" }} aria-live="polite">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "20px", margin: '0 5px', color: progressBarColor }} aria-hidden="true">{getMegaGroupIcon(currentStage.megaGroup)}</span>
                      <p style={{ color: progressBarColor, fontWeight: "bold", margin: 0, marginBottom: '5px' }}>{currentStage.megaGroup.replace(/I+\. /g, "")}</p>
                    </div>
                    <p style={{ color: "#555", margin: 0, marginTop: '5px' }}>{currentStage.stage.description[language]}</p>
                  </div>
                )}
              </div>
            )}

            {/* Control Buttons */}
            <div style={{ marginBottom: "30px" }}>
              {fastingState === "stopped" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button onClick={() => startFasting()} style={{ background: "linear-gradient(135deg, #48bb78, #38a169)", color: "white", border: "none", padding: "16px 24px", borderRadius: "12px", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>{t('startFastingNow')}</button>
                  <button onClick={() => setShowManualInput(!showManualInput)} aria-expanded={showManualInput} style={{ background: "transparent", color: "#667eea", border: "2px solid #667eea", padding: "12px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>{t('setCustomStartTime')}</button>
                  {showManualInput && (
                    <div style={{ padding: "16px", background: "#f7fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                      <input type="datetime-local" value={manualStartTime} onChange={(e) => setManualStartTime(e.target.value)} aria-label="Custom start time" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e0", fontSize: "14px", marginBottom: "12px", boxSizing: 'border-box' }} />
                      <button onClick={handleManualStart} style={{ background: "#667eea", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", cursor: "pointer", width: "100%" }}>{t('startFasting')}</button>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={stopFasting} disabled={saving} style={{ background: saving ? "linear-gradient(135deg, #a0aec0, #718096)" : "linear-gradient(135deg, #f56565, #e53e3e)", color: "white", border: "none", padding: "16px 24px", borderRadius: "12px", fontSize: "16px", fontWeight: "500", cursor: saving ? "not-allowed" : "pointer", width: "100%" }}>
                  {saving ? t('saving') : t('endFasting')}
                </button>
              )}
            </div>
            {fastingState === "running" && startTime && (
              <div style={{ marginTop: "10px", textAlign: "center", fontSize: "11px", color: "#718096" }}>
                {t('started')}: {new Date(startTime).toLocaleString(language === 'fa' ? 'fa-IR' : 'en-US')}
              </div>
            )}
          </>
        ) : (
          <HistoryView history={history} setView={setView} clearHistory={clearHistory} t={t} language={language}/>
        )}

      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent />);