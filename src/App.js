import React from 'react';
import {
  ChakraProvider,
  Container,
} from '@chakra-ui/react';

// ReactRouterのImport
import { BrowserRouter as Router } from 'react-router-dom';

// ヘッダー
import Header from './components/Header';
// 資格
import Certifications from './pages/Certifications';
// 自己紹介
import Introduce from './pages/Introduce';
// スキル
import Skill from './pages/Skill';

// アニメーション用のRoutesコンポーネント
import AnimatedRoutes from './components/AnimatedRoutes';

// ページをカテゴリごとに分類する。それぞれオブジェクトとして管理する。
const categories = [
  {catTitle: '自己紹介', path: '/introduce', page: Introduce},
  {catTitle: '資格', path: '/certifications', page: Certifications},
  {catTitle: 'スキル', path: '/skill', page: Skill}
];


const App = () => {
  return (
    // よくわからんけどないと機能しない
    <ChakraProvider>
      <Router>
        {/* ヘッダー */}
        <Header categories={categories} />
        {/* メイン部分の記述のコンテナ hはテスト用 */}
        <Container textAlign='center' fontSize={['xl', '2xl']} mt={4} p={5}>
          {/* Routesはアニメーションしたいから別コンポーネントで管理 */}
          <AnimatedRoutes categories={categories} />
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
