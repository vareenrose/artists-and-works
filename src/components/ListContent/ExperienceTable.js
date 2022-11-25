import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { Table } from "antd";

export default function ExperienceTable() {
  useEffect(() => {
    get_experiences();
  }, []);
  const [experiences, set_experiences] = useState([]);

  const get_experiences = () => {
    fetch("https://cool-artists.herokuapp.com/api/get_experiences", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        set_experiences(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const columns = [
    {
      title: "Award Title",
      dataIndex: "award_title",
      key: "award_title",
    },
    {
      title: "Award Description",
      dataIndex: "award_description",
      key: "award_description",
    },
    {
      title: "Award Month",
      dataIndex: "award_month",
      key: "award_month",
    },
    {
      title: "Award Type",
      dataIndex: "award_type",
      key: "award_type",
    },
    {
      title: "Award Year",
      dataIndex: "award_year",
      key: "award_year",
    },
    {
      title: "Awarding Institution",
      dataIndex: "awarding_institution",
      key: "awarding_institution",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "40px" }}>
        <h4 className="text-center">Experiences Data</h4>
        <Table dataSource={experiences} columns={columns} />;
      </div>
    </div>
  );
}
