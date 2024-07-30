import { mode, Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: (props) => ({
    body: {
      // fontFamily: 'Sora',
      color: mode('gray.700', 'whiteAlpha.900')(props),
      overflowX: 'hidden',
    },
  }),
}
export default styles
