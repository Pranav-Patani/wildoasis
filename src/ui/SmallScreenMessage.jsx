import styled from "styled-components";

const SmallScreenMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--color-grey-50);
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px 40px;
  box-shadow: var(--shadow-lg);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default SmallScreenMessage;
