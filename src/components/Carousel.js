import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ImageData } from "../helpers/ImageData";
import {
  Card,
  CardActions,
  Grid,
  CardActionArea,
  CircularProgress,
  Paper,
} from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Projects from "./Projects";

export default function Carousel() {
  return (
    <div>
    <Swiper
      navigation={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper"
    >
      {ImageData.map((item, index) => (
        <SwiperSlide>
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
                alt={item.title}
                loading="lazy"
                style={{
                  width: "45vw",
                  height: "40vh",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </CardActionArea>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              position="below"
              sx={{ textAlign: "left", paddingLeft: "5px" }}
            />
          </Grid>
        </SwiperSlide>
      ))}    
    
    </Swiper>
      <Projects/>
    </div>
    
  );
}
