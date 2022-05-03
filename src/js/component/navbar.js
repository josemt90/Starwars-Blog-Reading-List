import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const style = {
		width: "100px",

	  };

	  
	
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-5">
      <Link to="/">
        <img style={style} src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"></img>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
			
            aria-expanded="false"
          >
            Favorites {store.favList.length}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

		  {store.favList.map((item, index) => {
          return (<li className="dropdown-item" key={index}>{item} <FontAwesomeIcon onClick={()=>{actions.deleteFavorites(index)}} icon={faTrash} /></li>)

        })}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
