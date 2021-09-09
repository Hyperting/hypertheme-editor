export const isColor = (strColor: string) => {
  const s = new Option().style
  s.color = strColor
  // eslint-disable-next-line eqeqeq
  return s.color == strColor || /^#[0-9A-F]{6}$/i.test(strColor)
}
