import React from "react";
import { createRoot } from "react-dom/client"
import Pet from './Pet.jsx';


const App = () => {
  return (
    <div>
      <Pet name="Kittu" animal="Dog" breed="Havenese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Doink" animal="Cat" breed="Mix"></Pet>
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App></App>);


/**
 *  props : { name, animal, breed }, value = 10 passing
 * 
 * {  props : { name, animal, breed }, value = 10 } Recieving
 *  { props : { name, animal, breed }, value = 10 }
 * 
 * name,animal,value
 * 
 * { name,animal,value }
 * { name, animal, breed }
*/


// // App Component
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Kittu",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };
// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(React.createElement(App));

