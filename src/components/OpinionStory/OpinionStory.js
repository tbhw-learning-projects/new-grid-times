import React from "react";
import styled from "styled-components/macro";
import { QUERIES, COLORS } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  &:not(:first-of-type) {
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }

  &:not(:last-of-type) {
    padding-bottom: 16px;
  }

  @media (${QUERIES.tabletOnly}) {

    &:not(:first-of-type) {
      padding-top: 0;
      border-top: none;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 8px;

  @media (${QUERIES.tabletOnly}) {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
