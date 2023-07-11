import { useState, useEffect } from "react";
import { GrDocumentTime, GrDocumentVerified } from "react-icons/gr";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/router";

const columns = [
  {
    field: "approved",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      const statusValue = params.value;
      let statusIcon;

      if (statusValue === true) {
        statusIcon = (
          <Chip
            color="success"
            icon={<CheckCircleOutlineIcon />}
            label="Aceito"
          ></Chip>
        );
      } else if (statusValue === false) {
        statusIcon = (
          <Chip
          sx={{backgroundColor: "orange"}}
            icon={<HelpOutlineIcon />}
            label="Aguardando"
          ></Chip>
        );
      } else {
        statusIcon = null;
      }

      return (
        <div>
          {statusIcon}
          {statusValue}
        </div>
      );
    },
  },
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  { field: "autor", headerName: "Autor", width: 300 },
  { field: "title", headerName: "Titulo", width: 1000 },
  {
    field: "origin_id",
    headerName: "Origin",
    width: 100,
    renderCell: (params) => {
      const statusValue = params.value.origin;

      return <div>{statusValue}</div>;
    },
  },
];

export default function Solicitations(req) {
  const router = useRouter();
  const [documents, setDocuments] = useState(Array);

  const handleRowClick = (params) => {
    const { id } = params.row;
    // Redirecionar para a página com base no ID da linha
    router.push(`/admin/requests/${id}`);
  };

  useEffect(() => {
    setDocuments(req.documents);
  }, [req.documents]);
  return (
    <div className="adminCards">
      <Box sx={{ height: 631, width: "100%", marginBottom: "25px" }}>
        <h1 className="font-bold">Solicitações</h1>
        <DataGrid
          className="bg-white cursor-pointer"
          rows={documents}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onRowClick={handleRowClick}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
}
