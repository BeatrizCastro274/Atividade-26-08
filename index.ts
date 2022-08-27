// Import stylesheets
import './style.css';
import { Person } from './Person.ts';

let title: string = 'Aula 26/08';
let paragraph: string = 'Blablabla...';

let fullName = new Person();

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com TypeScript');
}

declare function create(o: object | null): any;
create({ firstName: 'Beatriz', middleName: 'Castro ', lastName: 'de Araujo' });

const appDivObject: HTMLElement = document.getElementById('app-Obj');
appDivObject.innerHTML = `
<h1>Object</h1>
`;

// Write TypeScript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;
const appP: HTMLElement = document.getElementById('app.p');
appP.innerHTML = fullName.getfullName();
