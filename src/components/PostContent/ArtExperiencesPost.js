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

export default function ArtExperiencesPost() {
  const [experiences_form, set_post_form] = useState({
    experiences_form: {
      artist_name: "",
      award_title: "",
      award_description: "",
      awarding_institution: "",
      award_date: "",
      award_type: "",
    },
  });
  const [form_type, set_form_type] = React.useState("");

  const handleChange = (e) => {
    set_form_type(e.target.value);
    console.log(e.target.value);
  };

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

  const handleDescriptionChange = (e) => {
    set_description(e.target.value);
  };

  const handleFilechange = (e) => {
    set_user_file(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences_form, user_file);

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
      <h3 className="text-center">Experiences Form</h3>
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
        value={experiences_form.artist_name}
        onChange={handle_form_change}
        className="form-control mb-2"
      />

      <div>
        <FormLabel>
          <b>Award Title</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="award_title"
          value={experiences_form.award_title}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Award Description</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="award_description"
          value={experiences_form.award_description}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Awarding Institution</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="awarding_institution"
          value={experiences_form.awarding_institution}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Location(City/Country)</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="location"
          value={experiences_form.location}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Award Date</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="award_date"
          value={experiences_form.award_date}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Award Type</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="award_type"
          value={experiences_form.award_type}
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
