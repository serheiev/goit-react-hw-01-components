import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 500px;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 200px;
`;

export const UserName = styled.p`
  font-size: 26px;
  font-weight: 700;
`;

export const Paragraf = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: rgb(151, 151, 151);
`;

export const StatsList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-top: 2px;
  gap: 2px;
  background-color: rgb(179, 179, 179);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: rgb(224, 222, 222);
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: rgb(151, 151, 151);
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 900;
  padding: 5px;
`;
