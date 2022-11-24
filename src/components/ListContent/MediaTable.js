import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { Table } from "antd";

export default function MediaTable() {
  useEffect(() => {
    get_media_data();
  }, []);
  const [media, set_media] = useState([]);

  const get_media_data = () => {
    fetch("https://cool-artists.herokuapp.com/api/get_media", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        set_media(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "attachment_url",
      dataIndex: "attachment_url",
      key: "attachment_url",
    },
    {
      title: "created_by",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Biography",
      dataIndex: "biography",
      key: "biography",
    },
    {
      title: "source_link",
      dataIndex: "source_link",
      key: "source_link",
    },
    {
      title: "sourced_by",
      dataIndex: "sourced_by",
      key: "sourced_by",
    },
    {
      title: "sourced_from",
      dataIndex: "sourced_from",
      key: "sourced_from",
    },
    {
      title: "summary",
      dataIndex: "summary",
      key: "summary",
    },

    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "validated_by",
      dataIndex: "validated_by",
      key: "validated_by",
    },
  ];
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "40px" }}>
        <h4 className="text-center">Media Data</h4>
        <Table dataSource={media} columns={columns} />;
      </div>
    </div>
  );
}
