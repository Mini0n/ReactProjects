import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Lane from '../components/Lane/Lane';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 1%;
  /* height: 80vmin; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

class Board extends React.Component {
  render() {
    const { lanes, loading, data, error } = this.props;

    return (
      <BoardWrapper>
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tickets={data.filter((ticket) => ticket.lane === lane.id)}
          />
        ))}
      </BoardWrapper>
    );
  }
}

export default withDataFetching(Board);
