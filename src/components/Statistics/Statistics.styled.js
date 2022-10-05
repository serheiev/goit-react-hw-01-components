import styled from 'styled-components';

export const StatisticPlace = styled.div`
  background-color: #fff;
  width: 500px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 26px;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatisticItem = styled.li`
  padding: 15px;
  margin: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #969696;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #fff;
`;
export const Percentage = styled.span`
  font-size: 26px;
  color: #fff;
`;

// ${'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()};
