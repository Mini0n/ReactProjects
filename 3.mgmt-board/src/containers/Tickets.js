import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Ticket from '../components/Ticket/Ticket';

const TicketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;

  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Alert = styled.div`
  text-align: center;
`;

const Tickets = ({ loading, data, error }) => (
  <TicketsWrapper>
    {(loading || error) && <Alert>{loading ? 'Loading...' : 'Err0r'}</Alert>}
    {data.map((ticket) => (
      <Ticket key={ticket.id} ticket={ticket} marginRight />
    ))}
  </TicketsWrapper>
);

export default withDataFetching(Tickets);
