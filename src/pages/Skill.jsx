import React from 'react'
import {
    Box,
    Flex,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    VStack,
    Text,
    Heading,
    Divider,
    Link,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaPython, FaFilePowerpoint, FaReact } from 'react-icons/fa';
import { SiCanva, SiHtml5, SiJupyter } from 'react-icons/si';
import ArticleTitle from '../components/ArticleTitle';
import AnimatedDiv from '../components/AnimatedDiv';
import LeftLineHeading from '../components/LeftLineHeading';


const pythonSkill = () => {
    return (
        <Box bgGradient='linear(to-br, blue.100, yellow.100)' borderRadius='lg' fontSize={['sm', 'md', 'xl']} boxShadow={['sm', 'md', 'xl']}>
            <VStack spacing={3} p={10} display='block' textAlign='left'>
                <LeftLineHeading>広く深く</LeftLineHeading>
                <Text>Pythonの強みである機械学習やデータ分析、スクレイピングはもちろん、GUIアプリ開発やアルゴリズム問題の経験も豊富。幅広い応用力でさまざまな業務がこなせる。</Text>
                <Divider py='5' />

                <LeftLineHeading>データ分析</LeftLineHeading>
                <Text>有名な機械学習コンペティションの<Link href='https://www.kaggle.com/' isExternal fontWeight='bold'>Kaggle</Link>にも参加。さまざまな可視化の手法を用いたデータの分析ができる。機械学習モデルはLightGBMを好んで使用する</Text>
                <Divider py='5' />

                <LeftLineHeading>アルゴリズム</LeftLineHeading>
                <Text>基本情報技術者試験で培われたアルゴリズムの知識と、Paizaで鍛えたコーディング力。PaizaではSランクに到達している。</Text>
                <Divider py='5' />
            </VStack>
        </Box>
    );
}

const webDevSkill = () => {
    return (
        <Box bgGradient='linear(to-b, cyan.100, white, cyan.50)' borderRadius='lg' fontSize={['sm', 'md', 'xl']} boxShadow={['sm', 'md', 'xl']}>
            <VStack spacing={3} p={10} display='block' textAlign='left'>
                <LeftLineHeading>常に最新技術を追い求める</LeftLineHeading>
                <Text>持ち前の好奇心を活かして、移り変わりの激しいWeb業界に取り残されない。英語の文献も読める</Text>
                <Divider py='5' />

                <LeftLineHeading>React</LeftLineHeading>
                <Text>Pythonで培ったオブジェクト指向的な考えを活用し、誰でも見やすく、シンプルなコードが書ける。Reactの拡張機能である他ライブラリの知識もある。</Text>
                <Divider py='5' />

                <LeftLineHeading>デザイン</LeftLineHeading>
                <Text>Chakra UIなどのUIライブラリを利用し、スピーディーな開発ができる</Text>
                <Divider py='5' />
            </VStack>
        </Box>
    );
}

const presentSkill = () => {
    return (
        <Box color='white' bgGradient='linear(to-br, #0BC1CC, #7C2AE6)' borderRadius='lg' fontSize={['sm', 'md', 'xl']} boxShadow={['sm', 'md', 'xl']}>
            <VStack spacing={3} p={10} display='block' textAlign='left'>
                <LeftLineHeading>見やすいスライドとは？</LeftLineHeading>
                <Text>「スライドや説明の際に見やすい資料とはどのようなものか」というテーマで高校の時に研究をしていた。この経験をもとに閲覧者ファーストの資料作成ができる。</Text>
                <Divider py='5' />

                <LeftLineHeading>PowerPoint & Canva</LeftLineHeading>
                <Text>代表的なツールのPowerPointだけでなく、流行なCanvaも使いこなした資料の作成が可能</Text>
                <Divider py='5' />

                <Box textAlign='center'>
                    <Link href='https://onl.tw/EEb9kVp' isExternal color='teal.100'>資料サンプルはこちらから<ExternalLinkIcon mx='2px' /></Link>
                </Box>
            </VStack>
        </Box>
    );
}

// オブジェクトリスト式にしてまとめておく
const skills = [
    { tabName: 'Python', tabIcon: <Flex><FaPython /><SiJupyter /></Flex>, content: pythonSkill },
    { tabName: 'Web開発', tabIcon: <Flex><FaReact /><SiHtml5 /></Flex>, content: webDevSkill },
    { tabName: 'プレゼン資料作成', tabIcon: <Flex><FaFilePowerpoint /><SiCanva /></Flex>, content: presentSkill }
]

const Skill = () => {
    return (
        <AnimatedDiv>
            <ArticleTitle title='スキル' subtitle='Skill' />
            <Tabs variant='soft-rounded' isFitted={[true, false]} colorScheme='purple' isLazy>
                {/* タブの上側 */}
                <TabList>
                    {skills.map((skill) => {
                        return (
                            <Tab>
                                <VStack fontSize={['sm', 'md', 'xl']}>
                                    {skill.tabIcon}
                                    <Text>{skill.tabName}</Text>
                                </VStack>
                            </Tab>
                        );
                    })}
                </TabList>
                {/* タブ要素 */}
                <TabPanels>
                    {skills.map((skill) => {
                        return (
                            <TabPanel>
                                {<skill.content />}
                            </TabPanel>
                        );
                    })}
                </TabPanels>
            </Tabs>
        </AnimatedDiv>
    );
}

export default Skill