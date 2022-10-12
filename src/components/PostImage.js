import { Button, Paper, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";

const PostImage = () => {
  const [post_form, set_post_form] = useState({
    post_form: {
      name: "",
      entry_type_id: 1,
      user_file: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post_form);

    fetch("https://cool-artists.herokuapp.com/api/add_image", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "image/png",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: post_form.name,
        entry_type_id: 1,
        user_file: post_form.user_file,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
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

  return (
    <Paper elevation={6} sx={{ m: 10, p: 10 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Title"
          name="name"
          onChange={handleFormChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Description"
          name="description"
          onChange={handleFormChange}
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<AddPhotoAlternateIcon />}
        >
          Upload File
          <input
            type="file"
            name="user_file"
            onChange={handleFormChange}
            hidden
          />
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
