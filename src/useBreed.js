import { useEffect, useState } from "react";


export default function useAnimalBreed(animal) {
    const [animalBreed,setAnimalBreed] = useState([]);
    const [status,setStatus] = useState("Loading");

    useEffect(() => {
      fetchBreedFromAPI();
    }, [animal]);

    async function fetchBreedFromAPI() {
        setAnimalBreed([]);
        setStatus("LOADING")
        const result = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}`
        );
        const { pets } = await result.json();
        const filteredBreeds = pets.filter((pet) => {
            console.log(pet.animal, animal);
            return pet.animal === animal;
        });
        console.log(filteredBreeds)
        setAnimalBreed(filteredBreeds);
        setStatus("Loaded");
    }

    return [animalBreed,status]
}