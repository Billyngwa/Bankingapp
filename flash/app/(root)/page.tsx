
import AnimatedCounter from '@/components/AnimatedCounter'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <section>
        <HeaderBox
        type="greeting"
        title="Welcome"
        user="Billy"
        subtext="Access and manage your accounts and transactions"

        />
        <TotalBalanceBox
            accounts = {[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
        />
      
    </section>
  )
}
export default Home