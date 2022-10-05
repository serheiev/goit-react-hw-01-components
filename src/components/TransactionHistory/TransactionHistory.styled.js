import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  width: 900px;
`;
export const Tr = styled.tr`
  font-size: 20px;
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
export const Thead = styled.thead`
  background-color: #00bcd5;
  color: #fff;
  ${Tr} {
    background-color: #00bcd5;
  }
`;

export const Tbody = styled.tbody`
  background-color: #ecf1f4;
`;

export const Th = styled.th`
  height: 30px;
`;

export const Td = styled.td`
  height: 30px;
  text-align: center;
  color: #6d7279;
`;
