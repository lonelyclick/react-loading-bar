import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Loading from '../src/Loading'

describe('Loading', () => {
  describe('renderIntoDocument', () => {
    it('should render the component', () => {
      TestUtils.renderIntoDocument(<Loading color="red" />)
    })
  })
})
