import { safeJsonParse } from '../../../src/utils/safeJsonParse'

describe('unit: safeJsonParse()', function () {
  it('should return a valid object for a valid json input', function () {
    var input = '{"a": "b"}'
    var output = safeJsonParse(input)
    expect(output).toMatchObject({ value: { a: 'b' } })
  })
  it('should return an error field describing the error for an invalid json input', function () {
    var input = '{"a": "b}'
    var output = safeJsonParse(input)
    expect(output.error).toBeDefined()
    expect(output.value).toBeUndefined()
    expect(output.error?.name).toBe('SyntaxError')
    expect(output.error?.message).toBe('Unexpected end of JSON input')
    expect(output.error?.stack).toBeDefined()
  })
})
