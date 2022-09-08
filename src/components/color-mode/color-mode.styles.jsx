import styled from "styled-components";

export const LabelColorMode = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 26px;
  margin-right: 3rem;
  background-color: var(--text-primary);
  color: var(--background);

  @media only screen and (max-width: 800px) {
    /* position: absolute; */
    /* right: 0; */
    margin-right: 1rem;
  }
`;

export const SpanColorMode = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    background-color: white;
  }
`;

export const InputColorMode = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SpanColorMode} {
    background-color: var(--text-secondary);
  }

  &:focus + ${SpanColorMode} {
    box-shadow: 0 0 1px white;
  }

  &:checked + ${SpanColorMode}:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;
