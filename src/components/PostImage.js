import { Button, Paper, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import { Alert } from "@mui/material";

const PostImage = () => {
  const [post_form, set_post_form] = useState({
    post_form: {
      name: "",
      entry_type_id: 1,
      description: "",
    },
  });

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    set_post_form((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleFilechange = (e) => {
    set_user_file(e.target.files[0]);
  };

  return (
    <Paper elevation={6} sx={{ m: 10, p: 10 }}>
      <form onSubmit={handleSubmit}>
        {alert_upload_success && (
          <Alert severity="success">File Uploaded successfuly</Alert>
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          label="Entry Title"
          value={name}
          name="name"
          onChange={handleNameChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          value={description}
          label="Description"
          name="description"
          onChange={handleDescriptionChange}
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<AddPhotoAlternateIcon />}
        >
          Upload File
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
    </Paper>
  );
};

export default PostImage;
