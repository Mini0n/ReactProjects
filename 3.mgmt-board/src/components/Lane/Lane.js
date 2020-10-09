import React from 'react';
import styled from 'styled-components';
import Ticket from '../Ticket/Ticket';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  /* background: #2e4053; */
  background: rgba(98, 101, 103, 0);
  /* border-radius: 20px; */
  min-height: 50vh;
  width: 24vw;
  /* border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff; */

  @media (max-width: 800px) {
    margin: auto;
    margin-bottom: 2%;
    width: 80%;
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
  margin-bottom: 0px;
  text-align: center;
  /* border-bottom: 2px solid #212f3c; */
  border-bottom: 2px solid #000000;

  color: rgb(220, 118, 51);
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
