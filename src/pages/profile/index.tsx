import React, { useState } from 'react';
import * as S from '@/pages/profile/index.style';
import Side from "@/components/navbar/index";
import arrow from "@/assets/arrow.svg";
import underarrow from "@/assets/profile/underarrow.svg";

const Index = () => {
    const [tall, setTall] = useState(170);
    const [weight, setWeight] = useState(120.0);
    const [activity, setActivity] = useState(0.2);
    const [age, setAge] = useState(6);
    const [gender, setGender] = useState(1);
    const [isEditing, setIsEditing] = useState(false);

    const genderload = (num: number) => {
        return num === 1 ? "남" : "여";
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            background: "#F6FFF7",
        }}>
            <Side />
            <S.mainbox>
                <S.leftbox>
                    <S.back src={arrow} />
                    <S.title>
                        <S.name>김민규</S.name><S.nameText>님의 건강상태</S.nameText>
                    </S.title>
                    <S.character />
                    <S.BMIbar />
                    <S.underarrow src={underarrow} />
                </S.leftbox>
                <S.rightbox>
                    <S.valuebox>
                        <S.valuename>키</S.valuename>
                        {isEditing ? (
                            <S.input
                                type="number"
                                value={tall}
                                onChange={(e:any) => setTall(Number(e.target.value))}
                            />
                        ) : (
                            <S.value>{tall} cm</S.value>
                        )}
                        <S.valuename>몸무게</S.valuename>
                        {isEditing ? (
                            <S.input
                                type="number"
                                step="0.1"
                                value={weight}
                                onChange={(e:any) => setWeight(Number(e.target.value))}
                            />
                        ) : (
                            <S.value>{weight.toFixed(1)} kg</S.value>
                        )}
                        <S.valuename>활동 지수</S.valuename>
                        {isEditing ? (
                            <S.input
                                type="number"
                                value={activity}
                                onChange={(e:any) => setActivity(Number(e.target.value))}
                                min={0}
                                max={1}
                                step={0.1}
                            />
                        ) : (
                            <S.value>{activity}</S.value>
                        )}
                        <S.valuename>나이</S.valuename>
                        {isEditing ? (
                            <S.input
                                type="number"
                                value={age}
                                onChange={(e:any) => setAge(Number(e.target.value))}
                            />
                        ) : (
                            <S.value>만 {age}세</S.value>
                        )}
                        <S.valuename>성별</S.valuename>
                        {isEditing ? (
                            <S.select value={gender} onChange={(e:any) => setGender(Number(e.target.value))}>
                                <option value={1}>남</option>
                                <option value={2}>여</option>
                            </S.select>
                        ) : (
                            <S.value>{genderload(gender)}</S.value>
                        )}
                        <S.valuename>BMI지수</S.valuename>
                        <S.value>{(weight / ((tall / 100) ** 2)).toFixed(1)}</S.value>
                    </S.valuebox>
                    <S.editbutton onClick={handleEditClick}>
                        {isEditing ? '수정 완료' : '정보 수정 하기'}
                    </S.editbutton>
                </S.rightbox>
            </S.mainbox>
        </div>
    );
};

export default Index;
