import React, {FunctionComponent} from "react";
import styled from 'styled-components/macro';

interface RocketDetails {
    name: string;
    weight: number;
    firstFlight: number;
    description: string;
    cost: number;
    wikipedia: string;
    height: number;

  }

const RocketCard = (props: RocketDetails) => {

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
  });
  
   
 
  return(
    <CardContainer>
      <RocketName>{props.name}</RocketName>
      <RocketDescription>{props.description}</RocketDescription>
      <H3>Overview</H3>
      <RocketInfo><OverviewText>Mass:</OverviewText><OverviewText>{numberWithCommas(props.weight)} kg</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Height:</OverviewText><OverviewText>{props.height} m</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>First Flight:</OverviewText><OverviewText>{props.firstFlight}</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Cost:</OverviewText><OverviewText>{formatter.format(props.cost)}</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>More Info:</OverviewText><a href= {`${props.wikipedia}`}><OverviewText>Wikipedia</OverviewText></a></RocketInfo>
    </CardContainer>
  )
};

export default RocketCard;

const CardContainer = styled.article`
  border: 1px solid #000;
  background-color: rgba(43, 43, 43, 0.9);
  width: 90%;
  margin-bottom: 10px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    margin-bottom: 20px;
    padding: 10px 20px;
  }

  @media (min-width: 1500px) {
    width: 35%;
  }
`;

const RocketName = styled.h3`
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  margin: 12px 0;

  @media (min-width: 1024px) {
    margin: 12px 0 8px 0;
  }
`;

const RocketDescription = styled.p`
  padding: 0 5px;
  text-align: left;
  margin: 12px 0;
`;

const RocketInfo = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #5e5d5d;
  margin-bottom: 5px;
`;

const H3 = styled.h3`
  font-size: 18px;
`;

const OverviewText = styled.p`
  margin: 0;
  display: inline;
`;