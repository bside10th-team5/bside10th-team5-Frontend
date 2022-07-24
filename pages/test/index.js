import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import DataGrid from "react-data-grid";
import styled from "styled-components";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

export default function test() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  //   let columns = [];

  //   const columns = [
  //     { key: "Name", name: "Name" },
  //     { key: "Birthday", name: "Birthday" },
  //   ];

  //   const rows = [
  //     { Name: 0, Birthday: "Example" },
  //     { Name: 1, Birthday: "Demo" },
  //   ];

  const onHandleChange = (e) => {
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setColumns(res.cols);
        setRows(res.rows);
      }
    });
    // const data = await file.arrayBuffer();
    // const workbook = XLSX.readFile(data);
    // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // console.log(jsonData[2].length);

    // for (let keyValueIndex = 0; keyValueIndex < jsonData[0].length; keyValueIndex++) {
    //   setColumns((previousData) => [
    //     ...previousData,
    //     { key: `${jsonData[0][keyValueIndex]}`, name: `${jsonData[0][keyValueIndex]}` },
    //   ]);
    // }

    // for (let i = 1; i < jsonData.length; i++) {
    //   for (let j = 0; j < jsonData[i].length; j++) {
    //     for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    //       setRows((previousData) => [
    //         ...previousData,
    //         { `${columns[columnIndex]}`: ''}
    //       ]);
    //     }
    //   }
    // }
  };

  return (
    <div>
      <input type="file" onChange={(e) => onHandleChange(e)} />
      {rows && columns ? <OutTable data={rows} columns={columns} /> : <div>d</div>}
    </div>
  );
}
