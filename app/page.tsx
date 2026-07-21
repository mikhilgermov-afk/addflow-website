import { LeadForm } from "./LeadForm";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="logo" href="#top" aria-label="AddFlow — на главную">
            <span className="logo-mark"><i /><i /><i /></span>
            <span>AddFlow</span>
          </a>
          <div className="nav-links">
            <a href="#product">Продукт</a>
            <a href="#how">Как работает</a>
            <a href="#proof">Возможности</a>
          </div>
          <a className="nav-cta" href="#contact">Подключиться <Arrow /></a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Новая рекламная среда стриминга</div>
          <h1>Бренд входит<br />в <em>эфир.</em></h1>
          <p className="hero-lead">AddFlow соединяет бренды и стримеров — с прозрачной аналитикой, живыми форматами и рекламой, которую не хочется проматывать.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Запустить кампанию <Arrow /></a>
            <a className="button ghost" href="#streamers">Я стример</a>
          </div>
          <div className="platform-row" aria-label="Поддерживаемые платформы">
            <span>VK LIVE</span><span>KICK</span><span>TWITCH</span><span>YOUTUBE LIVE</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Пример рекламной кампании в прямом эфире">
          <div className="signal signal-one" /><div className="signal signal-two" />
          <div className="stage-glow" />
          <div className="live-window">
            <div className="window-top"><span className="live-dot">LIVE</span><span>Кампания / 08</span><span>•••</span></div>
            <div className="stream-frame">
              <div className="stream-person"><span className="head" /><span className="body" /></div>
              <div className="chat-lines"><i /><i /><i /><i /></div>
              <div className="ad-overlay"><b>RUSH MODE</b><span>× AddFlow</span><strong>–20%</strong></div>
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

      <section className="manifesto" id="product">
        <div className="shell manifesto-grid">
          <p className="section-kicker">01 / Новый стандарт</p>
          <h2>Реклама становится<br /><span>частью контента.</span></h2>
          <p className="manifesto-copy">Не случайный логотип поверх трансляции, а точное попадание в аудиторию, управляемый сценарий и измеримый результат.</p>
        </div>
        <div className="ticker" aria-hidden="true"><div>ЖИВОЙ КОНТАКТ · ЧЕСТНАЯ АНАЛИТИКА · НАТИВНЫЙ ФОРМАТ · ЖИВОЙ КОНТАКТ · ЧЕСТНАЯ АНАЛИТИКА · НАТИВНЫЙ ФОРМАТ ·&nbsp;</div></div>
      </section>

      <section className="split shell" id="streamers">
        <article className="audience-card brand-card">
          <span className="card-number">01</span><span className="card-tag">ДЛЯ БРЕНДОВ</span>
          <div className="orb orb-brand"><i /><i /><i /></div>
          <h3>Охват, которому<br />можно доверять.</h3>
          <p>Выбирайте стримеров по аудитории, запускайте интеграции и следите за результатом в реальном времени.</p>
          <ul><li>Проверенная аудитория</li><li>Единый кабинет кампании</li><li>Прозрачные метрики</li></ul>
          <a href="#contact">Запустить рекламу <Arrow /></a>
        </article>
        <article className="audience-card creator-card">
          <span className="card-number">02</span><span className="card-tag">ДЛЯ СТРИМЕРОВ</span>
          <div className="orb orb-creator"><i /><i /><i /></div>
          <h3>Монетизация<br />без потери лица.</h3>
          <p>Получайте релевантные предложения и встраивайте рекламу так, чтобы она работала вместе с вашим контентом.</p>
          <ul><li>Подходящие вашему стилю бренды</li><li>Понятные условия до старта</li><li>Контроль над размещением</li></ul>
          <a href="#contact">Стать партнером <Arrow /></a>
        </article>
      </section>

      <section className="workflow" id="how">
        <div className="shell">
          <div className="section-head"><div><p className="section-kicker">02 / От запроса до эфира</p><h2>Один поток.<br /><span>Три шага.</span></h2></div><p>Все стороны видят условия, статус и результат — без таблиц, потерянных сообщений и ручной сверки.</p></div>
          <div className="steps">
            <article><span>01</span><div className="step-icon target-icon"><i /></div><h3>Точное совпадение</h3><p>Бренд задает аудиторию и задачу. AddFlow находит релевантных авторов.</p></article>
            <article><span>02</span><div className="step-icon play-icon">▶</div><h3>Нативный выход</h3><p>Формат адаптируется под стрим и появляется в нужный момент трансляции.</p></article>
            <article><span>03</span><div className="step-icon chart-icon"><i /><i /><i /><i /></div><h3>Живая аналитика</h3><p>Охват, переходы и эффективность кампании доступны в одном окне.</p></article>
          </div>
        </div>
      </section>

      <section className="dashboard-section shell" id="proof">
        <div className="dashboard-copy"><p className="section-kicker">03 / Все видно</p><h2>Результат —<br /><span>не ощущение.</span></h2><p>Единая картина кампании: кто вышел в эфир, сколько людей увидели интеграцию и что сделали после.</p><div className="data-points"><div><b>REAL—TIME</b><span>данные без задержки</span></div><div><b>BRAND—SAFE</b><span>контроль площадок</span></div></div></div>
        <div className="dashboard">
          <div className="dash-head"><span>CAMPAIGN / RUSH MODE</span><span className="live-dot">● LIVE</span></div>
          <div className="dash-total"><small>Суммарный охват</small><strong>1 284 602</strong><span>+24.8% к прогнозу</span></div>
          <div className="bars" aria-label="График охвата кампании"><i style={{height:"28%"}}/><i style={{height:"44%"}}/><i style={{height:"38%"}}/><i style={{height:"62%"}}/><i style={{height:"52%"}}/><i style={{height:"78%"}}/><i style={{height:"68%"}}/><i style={{height:"92%"}}/><i style={{height:"86%"}}/><i style={{height:"100%"}}/></div>
          <div className="dash-bottom"><div><span>CTR</span><b>7.84%</b></div><div><span>Ср. просмотр</span><b>04:18</b></div><div><span>Активных эфиров</span><b>08</b></div></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" />
        <div className="shell contact-grid">
          <div><p className="section-kicker">04 / Начнем движение</p><h2>Готовы войти<br />в <em>поток?</em></h2><p>Расскажите, кто вы и какую задачу хотите решить. Мы вернемся с идеями для первого запуска.</p><a className="email-link" href="mailto:hello@addflow.ru">hello@addflow.ru <Arrow /></a></div>
          <LeadForm />
        </div>
      </section>

      <footer><div className="shell footer-grid"><div className="logo"><span className="logo-mark"><i/><i/><i/></span><span>AddFlow</span></div><p>Прозрачная реклама в стриминге</p><div><a href="mailto:hello@addflow.ru">Контакты</a><a href="#top">Наверх ↑</a></div></div></footer>
    </main>
  );
}
