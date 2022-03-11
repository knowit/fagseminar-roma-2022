import React from 'react';
import styled from '@emotion/styled';
import FredrikstadSvg from './svg/fredrikstad.svg';
import KnowitSvg from './KnowitSvg.jsx';

const StyledLogoContainer = styled.div`
  svg {
    width: auto;
    height: auto;
    max-width: 33vw;
    min-width: 240px;
    max-height: 42vh;
    min-height: 334px;
  }
`;

const FredrikstadLogo = () => {
  return (
    <StyledLogoContainer>
      <FredrikstadSvg style={{ transform: 'scale(0.8)' }} />
    </StyledLogoContainer>
  );
};

export default FredrikstadLogo;
