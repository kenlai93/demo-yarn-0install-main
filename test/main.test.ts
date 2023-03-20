import { sum } from 'demo-yarn-0install-libs'

describe('first', () => {
  test('should first', () => {
    const total = sum([1, 2, 3])
    console.log(total)
  })
})
