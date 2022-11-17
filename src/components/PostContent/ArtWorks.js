import React from "react";
import { useState } from "react";
import { Button, Alert, FormLabel } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Select from "react-select";

export default function ArtWorks(props) {
  const [artists_form, set_post_form] = useState({
    artist_name: "",
    title: "",
    medium: "",
    series: "",
    production_year: "",
    dimensions: "",
    description: "",
    source_link: "",
    sourced_by: "",
  });
  const [sel_artist, set_sel_artist] = useState("");

  const [first_user_file, first_set_user_file] = useState("");
  const [second_user_file, second_set_user_file] = useState("");
  const [alert_upload_success, set_alert_upload_success] = useState(false);
  const handle_artist_select = (e) => {
    set_sel_artist(e.value);
  };

  const handle_form_change = (e) => {
    const { name, value } = e.target;
    set_post_form((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const artist_options = props.artists.map((val) => ({
    label: val.name,
    value: val.id,
  }));

  const handleFilechange = (e) => {
    first_set_user_file(e.target.files[0]);
  };

  const handleSecondFilechange = (e) => {
    second_set_user_file(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("artists_id", sel_artist);
    form_data.append("title", artists_form.title);
    form_data.append("medium", artists_form.medium);
    form_data.append("series", artists_form.series);
    form_data.append("production_year", artists_form.production_year);
    form_data.append("dimensions", artists_form.dimensions);
    form_data.append("description", artists_form.description);
    form_data.append("source_link", artists_form.source_link);
    form_data.append("sourced_by", artists_form.sourced_by);
    form_data.append("2d_photo_url", first_user_file);
    form_data.append("3d_photo_url", second_user_file);

    fetch("https://cool-artists.herokuapp.com/api/create_art_works", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

      body: form_data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          set_alert_upload_success(true);
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Artists Form</h3>
      <hr />
      {alert_upload_success && (
        <Alert severity="success">File Uploaded successfuly</Alert>
      )}

      <Select
        options={artist_options}
        placeholder={"Select an artist"}
        className="mb-3"
        onChange={handle_artist_select}
      />

      <div>
        <FormLabel>
          <b>Title</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="title"
          value={artists_form.title}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Medium</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="medium"
          value={artists_form.medium}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Series</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="series"
          value={artists_form.series}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Production Year</b>{" "}
        </FormLabel>
        <input
          type="number"
          name="production_year"
          value={artists_form.production_year}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Dimensions</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="dimensions"
          value={artists_form.dimensions}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <Button
        variant="contained"
        component="label"
        startIcon={<AddPhotoAlternateIcon />}
      >
        2d Photo
        <input type="file" name="2d_photo_url" onChange={handleFilechange} />
      </Button>
      <Button
        variant="contained"
        component="label"
        startIcon={<AddPhotoAlternateIcon />}
      >
        3d Photo
        <input
          type="file"
          name="3d_photo_url"
          onChange={handleSecondFilechange}
        />
      </Button>
      <div>
        <FormLabel>
          <b>Description</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="description"
          value={artists_form.description}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Source Link</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="source_link"
          value={artists_form.source_link}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Sourced By</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="sourced_by"
          value={artists_form.sourced_by}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ m: 2 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
}
