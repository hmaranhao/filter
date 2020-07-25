import React from 'react'

import Filter from './components/filter'

const tags = [
  {
    tag: 'aaaa',
    tags: [
      { tag: 'ab' },
      { tag: 'ac' },
      { tag: 'ad' }
    ]
  },
  {
    tag: 'bbbb'
  },
  {
    tag: 'cccc',
    tags: [
      { tag: 'ca' },
      { tag: 'cb' },
      { tag: 'cc' }
    ]
  }
]

function App () {
  return (
    <div>
      <Filter items={tags} />
    </div>
  )
}

export default App
