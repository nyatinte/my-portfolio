import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'

const AnimatedRoutes = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* ホーム */}
        <Route path='/' element={<Home />} />

        {/* カテゴリごとのページ */}
        {props.categories.map((category) => {
          return (
            <Route path={category.path} element={<category.page />} />
          )
        })}

        {/* 404 */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes