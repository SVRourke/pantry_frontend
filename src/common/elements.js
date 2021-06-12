import styled from "styled-components";
import { Link } from "react-router-dom";

const MemberCount = styled.p`
  font-weight: 800;
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`;
const TimeDisplay = styled.p`
  font-weight: 500;
  color: inherit;
  display: ${(props) => (props.displayType === "received" ? "none" : "block")};
`;
const RequestCancel = styled.button`
  border: none;
  background: none;
  color: var(--red-color);
  padding-left: 1rem;
  display: ${(props) => (props.displayType === "sent" ? "block" : "none")};

  &:hover {
    color: red;
    transition: 300ms;
  }
`;
const AcceptButton = styled.button`
  background: none;
  border: none;
  color: var(--green-color);
  padding-right: 1rem;
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`;
const DeclineButton = styled.button`
  background: none;
  border: none;
  color: var(--red-color);
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`;

// PLAIN STYLES
// STRUCTURAL ELEMENTS
const CardBody = styled.div`
  padding: 1.5rem 2rem 1rem 0;
  width: 100%;
  color: ${(props) =>
    (props.typeStyle === "sent" ? "#cacaca" : "var(--off-black-color)") ||
    "var(--off-black-color)"};
`;

const NavLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`;

const NavLink = styled(Link)`
  font-weight: ${(props) => (props.$active ? "800" : "500")};
  font-size: 1.5rem;
  padding-right: 1rem;
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-decoration-thickness: 3px;
  &:after {
    content: ":";
    display: ${(props) => (props.$active ? "true" : "none")};
  }
`;

export {
  CardBody,
  MemberCount,
  TimeDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
  NavLinkContainer,
  NavLink,
};
