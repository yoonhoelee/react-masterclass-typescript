import styled from "styled-components";
import {useState} from "react";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border-color: ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number|string>(1);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}></Container>;
}

export default Circle;
