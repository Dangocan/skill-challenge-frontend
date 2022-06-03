import { StyledDataTableWrapper, StyledMainContainer } from "../../components";

import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import api from "../../services/Api/PlaceApi";
import MainModal from "./MainModal";

function Locais() {
  const [data, setData] = useState([{}]);
  const [rowSelected, setRowSelected] = useState<any>();
  const [openModal, setOpenModal] = useState(false);

  const columns = [
    {
      name: "id",
      selector: (row: any) => row.id,
      center: true,
    },
    {
      name: "name",
      selector: (row: any) => row.name,
      center: true,
    },
    {
      name: "address",
      selector: (row: any) => row.address,
      center: true,
    },
  ];

  const fetchPlaceData = async () => {
    const placesReponse = await api.placeGetAll();
    setData(placesReponse);
    console.log(placesReponse);
  };

  useEffect(() => {
    fetchPlaceData();
  }, []);

  return (
    <>
      <StyledMainContainer>
        <StyledDataTableWrapper>
          <DataTable
            onRowClicked={(row: any) => {
              setRowSelected(row);
              setOpenModal(true);
            }}
            highlightOnHover
            pointerOnHover
            data={data}
            columns={columns}
            pagination
            responsive
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10]}
          />
        </StyledDataTableWrapper>
      </StyledMainContainer>
      <MainModal
        opened={openModal}
        setOpened={setOpenModal}
        data={rowSelected}
      />
    </>
  );
}

export default Locais;
