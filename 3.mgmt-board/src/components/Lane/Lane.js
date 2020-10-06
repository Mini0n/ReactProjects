import React from 'react';
import styled from 'styled-components';
import Ticket from '../Ticket/Ticket';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: #2e4053;
  border-radius: 20px;
  min-height: 50vh;
  width: 24vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid #212f3c;
`;

const Lane = ({ tickets, loading, error, title }) => (
  <LaneWrapper>
    <Title>{title}</Title>
    {(loading || error) && <Alert>{loading ? 'Loading...' : 'error'}</Alert>}
    <TicketsWrapper>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </TicketsWrapper>
  </LaneWrapper>
);

export default Lane;
