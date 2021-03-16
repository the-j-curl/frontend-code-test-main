import React, { useState } from 'react';
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
        description
        first_flight
        cost_per_launch
        wikipedia
        id
        success_rate_pct
        mass {
          kg
        }
        height {
          meters
        }
        diameter {
          meters
        }
      }
    }
  }
  
`;

const Home: React.FC = () => {

  const { loading, error, data } = useQuery(rocketsResult);
  const [sortByHeaviest, setSortByHeaviest] = useState<boolean>(false);

  const handleOnClick = () => {
    setSortByHeaviest(!sortByHeaviest);
  };

  if (loading) return <p>Loading... 🚀 </p>;
  if (error) return <p>Error 😢</p>;

  const dataArray: Array<any> = data.rocketsResult.data;

  const sortedArrayHeaviest: Array<any> = dataArray.slice().sort((a, b) => b.mass.kg - a.mass.kg);
  const sortedArrayLightest: Array<any> = dataArray.slice().sort((a, b) => a.mass.kg - b.mass.kg);


  return (
      <>
        <UpcomingLaunches />
        <SubHeading>Rockets</SubHeading>
        <RocketNumberText>Number of rockets: <BoldText>{dataArray.length}</BoldText></RocketNumberText>
        <SortContainer>Sort by: <Button sortByHeaviest={sortByHeaviest} onClickFunction={handleOnClick} /></SortContainer>
        {sortByHeaviest ? 
          sortedArrayHeaviest.map((rocket) => (
            <RocketCard key={rocket.id} name={rocket.name} weight={rocket.mass.kg} firstFlight={rocket.first_flight} description={rocket.description} cost={rocket.cost_per_launch} wikipedia={rocket.wikipedia} height={rocket.height.meters} diameter={rocket.diameter.meters} success={rocket.success_rate_pct} />
        
          ))
        :
          sortedArrayLightest.map((rocket) => (
            <RocketCard key={rocket.id} name={rocket.name} weight={rocket.mass.kg} firstFlight={rocket.first_flight} description={rocket.description} cost={rocket.cost_per_launch} wikipedia={rocket.wikipedia} height={rocket.height.meters} diameter={rocket.diameter.meters} success={rocket.success_rate_pct} />
        ))}
    </>
  );
};

export default Home;

export const SubHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
`;

export const BoldText = styled.span`
  font-weight: 600;
  color: #fff;
`;

const RocketNumberText = styled.p`
  margin: 10px 0;
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