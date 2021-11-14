export const safeJsonParse = (text) => {
  try {
    return {
      value: JSON.parse(text),
    }
  } catch (ex) {
    return {
      error: {
        name: (ex as Error).name,
        message: (ex as Error).message,
        stack: (ex as Error).stack,
      },
    }
  }
}
