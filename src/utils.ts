export function parseEventData(event: MessageEvent) {
  try {
    const data = typeof event.data === 'string' ? JSON.parse(event.data) : {};
    return data || {};
  } catch (err) {
    return {};
  }
}
