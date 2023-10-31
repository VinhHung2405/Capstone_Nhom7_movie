import React from 'react'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'
import Intro from '../../components/Intro/Intro'

export default function HomePage() {
  
  return (
    <div>
      <Intro/>
      <ListMovie/>
      <TabMovie/>
    </div>
  )
}
