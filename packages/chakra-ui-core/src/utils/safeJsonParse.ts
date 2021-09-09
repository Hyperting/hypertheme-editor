export const safeJsonParse = (text) => {
  try {
    return {
      value: JSON.parse(text),
    }
  } catch (ex) {
    return {
      error: ex,
    }
  }
}
