import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactEcharts from 'echarts-for-react';

const Temperature = () => {
  const { id } = useParams();
  const COWID = Number(id);

  const cow = useSelector((state) =>
    state.cows.filter((cow) => cow.id === COWID)
  )[0];

  const generateData = () => {
    const data = [];
    for (let i = 0; i <= 100; i++) {
      data.push([i, Math.random() * 10 + 30]); // Generate random temperature values between 30 and 40
    }
    return data;
  };

  const formatTooltip = (params) => {
    if (params.data) {
      const [x, y] = params.data;
      return `Temperature: ${y.toFixed(2)}°C`;
    }
    return '';
  };

  const options = {
    tooltip: {
      trigger: 'axis',
      formatter: formatTooltip,
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 101 }, (_, i) => i), // Generate X-axis data from 0 to 100
      axisLine: {
        lineStyle: {
          color: '#888', // X-axis line color
        },
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false, // Hide horizontal grid lines
      },
      axisLine: {
        lineStyle: {
          color: '#888', // Y-axis line color
        },
      },
    },
    series: [
      {
        name: 'Temperature',
        type: 'line',
        data: generateData(),
        smooth: true,
        lineStyle: {
          color: '#9F7AEA', // Set line color
          width: 2,
        },
        itemStyle: {
          color: 'transparent', // Make dots transparent
        },
      },
    ],
  };

  const handleHover = (params) => {
    console.log(params);
  };

  return (
    <div className="bg-gray-900 h-[88vh] text-white">
      <nav className="flex justify-between items-center p-4">
        <div className="text-3xl font-bold">Temperature</div>
        <div className="text-lg font-semibold text-violet-400">{cow.name}</div>
        <Link
          to={`/${cow.id}/home`}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          HOME
        </Link>
      </nav>
      <div className="p-4">
        <ReactEcharts
          option={options}
          style={{ height: '300px' }}
          onEvents={{
            mousemove: handleHover,
          }}
        />
      </div>
      <div className="p-4">
        <div>Temperature now : {cow.temp}°C</div>
      </div>
    </div>
  );
};

export default Temperature;
