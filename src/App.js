import { useState } from "react";
import { InputText } from "./components/Input";
import styled from "@emotion/styled";
import TextField from "@material-ui/core/TextField";
import Button from "./components/Button";
import HorasService from "./services/horas_service";
import Modal from "@material-ui/core/Modal";

function App() {
  const [horaUtc, setHoraUtc] = useState({hora:"",timeZone:"", msg:""});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ModalWrapper>
      <h2>Hora {horaUtc.timeZone.toUpperCase()}</h2>
      <p>
      {horaUtc.hora}
      </p>
      <span>
      {horaUtc.msg}
      </span>
    </ModalWrapper>
  );

  return (
    <PageWrapper>
      <StyledForm>
        <TextField
          id="datetime-local"
          label="Fecha y Hora"
          name="datetime"
          type="datetime-local"
          defaultValue="2021-05-24T10:30:02"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <InputText
          label="ZonaTime"
          type="text"
          name="zone"
          placeholder="+/- Numero de Zona"
        ></InputText>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            const form = e.target.form;
            const { datetime, zone } = form;
            const dateTime = datetime.value.replace('T',' ');
            let zoneTime = zone.value; 
            let msg = "";

            const regExp  = /([+/-])([0-1]?[0-8])/ ;
            if (!regExp.test(zoneTime)){
              zoneTime = "+0";
              msg = "ZoneTime: No Ingresada O Incorrecta"
            }
            const horasService = new HorasService();
            const consultaHoraUtc = await horasService.updateHoratoUtc(
              dateTime,
              zoneTime
            );
            setHoraUtc({hora: consultaHoraUtc.response.time, timeZone: consultaHoraUtc.response.timeZone, msg: msg});
            handleOpen();
          }}
        >
          Consultar
        </Button>
      </StyledForm>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         {body}
      </Modal>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background: white;
  width: 60%;
  margin: auto;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  width: 230px;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  row-gap: 60px;
`;

const ModalWrapper = styled.div`
  background: white;
  border: 1px solid;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #B8B8BB;
  padding-bottom: 15px;
  p{
    font-size: 24px;
  }
  span{
    color: orange;
  }
`;
export default App;
