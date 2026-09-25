import Navbar from "../components/Navbar";

function Gideon() {
  return (
    <main className="nexa-page gideon-page">
      <Navbar />

      <section className="gideon-header">
        <div>
          <p className="section-label">DALTRON INTERNAL AI</p>
          <h1>Gideon</h1>
          <p>The internal command center powering Daltron's own team.</p>
        </div>
        <div className="gideon-status-pill">
          <span></span>
          System Status: Optimal
        </div>
      </section>

      <section className="gideon-grid">
        <div className="gideon-panel">
          <h3>AI Core</h3>
          <ul>
            <li>Core <span>Active</span></li>
            <li>Voice <span>Online</span></li>
            <li>Agents <span>Running</span></li>
            <li>LLMs <span>Connected</span></li>
          </ul>
        </div>

        <div className="gideon-panel">
          <h3>Active Agents</h3>
          <ul>
            <li>Coding Agent <span>Active</span></li>
            <li>Research Agent <span>Active</span></li>
            <li>Task Agent <span>Standby</span></li>
            <li>Browser Agent <span>Standby</span></li>
          </ul>
        </div>

        <div className="gideon-panel">
          <h3>Mission Timeline</h3>
          <ul>
            <li>Daily Standup <span>Done</span></li>
            <li>Design Review <span>In Progress</span></li>
            <li>Deep-Work Block <span>Upcoming</span></li>
          </ul>
        </div>

        <div className="gideon-panel">
          <h3>System Monitor</h3>
          <ul>
            <li>CPU <span>15%</span></li>
            <li>RAM <span>54%</span></li>
            <li>Disk <span>40%</span></li>
          </ul>
        </div>

        <div className="gideon-panel">
          <h3>Memory Insights</h3>
          <ul>
            <li>Memories Stored <span>3,380</span></li>
            <li>Session Turns <span>22</span></li>
            <li>Tool Calls <span>14</span></li>
          </ul>
        </div>

        <div className="gideon-panel">
          <h3>LLM Status</h3>
          <ul>
            <li>Nexa 3<span>Connected</span></li>
            <li>Claude <span>Connected</span></li>
            <li>Internal Models <span>4 Connected</span></li>
          </ul>
        </div>
      </section>

      <section className="gideon-talkbar">
        <span className="gideon-mic"></span>
        Talk to Gideon — internal use only
      </section>
    </main>
  );
}

export default Gideon;
