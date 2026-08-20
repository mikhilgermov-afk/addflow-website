"use client";

import { useEffect, useState } from "react";
import { LeadForm } from "./LeadForm";
import { LanguageSwitcher, useLanguage } from "./LanguageContext";

const Arrow = () => <span aria-hidden="true">↗</span>;
const BrandLogo = ({ compact = false }: { compact?: boolean }) => <span className={`brand-logo${compact ? " compact" : ""}`} aria-hidden="true"><b>ADD</b><b>FLOW</b><i /></span>;
const Equalizer = () => <span className="brand-equalizer" aria-hidden="true">{[3,6,9,13,8,5,11,16,12,7,10,15,9,5,3].map((height,index)=><i key={index} style={{height:`${height}px`}} />)}</span>;

export default function Home() {
  const { t } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("intro-active");
    const timer = window.setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-active");
    }, reducedMotion ? 450 : 3000);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  return (
    <>
      {showIntro && <div className="site-intro" role="status" aria-label="AddFlow загружается">
        <div className="intro-frame" aria-hidden="true">
          <div className="intro-rec"><i /> REC</div>
          <BrandLogo />
          <div className="intro-signal"><Equalizer /></div>
          <span className="intro-time">00:00:01</span>
        </div>
      </div>}
      <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="logo" href="#top" aria-label="AddFlow - на главную">
            <BrandLogo compact />
          </a>
          <div className="nav-links">
            <a href="#product">Продукт</a>
            <a href="#how">Как работает</a>
            <a href="#proof">Возможности</a>
          </div>
          <div className="nav-actions"><LanguageSwitcher /><a className="nav-cta" href="#contact">Получить предложение <Arrow /></a></div>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Новая рекламная среда стриминга</div>
          <Equalizer />
          <h1>В эфире - бренд.<br /><em>В плюсе - автор.</em></h1>
          <p className="hero-lead">Бренды получают нативное внимание и прозрачный результат. Стримеры выбирают подходящие кампании и монетизируют аудиторию без потери доверия.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Я бренд - получить медиаплан <Arrow /></a>
            <a className="button ghost" href="#streamers">Я стример - стать партнером</a>
          </div>
          <div className="platform-row" aria-label="Streaming platforms">
            <span className="platform-chip platform-vk"><img src="/brands/vk.svg" alt="" aria-hidden="true" /><b>VK LIVE</b></span>
            <span className="platform-chip platform-kick"><img src="/brands/kick.svg" alt="" aria-hidden="true" /><b>KICK</b></span>
            <span className="platform-chip platform-twitch"><img src="/brands/twitch.svg" alt="" aria-hidden="true" /><b>TWITCH</b></span>
            <span className="platform-chip platform-youtube"><img src="/brands/youtube.svg" alt="" aria-hidden="true" /><b>YOUTUBE LIVE</b></span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Пример рекламной кампании в прямом эфире">
          <div className="signal signal-one" /><div className="signal signal-two" />
          <div className="stage-glow" />
          <div className="live-window">
            <div className="window-top"><span className="live-dot">LIVE</span><span>Демо-кампания / 08</span><span>•••</span></div>
            <div className="stream-frame">
              <img className="stream-photo" src="/streamer-gaming-stream-v2.png" alt="Кадр светлой трансляции с компактным нативным рекламным оверлеем" />
              <span className="viewers">● 2 418 зрителей</span>
            </div>
            <div className="metric-strip">
              <div><small>Охват</small><b>184.2K</b><span className="up">↑ 24%</span></div>
              <div><small>Переходы</small><b>12 840</b><span className="up">↑ 18%</span></div>
              <div><small>В эфире</small><b>08</b><span>стримеров</span></div>
            </div>
          </div>
          <div className="floating-card card-a"><span>BRAND FIT</span><b>96%</b><i /></div>
          <div className="floating-card card-b"><span>СЛЕДУЮЩИЙ СЛОТ</span><b>18:45</b></div>
        </div>
        <div className="scroll-cue"><span /> Листайте, чтобы увидеть поток</div>
      </section>

      <section className="clarity-strip shell" aria-label="Что известно сторонам до запуска">
        <div className="clarity-title"><span>До запуска</span><strong>Никаких сюрпризов.</strong></div>
        <div><span>Бренд видит</span><p>Аудиторию · формат · стоимость · сценарий</p></div>
        <div><span>Стример видит</span><p>Бренд · ставку · длительность · механику</p></div>
      </section>

      <section className="manifesto" id="product">
        <div className="shell manifesto-grid">
          <p className="section-kicker">01 / Новый стандарт</p>
          <h2>Реклама становится<br /><span>частью контента.</span></h2>
          <div className="manifesto-side"><Equalizer /><p className="manifesto-copy">Не случайный логотип поверх трансляции, а точное попадание в аудиторию, управляемый сценарий и измеримый результат.</p></div>
        </div>
        <div className="ticker" aria-hidden="true"><div>{t("ticker")} {t("ticker")} {t("ticker")} {t("ticker")}&nbsp;</div></div>
      </section>

      <section className="split shell" id="streamers">
        <article className="audience-card brand-card">
          <span className="card-number">01</span><span className="card-tag">ДЛЯ БРЕНДОВ</span>
          <div className="product-preview brand-preview" aria-label="Пример подбора стримера">
            <div className="preview-top"><span>CREATOR MATCH</span><b><i /> 96%</b></div>
            <div className="creator-profile">
              <span className="profile-avatar">NL</span>
              <div><strong>@nikita_live</strong><small>Gaming & Tech · TWITCH</small></div>
              <span className="verified">✓</span>
            </div>
            <div className="preview-stats"><div><small>AUDIENCE</small><b>64%</b></div><div><small>AVG. REACH</small><b>184K</b></div><div><small>CTR</small><b>7.8%</b></div></div>
            <div className="fit-line"><span style={{width:"96%"}} /></div>
          </div>
          <h3>Понимать результат<br />еще до эфира.</h3>
          <p>Получите подборку авторов под задачу, согласуйте формат заранее и увидите результат каждого размещения в одном отчете.</p>
          <ul><li>Авторы под вашу аудиторию и категорию</li><li>Сценарий и стоимость до согласования</li><li>Отчет по каждому размещению</li></ul>
          <a href="#contact">Получить подборку стримеров <Arrow /></a>
        </article>
        <article className="audience-card creator-card">
          <span className="card-number">02</span><span className="card-tag">ДЛЯ СТРИМЕРОВ</span>
          <div className="product-preview creator-preview" aria-label="Пример предложения стримеру">
            <div className="preview-top"><span>NEW OFFER / 08</span><b><i /> BRAND SAFE</b></div>
            <div className="offer-brand"><span className="offer-mark">R</span><div><strong>RUSH MODE</strong><small>Gaming launch · Native overlay</small></div><b>$620</b></div>
            <div className="offer-details"><span><small>FORMAT</small><b>45 SEC</b></span><span><small>PLACEMENT</small><b>1 STREAM</b></span><span><small>DEADLINE</small><b>24 AUG</b></span></div>
            <div className="offer-status"><span>READY TO REVIEW</span><i>→</i></div>
          </div>
          <h3>Выбирать рекламу,<br />а не терпеть её.</h3>
          <p>Вы сами решаете, какой бренд попадет в эфир. Формат подстраивается под канал, а ставка и сценарий понятны до вашего согласия.</p>
          <ul><li>Вы выбираете бренд и кампанию</li><li>Ставка и сценарий известны заранее</li><li>Формат учитывает стиль вашего канала</li></ul>
          <a href="#contact">Получать подходящие предложения <Arrow /></a>
        </article>
      </section>

      <section className="creator-showcase shell" id="integration" aria-label="Пример рекламной интеграции в эфире">
        <div className="creator-visual">
          <img src="/streamer-creator-stream-v2.png" alt="Скриншот эфира автора с ненавязчивым рекламным оверлеем в safe-зоне" />
          <div className="creator-wave"><Equalizer /></div>
          <div className="creator-live"><span>● LIVE</span><b>4 892</b><small>смотрят сейчас</small></div>
        </div>
        <div className="creator-caption">
          <p className="section-kicker">Интеграция в контент</p>
          <h2>Оверлей выглядит<br /><span>частью трансляции.</span></h2>
          <p>Он остается в safe-зоне, не перекрывает автора и ключевой контент. Бренд заметен, а зритель не выпадает из эфира.</p>
          <div><span>Safe-зона</span><b>Соблюдена</b><i /><span>Ключевой контент</span><b>Не перекрыт</b><i /></div>
        </div>
      </section>

      <section className="workflow" id="how">
        <div className="shell">
          <div className="section-head"><div><p className="section-kicker">02 / От запроса до эфира</p><h2>Один поток.<br /><span>Три шага.</span></h2></div><p>Все стороны видят условия, статус и результат - без таблиц, потерянных сообщений и ручной сверки.</p></div>
          <div className="steps">
            <article><span>01</span><div className="step-icon target-icon"><i /></div><h3>Точное совпадение</h3><p>Бренд задает аудиторию и задачу. AddFlow находит релевантных авторов.</p></article>
            <article><span>02</span><div className="step-icon play-icon">▶</div><h3>Нативный выход</h3><p>Формат адаптируется под стрим и появляется в нужный момент трансляции.</p></article>
            <article><span>03</span><div className="step-icon chart-icon"><i /><i /><i /><i /></div><h3>Живая аналитика</h3><p>Охват, переходы и эффективность кампании доступны в одном окне.</p></article>
          </div>
        </div>
      </section>

      <section className="dashboard-section shell" id="proof">
        <div className="dashboard-copy"><p className="section-kicker">03 / Все видно</p><h2>Результат -<br /><span>не ощущение.</span></h2><p>Единая картина кампании: кто вышел в эфир, сколько людей увидели интеграцию и что сделали после.</p><div className="data-points"><div><b>REAL-TIME</b><span>данные без задержки</span></div><div><b>BRAND-SAFE</b><span>контроль площадок</span></div></div></div>
        <div className="dashboard">
          <div className="dash-head"><span>CAMPAIGN / RUSH MODE</span><div className="dash-head-actions"><span>18-24 AUG</span><span className="live-dot">● LIVE</span></div></div>
          <div className="dash-total"><small>Суммарный охват</small><strong>1 284 602</strong><span>+24.8% к прогнозу</span></div>
          <div className="chart-meta"><span>LIVE REACH</span><div><i className="actual-dot" /> ACTUAL <i className="forecast-dot" /> FORECAST</div></div>
          <div className="bars" aria-label="График охвата кампании"><i style={{height:"28%"}}/><i style={{height:"44%"}}/><i style={{height:"38%"}}/><i style={{height:"62%"}}/><i style={{height:"52%"}}/><i style={{height:"78%"}}/><i style={{height:"68%"}}/><i style={{height:"92%"}}/><i style={{height:"86%"}}/><i style={{height:"100%"}}/></div>
          <div className="chart-axis"><span>18 AUG</span><span>21 AUG</span><span>24 AUG</span></div>
          <div className="dash-bottom"><div><span>CTR</span><b>7.84%</b></div><div><span>Ср. просмотр</span><b>04:18</b></div><div><span>Активных эфиров</span><b>08</b></div></div>
          <div className="campaign-row"><span className="campaign-avatar">NL</span><div><b>@nikita_live</b><small>TWITCH · OVERLAY 45 SEC</small></div><span className="campaign-reach">184.2K<small>REACH</small></span><span className="campaign-status">LIVE</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" />
        <div className="shell contact-grid">
          <div><p className="section-kicker">04 / Начнем движение</p><h2>{t("contactA")}<br /><em>{t("contactB")}</em></h2><p>Расскажите, кто вы и какую задачу хотите решить. Мы вернемся с идеями для первого запуска.</p><a className="email-link" href="mailto:hello@addflow.ru">hello@addflow.ru <Arrow /></a></div>
          <LeadForm />
        </div>
      </section>

      <footer><div className="shell footer-grid"><div className="logo"><BrandLogo compact /></div><p>{t("footer")}</p><div><a href="mailto:hello@addflow.ru">{t("contacts")}</a><a href="#top">{t("top")} ↑</a></div></div></footer>
      </main>
    </>
  );
}
