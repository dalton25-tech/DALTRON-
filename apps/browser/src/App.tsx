import { useState } from 'react'
import './App.css'

interface Tab {
  id: number
  title: string
  url: string
}

function App() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: 'New Tab', url: '' },
  ])
  const [activeTab, setActiveTab] = useState(1)
  const [address, setAddress] = useState('')

  const active = tabs.find((t) => t.id === activeTab)!

  function addTab() {
    const id = Math.max(...tabs.map((t) => t.id)) + 1
    setTabs([...tabs, { id, title: 'New Tab', url: '' }])
    setActiveTab(id)
    setAddress('')
  }

  function closeTab(id: number) {
    const remaining = tabs.filter((t) => t.id !== id)
    if (remaining.length === 0) {
      setTabs([{ id: Date.now(), title: 'New Tab', url: '' }])
      return
    }
    setTabs(remaining)
    if (activeTab === id) setActiveTab(remaining[0].id)
  }

  function navigate() {
    setTabs(
      tabs.map((t) =>
        t.id === activeTab ? { ...t, title: address || 'New Tab', url: address } : t,
      ),
    )
  }

  return (
    <div className="beacon">
      <div className="beacon-tabbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`beacon-tab ${tab.id === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <span className="beacon-tab-close" onClick={(e) => { e.stopPropagation(); closeTab(tab.id) }}>
              ×
            </span>
          </button>
        ))}
        <button className="beacon-new-tab" onClick={addTab}>+</button>
      </div>

      <div className="beacon-addressbar">
        <span className="beacon-logo">B</span>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && navigate()}
          placeholder="Search with Orbit or enter address"
        />
        <button onClick={navigate}>Go</button>
      </div>

      <div className="beacon-content">
        {active.url ? (
          <p>Loading {active.url} — page rendering isn't wired up yet.</p>
        ) : (
          <div className="beacon-newtab">
            <span className="beacon-mark">B</span>
            <h1>Beacon</h1>
            <p>Faster. Smarter. Safer.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
