export type MemoryKind =
  | "identity"
  | "episodic"
  | "pattern"
  | "procedural"
  | "working";

export type MemoryOrigin =
  | "explicit_teaching"
  | "approved_task"
  | "schedule"
  | "feedback"
  | "connected_tool"
  | "permitted_usage_pattern";

export type MemoryStatus = "active" | "superseded" | "archived" | "pending_review";

export interface MemoryRecord {
  id: string;
  title: string;
  content: string;
  kind: MemoryKind;
  origin: MemoryOrigin;
  status: MemoryStatus;
  confidence: number;
  project?: string;
  createdAt: string;
  updatedAt: string;
  lastUsedAt?: string;
  reviewRequired: boolean;
}

export interface LearningProposal {
  id: string;
  title: string;
  explanation: string;
  proposedChange: string;
  sourceCount: number;
  confidence: number;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
  risk: "low" | "medium" | "high";
}

export interface MemoryAuditEvent {
  id: string;
  at: string;
  actor: "user" | "agent" | "system";
  action: string;
  target: string;
  summary: string;
}

export type MemoryTab = "overview" | "memories" | "proposals" | "activity";

export interface MemoryEngineStats {
  activeMemories: number;
  pendingProposals: number;
  approvedSources: number;
  lastConsolidatedAt: string | null;
}
