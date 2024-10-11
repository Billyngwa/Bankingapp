import AnimatedCounter from "@/components/AnimatedCounter";
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import React from "react";
import CountUp from "react-countup";

const Home = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  
  return (
    <section className="flex justify-between">
      <div className="w-[50vw] ml-[2%] mr-3">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.name}
            subtext="Access and manage your accounts and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
      </div>

      <RightSideBar
        user={loggedInUser}
        transactions={[]}
        banks={[{ username: "Bob Loco" }, {}, {}]}
      />
    </section>
  );
};
export default Home;
