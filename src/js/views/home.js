import React from "react";


import "../../styles/home.css";

import { CardListCharacters } from "../component/cardListCharacters";
import { CardListPlanets } from "../component/cardListPlanets";

export const Home = () => (
	<div className="container-fluid ">

	<CardListCharacters  />
	<CardListPlanets/>
	
	</div>
);
