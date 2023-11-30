// import { publish } from "pubsub-js";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   position: relative;
//   display: inline-block;
//   width: ${(props) => props.size * 2}px;
//   height: ${(props) => props.size}px;
//   input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//     &:checked + .slider {
//       /* background-color: #2196f3; */
//       color: white;
//       &::after {
//         background-color: white;
//         transform: translateX(100%);
//       }
//     }
//     &:checked + .slider:after {
//       /* transform: translateX(100%); */
//     }
//   }
//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: var(--bg);
//     /* -webkit-transition: 0.4s; */
//     /* transition: 0.4s; */
//     /* border-radius: ${(props) => props.size}px;
//     border: 1px solid; */
//     border-top-left-radius: ${(props) => props.size / 2}px;
//     border-bottom-left-radius: ${(props) => props.size / 2}px;
//     border-top-right-radius: ${(props) => props.size / 2}px;
//     border-bottom-right-radius: ${(props) => props.size / 2}px;
//     overflow: hidden;
//     &::before {
//       position: absolute;
//       content: "";
//       /* border-radius: 50%; */
//       border-top-left-radius: ${(props) => props.size / 2}px;
//       border-bottom-left-radius: ${(props) => props.size / 2}px;
//       border-top-right-radius: ${(props) => props.size / 2}px;
//       border-bottom-right-radius: ${(props) => props.size / 2}px;
//       height: ${(props) => props.size}px;
//       width: ${(props) => props.size * 2}px;
//       left: 0px;
//       bottom: 0px;
//       border: 1px solid;
//     }
//     &::after {
//       position: absolute;
//       content: "";
//       border-radius: 50%;
//       height: ${(props) => props.size}px;
//       width: ${(props) => props.size}px;
//       left: 0px;
//       bottom: 0px;
//       background-color: var(--color-primary);
//       transition: transform 0.4s;
//     }
//   }
// `;

// type Props = {
//   size: number;
//   event: string;
// };
// const Switch = ({ size = 12, event }: Props) => {
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     publish(event, checked);
//   }, [checked]);

//   return (
//     <Container size={size}>
//       <label className='switch'>
//         <input
//           type='checkbox'
//           defaultChecked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         <span className='slider round'></span>
//       </label>
//     </Container>
//   );
// };

// export default Switch;
