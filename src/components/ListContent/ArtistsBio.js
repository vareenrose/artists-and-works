import React from "react";
import {
  Card,
  CardActions,
  Grid,
  CardActionArea,
  CircularProgress,
  Paper,
} from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ImageData } from "../../helpers/ImageData";
import "./ArtistsBio";

export default function ArtistsBio(props) {
  console.log(props);
  return (
    <div>
      <div
        style={{ marginLeft: "100px", marginTop: "30px" }}
        className="artists-bio-container"
      >
        <div className="row" onClick={props.handle_modal_close}>
          <h2>{props.artists_data.Name}</h2>
          <div className="col">
            <h4>{props.artists_data.Biography}</h4>
          </div>
          <div className="col">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        OVERVIEW
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        WORKS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        BIOGRAPHY
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        EXHIBITIONS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        MEDIA
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        PROVENANCE
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        EXPERIENCES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        ARTWORKS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Grid
              container
              spacing={2}
              sx={{ width: "100%", mt: 3, justifyContent: "center" }}
            >
              {props.artists_data["artist image"] ? (
                props.artists_data["artist image"].map((item, index) => (
                  <Grid
                    item
                    component={Paper}
                    elevation={0}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <CardActionArea>
                      <img
                        key={index}
                        src={`${item.url}?w=350&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=350&fit=crop&auto=format&dpr=2 2x`}
                        alt={"artists images"}
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
                      title={item.filename}
                      subtitle={item.filename}
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
        </div>
      </div>
    </div>
  );
}
