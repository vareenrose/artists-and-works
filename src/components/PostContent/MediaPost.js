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

export default function MediaPost() {
  const [media_form, set_post_form] = useState({
    media_form: {
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
    console.log(media_form, user_file);

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
      <h3 className="text-center">Media Form</h3>
      <hr />
      {alert_upload_success && (
        <Alert severity="success">File Uploaded successfuly</Alert>
      )}

      <FormLabel>
        {" "}
        <b>Title</b>
      </FormLabel>
      <input
        type="text"
        name="title"
        value={media_form.title}
        onChange={handle_form_change}
        className="form-control mb-2"
      />

      <div>
        <FormLabel>
          <b>Type</b>{" "}
        </FormLabel>
        <input
          type="date"
          name="type"
          value={media_form.type}
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
          value={media_form.source_link}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Summary</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="summary"
          value={media_form.summary}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Description</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="description"
          value={media_form.description}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Attatchment</b>{" "}
        </FormLabel>
        <Button
          variant="contained"
          component="label"
          startIcon={<AddPhotoAlternateIcon />}
        >
          Attatchment
          <input type="file" name="attatchment" onChange={handleFilechange} />
        </Button>
      </div>
      <div>
        <FormLabel>
          <b>Created By</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="created_by"
          value={media_form.created_by}
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
          value={media_form.sourced_by}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Sourced From</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="sourced_from"
          value={media_form.sourced_from}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Validated By</b>{" "}
        </FormLabel>
        <input
          type="number"
          name="validated_by"
          value={media_form.validated_by}
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
