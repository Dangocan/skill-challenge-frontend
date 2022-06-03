import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../../services/Api/PlaceApi";
import { StyledMainModal, BackDrop } from "./style";

type TPlaceModal = {
  data: any;
  setData?: Dispatch<SetStateAction<any>>;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

function MainModal({ data, opened, setOpened, setData }: TPlaceModal) {
  const [newData, setNewData] = useState<any>({});

  const fetchPlaceNewData = async () => {
    const placesReponse = data.id && (await api.placeGetById(data.id));
    console.log(placesReponse);
    setNewData(placesReponse);
  };

  /* useEffect(() => {
    fetchPlaceNewData();
  }, [data]); */

  return opened && data ? (
    <BackDrop onClick={() => setOpened(false)}>
      <StyledMainModal>
        <p>{`ID: ${data.id}`}</p>
        <p style={{ margin: "1em 0" }}>{`Nome: ${data.name}`}</p>
        <p>{`Endereço: ${data.address}`}</p>
      </StyledMainModal>
      ;
    </BackDrop>
  ) : (
    <></>
  );
}

export default MainModal;
