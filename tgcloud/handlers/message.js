import { api, db } from 'sdk';
import { users, mathRequests } from '../schema.js';

export default async function (message) {
  if (!message?.chat?.id || !message.from?.id) return;
  const chatId = message.chat.id;
  const userId = message.from.id;
  const input = (message.text ?? '').trim();

  await db.insert(users).values({ userId, lastSeenAt: new Date() })
    .onConflictDoUpdate({ target: users.userId, set: { lastSeenAt: new Date() } }).run();

  if (input === '/start') {
    await api.sendMessage({ chat_id: chatId, text: 'Persian Math Intelligence Serverless shell is ready. Text requests can be recorded, but solving/OCR is not connected yet. Send /help for details.' });
    return;
  }
  if (input === '/help') {
    await api.sendMessage({ chat_id: chatId, text: 'Current version records text requests only. Image/PDF uploads, OCR, symbolic solving, verification, and answer generation require the external Python backend.' });
    return;
  }
  if (!input) {
    await api.sendMessage({ chat_id: chatId, text: 'Please send a text problem. Media and solver processing are not connected yet.' });
    return;
  }

  const [request] = await db.insert(mathRequests).values({
    userId,
    inputKind: 'text',
    promptText: input.slice(0, 6000),
    status: 'received',
    updatedAt: new Date(),
  }).returning().run();

  await api.sendMessage({ chat_id: chatId, text: `Request #${request.id} recorded. No solution has been computed because the external solver is not connected yet.` });
}
