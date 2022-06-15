import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Home = React.lazy(() => import('../pages/Home'))
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'))

const AnimatedRoutes = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* ホーム */}
        <Route path='/' element={<Suspense><Home /></Suspense>} />

        {/* カテゴリごとのページ */}
        {props.categories.map((category) => {
          return (
            <Route
              path={category.path}
              element={(
                // 遅延読み込みのためには Suspense で囲む
                <Suspense>
                  <category.page />
                </Suspense>
              )}
            />
          )
        })}

        {/* 404 */}
        <Route path='*' element={<Suspense><ErrorPage /></Suspense>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes