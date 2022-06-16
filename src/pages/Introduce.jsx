import { Box, Image, Flex, Heading, Text, Button, VStack, List, ListItem } from '@chakra-ui/react'
// モーダル用
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import ArticleTitle from '../components/ArticleTitle';
import AnimatedDiv from '../components/AnimatedDiv'
// 自分の画像
import IntroImage from '../images/introduce_mypic.png'


// 経歴表示用のモーダル
const CareerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} size={['md', 'lg']} colorScheme='pink'>経歴を見る</Button>

      <Modal isOpen={isOpen} size={['xs', 'md', 'xl']} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text borderBottom='1px solid green' display='inline-block' >
              {/* <ruby>中村 拓実<rt>なかむら たくみ</rt></ruby>の経歴 */}
              <ruby>
                中村<rp>(</rp><rt>なかむら</rt><rp>)</rp>
                拓実<rp>(</rp><rt>たくみ</rt><rp>)</rp>
              </ruby>の経歴
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={['sm', 'md', 'lg']}>
            <Box px='2' pb='5'>
              <Text fontWeight='bold' fontSize={['md', 'lg', 'xl']} px='2' borderLeft='2px solid red'>学歴</Text>
              <List>
                <ListItem>
                  <Text>2021年3月: 神奈川県立光陵高等学校 卒業</Text>
                </ListItem>
                <ListItem>
                  <Text>2021年4月: 横浜市立大学 入学</Text>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text fontWeight='bold' fontSize={['md', 'lg', 'xl']} px='2' borderLeft='2px solid red'>アルバイト経験</Text>
              <List px='2' pb='5'>
                <ListItem>
                  <Text>2021年8月~現在: まいばすけっと港南中央駅北店にてアルバイト。レジや品出し、廃棄などさまざまな業務を担当</Text>
                </ListItem>
              </List>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


// 自己紹介
const Introduce = () => {
  return (
    <AnimatedDiv>
      {/* 見出し部分 */}
      <ArticleTitle title='自己紹介' subtitle='Introduce' />
      {/* 本文部分 */}
      <VStack spacing='10'>
        {/* 自己紹介カード */}
        <Flex alignItems='center' borderRadius='lg' shadow='md' bgGradient='linear(to-br, #9890e330, #b1f4cf30)'>
          <Image border={'1px solid teal'} borderRadius='full' boxSize={['100px', '200px']} src={IntroImage} m={['5', '10']} />
          <Box textAlign='left' fontSize={['sm', 'md']} mr='10' py='5'>
            <Heading fontSize={['md', 'lg']}><ruby>中村 拓実<rt>なかむら たくみ</rt></ruby></Heading>
            <Text>横浜市立大学データサイエンス学部２年生</Text>
            <Text>3度の飯よりプログラミングが好き。Python歴は1年半。</Text>
            <Text>最近はReactをベースにweb開発を広く勉強中。</Text>
            <Text>将来はフロントエンドもバックエンドもできるフリーランスエンジニアになることが目標</Text>
          </Box>
        </Flex>
        {/* 経歴モーダル */}
        <CareerModal />
      </VStack>
    </AnimatedDiv>
  );
}

export default Introduce