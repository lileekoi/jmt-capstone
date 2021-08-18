import React, { useState, useEffect, Fragment, useContext } from 'react';
import firebase from './firebase';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from "./RecipeList";

const Home = () => {
  // const [recipes, setRecipes] = useState([
  //   { name: 'Ube Cake with Matcha Buttercream', course: 'dessert', total: 'Total Time: 3 hours', id: 1 },
  //   { name: 'Ube Halaya/Jam', course: 'dessert', total: 'Total Time: 45 minutes', id: 2 },
  //   { name: 'Kimchi Stew', course: 'main', total: 'Total Time: 1 hour', id: 3 },
  //   { name: 'Easy & Lazy Korean Fried Chicken', course: 'main', total: 'Total Time: 30 minutes', id: 4 },
  //   { name: 'Binging with Babish Palestinian Chicken', course: 'main', total: 'Total Time: 1 day', id: 5 }
  // ])

  // useEffect(() => {
  //   console.log('use effect ran');
  // }, [])
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [total, setTotal] = useState("");

  const ref = firebase.firestore().collection('recipes');

  //REALTIME GET FUNCTION
  function getRecipes() {
    setLoading(true);
    ref
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setRecipes(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <RecipeList recipes={recipes} name="Recipe Collection" />

    </div>
  );
}

export default Home;