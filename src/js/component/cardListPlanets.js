import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const CardListPlanets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.listPlanets();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-danger">Planets</h1>

      <div className="row flex-row flex-nowrap overflow-auto">
        {store.planets.map((item, index) => {
          let uid = index +1;
          return <Card key={index} title={item.name} 

          description1={"Population:"} result1={item.population}
            description2={"Terrain:"} result2={item.terrain} index={index+1} path={"planets"} img={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`} />;
        })}
      </div>
    </div>
  );
};
