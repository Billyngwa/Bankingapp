"use client"
import { ArcElement, Chart as chartjs, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

chartjs.register(ArcElement,Legend)


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
          {

            label:"Banks",
            data:[1250,1487,789,245],
            backgroundColor:["#0747b6","#6172F3","#2265d8","2f91fa"]
          }
        ],
        labels:["NFC Bank","Afriland First Bank","UBA bank","Eco bank"]
      } 
  return (
    <Doughnut data={data }
      options={{
        cutout:"70%",
        plugins:{
          legend:{
            display:false
          }
        }
      }}
    />
  )
}

export default DoughnutChart