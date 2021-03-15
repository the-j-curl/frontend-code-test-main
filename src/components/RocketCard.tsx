import React from "react";
import styled from 'styled-components/macro';

interface Props {
    name: string;
    weight: number;
    firstFlight: number;
    description: string;
    cost: number;
    wikipedia: string;
    height: number;
    diameter: number;
    success: number;
  };

// const RocketCard = (props: RocketProps) => {
const RocketCard: React.FC<Props> = ({name, description, weight, height, diameter, success, firstFlight, cost, wikipedia}) => {

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
      <RocketName>{name}</RocketName>
      <RocketDescription>{description}</RocketDescription>
      <H3>Overview</H3>
      <RocketInfo><OverviewText>Mass:</OverviewText><OverviewText>{numberWithCommas(weight)} kg</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Height:</OverviewText><OverviewText>{height} m</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Diameter:</OverviewText><OverviewText>{diameter} m</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Success Rate:</OverviewText><OverviewText>{success}%</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>First Flight:</OverviewText><OverviewText>{firstFlight}</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>Cost:</OverviewText><OverviewText>{formatter.format(cost)}</OverviewText></RocketInfo>
      <RocketInfo><OverviewText>More Info:</OverviewText><a href= {`${wikipedia}`}><OverviewText>Wikipedia</OverviewText></a></RocketInfo>
    </CardContainer>
  )
};

export default RocketCard;

const CardContainer = styled.article`
  border: 1px solid #000;
  background-color: rgba(43, 43, 43, 0.9);
  width: 90%;
  margin-bottom: 14px;
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

  @media (min-height: 1024px) {
    margin-bottom: 10px;
  }
`;

const H3 = styled.h3`
  font-size: 18px;
`;

const OverviewText = styled.p`
  margin: 0;
  display: inline;
`;