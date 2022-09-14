import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  layerStyles: {
    cursive: {
      fontFamily: 'Playball, cursive'
    }
  },
  fonts: {
    body: "EB Garamond",
  },
  fontSizes: {
    xl: "18px",
  },
  styles: {
    global: {
      img: {
        maxWidth: "100%",
      },
      body: {
        fontSize: "20px",
        lineHeight: "26px"
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