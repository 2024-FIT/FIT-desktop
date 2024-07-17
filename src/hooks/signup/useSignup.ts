import { useState } from 'react';

const useSignup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async () => {
        try {
            // 예제 코드에서는 간단히 콘솔에 출력하도록 처리하였습니다.
            // 실제로는 여기에서 API를 호출하여 서버에 회원가입 정보를 전송해야 합니다.
            console.log('회원가입 처리:', name, username, password);
            // 여기에 실제 서버로 데이터를 전송하는 코드를 추가하세요.
            // 예: axios.post('/api/signup', { name, username, password });

            // 회원가입 성공 후 다음 페이지로 이동
            // navigate('/success'); // 예: 회원가입 성공 페이지로 이동
        } catch (error) {
            console.error('회원가입 오류:', error);
            setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSignup();
        }
    };

    return {
        name,
        username,
        password,
        showPassword,
        errorMessage,
        handleNameChange,
        handleUsernameChange,
        handlePasswordChange,
        togglePasswordVisibility,
        handleSignup,
        handleKeyDown,
    };
};

export default useSignup;