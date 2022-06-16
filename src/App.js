import React, { Suspense } from 'react';
import {
  ChakraProvider,
  Container,
} from '@chakra-ui/react';

// ReactRouterのImport
import { BrowserRouter as Router } from 'react-router-dom';

// ヘッダー
import Header from './components/Header';
// // 資格
// import Certifications from './pages/Certifications';
// // 自己紹介
// import Introduce from './pages/Introduce';
// // スキル
// import Skill from './pages/Skill';

// アニメーション用のRoutesコンポーネント
import AnimatedRoutes from './components/AnimatedRoutes';

// ページをカテゴリごとに分類する。それぞれオブジェクトとして管理する。
const categories = [
  // 初期に表示するページ以外は遅延読み込みすることで、パフォーマンスを向上させる
  {catTitle: '自己紹介', path: '/introduce', page: React.lazy(() => import('./pages/Introduce'))},
  {catTitle: '資格', path: '/certifications', page: React.lazy(() => import('./pages/Certifications'))},
  {catTitle: 'スキル', path: '/skill', page: React.lazy(() => import('./pages/Skill'))}
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
