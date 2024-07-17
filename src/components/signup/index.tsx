import React, { useEffect } from 'react';
import * as S from '@/components/signup/index.style';
import hidePasswordimg from '@/assets/login/hide_fill.svg';
import showPasswordimg from '@/assets/login/show_fill.svg';
import Button from '@/components/button/login/index';
import TextField from '@/components/textfield/index';
import useSignup from '@/hooks/signup/useSignup';
import { useNavigate } from 'react-router-dom';

const EmailSignup = () => {
    const navigate = useNavigate();
    const { name, username, password, showPassword, errorMessage, handleNameChange, handleUsernameChange, handlePasswordChange, handleKeyDown, togglePasswordVisibility, handleSignup } = useSignup();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const Backclick = () => {
        navigate('/');
    };

    const handleSignupClick = async () => {
        await handleSignup(); 

        navigate('/login');
    };

    return (
        <S.EmailMain>
            <S.EmailFirstWrap>
                <S.Header>
                    <S.BackButton onClick={Backclick}></S.BackButton>
                    <S.Title1> 새 계정 만들기 </S.Title1>
                </S.Header>
                <S.TxtContainer>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이름 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value={name}
                                placeholder="이름을 입력해주세요"
                                onChange={handleNameChange}
                                style={{ border: 'none' }}
                                onKeyDown={handleKeyDown}
                            />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 사용자 이름 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value={username}
                                style={{ border: 'none' }}
                                placeholder="사용자 이름을 입력해주세요"
                                onChange={handleUsernameChange}
                                onKeyDown={handleKeyDown}
                            />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value={password}
                                style={{ border: 'none' }}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력해주세요"
                                onChange={handlePasswordChange}
                                onKeyDown={handleKeyDown}
                            />
                            <S.Btnview onClick={togglePasswordVisibility}>
                                {showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                    </S.EneterInfo>
                    {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
                </S.TxtContainer>
                <S.ButtonContainer>
                    <Button onClick={handleSignupClick} />
                    <S.EmailCheck>
                        <S.Haveemail href="http://localhost:5173/login">이미 계정이 있으신가요?</S.Haveemail>
                    </S.EmailCheck>
                </S.ButtonContainer>
            </S.EmailFirstWrap>
        </S.EmailMain>
    );
};

export default EmailSignup;