import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import Airtable from "airtable";
import ArtistsBio from "./ArtistsBio";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid, CardActionArea, CircularProgress, Paper } from "@mui/material";

export default function ArtWorksTable() {
  useEffect(() => {
    // get_artists_data();
    get_airtable_data();
  }, []);
  const [artists, set_artists] = useState([]);
  const [data, set_data] = useState([]);
  const [artists_modal, set_artists_modal] = useState(false);
  const [artists_data, set_artists_data] = useState([]);

  const get_airtable_data = () => {
    let base = new Airtable({ apiKey: "keyQUL5nHqE6mive3" }).base(
      "appOIqHFPZdryyOnf"
    );
    base("Archive (artworks)")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 100,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          console.log(records);
          set_data(records);

          records.forEach(function (record) {
            // console.log("Retrieved", record.fields);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  const show_artists_modal = (artists_data) => {
    set_artists_modal(!artists_modal);
    set_artists_data(artists_data);
  };

  const handle_modal_close = () => {
    set_artists_modal(false);
  };

  console.log(data);
  return (
    <div>
      <NavBar />

      {!artists_modal && (
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", mt: 3, justifyContent: "center" }}
        >
          {data ? (
            data.map((item, index) => (
              <Grid
                key={index}
                item
                component={Paper}
                elevation={0}
                sx={{ backgroundColor: "transparent" }}
              >
                <CardActionArea>
                  <img
                    onClick={() => show_artists_modal(item.fields)}
                    key={index}
                    src={`${item.fields["Attachments"][0].url}?w=350&fit=crop&auto=format`}
                    srcSet={`${item.fields["Attachments"][0].url}?w=350&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.fields.name}
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
                  title={item.fields["artwork title"]}
                  subtitle={item.fields["biodata (from source)"]}
                  position="below"
                  sx={{
                    textAlign: "left",
                    paddingLeft: "5px",
                    textOverflow: "ellipsis",
                    width: "300px",
                  }}
                />
              </Grid>
            ))
          ) : (
            <CircularProgress color="secondary" />
          )}
        </Grid>
      )}

      {/* <div>
      <NavBar />
      {!artists_modal && (
        <div style={{ marginTop: "40px" }}>
          <h4 className="text-center">Artists Data</h4>
          <div style={{ margin: "40px" }}>
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Nationality</th>
                  <th scope="col">YOB</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, index) => (
                  <tr
                    key={index}
                    onClick={() => show_artists_modal(val.fields)}
                  >
                    <td>{val.fields.Name}</td>
                    <td>{val.fields && val.fields.Nationality}</td>
                    <td>{val.fields.YOB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>          
        </div>
      )}

      </div> */}

      {artists_modal && (
        <ArtistsBio
          artists_modal={artists_modal}
          artists_data={artists_data}
          handle_modal_close={handle_modal_close}
        />
      )}
      {/* <ArtistsModal
        artists_modal={artists_modal}
        artists_images={artists_images}
      /> */}
    </div>
  );
}
