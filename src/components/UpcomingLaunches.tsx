import React, { Component, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from 'styled-components/macro';
import Moment from 'react-moment';

import {SubHeading} from '../pages/Home';

const launches = gql`
  query launches {
    launchesUpcoming(limit: 1) {
      details
      launch_date_local
      mission_id
      mission_name
      upcoming
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

interface Launches {
  isLaunchUpcoming: boolean;

};

const UpcomingLaunches = (props: Launches) => {
  const { loading, error, data } = useQuery(launches);

  if (loading) return <p>Loading... 🚀 </p>;
  if (error) return <p>Error 😢</p>;

  const upcomingData: Array<any> = data.launchesUpcoming;
  const isLaunchUpcoming: Boolean = false;
  // const isLaunchUpcoming: Boolean = upcomingData[0].upcoming;
  console.log(isLaunchUpcoming);

     return (
    <UpcomingSection>
      <SubHeading>Launches</SubHeading>
      <UpcomingSubHeading>Upcoming Launch: <Span isLaunchUpcoming> {isLaunchUpcoming ? "Yes" : "No"}</Span></UpcomingSubHeading>
      {isLaunchUpcoming &&
        upcomingData.map((launch) => (
          <LaunchWrapper key={launch.launch_date_local}>
            <NextLaunchWrapper>
              <NextLaunchText>Date: <BoldText><Moment format="YYYY-MM-DD HH:MM">{launch.launch_date_local}</Moment></BoldText></NextLaunchText>
              <NextLaunchText>Mission Name: <BoldText>{launch.mission_name}</BoldText> | ID: <BoldText>{launch.mission_id}</BoldText></NextLaunchText>
              <NextLaunchText>Rocket: <BoldText>{launch.rocket.rocket_name} ({launch.rocket.rocket_type})</BoldText></NextLaunchText>
            </NextLaunchWrapper>
            <LaunchDetails>{launch.details}</LaunchDetails>
          </LaunchWrapper>
      ))}
     </UpcomingSection>
  );  
}

export default UpcomingLaunches;

const UpcomingSection = styled.section`
  /* border: 1px solid white; */
  margin-top: 100px;
  width: 95%;

  @media (min-width: 1024px) {
    margin-top: 160px;
    width: 60%;
  }

  @media (min-width: 1500px) {
    width: 50%;
  }
`;

const UpcomingSubHeading = styled.h4`
  font-family: Courier New, monospace;
  font-size: 18px;
  font-weight: 500;
`;

const Span = styled.span<Launches>`
  font-weight: 700;
  color: ${(props) => props.isLaunchUpcoming === true ? '#02a002' : '#ff0000'}; 
`;

const LaunchWrapper = styled.div`
  padding: 4px;
`;

const NextLaunchWrapper = styled.div`
  text-align: left;
`;

const NextLaunchText = styled.p`
  margin: 0;
  font-family: Courier New, monospace;
  color: #e2e0e0;
  font-weight: 400;
`; 

const BoldText = styled.span`
  font-weight: 600;
  color: #fff;
`;

const LaunchDetails = styled.p`
  text-align: left;
`;