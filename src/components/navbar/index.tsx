import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from "@/components/navbar/index.style";
import config from "@/components/constants/login/config.json";

import Home from "@/assets/sidebar/home_fill.svg";
import Day from "@/assets/sidebar/day.svg";

import AvatarImg from "@/assets/sidebar/Avatar.svg";

import SelectHome from "@/assets/sidebar/home_fill_green.svg";
import SelectDay from "@/assets/sidebar/home_fill_green.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";
import SelectBell from "@/assets/image/sidebar/selectbell.svg";

type SelectedButton = "home" | "today" | "profile" | null;

const Navbar = () => {
    const [selected, setSelected] = useState<SelectedButton>(null);
    const [chatRooms, setChatRooms] = useState<string[]>([]);
    const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleButtonClick = (button: SelectedButton, path: string) => {
        setSelected(button);
        navigate(path);
        setSelectedChatRoom(null);
    };

    useEffect(() => {
        // Load chat rooms from localStorage on component mount
        const storedChatRooms = localStorage.getItem("chatRooms");
        if (storedChatRooms) {
            setChatRooms(JSON.parse(storedChatRooms));
        }
    }, []);

    useEffect(() => {
        // Save chat rooms to localStorage whenever chatRooms state changes
        localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
    }, [chatRooms]);

    return (
        <div>
            <S.SideBarMenu>
                <S.SideBarButton
                    onClick={() => handleButtonClick("home", "/home")}
                    $isSelected={selected === "home"}
                >
                    <S.SideBarImage src={selected === "home" ? SelectHome : Home} />
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
                </S.SideBarButton>
                <S.SideAvatarImgWrap>
                    <S.SideAvatarImg src={AvatarImg} />
                </S.SideAvatarImgWrap>
            </S.SideBarMenu>
        </div>
    )
}

export default Navbar;