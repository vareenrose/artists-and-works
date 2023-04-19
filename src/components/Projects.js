import { useEffect, useState } from "react";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  Card,
  CardActions,
  Grid,
  CardActionArea,
  CircularProgress,
  Paper,
} from "@mui/material";
import NavBar from "./Navbar/NavBar";
import { ImageData } from "../helpers/ImageData";

export default function Projects() {
  const [public_images, set_public_images] = useState([]);
  useEffect(() => {
    fetch("https://cool-artists.herokuapp.com/api/get_public_entries", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        set_public_images(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", mt: 3, justifyContent: "center" }}
      >
        {ImageData ? (
          ImageData.map((item, index) => (
            <Grid
              item
              component={Paper}
              elevation={0}
              sx={{ backgroundColor: "transparent" }}
            >
              <CardActionArea>
                <img
                  key={index}
                  src={`${item.img}?w=350&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                  style={{
                    width: "20vw",
                    height: "25vh",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              </CardActionArea>
              <ImageListItemBar
                title={item.name}
                subtitle={item.description}
                position="below"
                sx={{ textAlign: "left", paddingLeft: "5px" }}
              />
            </Grid>
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </Grid>
    </div>
  );
}
