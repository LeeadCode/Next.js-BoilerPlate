import { StoryObj, Meta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

type Story = StoryObj<typeof Main>;

export const Basic: Story = {
  args: {
    title: 'teste',
    description: 'Button',
  },
}
