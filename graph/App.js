import React, { Component } from 'react';
import { Dimensions , Text , View } from 'react-native';
import { LineChart , BarChart , PieChart } from 'react-native-chart-kit';

const defects = [
  {
    defectId: 1,
    defectName: 'Knots',
    option: 'Small',
    points: 2
  },
  {
    defectId: 2,
    defectName: 'Slubs',
    points: 7
  },
  {
    defectId: 4,
    defectName: 'Missing Yarn',
    points: 2
  }
];
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return (opacity = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
const pieData = [
  {
    label: defects.map(item => item.defectName ),
    data: defects.map(item => item.points),
    color:getRandomColor(),
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const data = {
  labels: defects.map(item => item.defectName),
  datasets: [
    {
      data: defects.map(item => item.points)
    },
  ],
};

const screenWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Line Chart</Text>
        <LineChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Text>Bar Chart</Text>
        <BarChart
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
     }}
     bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    />
    <Text>
     Pie Chart
      </Text>
      <PieChart
      data={pieData}
      width={screenWidth}
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, 
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
       }}
       bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
      accessor='data'
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  
 </View>
 
 );
}
}


  
