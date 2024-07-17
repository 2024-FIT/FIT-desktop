import styled from "styled-components";
import SelectBar from "@/assets/sidebar/greenline.svg";

interface SideBarButtonProps {
    $isSelected: boolean;
}

export const Container = styled.div`
    display: flex;
`;

export const SideBarMenu = styled.div`
    position: fixed;
    display: flex;
    width: 80px;
    height: 100vh;
    padding: 8px 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: space-around;
        padding: 0 8px;
        position: fixed;
        bottom: 0;
    }
`;

export const Content = styled.div`
    margin-left: 80px;
    padding: 16px;
    flex-grow: 1;

    @media (max-width: 768px) {
        margin-left: 0;
        padding-bottom: 60px;
    }
`;

export const SideBarButton = styled.button<SideBarButtonProps>`
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    position: relative;
    outline: none;

    &:focus {
        outline: none;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${(props: SideBarButtonProps) => (props.$isSelected ? `url(${SelectBar})` : 'none')};
    }

    @media (max-width: 768px) {
        width: 60px;
        height: 100%;
        margin-bottom: 0;

        &::before {
            left: auto;
            top: 0;
            width: 100%;
            height: 4px;
            background: ${(props: SideBarButtonProps) => (props.$isSelected ? `url(${SelectBar})` : 'none')};
        }
    }
`;

export const SideBarImage = styled.img`
    width: 36px;
    height: 36px;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

export const SideBarImageDay = styled.img`
    width: 29px;
    height: 29px;

    @media (max-width: 768px) {
        width: 17px;
        height: 17px;
    }
`

export const SideAvatarImgWrap = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        margin-top: 0;
        padding-bottom: 0;
        position: absolute;
        bottom: 10px;
    }
`;

export const SideAvatarImg = styled.img`
    width: 36px;
    height: 36px;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;