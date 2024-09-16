/*1*/
let ans;
ans = prompt("Введите ваше имя:");
alert("Привет, " + ans + "!");

/*2*/
let x;
x = Number(prompt("Введите ваш год рождения"));
const y = 2024;
let s = y - x;
alert("Вам " + s + " лет.");

/*3*/
let a;
a = Number(prompt("Введите длину стороны вашего квардрата:"));
P = a * 4;
alert("Периметр вашего квадрата - " + P);

/*4*/
let R;
R = Number(prompt("Введите радиус окружности"));
const l = 3.14;
S = l * R**2;
alert("Радиус окружности - " + S);

/*5*/
let km = Number(prompt("Укажите расстояние в км между двумя городами:"));
let t = Number(prompt("За сколько часов вы хотите добраться из одного города в другой?"));
let v = km / t;
alert("Вам необходимо двигаться со скоростью " + v + " км/ч");

/*6*/
const E = 1.11;
let D = Number(prompt("Введите количество Долларов:"));
alert("Это будет " + D * E + " Евро.");

/*7*/
let j = Number(prompt("Введите объём флешки в Гб: "));
let size = j * 1024;
times = size / 820;
alert("На флешку поместятся " + Math.trunc(times) + " файлов размером в 820 Мб.") 

/*8*/
let sum = Number(prompt("Введите сумму денег в вашем кошельке:"));
let price = Number(prompt("Введите цену одной шоколадки"));
total = sum / price;
change = sum - (Math.trunc(total) * price);
alert("Вы сможете купить " + Math.trunc(total) + " шоколадок и у вас останется " + change + " рублей сдачи");

/*9*/
/*Это задание разрешили не делать =)*/

/*10*/
let g = Number(prompt("Введите целое число:"));
parity = (g % 2 == 0) ? alert("Ваше число чётное") : alert("Ваше число нечётное");


