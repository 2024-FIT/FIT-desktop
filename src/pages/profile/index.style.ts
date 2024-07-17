import exp from "constants";
import styled from "styled-components";

export const mainbox = styled.div`
    width: 1050px;
    height: 686px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Sub-White, #FFF);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    position: absolute;
    transform: translate(-50%,-50%);
    left:56%;
    top:50%
`;

export const character = styled.div`
    width: 346px;
    height: 289px;
    flex-shrink: 0;
    background: url("@/assets/profile/leven2.png") lightgray 50% / cover no-repeat;
`;