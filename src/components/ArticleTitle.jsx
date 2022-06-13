import { Box, Heading, Text } from '@chakra-ui/react'

// 記事の見出し部分
const ArticleTitle = (props) => {
    return (
      <Box borderBottom='1px' pt={[15, 25]} mb={5} borderColor='gray.700'>
        <Heading color='blackAlpha.900'>{props.title}</Heading>
        <Text as='i' color='blackAlpha.400'>{props.subtitle}</Text>
      </Box>
    );
  }

export default ArticleTitle