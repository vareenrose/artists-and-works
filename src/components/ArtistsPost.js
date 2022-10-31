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

export default function ArtistsPost() {
  const [artists_form, set_post_form] = useState({
    artists_form: {
      name: "",
      yob: "",
      nationality: "",
      biography: "",
      work_statement: "",
      instagram: "",
      twitter: "",
      facebook: "",
      other: "",
      phone_number: "",
      email: "",
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
        <b>Name</b>
      </FormLabel>
      <input
        type="text"
        name="name"
        value={artists_form.name}
        onChange={handle_form_change}
        className="form-control mb-2"
      />

      <div>
        <FormLabel>
          <b>Year of Birth(required)</b>{" "}
        </FormLabel>
        <input
          type="date"
          name="yob"
          value={artists_form.yob}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Nationality(required)</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="nationality"
          value={artists_form.nationality}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Biography</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="biography"
          value={artists_form.biography}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Workstatement</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="work_statement"
          value={artists_form.work_statement}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Instagram</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="instagram"
          value={artists_form.instagram}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Twitter</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="twitter"
          value={artists_form.twitter}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Facebook</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="facebook"
          value={artists_form.facebook}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Other</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="other"
          value={artists_form.other}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Phone Number</b>{" "}
        </FormLabel>
        <input
          type="number"
          name="phone_number"
          value={artists_form.phone_number}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Email</b>{" "}
        </FormLabel>
        <input
          type="email"
          name="email"
          value={artists_form.email}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>

      <Button
        variant="contained"
        component="label"
        startIcon={<AddPhotoAlternateIcon />}
      >
        Artist Photo
        <input type="file" name="user_file" onChange={handleFilechange} />
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ m: 2 }}
        onClick={handleSubmit}
      >
        Submit Post
      </Button>
    </form>
  );
}
