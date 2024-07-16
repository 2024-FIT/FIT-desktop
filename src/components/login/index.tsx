import * as S from "@/components/login/index.style";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "@/components/constants/login/config.json";
import LoginButton from "@/components/button/login/index";
import TextField from "@/components/textfield/index";
import CustomAlert from "@/components/alert/index";
import fitImg from "@/assets/login/fitgreen.svg";
import showPasswordimg from "@/assets/login/show_fill.svg";
import hidePasswordimg from "@/assets/login/hide_fill.svg";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const importWorkspace = async () => {
    try {
      const token = window.localStorage.getItem("accessToken");
      const res = await axios.get(`${config.serverurl}/workspace/`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (res.data.data && res.data.data.length === 0) {
        navigate("/unhome");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setAlertMessage(".");
      setShowAlert(true);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${config.serverurl}/member/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status !== 200) return;

      const { accessToken, refreshToken } = res.data.data;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);

      importWorkspace();
    } catch (error) {
      setAlertMessage(
        "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다"
      );
      setShowAlert(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <S.LoginMain>
      <S.LoginFirstWrap>
        <S.Fheader>
          <S.Header>
            <S.SeugiImg data={fitImg} />
            <S.Title2>반가워요!</S.Title2>
          </S.Header>
        </S.Fheader>
        <S.Inputarea>
          <S.Inputpart>
            <S.Enterinfo>
              <S.Subtitle2>
                이메일 <S.Redstar>*</S.Redstar>
              </S.Subtitle2>
              <S.InputContainer>
                <TextField
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  onKeyDown={handleKeyDown}
                  style={{ border: "none" }}
                />
              </S.InputContainer>
            </S.Enterinfo>
            <S.Enterinfo>
              <S.Subtitle2>
                비밀번호 <S.Redstar>*</S.Redstar>
              </S.Subtitle2>
              <S.InputContainer>
                <TextField
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  onKeyDown={handleKeyDown}
                  style={{ border: "none" }}
                />
                <S.Btnview onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <img src={hidePasswordimg} alt="숨기기" />
                  ) : (
                    <img src={showPasswordimg} alt="보이기" />
                  )}
                </S.Btnview>
              </S.InputContainer>
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            {/* 로그인 버튼 영역은 제외 */}
            <S.Body1>
              계정이 없으시다면?{" "}
              <S.Gosignup href="http://localhost:5173/emailsignup">
                가입하기
              </S.Gosignup>{" "}
            </S.Body1>
          </S.Buttonpart>
        </S.Inputarea>
      </S.LoginFirstWrap>
      {showAlert && (
        <CustomAlert
          position=""
          titletext="로그인 에러"
          subtext={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
    </S.LoginMain>
  );
};

export default Login;