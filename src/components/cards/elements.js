import styled from 'styled-components'

// const CardBody = styled.div`  
//   padding: 1.5rem 2rem 1rem 0;
//   width: 100%;
// `
const CardHeading = styled.h3`
  font-size: 2.7rem;
  font-weight: 600;
  color: inherit;
`
const MemberCount = styled.p`
  font-weight: 800;
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`
const TimeDisplay = styled.p`
  font-weight: 500;
  color: inherit;
  display: ${(props) => (props.displayType === "received" ? "none" : "block")};
`
const InvitedDisplay = styled.p``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: baseline;
  color: inherit;
`;

const CardBody = styled.div`
  padding: 1.5rem 2rem 1rem 0;
  width: 100%;
  color: ${(props) => (props.typeStyle === "sent" ? "#cacaca" : "var(--off-black-color)") || "var(--off-black-color)"};
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


export {
  CardBody,
  CardHeading,
  MemberCount,
  TimeDisplay,
  InvitedDisplay,
  RequestCancel,
  Row,
  AcceptButton,
  DeclineButton,
}