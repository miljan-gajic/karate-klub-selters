import { Layout } from 'antd'
import React from 'react'

import Styles from './styles.module.sass'

export default function Container({ children }) {
  const { Header, Content, Sider, Footer } = Layout
  return <Layout className={Styles.mainContainer}>{children}</Layout>
}
