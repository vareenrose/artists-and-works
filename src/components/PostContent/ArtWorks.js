import React from "react";
import { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  MenuItem,
  Alert,
  FormLabel,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function ArtWorks() {
  const [artists_form, set_post_form] = useState({
    artists_form: {
      artist_name: "",
      title: "",
      medium: "",
      series: "",
      production_year: "",
      dimensions: "",
      description: "",
      source_link: "",
      sourced_by: "",
    },
  });

  const [user_file, set_user_file] = useState("");
  const [alert_upload_success, set_alert_upload_success] = useState(false);
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");

  const handle_form_change = (e) => {
    const { name, value } = e.target;
    set_post_form((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleFilechange = (e) => {
    set_user_file(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(artists_form, user_file);

    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("entry_type_id", 1);
    form_data.append("description", description);
    form_data.append("user_file", user_file);

    // console.log(form_data);

    // fetch("https://cool-artists.herokuapp.com/api/add_image", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },

    //   body: form_data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status === "ok") {
    //       set_alert_upload_success(true);
    //       set_name("");
    //       set_description("");

    //       set_user_file("");
    //     }
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Artists Form</h3>
      <hr />
      {alert_upload_success && (
        <Alert severity="success">File Uploaded successfuly</Alert>
      )}

      <FormLabel>
        {" "}
        <b>Artist Name</b>
      </FormLabel>
      <input
        type="text"
        name="artist_name"
        value={artists_form.artist_name}
        onChange={handle_form_change}
        className="form-control mb-2"
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
          type="text"
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
        <input type="file" name="user_file" onChange={handleFilechange} />
      </Button>
      <Button
        variant="contained"
        component="label"
        startIcon={<AddPhotoAlternateIcon />}
      >
        3d Photo
        <input type="file" name="user_file" onChange={handleFilechange} />
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
