import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


const rocketData = gql`
  query rocketData {
    rocket(id: "falcon9") {
      id
      active
      boosters
      company
      cost_per_launch
      country
      description
      first_flights
      mass {
        kg
      }
    }
  }
  
`;

interface RocketInfo {
 

}

const RocketDetails = (props: RocketInfo) => {


  const { loading, error, data } = useQuery(rocketData);

  

  console.log(data)
  if (loading) return <p>Loading... 🚀 </p>;
  if (error) return <p>Error 😢</p>;

  const dataArray: Array<any> = data.rocketsResult.data;


  return (
      <main>
        
      </main>
  );
}

export default RocketDetails;


