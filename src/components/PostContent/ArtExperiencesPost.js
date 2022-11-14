import React from "react";
import { useState } from "react";
import { Button, Alert, FormLabel } from "@mui/material";
import Select from "react-select";

export default function ArtExperiencesPost(props) {
  const [experiences_form, set_post_form] = useState({
    award_title: "",
    award_description: "",
    awarding_institution: "",
    award_date: "",
    award_type: "",
  });
  const [sel_artist, set_sel_artist] = useState("");

  const artist_options = props.artists.map((val) => ({
    label: val.name,
    value: val.id,
  }));
  const [alert_upload_success, set_alert_upload_success] = useState(false);

  const handle_form_change = (e) => {
    const { name, value } = e.target;
    set_post_form((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("artists_id", sel_artist);
    form_data.append("award_title", experiences_form.award_title);
    form_data.append("award_description", experiences_form.award_description);
    form_data.append(
      "awarding_institution",
      experiences_form.awarding_institution
    );
    form_data.append("location", experiences_form.location);
    form_data.append("award_date", experiences_form.award_date);
    form_data.append("award_type", experiences_form.award_type);

    fetch("https://cool-artists.herokuapp.com/api/create_experience", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: form_data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        set_alert_upload_success(true);
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
      <h3 className="text-center">Experiences Form</h3>
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
          type="date"
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
