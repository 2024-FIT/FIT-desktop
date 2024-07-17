import styled from 'styled-components';

export const BarContainer = styled.div`
    width: 70%;
    height: 35px;
    background: linear-gradient(90deg, 
    #A8DAFF 5%,  /* 18.5 이하 */
    #AAF27E 5%, /* 18.5~24.9 */
    #AAF27E 35%, /* 18.5~24.9 */
    #EBFF6F 35%,  /* 25~29.9 */
    #EBFF6F 55%,  /* 25~29.9 */
    #FFDF6F 55%,  /* 30~34.9 */
    #FFDF6F 95%,  /* 30~34.9 */
    #FF6F6F 95%  /* 35~39.9 */
    ); 
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 80%;
    border-radius: 10px;
`;

export const Arrow = styled.img`
    position: absolute;
    top: -50%;
    transform: translate(-50%);
`;