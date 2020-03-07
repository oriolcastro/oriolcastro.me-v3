import { toTheme } from '@theme-ui/typography'
import noriega from 'typography-theme-noriega'
import merge from 'lodash/merge'

export default merge({}, toTheme(noriega), {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
      },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
})