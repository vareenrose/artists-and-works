import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import { Table } from "antd";

export default function ProvenanceTable() {
  useEffect(() => {
    get_provenance();
  }, []);
  const [provenance, set_provenance] = useState([]);

  const get_provenance = () => {
    fetch("https://cool-artists.herokuapp.com/api/get_provenance", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        set_provenance(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const columns = [
    {
      title: "Collection Title",
      dataIndex: "collection_title",
      key: "collection_title",
    },
    {
      title: "Dealing Institution",
      dataIndex: "dealing_institution",
      key: "dealing_institution",
    },
    {
      title: "Other Provenance",
      dataIndex: "other_provenance",
      key: "other_provenance",
    },
    {
      title: "Region Domiciled",
      dataIndex: "region_domiciled",
      key: "region_domiciled",
    },
    {
      title: "Researched By",
      dataIndex: "researched_by",
      key: "researched_by",
    },
    {
      title: "Sourced From",
      dataIndex: "sourced_from",
      key: "sourced_from",
    },
    {
      title: "Validated At",
      dataIndex: "validated_at",
      key: "validated_at",
    },
    {
      title: "Year Collected",
      dataIndex: "year_collected",
      key: "year_collected",
    },
  ];
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "40px" }}>
        <h4 className="text-center">Provenance Data</h4>
        <Table dataSource={provenance} columns={columns} />;
      </div>
    </div>
  );
}
