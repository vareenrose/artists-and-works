import {
  Button,
  Paper,
  TextField,
  MenuItem,
  Alert,
  FormLabel,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import React from "react";
import NavBar from "./Navbar/NavBar";
import ArtistsPost from "./ArtistsPost";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const PostImage = () => {
  const [post_form, set_post_form] = useState({
    post_form: {
      name: "",
      entry_type_id: 1,
      description: "",
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

  const handleNameChange = (e) => {
    set_name(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    set_description(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post_form, user_file);

    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("entry_type_id", 1);
    form_data.append("description", description);
    form_data.append("user_file", user_file);

    // console.log(form_data);

    fetch("https://cool-artists.herokuapp.com/api/add_image", {
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
          set_name("");
          set_description("");

          set_user_file("");
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFilechange = (e) => {
    set_user_file(e.target.files[0]);
  };

  return (
    <div>
      <NavBar />
      <Paper elevation={4} sx={{ m: 15, p: 10 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Entry Type"
          placeholder="Select Entry Type"
          sx={{ marginBottom: "20px" }}
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value={"artists"}>Artists</MenuItem>
          <MenuItem value={"art-works"}>Art Works</MenuItem>
          <MenuItem value={"spaces"}>Spaces</MenuItem>
        </Select>
        {form_type === "artists" && <ArtistsPost />}

        {form_type === "art-works" && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Artists</h3>
            <hr />
            {alert_upload_success && (
              <Alert severity="success">File Uploaded successfuly</Alert>
            )}

            <FormLabel>
              {" "}
              <b>Name of Entry</b>
            </FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Entry Title"
              value={name}
              name="name"
              sx={{ marginBottom: "20px" }}
              onChange={handleNameChange}
            />

            <FormLabel>
              {" "}
              <b>Entry Type</b>{" "}
            </FormLabel>

            <FormLabel>
              <b>Entry Text Or Description</b>{" "}
            </FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              value={description}
              label="Description"
              name="description"
              sx={{ marginBottom: "20px" }}
              onChange={handleDescriptionChange}
            />
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
        )}
      </Paper>
    </div>
  );
};

export default PostImage;
