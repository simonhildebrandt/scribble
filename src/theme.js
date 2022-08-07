import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Domine",
  },
  fontSizes: {
    xl: "18px",
  },
  styles: {
    global: {
      body: {
        fontSize: "16px",
        lineHeight: "24px"
      },
      h1: { 
        fontSize: 'xl',
        my: '4'
      },
      a: {
        color: 'green.500',
        _hover: {
          color: 'green.400'
        },
        _visited: {
          color: 'green.600'
        }
      }
    }
  }
});

export { theme };