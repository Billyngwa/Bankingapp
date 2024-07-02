import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  return (
    <div>
        <HeaderBox
        type="greeting"
        title="Welcome"
        user="Billy"
        subtext="Access and manage your accounts and transactions"

        />
        <TotalBalanceBox/>
    </div>
  )
}

export default Home