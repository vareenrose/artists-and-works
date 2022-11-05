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

export default function ArtWorksProvenance() {
  const [provenance_form, set_post_form] = useState({
    provenance_form: {
      collection_title: "",
      year_collected: "",
      region_domiciled: "",
      dealing_institution: "",
      researched_by: "",
      sourced_from: "",
      validated_at: "",
      other_provenance: "",
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
    console.log(provenance_form, user_file);

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
      <h3 className="text-center">Artists Provenance</h3>
      <hr />
      {alert_upload_success && (
        <Alert severity="success">File Uploaded successfuly</Alert>
      )}

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
          <b>Dealing Institution/Practitioner</b>{" "}
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
