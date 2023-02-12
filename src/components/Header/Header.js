import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import Spacer from "../Spacer";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LargeScreenActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LargeScreenActionGroup>
        <Logo />
        <LargeScreenActionGroup direction="row-reverse" align="end">
          <MemberLayout>
            <Button>Subscribe</Button>
            <MemberLink href="/">Already a member?</MemberLink>
          </MemberLayout>
        </LargeScreenActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LargeScreenActionGroup = styled(ActionGroup)`
  display: none;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  flex: 1;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) {
    justify-content: space-between;
  }
`;

const MemberLayout = styled.div``;

const MemberLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 8px;
  font-family: "Crimson Text";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export default Header;
