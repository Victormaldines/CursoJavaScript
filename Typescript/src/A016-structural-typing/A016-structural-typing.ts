// STRUCTURAL TYPING (sistema de tipos que o TypeScript utiliza)
// "A identidade do tipo não importa muito, mas sim, as restrições que estão naquele tipo"

type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'katana', password: '0123' };
const sentUser = { username: 'katana', password: '0123', permissions: '' };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn); // true

/*
Conclusão, o TypeScript compara a estrutura dos dados (ex. objetos), podendo ser iguais (x.valorZ === y.valorZ // true) independente da sua identidade.
(por exemplo, nas linhas 14/15)

<identidade> = <estrutura>
const x = { a: '3' }
const y = { a: '3' }
x.a === y.a //   true

Ou seja, chega <a> com <a>
e não <x.a> com <y.a>
*/

export default true;
