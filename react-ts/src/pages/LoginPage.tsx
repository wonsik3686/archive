import { useState } from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9.]+@[a-z0-9.-_]+\.[co]{2}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const lengthValid = password.length >= 8 && password.length <= 20;
    const contentValid =
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@~]/.test(password);
    return lengthValid && contentValid;
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('이메일 혹은 비밀번호가 입력되지 않았습니다.');
      return;
    }

    if (!validateEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    if (!validatePassword(password)) {
      if (password.length < 8 || password.length > 20) {
        alert('비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다.');
      } else {
        alert('비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.');
      }
      return;
    }

    alert('로그인 성공!');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>로그인</h1>
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
