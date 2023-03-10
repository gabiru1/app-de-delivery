import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Label, MainDiv, P, ButtonCreateAcount } from './styledLogin';
import { requestLogin } from '../../services/request';
import Logo from '../../logo.png';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    navigate('/register');
  };

  const userNavigation = useCallback((role) => {
    switch (role) {
    case 'customer':
      navigate('/customer/products');
      break;
    case 'seller':
      navigate('/seller/orders');
      break;
    case 'administrator':
      navigate('/admin/manage');
      break;
    default:
      navigate('/');
    }
  }, [navigate]);

  const login = async () => {
    try {
      const user = await requestLogin('/login', { email, password });
      console.log(user);
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
        userNavigation(user.role);
      }
    } catch (error) {
      setFailedLogin(true);
    }
  };

  const isValidEmail = email.match(/\S+@\S+\.\S+/);
  const minLength = 6;

  useEffect(() => {
    const { user } = localStorage;

    if (user) {
      const { role } = JSON.parse(user);
      userNavigation(role);
    }
  }, [userNavigation]);

  return (
    <MainDiv>
      <Container>
        <img src={ Logo } alt="logo" />
        <div>
          <Label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
              data-testid="common_login__input-email"
            />
          </Label>
        </div>
        <div>
          <Label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
              data-testid="common_login__input-password"
            />
          </Label>
        </div>
        <P
          loginIsFailed={ failedLogin }
          data-testid="common_login__element-invalid-email"
        >
          E-mail ou senha est??o incorretos
        </P>

        <Button
          type="button"
          className="btnLogin"
          data-testid="common_login__button-login"
          onClick={ login }
          disabled={ !(password.length >= minLength && isValidEmail) }
        >
          Entrar
        </Button>
        <ButtonCreateAcount
          type="button"
          className="btnLogin"
          data-testid="common_login__button-register"
          onClick={ register }
        >
          Ainda n??o tenho conta
        </ButtonCreateAcount>
      </Container>
    </MainDiv>
  );
}

export default LoginForm;
