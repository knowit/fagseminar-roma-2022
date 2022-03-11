import React from 'react';
import styled from '@emotion/styled';
import viewmodel, { eventData } from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';
import ContentSection from '../components/ContentSection';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import NextUp from '../components/NextUp';
import GoogleMaps from '../layouts/GoogleMaps';
import FredrikstadLogo from '../components/Icons/FredrikstadLogo';
import KnowitSvg from '../components/Icons/KnowitSvg';

const StyledLogoContainer = styled.div`
  text-align: center;
  margin-top: ${spacing.large};
  @media (${mediaQueries.medium}) {
    margin-top: ${spacing.large};
  }
`;

const Frontpage = () => (
  <Layout>
    <Content>
      <ContentSection backgroundColor={colors.blueDark} color="white">
        <StyledLogoContainer>
          <FredrikstadLogo />
          <KnowitSvg />
          <h1 style={{ marginTop: 0, marginBottom: 10 }}>Fredrikstad</h1>
          <Paragraph color="white">{eventData.date}</Paragraph>
        </StyledLogoContainer>
      </ContentSection>
      <ContentSection
        previousSectionColor={colors.blueDark}
        withTopSeperator
        minHeight="0">
        <h1>
          Fagseminar {eventData.season.longCapitalized} {eventData.year}
        </h1>
        <Paragraph>{viewmodel.meta.description}</Paragraph>
        <Paragraph>
          {`Tidligere har vi besøkt ${eventData.cities.join(', ')} etc.`}
        </Paragraph>
        <CodeOfConduct />
      </ContentSection>
      <ContentSection withBottomSeperator>
        <NextUp />
      </ContentSection>
    </Content>
    <GoogleMaps />
  </Layout>
);

export default Frontpage;
