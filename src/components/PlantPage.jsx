import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState ([])
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter(plant =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

function handleNewPlant(newPlant){
  setPlants([...plants,newPlant])
}
  function loadPlants(){
    fetch ("http://localhost:6001/plants")
    
    .then(response =>{
      if(!response.ok){
        throw new Error ("Oops can get plant") }
        else {
          return response.json()
        }
        })
      .then((data) =>setPlants(data))
      .catch(error =>{ console.error("A problem occured:", error)})
      
    }

    useEffect(() =>{
      loadPlants()
    
  },[])


  
  return (
    <main>
      <NewPlantForm onAddPlant = {handleNewPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}  />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
