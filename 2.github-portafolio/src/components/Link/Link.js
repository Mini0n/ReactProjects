import React from "react";
import styled from "styled-components";

const InnerLink = styled.a`
  color: #ae25e2;
`;

const Link = ({ url, title }) => (
  <InnerLink href={url} target="_blank" rel="noopener noreferrer">
    {title}
  </InnerLink>
);

export default Link;
