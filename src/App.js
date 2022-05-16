import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import NavBar from "./components/navBar/NavBar";
import Chart from "./components/chart/Chart";
import ShowCase from "./components/showCase/ShowCase";
import Table from "./components/table/DataTable";
import Loader from "./components/Loader";

import { fetchCasesForAll } from "./API/api";

function App() {
  const [loading, setLoading] = useState(false);

  const [tableData, setTableData] = useState([]);

  const [totalData, setTotalData] = useState({
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDeaths: 0,
    date: 0,
  });

  useEffect(() => {
    getGlobalData();
  }, []);

  const getGlobalData = () => {
    setLoading(true);
    setTableData([]);
    fetchCasesForAll().then((data) => {
      setTableData(data.Countries);
      setTotalData({
        totalConfirmed: data.Global.TotalConfirmed,
        totalRecovered: data.Global.TotalRecovered,
        totalDeaths: data.Global.TotalDeaths,
        date: data.Global.Date,
      });
      setLoading(false);
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container maxWidth="xl">
            <NavBar getGlobalData={getGlobalData} />
            <ShowCase totalData={totalData} />
            <Chart totalData={totalData} />
            <Table tableData={tableData} setTotalData={setTotalData} />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
