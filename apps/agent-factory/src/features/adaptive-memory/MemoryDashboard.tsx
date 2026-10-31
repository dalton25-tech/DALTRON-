import { useMemo, useState } from "react";
import type {
  LearningProposal,
  MemoryAuditEvent,
  MemoryKind,
  MemoryRecord,
  MemoryTab,
} from "./memory-types";
import "./memory-dashboard.css";

/**
 * UI-first Adaptive Memory dashboard.
 *
 * This component intentionally uses local demo state. It does not claim to
 * persist data, connect to Supabase, or execute real approvals. Wire the
 * callbacks to authenticated server-side actions before production use.
 */

const demoMemories: MemoryRecord[] = [
  {
    id: "mem-001",
    title: "Protect existing project work",
    content:
      "Preserve existing work. Inspect diffs and test results before proposing a commit. Never deploy without explicit approval.",
    kind: "identity",
    origin: "explicit_teaching",
    status: "active",
    confidence: 1,
    project: "DALTRON Agent Factory",
    createdAt: "2026-10-25T18:00:00Z",
    updatedAt: "2026-10-25T18:00:00Z",
    reviewRequired: false,
  },
  {
    id: "mem-002",
    title: "Mobile-first development workflow",
    content:
      "Prefer commands and instructions that are practical on a Samsung Galaxy A17 using Termux when possible.",
    kind: "pattern",
    origin: "explicit_teaching",
    status: "active",
    confidence: 0.98,
    createdAt: "2026-10-03T09:00:00Z",
    updatedAt: "2026-10-03T09:00:00Z",
    reviewRequired: false,
  },
  {
    id: "mem-003",
    title: "Agent Factory next milestone",
    content:
      "Build a mobile-first dashboard and add persistent memory types, approval proposals, search, audit history, and recovery controls.",
    kind: "working",
    origin: "approved_task",
    status: "active",
    confidence: 0.95,
    project: "DALTRON Agent Factory",
    createdAt: "2026-10-29T00:00:00Z",
    updatedAt: "2026-10-29T00:00:00Z",
    reviewRequired: false,
  },
  {
    id: "mem-004",
    title: "Use reviewed, reusable procedures",
    content:
      "When a workflow succeeds, record the steps and verification evidence before treating it as a reusable skill.",
    kind: "procedural",
    origin: "explicit_teaching",
    status: "active",
    confidence: 0.92,
    createdAt: "2026-10-29T00:00:00Z",
    updatedAt: "2026-10-29T00:00:00Z",
    reviewRequired: true,
  },
  {
    id: "mem-005",
    title: "Previous dependency investigation",
    content:
      "The last recorded Agent Factory checkpoint paused before further dependency changes. Preserve the existing backups and do not force installations.",
    kind: "episodic",
    origin: "approved_task",
    status: "active",
    confidence: 0.9,
    project: "DALTRON Agent Factory",
    createdAt: "2026-10-26T06:30:00Z",
    updatedAt: "2026-10-26T06:30:00Z",
    reviewRequired: false,
  },
];

const demoProposals: LearningProposal[] = [
  {
    id: "prop-001",
    title: "Suggest a weekly project review",
    explanation:
      "Several planning sessions focus on unfinished work and upcoming milestones. This is a suggestion, not an established fact.",
    proposedChange:
      "Offer a weekly review of active projects and ask before adding it to the calendar.",
    sourceCount: 4,
    confidence: 0.78,
    createdAt: "2026-10-29T00:00:00Z",
    status: "pending",
    risk: "low",
  },
  {
    id: "prop-002",
    title: "Save verified troubleshooting steps as a skill",
    explanation:
      "Repeated debugging sessions may benefit from a reusable checklist, but each step needs validation before it becomes a trusted procedure.",
    proposedChange:
      "Draft a project troubleshooting checklist and request review before publishing it to the skill library.",
    sourceCount: 3,
    confidence: 0.71,
    createdAt: "2026-10-29T00:00:00Z",
    status: "pending",
    risk: "medium",
  },
];

const demoEvents: MemoryAuditEvent[] = [
  {
    id: "evt-001",
    at: "2026-10-29T00:40:00Z",
    actor: "user",
    action: "memory.taught",
    target: "mem-001",
    summary: "Explicit project safety rule recorded in demo data.",
  },
  {
    id: "evt-002",
    at: "2026-10-29T00:42:00Z",
    actor: "agent",
    action: "pattern.proposed",
    target: "prop-001",
    summary: "A possible scheduling preference was proposed for review.",
  },
  {
    id: "evt-003",
    at: "2026-10-29T00:43:00Z",
    actor: "system",
    action: "memory.search",
    target: "mem-003",
    summary: "Current Agent Factory milestone was retrieved for the dashboard.",
  },
];

const kindLabels: Record<MemoryKind, string> = {
  identity: "Identity",
  episodic: "Experience",
  pattern: "Pattern",
  procedural: "Skill / procedure",
  working: "Working memory",
};

const originLabels: Record<string, string> = {
  explicit_teaching: "Taught by you",
  approved_task: "Approved task",
  schedule: "Schedule",
  feedback: "Feedback",
  connected_tool: "Connected tool",
  permitted_usage_pattern: "Permitted usage pattern",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function confidenceLabel(value: number) {
  return `${Math.round(value * 100)}% confidence`;
}

export default function MemoryDashboard() {
  const [tab, setTab] = useState<MemoryTab>("overview");
  const [memories, setMemories] = useState(demoMemories);
  const [proposals, setProposals] = useState(demoProposals);
  const [query, setQuery] = useState("");
  const [kindFilter, setKindFilter] = useState<"all" | MemoryKind>("all");
  const [notice, setNotice] = useState(
    "Demo mode: changes stay in this page until a persistence adapter is connected.",
  );

  const filteredMemories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return memories.filter((memory) => {
      const matchesKind = kindFilter === "all" || memory.kind === kindFilter;
      const matchesQuery =
        !normalized ||
        `${memory.title} ${memory.content} ${memory.project ?? ""} ${originLabels[memory.origin]}`
          .toLowerCase()
          .includes(normalized);
      return matchesKind && matchesQuery && memory.status !== "archived";
    });
  }, [memories, query, kindFilter]);

  const pendingCount = proposals.filter((item) => item.status === "pending").length;
  const activeCount = memories.filter((item) => item.status === "active").length;

  function decideProposal(id: string, decision: "approved" | "rejected") {
    setProposals((current) =>
      current.map((proposal) =>
        proposal.id === id ? { ...proposal, status: decision } : proposal,
      ),
    );
    setNotice(
      `Demo only: proposal ${decision}. Connect a secured server action before using real approvals.`,
    );
  }

  function archiveMemory(id: string) {
    setMemories((current) =>
      current.map((memory) =>
        memory.id === id ? { ...memory, status: "archived" } : memory,
      ),
    );
    setNotice(
      "Demo only: memory hidden from active results. Production deletion and retention must be handled by a secured backend.",
    );
  }

  return (
    <main className="ame-shell">
      <header className="ame-header">
        <div className="ame-brand">
          <div className="ame-mark" aria-hidden="true">D</div>
          <div>
            <p className="ame-eyebrow">DALTRON AGENT FACTORY</p>
            <h1>Adaptive Memory Engine</h1>
            <p className="ame-subtitle">
              Persistent context. Reviewed learning. Better assistance over time.
            </p>
          </div>
        </div>
        <span className="ame-status"><span /> Prototype</span>
      </header>

      <div className="ame-notice" role="status">
        <span aria-hidden="true">ⓘ</span>
        <p>{notice}</p>
      </div>

      <nav className="ame-tabs" aria-label="Memory sections">
        {([
          ["overview", "Overview"],
          ["memories", "Memory store"],
          ["proposals", `Learning proposals${pendingCount ? ` (${pendingCount})` : ""}`],
          ["activity", "Audit activity"],
        ] as [MemoryTab, string][]).map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={tab === value ? "is-active" : ""}
            onClick={() => setTab(value)}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === "overview" && (
        <section className="ame-section">
          <div className="ame-section-heading">
            <div>
              <p className="ame-eyebrow">SYSTEM SNAPSHOT</p>
              <h2>Your brain, at a glance</h2>
            </div>
            <span className="ame-muted">Local demo data</span>
          </div>

          <div className="ame-stats">
            <article className="ame-stat">
              <span className="ame-stat-icon">▤</span>
              <p>Active memories</p>
              <strong>{activeCount}</strong>
              <small>Across five memory types</small>
            </article>
            <article className="ame-stat">
              <span className="ame-stat-icon">✦</span>
              <p>Pending proposals</p>
              <strong>{pendingCount}</strong>
              <small>Require your decision</small>
            </article>
            <article className="ame-stat">
              <span className="ame-stat-icon">⌁</span>
              <p>Memory sources</p>
              <strong>4</strong>
              <small>Demo only; not connected</small>
            </article>
            <article className="ame-stat">
              <span className="ame-stat-icon">◷</span>
              <p>Consolidation</p>
              <strong>Not run</strong>
              <small>Worker not connected</small>
            </article>
          </div>

          <div className="ame-two-col">
            <section className="ame-panel">
              <div className="ame-panel-heading">
                <div>
                  <p className="ame-eyebrow">MEMORY MODEL</p>
                  <h3>Five kinds of memory</h3>
                </div>
              </div>
              <div className="ame-memory-types">
                {([
                  ["identity", "Identity", "Stable profile, goals and explicit preferences", "ID"],
                  ["episodic", "Experience", "Past decisions, tasks and verified outcomes", "EX"],
                  ["pattern", "Patterns", "Possible habits inferred from approved sources", "PT"],
                  ["procedural", "Skills", "Versioned procedures with verification evidence", "SK"],
                  ["working", "Working", "Current priorities and temporary task context", "WK"],
                ] as [MemoryKind, string, string, string][]).map(([kind, label, description, short]) => (
                  <button
                    type="button"
                    className="ame-type-row"
                    key={kind}
                    onClick={() => {
                      setKindFilter(kind);
                      setTab("memories");
                    }}
                  >
                    <span className="ame-type-icon">{short}</span>
                    <span className="ame-type-copy">
                      <strong>{label}</strong>
                      <small>{description}</small>
                    </span>
                    <span className="ame-chevron">›</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="ame-panel">
              <div className="ame-panel-heading">
                <div>
                  <p className="ame-eyebrow">REVIEW QUEUE</p>
                  <h3>Learning proposals</h3>
                </div>
                <button className="ame-link-button" onClick={() => setTab("proposals")}>
                  View all →
                </button>
              </div>
              {proposals.filter((item) => item.status === "pending").length === 0 ? (
                <p className="ame-empty">No pending proposals.</p>
              ) : (
                proposals.filter((item) => item.status === "pending").slice(0, 2).map((proposal) => (
                  <article className="ame-proposal-mini" key={proposal.id}>
                    <div className="ame-proposal-title">
                      <strong>{proposal.title}</strong>
                      <span className={`ame-risk risk-${proposal.risk}`}>{proposal.risk} risk</span>
                    </div>
                    <p>{proposal.explanation}</p>
                    <small>{proposal.sourceCount} supporting events · {confidenceLabel(proposal.confidence)}</small>
                    <div className="ame-inline-actions">
                      <button className="ame-button ame-button-primary" onClick={() => decideProposal(proposal.id, "approved")}>
                        Approve demo
                      </button>
                      <button className="ame-button ame-button-quiet" onClick={() => decideProposal(proposal.id, "rejected")}>
                        Reject
                      </button>
                    </div>
                  </article>
                ))
              )}
            </section>
          </div>

          <section className="ame-panel">
            <div className="ame-panel-heading">
              <div>
                <p className="ame-eyebrow">RECENTLY RETRIEVABLE</p>
                <h3>Important context</h3>
              </div>
              <button className="ame-link-button" onClick={() => setTab("memories")}>
                Search memory →
              </button>
            </div>
            {memories.filter((memory) => memory.status === "active").slice(0, 3).map((memory) => (
              <article className="ame-memory-row" key={memory.id}>
                <span className={`ame-kind-dot kind-${memory.kind}`} />
                <div className="ame-memory-copy">
                  <strong>{memory.title}</strong>
                  <p>{memory.content}</p>
                  <small>{kindLabels[memory.kind]} · {originLabels[memory.origin]}</small>
                </div>
                <span className="ame-confidence">{confidenceLabel(memory.confidence)}</span>
              </article>
            ))}
          </section>
        </section>
      )}

      {tab === "memories" && (
        <section className="ame-section">
          <div className="ame-section-heading">
            <div>
              <p className="ame-eyebrow">PERSISTENT KNOWLEDGE</p>
              <h2>Memory store</h2>
              <p className="ame-muted">Search memories by meaning-related terms, source, project or title in this prototype.</p>
            </div>
          </div>
          <div className="ame-search-row">
            <label className="ame-search">
              <span aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search memories…"
                aria-label="Search memories"
              />
            </label>
            <select
              value={kindFilter}
              onChange={(event) => setKindFilter(event.target.value as "all" | MemoryKind)}
              aria-label="Filter memory type"
            >
              <option value="all">All types</option>
              {Object.entries(kindLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="ame-panel">
            {filteredMemories.length === 0 ? (
              <p className="ame-empty">No memories match these filters.</p>
            ) : filteredMemories.map((memory) => (
              <article className="ame-memory-row ame-memory-row-full" key={memory.id}>
                <span className={`ame-kind-dot kind-${memory.kind}`} />
                <div className="ame-memory-copy">
                  <div className="ame-proposal-title">
                    <strong>{memory.title}</strong>
                    <span className="ame-tag">{kindLabels[memory.kind]}</span>
                  </div>
                  <p>{memory.content}</p>
                  <small>
                    {originLabels[memory.origin]} · Updated {formatDate(memory.updatedAt)}
                    {memory.project ? ` · ${memory.project}` : ""}
                  </small>
                  {memory.reviewRequired && <span className="ame-review-note">Procedure requires verification before trusted reuse.</span>}
                </div>
                <div className="ame-memory-actions">
                  <span className="ame-confidence">{confidenceLabel(memory.confidence)}</span>
                  <button className="ame-button ame-button-quiet" onClick={() => archiveMemory(memory.id)}>
                    Archive demo
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="ame-footnote">Archiving here changes only component state. Connect authenticated backend actions for durable edits, exports and deletion.</p>
        </section>
      )}

      {tab === "proposals" && (
        <section className="ame-section">
          <div className="ame-section-heading">
            <div>
              <p className="ame-eyebrow">HUMAN-IN-THE-LOOP LEARNING</p>
              <h2>Learning proposals</h2>
              <p className="ame-muted">Inferred patterns remain hypotheses until you approve them.</p>
            </div>
          </div>
          {proposals.map((proposal) => (
            <article className="ame-panel ame-proposal-card" key={proposal.id}>
              <div className="ame-proposal-title">
                <h3>{proposal.title}</h3>
                <span className={`ame-risk risk-${proposal.risk}`}>{proposal.risk} risk</span>
              </div>
              <p>{proposal.explanation}</p>
              <div className="ame-proposed-change">
                <span>PROPOSED CHANGE</span>
                <p>{proposal.proposedChange}</p>
              </div>
              <div className="ame-proposal-meta">
                <span>{proposal.sourceCount} supporting events</span>
                <span>{confidenceLabel(proposal.confidence)}</span>
                <span>Created {formatDate(proposal.createdAt)}</span>
                <span className={`ame-status-pill status-${proposal.status}`}>{proposal.status}</span>
              </div>
              {proposal.status === "pending" && (
                <div className="ame-inline-actions">
                  <button className="ame-button ame-button-primary" onClick={() => decideProposal(proposal.id, "approved")}>
                    Approve proposal
                  </button>
                  <button className="ame-button ame-button-quiet" onClick={() => decideProposal(proposal.id, "rejected")}>
                    Reject proposal
                  </button>
                </div>
              )}
            </article>
          ))}
          <div className="ame-safety-callout">
            <strong>Approval policy</strong>
            <p>Approval records a decision only. Production actions must re-check the current user, project scope, risk level, and permission policy on the server.</p>
          </div>
        </section>
      )}

      {tab === "activity" && (
        <section className="ame-section">
          <div className="ame-section-heading">
            <div>
              <p className="ame-eyebrow">TRACEABILITY</p>
              <h2>Audit activity</h2>
              <p className="ame-muted">A production audit log should be append-only and written server-side.</p>
            </div>
          </div>
          <div className="ame-panel">
            {demoEvents.map((event) => (
              <article className="ame-audit-row" key={event.id}>
                <span className={`ame-actor actor-${event.actor}`}>{event.actor.slice(0, 1).toUpperCase()}</span>
                <div className="ame-memory-copy">
                  <div className="ame-proposal-title">
                    <strong>{event.action}</strong>
                    <small>{formatDate(event.at)}</small>
                  </div>
                  <p>{event.summary}</p>
                  <small>Target: {event.target} · Actor: {event.actor}</small>
                </div>
              </article>
            ))}
          </div>
          <div className="ame-safety-callout">
            <strong>Privacy and retention</strong>
            <p>Do not store credentials or unnecessary sensitive information in memory. Provide export, correction, archive, deletion and retention controls. Record failed and denied actions without logging secrets.</p>
          </div>
        </section>
      )}

      <footer className="ame-footer">
        <span>DALTRON Adaptive Memory Engine</span>
        <span>Persistent memory design · Approval-first learning</span>
      </footer>
    </main>
  );
}
