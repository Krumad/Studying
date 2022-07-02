/*24. З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.  */ let usersPass;
let rightPass = 78;
while (usersPass !== 78) {
  usersPass = +prompt(`Enter password`);
}
document.write(`Access granted`);
