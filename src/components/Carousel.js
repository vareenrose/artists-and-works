import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid, CardActionArea, Paper } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import NavBar from "./Navbar/NavBar";

export default function Carousel() {
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
        {public_images.map((item, index) => (
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
                  src={`${item.slug}?w=450&fit=crop&auto=format`}
                  srcSet={`${item.slug}?w=350&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "90vw",
                    height: "80vh",
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
    </div>
  );
}
