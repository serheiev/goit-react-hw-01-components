import PropTypes from 'prop-types';

import {
  StatisticPlace,
  Title,
  StatisticList,
  StatisticItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticPlace>
      {title ? <Title>{title}</Title> : ''}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id}>
              <Label> {label} </Label>
              <Percentage> {percentage}%</Percentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticPlace>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
