// @flow

export const MESSAGE_SENDER: {
  CLIENT: string,
  RESPONSE: string,
} = {
  CLIENT: 'client',
  RESPONSE: 'response',
}

export const MESSAGES_TYPES: {
  TEXT: string,
  SNIPPET: {
    LINK: string,
  },
  CUSTOM_COMPONENT: string
} = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet',
  },
  CUSTOM_COMPONENT: 'component',
}
