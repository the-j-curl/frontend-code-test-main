import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

import Button from '../components/Button';
import RocketCard from '../components/RocketCard';
import UpcomingLaunches from '../components/UpcomingLaunches';

const rocketsResult = gql`
  query rocketsResult {
    rocketsResult(limit: 10, offset: 0) {
      data {
        name
        mass {
          kg
        }
        description
        first_flight
        cost_per_launch
        wikipedia
        id
        height {
          meters
        }
      }
    }
  }
  
`;
interface HomeTest {
  isLaunchUpcoming: boolean;
} 

const Home = (props: HomeTest) => {

  const { loading, error, data } = useQuery(rocketsResult);
  // const [rocketArray, setRocketArray] = useState([]);
  const [sortByHeaviest, setSortByHeaviest] = useState(false);

  const handleOnClick = () => {
    setSortByHeaviest(!sortByHeaviest);
    // if (sortByHeaviest) {
    //   setRocketArray()
    // } 
    console.log(sortByHeaviest);
  }

  console.log(data)
  if (loading) return <p>Loading... 🚀 </p>;
  if (error) return <p>Error 😢</p>;

  const dataArray: Array<any> = data.rocketsResult.data;

  const sortedArrayHeaviest: Array<any> = dataArray.slice().sort((a, b) => b.mass.kg - a.mass.kg);
  const sortedArrayLightest: Array<any> = dataArray.slice().sort((a, b) => a.mass.kg - b.mass.kg);


  return (
      <>
        <UpcomingLaunches isLaunchUpcoming />
        <SubHeading>Rockets</SubHeading>
        <SortContainer>Sort by: <Button sortByHeaviest={sortByHeaviest} onClickFunction={handleOnClick} /> </SortContainer>
        {sortByHeaviest ? 
        sortedArrayHeaviest.map((rocket) => (
         <RocketCard key={rocket.id} name={rocket.name} weight={rocket.mass.kg} firstFlight={rocket.first_flight} description={rocket.description} cost={rocket.cost_per_launch} wikipedia={rocket.wikipedia} height={rocket.height.meters} />
       
      ))
      :
      sortedArrayLightest.map((rocket) => (
        <RocketCard key={rocket.id} name={rocket.name} weight={rocket.mass.kg} firstFlight={rocket.first_flight} description={rocket.description} cost={rocket.cost_per_launch} wikipedia={rocket.wikipedia} height={rocket.height.meters} />
      ))}
      </>
  );
}

export default Home;

export const SubHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
`;

const SortContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    margin: 18px 0;
  }
`;