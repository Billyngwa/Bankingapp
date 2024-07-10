
import AnimatedCounter from '@/components/AnimatedCounter'
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import CountUp from 'react-countup'

const Home = () => {
  const isLoggedIn = {
    name:"Billy Tata Ngwa",
    email:"billytatangwa5@gmail.com",
    imageUrl:"ypui"
  }
  return (
    <section className='flex justify-between'>
      <div className='w-[50vw] ml-[2%] mr-3'>
        <header>

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
        </header>
      </div>

      <RightSideBar user={isLoggedIn} transactions={[]} banks={[{username:"Bob Loco"},{},{}]}/>
    </section>
  )
}
export default Home