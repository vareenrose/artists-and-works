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
import Select from "react-select";

export default function MediaPost(props) {
  const [media_form, set_post_form] = useState({
    title: "",
    type: "",
    source_link: "",
    summary: "",
    description: "",
    created_by: "",
    sourced_by: "",
    sourced_from: "",
    validated_by: "",
  });
  const artist_options = props.artists.map((val) => ({
    label: val.name,
    value: val.id,
  }));

  const [user_file, set_user_file] = useState("");
  const [alert_upload_success, set_alert_upload_success] = useState(false);

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
  const [sel_artist, set_sel_artist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(media_form, user_file);

    let form_data = new FormData();
    form_data.append("title", media_form.title);
    form_data.append("artists_id", sel_artist);
    form_data.append("type", media_form.type);
    form_data.append("source_link", media_form.source_link);
    form_data.append("summary", media_form.summary);
    form_data.append("description", media_form.description);
    form_data.append("created_by", media_form.created_by);
    form_data.append("sourced_by", media_form.sourced_by);
    form_data.append("sourced_from", media_form.sourced_from);
    form_data.append("validated_by", media_form.validated_by);
    form_data.append("attachment_url", user_file);

    fetch("https://cool-artists.herokuapp.com/api/create_media", {
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
          set_user_file("");
          set_post_form({
            title: "",
            type: "",
            source_link: "",
            summary: "",
            description: "",
            created_by: "",
            sourced_by: "",
            sourced_from: "",
            validated_by: "",
          });
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handle_artist_select = (e) => {
    set_sel_artist(e.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Media Form</h3>
      <hr />
      {alert_upload_success && (
        <Alert severity="success">Media Uploaded successfuly</Alert>
      )}

      <Select
        options={artist_options}
        placeholder={"Select an artist"}
        className="mb-3"
        onChange={handle_artist_select}
      />

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
          type="text"
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
          <input
            type="file"
            name="attachment_url"
            onChange={handleFilechange}
          />
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
          type="text"
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
