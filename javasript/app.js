/* ====================================================================
// INSTRUKSER:
Alle oppgavene er foreløpig kommentert ut med /* ... */  /*, så ingen vil gi error ved første kjøring.
Marker kun koden du vil teste (ikke hint-linjen med //).
Bruk hotkey (Shift + Alt + A) for å fjerne blokkommentar:
// KJØR KODEN: Bruk nettleser og trykk F12 og klikk Console (SE POWERPOINT slide 10 FOR MER DETALJER)
Hver oppgave har console.log("Oppgave X Resultat: ..."), slik at du ser hvilken oppgave som kjører.
Se på error i konsollen.
Rett koden til den kjører korrekt.
Når koden fungerer, konsollen skal vise teksten med "Oppgave X Resultat: ...".
Etter at oppgaven er ferdig, kan du kommentere den ut igjen med samme hotkey (Shift + Alt + A)
Dette gjør at du kan jobbe oppgave for oppgave uten å få mange feil samtidig.
Fjern kommentaren, kjør koden, rett feil, kommenter tilbake
Fortsett til alle 50 oppgavene er gjennomgått.
====================================================================*/



// 1 — Hint: Feil operator i variabeltildeling

/* let x =5
console.log("Oppgave 1 Resultat: " + x)
 */

// 2 — Hint: Feil anførselstegn

/* const nav = "Ola";
console.log("Oppgave 2 Resultat: " + nav)
 */

// 3 — Hint: Manglende parentes i if-setning
/* let x=5
if (x > 3 ){
  console.log("Hei")
}
console.log("Oppgave 3 Resultat: Ferdig")
 */

// 4 — Hint: Feilskrevet function

/* funtion test() {
  return 10
}
console.log("Oppgave 4 Resultat: " + test())
 */

// 5 — Hint: Ekstra komma i array
/*
let arr = [1,2,3,,4]
console.log("Oppgave 5 Resultat: " + arr)
*/

// 6 — Hint: Manglende parentes
/*
console.log("Tekst"
console.log("Oppgave 6 Resultat: test")
*/

// 7 — Hint: Feil i for-løkke
/*
for let i = 0; i < 5; i++) {
  console.log(i)
}
console.log("Oppgave 7 Resultat: ferdig")
*/

// 8 — Hint: Manglende kolon i objekt
/*
const obj = {navn: "Per", alder 30}
console.log("Oppgave 8 Resultat: " + obj)
*/

// 9 — Hint: Ufullstendig uttrykk
/*
let a = 5
let b = 3
console.log(a + )
console.log("Oppgave 9 Resultat: test")
*/

// 10 — Hint: Manglende parentes
/*
while (true {
  break
}
console.log("Oppgave 10 Resultat: ferdig")
*/

// 11 — Hint: Mangler komma mellom parametre
/*
function f(x y) {
  return x + y
}
console.log("Oppgave 11 Resultat: test")
*/

// 12 — Hint: Feil i template string
/*
let tekst = `Dette er en test;
console.log("Oppgave 12 Resultat: " + tekst)
*/

// 13 — Hint: Manglende anførselstegn
/*
try {
  throw "Feil
} catch(e) {
  console.log(e)
}
console.log("Oppgave 13 Resultat: ferdig")
*/

// 14 — Hint: Manglende komma i array
/*
const liste = [1 2 3 4]
console.log("Oppgave 14 Resultat: " + liste)
*/

// 15 — Hint: Feil i addEventListener
/*
document.querySelector("#id").addEventListener("click" () => {
  console.log("Klikk")
})
console.log("Oppgave 15 Resultat: test")
*/

// 16 — Hint: Feil arrow-function
/*
let sum = (a, b => a + b)
console.log("Oppgave 16 Resultat: " + sum)
*/

// 17 — Hint: Manglende blokker
/*
if (false)
  console.log("Hei")
  console.log("Der")
console.log("Oppgave 17 Resultat: ferdig")
*/

// 18 — Hint: const uten verdi
/*
const x
x = 10
console.log("Oppgave 18 Resultat: " + x)
*/

// 19 — Hint: Manglende anførselstegn
/*
import fs from "fs
console.log("Oppgave 19 Resultat: ferdig")
*/

// 20 — Hint: Objektfelt feil
/*
let obj = {
  navn: "Lise",
  alder: 25,
}
console.log(obj.)
console.log("Oppgave 20 Resultat: test")
*/

// 21 — Hint: return utenfor funksjon
/*
return 5 + 5
console.log("Oppgave 21 Resultat: ferdig")
*/

// 22 — Hint: Parentes-feil
/*
(function() {
console.log("Test"))
console.log("Oppgave 22 Resultat: ferdig")
*/

// 23 — Hint: Mangler parentes ved new
/*
class Person {
  constructor(nav) {
    this.navn = nav
  }
}
const p = new Person
console.log("Oppgave 23 Resultat: " + p)
*/

// 24 — Hint: Feil array-indeks
/*
const x = [1,2,3]
console.log(x(0))
console.log("Oppgave 24 Resultat: ferdig")
*/

// 25 — Hint: Mangler operator
/*
let a = 10
let b = 20
console.log(a b)
console.log("Oppgave 25 Resultat: test")
*/

// 26 — Hint: Mangler komma
/*
let obj = {navn: "Test" alder: 22}
console.log("Oppgave 26 Resultat: " + obj)
*/

// 27 — Hint: Manglende kolon
/*
switch(x) {
  case 1:
    console.log("En")
  break
  case 2
    console.log("To")
  break;
}
console.log("Oppgave 27 Resultat: ferdig")
*/

// 28 — Hint: Ugyldig JSON
/*
JSON.parse("{navn:'Ola'}")
console.log("Oppgave 28 Resultat: test")
*/

// 29 — Hint: Feil parentes
/*
function test) {
  console.log("Hei")
}
console.log("Oppgave 29 Resultat: test")
*/

// 30 — Hint: Ekstra parentes
/*
let x = 0
x++
console.log(x))
console.log("Oppgave 30 Resultat: ferdig")
*/

// 31 — Hint: Feil i for-løkka
/*
for (i = 0; i < 3; i+ {
  console.log(i)
}
console.log("Oppgave 31 Resultat: test")
*/

// 32 — Hint: If uten parentes
/*
if data === "Hei" {
  console.log("Ok")
}
console.log("Oppgave 32 Resultat: ferdig")
*/

// 33 — Hint: Mangler =>
/*
new Promise((resolve, reject) {
  resolve("Hei")
})
console.log("Oppgave 33 Resultat: test")
*/

// 34 — Hint: push uten ()
/*
arr.push
console.log("Oppgave 34 Resultat: " + arr)
*/

// 35 — Hint: Ikke et tall
/*
Number("12a3")
console.log("Oppgave 35 Resultat: ferdig")
*/

// 36 — Hint: Manglende verdi
/*
let x = 5
let y =
console.log(x+y)
console.log("Oppgave 36 Resultat: test")
*/

// 37 — Hint: Ekstra komma
/*
Math.max(1,2,3,)
console.log("Oppgave 37 Resultat: ferdig")
*/

// 38 — Hint: Objekt uten {}
/*
const person =(
  navn: "Ole",
  alder: 12
)
console.log("Oppgave 38 Resultat: test")
*/

// 39 — Hint: Feil arrow syntax
/*
const fn = => console.log("Hei")
fn()
console.log("Oppgave 39 Resultat: ferdig")
*/

// 40 — Hint: Manglende )
/*
let set = new Set([1,2,2,3)
console.log("Oppgave 40 Resultat: " + set)
*/

// 41 — Hint: console.log uten ()
/*
console.log "Hei"
console.log("Oppgave 41 Resultat: test")
*/

// 42 — Hint: Feil parentes i funksjon
/*
function sum(a, b, c {
  return a + b + c
}
console.log("Oppgave 42 Resultat: test")
*/

// 43 — Hint: Feil spread
/*
const arr = [...1,2,3]
console.log("Oppgave 43 Resultat: " + arr)
*/

// 44 — Hint: Mangler komma
/*
let data = {
  navn: "Per"
  alder: 20,
}
console.log("Oppgave 44 Resultat: test")
*/

// 45 — Hint: Map.set trenger 2 arguments
/*
let m = new Map
m.set("key")
console.log("Oppgave 45 Resultat: " + m)
*/

// 46 — Hint: tall har ikke toUpperCase
/*
const x = 5;
console.log(x.toUpperCase())
console.log("Oppgave 46 Resultat: test")
*/

// 47 — Hint: undefined error
/*
let obj = {}
console.log(obj.navn.fornavn)
console.log("Oppgave 47 Resultat: ferdig")
*/

// 48 — Hint: Arrow function returnerer ikke
/*
arr.map(n => {n * 2})
console.log("Oppgave 48 Resultat: test")
*/

// 49 — Hint: Feil datoformat
/*
let dato = new Date(2025-12-01)
console.log("Oppgave 49 Resultat: " + dato)
*/

// 50 — Hint: Bruker = i if
/*
const x = 10
if (x = 10) {
  console.log("OK")
}
console.log("Oppgave 50 Resultat: ferdig")
*/