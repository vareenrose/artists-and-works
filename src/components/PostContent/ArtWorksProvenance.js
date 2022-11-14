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
import Select from "react-select";

export default function ArtWorksProvenance(props) {
  const [sel_artist, set_sel_artist] = useState("");
  const [provenance_form, set_post_form] = useState({
    collection_title: "",
    year_collected: "",
    region_domiciled: "",
    dealing_institution: "",
    researched_by: "",
    sourced_from: "",
    validated_at: "",
    other_provenance: "",
  });

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
    console.log(provenance_form);

    let form_data = new FormData();
    form_data.append("artists_id", sel_artist);
    form_data.append("collection_title", provenance_form.collection_title);
    form_data.append("year_collected", provenance_form.year_collected);
    form_data.append("region_domiciled", provenance_form.region_domiciled);
    form_data.append(
      "dealing_institution",
      provenance_form.dealing_institution
    );
    form_data.append("researched_by", provenance_form.researched_by);
    form_data.append("sourced_from", provenance_form.sourced_from);
    form_data.append("validated_at", provenance_form.validated_at);
    form_data.append("other_provenance", provenance_form.other_provenance);

    console.log(form_data);
    fetch("https://cool-artists.herokuapp.com/api/create_provenance", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: form_data,
    })
      .then((response) => response.json())
      .then((data) => {
        set_alert_upload_success(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handle_artist_select = (e) => {
    set_sel_artist(e.value);
  };

  const artist_options = props.artists.map((val) => ({
    label: val.name,
    value: val.id,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center">Artists Provenance</h3>
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

      <FormLabel>
        {" "}
        <b>Collection Title</b>
      </FormLabel>
      <input
        type="text"
        name="collection_title"
        value={provenance_form.collection_title}
        onChange={handle_form_change}
        className="form-control mb-2"
      />

      <div>
        <FormLabel>
          <b>Year of Collected</b>{" "}
        </FormLabel>
        <input
          type="date"
          name="year_collected"
          value={provenance_form.year_collected}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Region Domiciled</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="region_domiciled"
          value={provenance_form.region_domiciled}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Dealing Institution/Practitioner(change type to string)</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="dealing_institution"
          value={provenance_form.dealing_institution}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Researched By</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="researched_by"
          value={provenance_form.researched_by}
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
          value={provenance_form.sourced_from}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Validated At</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="validated_at"
          value={provenance_form.validated_at}
          onChange={handle_form_change}
          className="form-control mb-2"
        />
      </div>
      <div>
        <FormLabel>
          <b>Other Provenance</b>{" "}
        </FormLabel>
        <input
          type="text"
          name="other_provenance"
          value={provenance_form.other_provenance}
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
