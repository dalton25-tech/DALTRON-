import { useState } from 'react'
import './App.css'

interface Result {
  title: string
  url: string
  snippet: string
}

const MOCK_RESULTS: Result[] = [
  {
    title: 'Daltron Technologies — Smarter Technology, A Brighter Future',
    url: 'daltrontech.com',
    snippet: 'Official site for the Daltron ecosystem — Nexa, Aria, Sora, and the full device family.',
  },
  {
    title: 'Aria — Daltron Phone',
    url: 'daltrontech.com/aria',
    snippet: 'Power that listens. An AI button and fingerprint interaction, built around Nexa.',
  },
  {
    title: 'Beacon — Daltron Browser',
    url: 'daltrontech.com/beacon',
    snippet: 'Faster. Smarter. Safer. Orbit search and Nexa built directly into the browser.',
  },
]

function App() {
  const initialQuery =
    new URLSearchParams(window.location.search).get('q') ?? ''

  const [query, setQuery] = useState(initialQuery)
  const [submitted, setSubmitted] = useState(initialQuery)
  const [mode, setMode] = useState<'web' | 'ai'>('web')

  function search() {
    if (query.trim()) setSubmitted(query.trim())
  }

  return (
    <div className="orbit">
      {submitted ? (
        <>
          <header className="orbit-resultsbar">
            <span className="orbit-mark">O</span>
            <div className="orbit-searchbox small">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && search()}
              />
              <button onClick={search}>Search</button>
            </div>
          </header>

          <div className="orbit-tabs">
            <button
              className={mode === 'web' ? 'active' : ''}
              onClick={() => setMode('web')}
            >
              Web
            </button>
            <button
              className={mode === 'ai' ? 'active' : ''}
              onClick={() => setMode('ai')}
            >
              AI Answer
            </button>
          </div>

          <main className="orbit-results">
            {mode === 'ai' ? (
              <div className="orbit-ai-answer">
                <p className="orbit-ai-label">Nexa summary</p>
                <p>
                  Results for "{submitted}" aren't connected to a real
                  index yet — this is a placeholder AI-answer panel to
                  show the layout.
                </p>
              </div>
            ) : (
              MOCK_RESULTS.map((r) => (
                <article key={r.url} className="orbit-result">
                  <p className="orbit-result-url">{r.url}</p>
                  <h3>{r.title}</h3>
                  <p>{r.snippet}</p>
                </article>
              ))
            )}
          </main>
        </>
      ) : (
        <main className="orbit-home">
          <span className="orbit-mark large">O</span>
          <h1>Orbit</h1>
          <div className="orbit-searchbox">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && search()}
              placeholder="Search the web or ask Nexa"
              autoFocus
            />
            <button onClick={search}>Search</button>
          </div>
        </main>
      )}
    </div>
  )
}

export default App