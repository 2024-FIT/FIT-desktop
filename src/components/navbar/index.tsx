import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "@/components/navbar/index.style";

import Home from "@/assets/sidebar/home_fill.svg";
import Day from "@/assets/sidebar/day.svg";
import AvatarImg from "@/assets/sidebar/Avatar.svg";
import SelectHome from "@/assets/sidebar/home_fill_green.svg";
import SelectDay from "@/assets/sidebar/day_green.svg";

type SelectedButton = "main" | "today" | "profile" | null;

const Navbar = () => {
    const [selected, setSelected] = useState<SelectedButton>(null);
    const navigate = useNavigate();

    const handleButtonClick = (button: SelectedButton, path: string) => {
        setSelected(button);
        navigate(path);
    };

    return (
        <S.Container>
            <S.SideBarMenu>
                <S.SideBarButton
                    onClick={() => handleButtonClick("main", "/main")}
                    $isSelected={selected === "main"}
                >
                    <S.SideBarImage src={selected === "main" ? SelectHome : Home} />
                </S.SideBarButton>
                <S.SideBarButton
                    onClick={() => handleButtonClick("today", "/today")}
                    $isSelected={selected === "today"}
                >
                    <S.SideBarImageDay src={selected === "today" ? SelectDay : Day} />
                </S.SideBarButton>
                <S.SideBarButton
                    onClick={() => handleButtonClick("profile", "/profile")}
                    $isSelected={selected === "profile"}
                >
                    {/* Add any relevant image or content here for profile */}
                </S.SideBarButton>
                <S.SideAvatarImgWrap>
                    <S.SideAvatarImg src={AvatarImg} />
                </S.SideAvatarImgWrap>
            </S.SideBarMenu>
            <S.Content>
                {/* Add any content here */}
            </S.Content>
        </S.Container>
    );
};

export default Navbar;