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
            <a href="#product">{t("navProduct")}</a>
            <a href="#how">{t("navHow")}</a>
            <a href="#proof">{t("navFeatures")}</a>
          </div>
          <div className="nav-actions"><LanguageSwitcher /><a className="nav-cta" href="#contact">{t("navCta")} <Arrow /></a></div>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {t("eyebrow")}</div>
          <Equalizer />
          <h1>{t("heroBrand")}<br /><em>{t("heroCreator")}</em></h1>
          <p className="hero-lead">{t("heroLead")}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">{t("brandPlan")} <Arrow /></a>
            <a className="button ghost" href="#streamers">{t("creatorJoin")}</a>
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
            <div className="window-top"><span className="live-dot">LIVE</span><span>{t("demo")} / 08</span><span>•••</span></div>
            <div className="stream-frame">
              <img className="stream-photo" src="/streamer-gaming-stream-v2.png" alt="Кадр светлой трансляции с компактным нативным рекламным оверлеем" />
              <span className="viewers">● 2 418 {t("viewers")}</span>
            </div>
            <div className="metric-strip">
              <div><small>{t("reach")}</small><b>184.2K</b><span className="up">↑ 24%</span></div>
              <div><small>{t("clicks")}</small><b>12 840</b><span className="up">↑ 18%</span></div>
              <div><small>{t("onAir")}</small><b>08</b><span>{t("streamers")}</span></div>
            </div>
          </div>
          <div className="floating-card card-a"><span>{t("brandFit")}</span><b>96%</b><i /></div>
          <div className="floating-card card-b"><span>{t("nextSlot")}</span><b>18:45</b></div>
        </div>
        <div className="scroll-cue"><span /> {t("scroll")}</div>
      </section>

      <section className="clarity-strip shell" aria-label="Что известно сторонам до запуска">
        <div className="clarity-title"><span>{t("before")}</span><strong>{t("surprises")}</strong></div>
        <div><span>{t("brandSees")}</span><p>{t("brandDetails")}</p></div>
        <div><span>{t("creatorSees")}</span><p>{t("creatorDetails")}</p></div>
      </section>

      <section className="manifesto" id="product">
        <div className="shell manifesto-grid">
          <p className="section-kicker">{t("standard")}</p>
          <h2>{t("manifestoA")}<br /><span>{t("manifestoB")}</span></h2>
          <div className="manifesto-side"><Equalizer /><p className="manifesto-copy">{t("manifestoCopy")}</p></div>
        </div>
        <div className="ticker" aria-hidden="true"><div>{t("ticker")} {t("ticker")} {t("ticker")} {t("ticker")}&nbsp;</div></div>
      </section>

      <section className="split shell" id="streamers">
        <article className="audience-card brand-card">
          <span className="card-number">01</span><span className="card-tag">{t("forBrands")}</span>
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
          <h3>{t("brandTitleA")}<br />{t("brandTitleB")}</h3>
          <p>{t("brandCopy")}</p>
          <ul><li>{t("brandB1")}</li><li>{t("brandB2")}</li><li>{t("brandB3")}</li></ul>
          <a href="#contact">{t("brandAction")} <Arrow /></a>
        </article>
        <article className="audience-card creator-card">
          <span className="card-number">02</span><span className="card-tag">{t("forCreators")}</span>
          <div className="product-preview creator-preview" aria-label="Пример предложения стримеру">
            <div className="preview-top"><span>NEW OFFER / 08</span><b><i /> BRAND SAFE</b></div>
            <div className="offer-brand"><span className="offer-mark">R</span><div><strong>RUSH MODE</strong><small>Gaming launch · Native overlay</small></div><b>$620</b></div>
            <div className="offer-details"><span><small>FORMAT</small><b>45 SEC</b></span><span><small>PLACEMENT</small><b>1 STREAM</b></span><span><small>DEADLINE</small><b>24 AUG</b></span></div>
            <div className="offer-status"><span>READY TO REVIEW</span><i>→</i></div>
          </div>
          <h3>{t("creatorTitleA")}<br />{t("creatorTitleB")}</h3>
          <p>{t("creatorCopy")}</p>
          <ul><li>{t("creatorB1")}</li><li>{t("creatorB2")}</li><li>{t("creatorB3")}</li></ul>
          <a href="#contact">{t("creatorAction")} <Arrow /></a>
        </article>
      </section>

      <section className="creator-showcase shell" id="integration" aria-label="Пример рекламной интеграции в эфире">
        <div className="creator-visual">
          <img src="/streamer-creator-stream-v2.png" alt="Скриншот эфира автора с ненавязчивым рекламным оверлеем в safe-зоне" />
          <div className="creator-wave"><Equalizer /></div>
          <div className="creator-live"><span>● LIVE</span><b>4 892</b><small>{t("watching")}</small></div>
        </div>
        <div className="creator-caption">
          <p className="section-kicker">{t("integration")}</p>
          <h2>{t("overlayA")}<br /><span>{t("overlayB")}</span></h2>
          <p>{t("overlayCopy")}</p>
          <div><span>{t("safeZone")}</span><b>{t("respected")}</b><i /><span>{t("keyContent")}</span><b>{t("notCovered")}</b><i /></div>
        </div>
      </section>

      <section className="workflow" id="how">
        <div className="shell">
          <div className="section-head"><div><p className="section-kicker">{t("workflow")}</p><h2>{t("oneFlow")}<br /><span>{t("threeSteps")}</span></h2></div><p>{t("workflowCopy")}</p></div>
          <div className="steps">
            <article><span>01</span><div className="step-icon target-icon"><i /></div><h3>{t("step1")}</h3><p>{t("step1Copy")}</p></article>
            <article><span>02</span><div className="step-icon play-icon">▶</div><h3>{t("step2")}</h3><p>{t("step2Copy")}</p></article>
            <article><span>03</span><div className="step-icon chart-icon"><i /><i /><i /><i /></div><h3>{t("step3")}</h3><p>{t("step3Copy")}</p></article>
          </div>
        </div>
      </section>

      <section className="dashboard-section shell" id="proof">
        <div className="dashboard-copy"><p className="section-kicker">{t("proof")}</p><h2>{t("resultA")}<br /><span>{t("resultB")}</span></h2><p>{t("proofCopy")}</p><div className="data-points"><div><b>REAL-TIME</b><span>{t("realtime")}</span></div><div><b>BRAND-SAFE</b><span>{t("brandSafe")}</span></div></div></div>
        <div className="dashboard">
          <div className="dash-head"><span>CAMPAIGN / RUSH MODE</span><div className="dash-head-actions"><span>18-24 AUG</span><span className="live-dot">● LIVE</span></div></div>
          <div className="dash-total"><small>{t("totalReach")}</small><strong>1 284 602</strong><span>+24.8% {t("forecast")}</span></div>
          <div className="chart-meta"><span>LIVE REACH</span><div><i className="actual-dot" /> ACTUAL <i className="forecast-dot" /> FORECAST</div></div>
          <div className="bars" aria-label="График охвата кампании"><i style={{height:"28%"}}/><i style={{height:"44%"}}/><i style={{height:"38%"}}/><i style={{height:"62%"}}/><i style={{height:"52%"}}/><i style={{height:"78%"}}/><i style={{height:"68%"}}/><i style={{height:"92%"}}/><i style={{height:"86%"}}/><i style={{height:"100%"}}/></div>
          <div className="chart-axis"><span>18 AUG</span><span>21 AUG</span><span>24 AUG</span></div>
          <div className="dash-bottom"><div><span>CTR</span><b>7.84%</b></div><div><span>{t("avgView")}</span><b>04:18</b></div><div><span>{t("activeStreams")}</span><b>08</b></div></div>
          <div className="campaign-row"><span className="campaign-avatar">NL</span><div><b>@nikita_live</b><small>TWITCH · OVERLAY 45 SEC</small></div><span className="campaign-reach">184.2K<small>REACH</small></span><span className="campaign-status">LIVE</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" />
        <div className="shell contact-grid">
          <div><p className="section-kicker">{t("contactKicker")}</p><h2>{t("contactA")}<br /><em>{t("contactB")}</em></h2><p>{t("contactCopy")}</p><a className="email-link" href="mailto:hello@addflow.ru">hello@addflow.ru <Arrow /></a></div>
          <LeadForm />
        </div>
      </section>

      <footer><div className="shell footer-grid"><div className="logo"><BrandLogo compact /></div><p>{t("footer")}</p><div><a href="mailto:hello@addflow.ru">{t("contacts")}</a><a href="#top">{t("top")} ↑</a></div></div></footer>
      </main>
    </>
  );
}
