import {
    // コンポーネント
    Box, Button, Flex, Circle, Spacer, Show, HStack, VStack, StackDivider, Heading, ButtonGroup,
    // トランジションとかに使う
    useDisclosure, Collapse, Text,
} from '@chakra-ui/react';

// アイコン
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaTwitter, FaGithub } from 'react-icons/fa'

// ナビゲート
import { useNavigate } from "react-router-dom";

// 連絡先のアイコンをまとめたもの
const ContactLinks = () => {
    return (
        <HStack spacing='5' px='5'>
            <Circle size='40px' bg='twitter.500' color='white' _hover={{ bg: 'twitter.400', cursor: 'pointer' }}>
                <a href='https://twitter.com/nichi_pro_' target='blank'><FaTwitter /></a>
            </Circle>
            <Circle size='40px' bg='blackAlpha.900' color='white' _hover={{ bg: 'blackAlpha.700', cursor: 'pointer' }}>
                <a href='https://github.com/settings/profile' target='blank'><FaGithub /></a>
            </Circle>
        </HStack>
    );
}

const Header = (props) => {
    const { isOpen, onToggle } = useDisclosure();
    // Routerのnavigate
    let navigate = useNavigate();
    return (
        // ヘッダーは固定にする　→ https://github.com/chakra-ui/chakra-ui/issues/3605
        <Box sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
            {/* ヘッダー部分 */}
            <Flex alignItems='center' bg='purple.100' p='2'>
                {/* クリックでホームに戻るように */}
                <Heading fontSize={['2xl', '3xl', '4xl']} mx={10}
                    bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' _hover={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>My Portfolio</Heading>
                <Spacer />

                {/* sm以下になったらハンバーガーボタンを表示する */}
                <Show below='sm'>
                    <Button onClick={onToggle} m='5' bg='purple.200' _hover={{ bg: 'purple.200' }}>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button>
                </Show>

                {/* sm以上になったら横に表示する */}
                <Show above='sm'>
                    {/* 連絡先 */}
                    <ContactLinks />
                    {/* ページリンク */}
                    <ButtonGroup bg='purple.100' spacing={5} p={3} pr='10%' overflow='scroll'>
                        {/* propsからcategorieを引っ張ってきてリンクボタンを生成する。categorieはApp.js内で定義 */}
                        {props.categories.map((category) => {
                            return (
                                <Button color='black' colorScheme='purple' px={1} variant='ghost' onClick={() => { navigate(category.path) }}>
                                    {category.catTitle}
                                </Button>)
                        })}
                    </ButtonGroup>
                </Show>
            </Flex>
            {/* ハンバーガーメニュー */}
            <Show below='sm'>
                <Collapse direction='bottom' in={isOpen} animateOpacity>
                    <Box
                        p={3}
                        color='black'
                        bg='purple.200'
                        shadow='md'
                    >
                        {/* メニュー一覧 */}
                        <VStack divider={<StackDivider border='gray.100' />}>
                            {props.categories.map((category) => {
                                return (
                                    <Box w='100%' textAlign='center' color='white' fontWeight='bold' borderRadius='lg'
                                        _hover={{ cursor: 'pointer', bg: 'purple.300' }} onClick={() => { navigate(category.path) }}>
                                        {category.catTitle}
                                    </Box>
                                )
                            })}
                            {/* 連絡先リンク */}
                            <VStack>
                                <Text fontWeight='bold' color='white'>連絡はこちらから</Text>
                                <ContactLinks />
                            </VStack>
                        </VStack>
                    </Box>
                </Collapse>
            </Show>
        </Box>
    )
}

export default Header