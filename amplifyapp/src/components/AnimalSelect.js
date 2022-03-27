import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../App.css";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

const ANIMALS = ["cats", "dogs", "elephants", "lions", "monkeys"];

const AnimalSelect = () => {
  const [animal, setAnimal] = useState("");
  const [gifs, setGifs] = useState([]);

  const gf = new GiphyFetch(process.env.REACT_APP_API_KEY);
  const fetchGifs = (offset) =>
    gf.search(animal, {
      sort: "relevant",
      lang: "en",
      limit: 10,
      rating: "y",
      type: "gifs",
      offset: Math.floor(Math.random() * 1000) + 10,
    });

  const handleChange = (event) => {
    setAnimal(event.target.value);
  };

  useEffect(() => {
    fetchGifs(animal).then((response) => {
      let gifsTemp = [];
      response.data.map((gifData) => {
        gifsTemp = [...gifsTemp, gifData.images.downsized_medium.url];
      });
      setGifs(gifsTemp);
    });
  }, [animal]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Animal</InputLabel>
        <Select value={animal} label="Animal" onChange={handleChange}>
          {ANIMALS.map((animal) => (
            <MenuItem key={animal} value={animal}>
              {animal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {gifs?.map((gif) => (
        <img src={gif} />
      ))}
    </Box>
  );
};

export default AnimalSelect;
