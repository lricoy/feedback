'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../src/components/title/index'

it('Should Title match to snapshot', () => {
  const tree = renderer.create(<Title>Título</Title>).toJSON()
  expect(tree).toMatchSnapshot()
})
