"use client"
import { useState } from "react";
import Chart1 from "@/components/charts/Chart1";




export default function Home() {

  const manipulate = () => {

    setData1((eskidata1) => {

      let temp = eskidata1;
      temp[temp.length - 1] += 10;

      console.log(temp);
      return temp;

    })
  }

  const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July'])

  const [data1, setData1] = useState([15, 22, 18, 24, 20, 28, 21]);
  const [data2, setData2] = useState([25, 32, 28, 34, 30, 38, 31]);


  return (



    <div className="flex items-center justify-center min-h-screen">

      <Chart1 labels={labels} data1={data1} data2={data2} />

      <button className="bg-blue-500" onClick={manipulate}>BUTON</button>

    </div>
  );
}
