import React from "react";


const Pet = (animalData) => {
  console.log(animalData)
  return (
    <div>
      <h1>{animalData.name}</h1>
      <h2>{animalData.animal}</h2>
      <h2>{animalData.breed}</h2>
    </div>
  )
}
// const Pet = (props) => {
//   console.log(props);
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };
// { name, animal, breed }
export default Pet;