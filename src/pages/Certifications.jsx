import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import ArticleTitle from '../components/ArticleTitle';
import AnimatedDiv from '../components/AnimatedDiv';


// 資格
const Certification = (props) => {
  return (
    <Box p={[15, 30, 45]} bgSize='cover' shadow='lg' borderRadius='md' bgGradient='linear(to-b,teal.50, green.50)'>
      <Heading fontSize={['2xl', '3xl']} pb={7}>{props.title}</Heading>
      <Text>取得年月:  {props.getDate}</Text>
      {/* スコアは任意 */}
      {/* {props.score ? <Text>スコア:  {props.score}</Text> : <></>} */}
      {props.score ? <Text>スコア:  {props.score}</Text> : null /* 何もない場合は null が使えるよ！ */}
    </Box>
  );
}

// 資格一覧
const tabElements = [
  { tabName: '基本情報技術者', formalName: '基本情報技術者', getDate: '2022/06', score: '186 / 200' },
  { tabName: 'TOEIC', formalName: 'TOEIC', getDate: '2021/02', score: '715' },
  { tabName: '運転免許', formalName: '普通自動車第一種運転免許（AT限定）', getDate: '2021/07', score: '' }
]

// 資格まとめ
const Certifications = () => {
  return (
    <AnimatedDiv>
      <ArticleTitle title='資格' subtitle='Certification' />
      <Tabs variant='enclosed' isFitted colorScheme='teal' p={3} isLazy={true} boxShadow='inner'>
        <TabList>
          {tabElements.map((tabElement) => {
            return (
              <Tab fontSize={['sm', 'md', 'xl']} fontWeight='bold'>{tabElement.tabName}</Tab>
            )
          })}
        </TabList>

        <TabPanels>
          {/* {tabElements.map((tabElement) => {
            return (
              <TabPanel>
                <Certification title={tabElement.formalName} getDate={tabElement.getDate} score={tabElement.score} />
              </TabPanel>
            )
          })} */}
           
           {/* 分割代入を使うほうがわかりやすいかも？ */tabElements.map(({formalName, getDate, score}) => {
            return (
              <TabPanel>
                <Certification title={formalName} getDate={getDate} score={score} />
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </AnimatedDiv>
  )
}

export default Certifications