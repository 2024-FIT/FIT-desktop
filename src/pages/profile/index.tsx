import React, { useState, useEffect } from 'react';
import * as S from '@/pages/profile/index.style';
import Side from "@/components/navbar/index";
import arrow from "@/assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import Bmibar from "@/components/bmibar/index";
import level2 from "@/assets/profile/level2.png";
import level1 from "@/assets/profile/level1.png";
import normal from "@/assets/profile/normal.png";
import low from "@/assets/profile/low.png";

const Index: React.FC = () => {
    const [tall, setTall] = useState<number>(170);
    const [weight, setWeight] = useState<number>(120.0);
    const [activity, setActivity] = useState<number>(0.2);
    const [age, setAge] = useState<number>(6);
    const [gender, setGender] = useState<number>(1);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [characterImage, setCharacterImage] = useState<string>(normal);

    const genderload = (num: number) => {
        return num === 1 ? "남" : "여";
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const navigate = useNavigate();
    const reback = () => {
        navigate("/main");
    }

    const bmi = Number((weight / ((tall / 100) ** 2)).toFixed(1));

    useEffect(() => {
        const getCharacterImage = (): string => {
            if (bmi >= 30) {
                return level2;
            } else if (bmi >= 25) {
                return level1;
            } else if (bmi >= 18.5) {
                return normal;
            } else {
                return low;
            }
        }
        setCharacterImage(getCharacterImage());
    }, [bmi]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            background: "#F6FFF7",
        }}>
            <Side />
            <S.MainBox>
                <S.LeftBox>
                    <S.Back src={arrow} onClick={reback} />
                    <S.Title>
                        <S.Name>김민규</S.Name><S.NameText>님의 건강상태</S.NameText>
                    </S.Title>
                    <S.Character style={{ backgroundImage: `url(${characterImage})` }} />
                    <Bmibar bmi={bmi} />
                </S.LeftBox>
                <S.RightBox>
                    <S.ValueBox>
                        <S.ValueName>키</S.ValueName>
                        {isEditing ? (
                            <S.Input
                                type="number"
                                value={tall}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTall(Number(e.target.value))}
                            />
                        ) : (
                            <S.Value>{tall} cm</S.Value>
                        )}
                        <S.ValueName>몸무게</S.ValueName>
                        {isEditing ? (
                            <S.Input
                                type="number"
                                step="1"
                                value={weight}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))}
                            />
                        ) : (
                            <S.Value>{weight.toFixed(1)} kg</S.Value>
                        )}
                        <S.ValueName>활동 지수</S.ValueName>
                        {isEditing ? (
                            <S.Input
                                type="number"
                                value={activity}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActivity(Number(e.target.value))}
                                min={0}
                                max={1}
                                step={0.1}
                            />
                        ) : (
                            <S.Value>{activity}</S.Value>
                        )}
                        <S.ValueName>나이</S.ValueName>
                        {isEditing ? (
                            <S.Input
                                type="number"
                                value={age}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                            />
                        ) : (
                            <S.Value>만 {age}세</S.Value>
                        )}
                        <S.ValueName>성별</S.ValueName>
                        {isEditing ? (
                            <S.Select value={gender} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGender(Number(e.target.value))}>
                                <option value={1}>남</option>
                                <option value={2}>여</option>
                            </S.Select>
                        ) : (
                            <S.Value>{genderload(gender)}</S.Value>
                        )}
                        <S.ValueName>BMI지수</S.ValueName>
                        <S.Value>{bmi.toFixed(1)}</S.Value>
                    </S.ValueBox>
                    <S.EditButton onClick={handleEditClick}>
                        {isEditing ? '수정 완료' : '정보 수정 하기'}
                    </S.EditButton>
                </S.RightBox>
            </S.MainBox>
        </div>
    );
};

export default Index;
