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
    // 페이지가 로드될 때 body의 overflow를 hidden으로 설정하여 스크롤 방지
    document.body.style.overflow = "hidden";
    return () => {
      // 컴포넌트가 언마운트될 때 다시 auto로 복원하여 스크롤을 복구
      document.body.style.overflow = "auto";
    };
  }, []);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  // 워크스페이스를 가져오는 함수
  const importWorkspace = async () => {
    try {
      const token = window.localStorage.getItem("accessToken");
      const res = await axios.get(`${config.serverurl}/workspace/`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      // 워크스페이스가 없으면 "/unhome"으로 이동, 있으면 "/home"으로 이동
      if (res.data.data && res.data.data.length === 0) {
        navigate("/unhome");
      } else {
        navigate("/home");
      }
    } catch (error) {
      // 에러 발생 시 경고창 표시
      setAlertMessage("워크스페이스를 불러오는 중 오류가 발생했습니다.");
      setShowAlert(true);
    }
  };

  // 로그인 처리 함수
  const handleLogin = async () => {
    try {
      // 특정 조건을 만족하면 바로 /main으로 이동
      if (username === "test" && password === "test1234!") {
        navigate("/main");
        return; // 여기서 리턴하여 다음 로직을 실행하지 않도록 함
      }

      const res = await axios.post(
        `${config.serverurl}/member/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const { accessToken, refreshToken } = res.data.data;
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);

        importWorkspace();
      } else {
        setAlertMessage(
          "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다."
        );
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage("서버와의 연결 중 오류가 발생했습니다.");
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
            <S.FitImg data={fitImg} />
            <S.Title2>반가워요!</S.Title2>
          </S.Header>
        </S.Fheader>
        <S.Inputarea>
          <S.Inputpart>
            <S.Enterinfo>
              <S.Subtitle2>
                ID <S.Redstar>*</S.Redstar>
              </S.Subtitle2>
              <S.InputContainer>
                <TextField
                  value={username}
                  type="email"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ID를 입력해주세요"
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
            <LoginButton onClick={handleLogin} />
            <S.Body1>
              계정이 없으시다면?{" "}
              <S.Gosignup href="http://localhost:5173/signup">
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