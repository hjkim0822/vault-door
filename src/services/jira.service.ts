type JiraPayload = any; // Replace with your actual typed interface if available

// Individual event handlers
const handleIssueCreated = async (payload: JiraPayload): Promise<void> => {
  const issue = payload.issue;
  console.log('📩 [Jira] Issue Created');
  console.log(`Key: ${issue.key}`);
  console.log(`Summary: ${issue.fields.summary}`);
  console.log(`Reporter: ${issue.fields.reporter?.displayName}`);
  console.dir(payload, { depth: null });
};

const handleIssueUpdated = async (payload: JiraPayload): Promise<void> => {
  const issue = payload.issue;
  console.log('✏️ [Jira] Issue Updated');
  console.log(`Key: ${issue.key}`);
  console.log(`Updated by: ${payload.user?.displayName}`);
  console.dir(payload, { depth: null });
};

const handleIssueDeleted = async (payload: JiraPayload): Promise<void> => {
  const issue = payload.issue;
  console.log('🗑️ [Jira] Issue Deleted');
  console.log(`Key: ${issue.key}`);
  console.dir(payload, { depth: null });
};

// Event dispatcher map
const eventHandlers: Record<string, (payload: JiraPayload) => Promise<void>> = {
  'jira:issue_created': handleIssueCreated,
  'jira:issue_updated': handleIssueUpdated,
  'jira:issue_deleted': handleIssueDeleted,
};

export const processJiraEvent = async (eventType: string, payload: JiraPayload): Promise<void> => {
  const handler = eventHandlers[eventType];

  if (handler) {
    await handler(payload);
  } else {
    console.warn(`⚠️ Unhandled Jira event type: ${eventType}`);
  }
};