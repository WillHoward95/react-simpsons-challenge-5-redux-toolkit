import React, { useEffect, useState } from "react";
import axios from "axios";
import Inputs from "./components/Inputs";
import Simpsons from "./components/Simpsons";
import "./App.css";
import {
  setSimpsons,
  selectSimpsons,
  setSearch,
  selectSearch,
  setSort,
  selectSort,
} from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const simpsons = useSelector(selectSimpsons);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );

      data.forEach((element, index) => {
        element.id = index + Math.random();
      });

      dispatch(setSimpsons(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const onSort = (e) => {
    dispatch(setSort(e.target.value));
  };

  const getFilteredList = () => {
    let filteredList = [...simpsons];

    if (search) {
      filteredList = simpsons.filter((item) => {
        console.log(item.quote, item.character, search);
        if (
          item.quote.toLowerCase().includes(search.toLowerCase()) ||
          item.character.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
      });
    }

    if (sort) {
      filteredList = filteredList.sort((itemOne, itemTwo) => {
        if (sort === "asc") {
          if (itemOne.character < itemTwo.character) {
            return -1;
          }
          if (itemOne.character > itemTwo.character) {
            return 1;
          }
        } else if (sort === "desc") {
          if (itemOne.character < itemTwo.character) {
            return 1;
          }
          if (itemOne.character > itemTwo.character) {
            return -1;
          }
        } else {
          return;
        }
      });
    }

    return filteredList;
  };

  if (!simpsons) {
    return <h1>Loading...</h1>;
  }

  let total = 0;
  simpsons.forEach((char) => {
    if (char.liked) total++;
  });

  return (
    <>
      <h1>Total no of liked chars #{total}</h1>
      <Inputs simpsons={simpsons} onSearch={onSearch} onSort={onSort} />

      <Simpsons simpsons={getFilteredList()} />
    </>
  );
};

export default App;
