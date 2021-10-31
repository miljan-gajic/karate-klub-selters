import { Layout, Menu } from 'antd'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Styles from './styles.module.sass'

export default function Navigation() {
  const { Header } = Layout
  const { Item } = Menu
  return (
    <>
      <Header className={Styles.header}>
        <div className={Styles.logo}>
          <Image src="/logo.png" alt="logo" width="45" height="45" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className={Styles.navigationMenu}
        >
          <Item key="1">
            <Link href="/">home</Link>
          </Item>
          <Item key="2">
            <Link href="/news">news</Link>
          </Item>
          <Item key="3">
            <Link href="/contact">contact</Link>
          </Item>
        </Menu>
      </Header>
    </>
  )
}
