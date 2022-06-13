import React from 'react';
import { Box, Text, List, ListItem, ListIcon, VStack, Heading, } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import ArticleTitle from '../components/ArticleTitle';
import AnimatedDiv from '../components/AnimatedDiv';


const references = [
    { name: 'React', link: 'https://ja.reactjs.org/' },
    { name: 'React Router v6', link: 'https://reactrouter.com/' },
    { name: 'Chakra UI', link: 'https://chakra-ui.com/docs/components/layout/container' },
    { name: 'Framer Motion', link: 'https://www.framer.com/motion/' }
];
const Home = () => {
    return (
        <AnimatedDiv>
            <ArticleTitle title='ようこそ！' subtitle='Hello!' />
            <VStack fontSize={['md', 'lg']} display='block' textAlign='left' p={['5', '10']} spacing={10}>
                <Box>
                    <Heading fontSize={['xl', '2xl']} px='4' my='2' borderLeft='3px solid red'>What's this?</Heading>
                    <Text>このサイトはWeb制作の練習用に製作した、ポートフォリオサイトです。</Text>
                    <Text>右上のところからリンクを踏んでみてね</Text>
                </Box>
                <Box>
                    <Heading fontSize={['xl', '2xl']} px='4' my='2' borderLeft='3px solid red'>使用したもの</Heading>
                    <List spacing={3} px={5} py={2}>
                        {references.map((reference) => {
                            return (
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='green.500' />
                                    <Text display='inline' fontWeight='bold'>{reference.name}</Text>
                                    <a href={reference.link}><LinkIcon mx='2' /></a>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Box>
                    <Heading fontSize={['xl', '2xl']} px='4' my='2' borderLeft='3px solid red'>製作期間</Heading>
                    <Text>2022/06/10~</Text>
                    <Text>20時間くらいはやっているかな？</Text>
                </Box>
            </VStack>
        </AnimatedDiv>
    )
}

export default Home