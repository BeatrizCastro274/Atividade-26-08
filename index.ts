// Import stylesheets
import './style.css';
import { Person } from './Person.ts';

let title: string = 'Aula 26/08';
let paragraph: string = 'Blablabla...';

let counter = 0;

let greeter = new Person('Impiedoso');

let IntervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p.counter');
  appP.innerHTML = 'Contador:' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com TypeScript');
}

// Write TypeScript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;
const appP: HTMLElement = document.getElementById('app.p');
appP.innerHTML = greeter.getGreeting();
