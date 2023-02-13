import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList responsive>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  padding-bottom: 24px;

  @media (${QUERIES.tabletAndUp}) {
    padding: 0;
    padding-right: 24px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media (${QUERIES.tabletAndUp}) {
    margin-left: 24px;
  }

  @media (${QUERIES.laptopAndUp}) {
    margin-left: 24px;
    margin-bottom: 24px;
    padding-right: 24px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media (${QUERIES.tabletOnly} and (${({ responsive }) =>
      responsive ? "min-width: 0" : "max-width: 0"})) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media (${QUERIES.laptopAndUp}) {
    margin-left: 24px;
    margin-bottom: 24px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  padding-top: 24px;

  @media (${QUERIES.laptopAndUp}) {
    margin-left: 24px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

export default MainStoryGrid;
