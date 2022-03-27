import * as React from "react";
import "./App.css";
import AnimalSelect from "./components/AnimalSelect";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="h2">
        Patients' Kids Waiting Area
      </Typography>
      <Typography variant="subtitle1" component="h2">
        Pick an animal from the list to get some random gifs of that animal!
      </Typography>
      <AnimalSelect />
    </Container>
  );
}

export default App;
