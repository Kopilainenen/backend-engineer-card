const stack = [
  ['Git', 'Версионирование и прозрачный review'], ['TypeScript', 'Строгая типизация от схемы до API'],
  ['Node.js', 'Быстрый серверный runtime'], ['NestJS', 'Модульная и тестируемая архитектура'],
  ['Prisma', 'Типобезопасная работа с данными'], ['GraphQL', 'Точный контракт клиент–сервер'],
  ['Docker', 'Повторяемое окружение и delivery'], ['Claude Code', 'AI-пара для анализа и рефакторинга'],
];
const flow = [
  ['01', 'Контракт', 'Проектирую GraphQL-схему вокруг бизнес-сценариев.'],
  ['02', 'Ядро', 'Собираю NestJS-модули с явными границами ответственности.'],
  ['03', 'Данные', 'Фиксирую модели и миграции через Prisma.'],
  ['04', 'Доставка', 'Проверяю Git-пайплайн и упаковываю сервис в Docker.'],
];
export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Основная навигация"><a className="brand" href="#top"><span>BE</span> / 2026</a><div className="navLinks"><a href="#stack">Стек</a><a href="#process">Подход</a><a href="https://github.com/Kopilainenen/backend-engineer-card" target="_blank" rel="noreferrer">GitHub ↗</a><a className="navCta" href="mailto:hello@backend.engineer">Обсудить проект ↗</a></div></nav>
    <section className="hero shell" id="top">
      <div className="availability"><i /> Открыт к сильным backend-задачам</div>
      <h1>Проектирую backend,<br /><em>который не мешает расти.</em></h1>
      <div className="heroBottom"><p>Backend Engineer / AI-Augmented Developer. Превращаю сложную доменную логику в ясные, типобезопасные и готовые к эксплуатации сервисы.</p><a className="roundLink" href="#stack" aria-label="Перейти к стеку">↓</a></div>
      <div className="codeCard"><div className="codeTop"><span><i /><i /><i /></span><b>architecture.ts</b><small>production-ready</small></div><pre><code><span className="muted">// от бизнес-задачи — к работающему сервису</span>{'\n'}<span className="purple">const</span> solution = <span className="purple">await</span> engineer.build({'{'}{'\n'}  contract: <span className="green">'GraphQL'</span>,{'\n'}  core: <span className="green">'NestJS + TypeScript'</span>,{'\n'}  data: <span className="green">'Prisma'</span>,{'\n'}  delivery: <span className="green">'Git + Docker'</span>,{'\n'}  copilot: <span className="green">'Claude Code'</span>{'\n'}{'}'});</code></pre><div className="codeFoot"><span>✓ typed</span><span>✓ tested</span><span>✓ shipped</span></div></div>
    </section>
    <section className="stackSection" id="stack"><div className="shell"><div className="sectionHead"><span>01 / ИНСТРУМЕНТЫ</span><h2>Стек — не список.<br />Это система.</h2><p>Каждая технология закрывает конкретный риск: от неявного контракта до нестабильного релиза.</p></div><div className="stackGrid">{stack.map(([name, desc], index) => <article className="stackItem" key={name}><small>{String(index + 1).padStart(2, '0')}</small><h3>{name}</h3><p>{desc}</p><span>↗</span></article>)}</div></div></section>
    <section className="process shell" id="process"><div className="sectionHead light"><span>02 / ПРОЦЕСС</span><h2>Сначала ясность.<br />Затем скорость.</h2><p>Двигаюсь короткими проверяемыми итерациями — с кодом, который понимает команда, а не только автор.</p></div><div className="flow">{flow.map(([num, title, desc]) => <article key={num}><b>{num}</b><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>
    <section className="cta"><div className="shell"><span>ЕСТЬ ЗАДАЧА?</span><h2>Давайте превратим<br />её в <em>работающий код.</em></h2><a href="mailto:hello@backend.engineer">hello@backend.engineer <b>↗</b></a></div></section>
    <footer className="shell"><span>© 2026 Backend Engineer</span><span>Type-safe. Production-minded.</span><div className="footerLinks"><a href="https://github.com/Kopilainenen/backend-engineer-card" target="_blank" rel="noreferrer">GitHub / backend-engineer-card ↗</a><a href="#top">Наверх ↑</a></div></footer>
  </main>;
}
