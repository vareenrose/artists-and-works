import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
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

export default function Carousel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">      
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
                  width: "20vw",
                  height: "25vh",
                  borderRadius: "20px",
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
      

      {/*     
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
}
