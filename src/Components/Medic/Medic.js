import React from "react";
import HeaderMedic from "./Header/HeaderMedic";
import TableMedic from "./pages/TableMedic";
import api from "../../api";

const Medic = () => {
  const [itens, setItens] = React.useState([]);

  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`/auth/usuario`);
      setItens(response.data.usuarios);
      setLoading(false);
      console.log(response.data.usuarios);

      
    };
    fetch();
  }, []);
  return (
    <section className="container">
      <HeaderMedic />

      <TableMedic isLoading={isLoading} itens={itens} />
    </section>
  );
};

export default Medic;
