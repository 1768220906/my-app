'use client'

import Link from 'next/link'
import styles from './layout.module.css'
import { useState } from 'react'

function TaskLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navList = [
    {
      key: 0,
      label: '我的一天',
      value: '/pages/my-day',
    },
    {
      key: 1,
      label: '重要',
      value: '/pages/important',
    },
    {
      key: 2,
      label: '计划内',
      value: '/pages/planned',
    },
    {
      key: 3,
      label: '已分配给我',
      value: '/pages/assigned-to-me',
    },
    {
      key: 4,
      label: '任务',
      value: '/pages/tasks',
    },
  ]

  const [activeNavKey, setActiveNavKey] = useState(0)

  return (
    <>
      <header className={styles['title']}>我的任务</header>
      <div className={styles['content']}>
        <nav className={styles['menu']}>
          <ul>
            {navList.map((nav) => {
              return (
                <Link key={nav.key} href={nav.value}>
                  <li
                    className={
                      nav.key === activeNavKey ? styles['active'] : undefined
                    }
                    onClick={() => setActiveNavKey(nav.key)}>
                    {nav.label}
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
        <main className={styles['container']}>{children}</main>
      </div>
    </>
  )
}

export default TaskLayout
