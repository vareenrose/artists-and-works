import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { Table } from "antd";
import Airtable from "airtable";

export default function ArtistsTable() {
  useEffect(() => {
    get_artists_data();
    get_airtable_data();
  }, []);
  const [artists, set_artists] = useState([]);

  const get_airtable_data = () => {
    let base = new Airtable({ apiKey: "keyQUL5nHqE6mive3" }).base(
      "appOIqHFPZdryyOnf"
    );
    base("institutions, artists & other practitioners biodata")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          console.log("Records ", records);

          records.forEach(function (record) {
            // console.log("Retrieved", record);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  const get_artists_data = () => {
    fetch("https://cool-artists.herokuapp.com/api/get_artists", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        set_artists(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "biography",
      dataIndex: "biography",
      key: "biography",
    },
    {
      title: "Biography",
      dataIndex: "biography",
      key: "biography",
    },
    {
      title: "Facebook",
      dataIndex: "facebook",
      key: "facebook",
    },
    {
      title: "Instagram",
      dataIndex: "instagram",
      key: "instagram",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Work Statement",
      dataIndex: "work_statement",
      key: "work_statement",
    },
    {
      title: "Twitter",
      dataIndex: "twitter",
      key: "twitter",
    },
    {
      title: "YOB",
      dataIndex: "yob",
      key: "yob",
    },
  ];
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "40px" }}>
        <h4 className="text-center">Artists Data</h4>
        <Table dataSource={artists} columns={columns} />;
      </div>
    </div>
  );
}
