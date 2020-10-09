import React from 'react';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  /* background: #5d6d7e; */
  background: rgba(98, 101, 103, 0.2);
  padding: 20px;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${(props) => (!!props.marginRight ? '1%' : '0')};
  }
`;

const Title = styled.h3`
  width: 100%;
  margin: 0px;
  font-size: 0.8rem;
  color: rgb(93, 173, 226);
`;

const Body = styled.p`
  width: 100%;
`;

const Ticket = ({ ticket, marginRight }) => (
  <TicketWrapper marginRight={marginRight}>
    <Title>{ticket.title}</Title>
    <Body>{ticket.body}</Body>
  </TicketWrapper>
);

export default Ticket;
