import { table, integer, text, index, sql } from 'sdk/db';

export const users = table('users', {
  userId: integer('user_id').primaryKey(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  lastSeenAt: integer('last_seen_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const mathRequests = table('math_requests', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull(),
  inputKind: text('input_kind').notNull().default('text'),
  promptText: text('prompt_text'),
  status: text('status').notNull().default('received'),
  externalJobId: text('external_job_id'),
  answerSummary: text('answer_summary'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
}, (t) => ({
  userIdx: index('idx_math_requests_user').on(t.userId),
  statusIdx: index('idx_math_requests_status').on(t.status),
}));
