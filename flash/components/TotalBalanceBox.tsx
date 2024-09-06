"use client"
import React, { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
type repoInfo ={
  repoName:string,
  page:number
}

const TotalBalanceBox = ({accounts = [],totalBanks,totalCurrentBalance,}: TotlaBalanceBoxProps) => {
  const [devs,setDevs] = useState([])
  useEffect(()=> {
    async function getContributors(repoName:string, page:number = 1) {  
      let request = await fetch(`https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${1}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      });
  
      // print data from the fetch on screen
      let contributorsList = await request.json();
      console.log(contributorsList);
      console.log("contributorsList");

      setDevs(contributorsList)
      return contributorsList;
  };
  getContributors("seven-night-of-code/seven-freemail-website");
  },[])
  console.log(devs);
  
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col  gap-6">
        <h2 className="header-2">Bank accounts: {totalBanks}</h2>
        <div className="flex flex-col  gap-6">
          <p className="total-balance-label">Total current balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>

    </section>
  );
};
export default TotalBalanceBox;
