import React, { useState } from "react";
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
  const [image_data, set_image_data] = useState({});
  const [show_details, set_show_details] = useState(false);
  const handle_image_click = (data) => {
    console.log("Image clicked");
    set_image_data(data);
    set_show_details(true);
  };
  const handle_details_close = () => {
    console.log("close clicked");
    set_show_details(false);
  };

  return (
    <div>
      {!show_details && (
        <div
          style={{ marginLeft: "100px", marginTop: "50px" }}
          className="artists-bio-container"
        >
          <div className="row">
            <div className="col" style={{ marginTop: "20px" }}>
              <h2 onClick={props.handle_modal_close}>
                {props.artists_data.Name}
              </h2>
              <div>
                <h4>{props.artists_data.Biography}</h4>
              </div>
            </div>

            <div className="col">
              <div style={{ marginRight: "60px" }}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light float-end ">
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
                    <div class="collapse navbar-collapse " id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="/list-artists"
                          >
                            OVERVIEW
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/list-media">
                            MEDIA
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/list-art-works">
                            ARTWORKS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
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
                          onClick={() => handle_image_click(item)}
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
      )}
      {show_details && (
        <div style={{ margin: "20px" }} onClick={handle_details_close}>
          <div className="row">
            <div className="col">
              Image Details(Needs to be centered and needs a back button)
              <br />
              {image_data.filename}
            </div>
            <div className="col">
              <Grid
                item
                component={Paper}
                elevation={0}
                sx={{ backgroundColor: "transparent" }}
              >
                <CardActionArea>
                  <img
                    src={`${image_data.url}?w=600&fit=crop&auto=format`}
                    srcSet={`${image_data.url}?w=600&fit=crop&auto=format&dpr=1 1x`}
                    alt={"artists images"}
                    loading="lazy"
                    style={{
                      width: "50vw",
                      height: "40vh",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </CardActionArea>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
