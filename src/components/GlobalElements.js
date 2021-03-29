import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 1.3rem;

  & :not(:first-child) {
    margin-left: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: inherit;
  font-weight: ${(props) => (props.active ? "600" : "")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  color: ${(props) => (props.active ? "#000" : "#999")};
  text-decoration-thickness: ${(props) => (props.active ? "2px" : "0")};
`;

const Heading = styled.p`
  font-weight: bold;
`;

export {
    Container,
    Button,
    Heading
}


