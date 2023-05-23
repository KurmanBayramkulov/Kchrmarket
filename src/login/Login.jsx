import React from 'react';
import logo from '../img/logo.svg';


const Login = () => {
    return (
<div className="wrapper">
    <img src={logo} alt="KCHRMARKET"/>
    <h1>KCHRMARKET.RU</h1>
    <form action="login.php" method="post">
      <label for="username">
        <h3>Логин</h3>
      </label>
      <input className="login" type="text" name="username" id="username" />
      <label for="password">
        <h3>Пароль</h3>
      </label>
      <input
        className="login"
        type="password"
        name="password"
        id="password"
      />
      <p className="recover">
        <input type="checkbox" />
        <label className="remember" for="">
          Запомнить
        </label>
        <a className="a_login" href="">
          Забыли пароль?
        </a>
      </p>
    </form>
    <button class="btn">Войти</button>
    <div class="footer">
      <a href="">
        <strong>kchrmarket.ru</strong>
      </a>
      <p>© 2021 All Rights Reserved</p>
      <p> Made with ♥ by kchrmarket</p>
    </div>
  </div>
    )
}

export default Login;