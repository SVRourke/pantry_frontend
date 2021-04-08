import styled from 'styled-components'
import { Link } from 'react-router-dom'


// INDIVIDUAL ELEMENTS
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





const SubHeading = styled.p``;

const NavLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  padding-top: 2rem;

`;

const NavLink = styled(Link)`
  font-weight: ${props => props.$active ? "800" : "500"};
  font-size: 1.5rem;
  padding-right: 1rem;
  text-decoration: ${props => props.$active ? 'underline' : 'none'};
  text-decoration-thickness: 3px;
  &:after {
    content: ":";
    display: ${props => props.$active ? "true" : "none"};
  }
`;

const UnFriend = styled.button`
  background: none;
  border: none;
  margin: 0 1rem;
  color: var(--red-color);
  &:hover {
    font-weight: 600;
  }
`;

const NewFriend = styled(Link)`
  border: solid var(--offblack-color) 2px;
  padding: .3rem .7rem;
  border-radius: 3rem;
  width: 11ch;
  margin: 1rem 0;
  &:hover {
    background: var(--offblack-color);
    color: white;
  }
`;
const NiceLink = styled(Link)`
  border: solid var(--offblack-color) 2px;
  padding: .3rem .7rem;
  border-radius: 3rem;
  display: block;
  width: fit-content;
`;
const Wrapper = styled.div`
    display: flex;
    margin: 1rem 0 2rem 0;
    
`;

const CancelButton = styled.button`
    background: none;
    border: none;
    padding-left: 1rem;
    font-size: 1.2rem;

    &:hover {
        color: var(--red-color)
    }
`;


const AddLink = styled(Link)`
    border: solid black 2px;
    background-color: white;
    padding: .5rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    display: block;
    width: fit-content;
`




const containerStyles = {
  height: '100vh',
  overflow: 'hidden'
}
const innerContainerStyles = {
  height: '80vh',
  overflowY: 'scroll'
}

const Block = styled.div`
    width: 100%;
    overflow-y: scroll;
`
const Acquired = styled.button`
  border-color: ${props => props.acquired ? 'var(--green-color)' : 'var(--blue-color)'};
  color: ${props => props.acquired ? '#fff' : 'var(--blue-color)'};
  background: ${props => props.acquired ? 'var(--green-color)' : 'none'};
  padding: .5rem .7rem;
  border-style: solid;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;

  &:hover {
    color: white;
    background-color: ${props => props.acquired ? '#fff' : 'var(--blue-color)'};
    color: ${props => props.acquired ? 'var(--green-color)' : '#fff'};
  }
`;

const Trash = styled.button`
  background: none;
  padding: .5rem .7rem;
  border-radius: 2rem;
  border-style: solid;
  border-color: var(--red-color);
  color: var(--red-color);
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;
  
  &:hover {
    color: white;
    background-color: var(--red-color);
  }
`;

const Edit = styled(Link)`
  border: solid var(--gray-color) 2px;
  color: var(--gray-color);
  padding: .5rem .7rem;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;
  transition: 10 ease-in;

  &:hover {
    color: white;
    background-color: var(--gray-color);
  }
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: .7rem 0;
`;

const ListNavLink = styled(Link)`
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
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
  UnFriend,
  SubHeading,
  NavLinkContainer,
  NavLink,
  NewFriend,
  NiceLink,
  Wrapper,
  CancelButton,
  AddLink,
  containerStyles,
  innerContainerStyles,
  Block,
  Acquired,
  Edit,
  Trash,
  NavContainer,
  ListNavLink
}