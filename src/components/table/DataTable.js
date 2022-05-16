import MaterialTable from "material-table";
const DataTable = ({ tableData, setTotalData }) => {
  return (
    <>
      <MaterialTable
        title={tableData.length > 0 && tableData[0].Country === "World Records"}
        columns={[
          { title: "Country", field: "Country" },
          { title: "Total Confirmed", field: "TotalConfirmed" },
          { title: "Total Recovered", field: "TotalRecovered" },
          { title: "Total Deaths", field: "TotalDeaths" },
        ]}
        data={tableData}
        actions={[
          {
            icon: "add",
            tooltip: "add data on graph",
            onClick: (event, rowData) => {
              // console.log(rowData);
              if (rowData?.active) {
                setTotalData({
                  totalConfirmed: rowData.confirmed,
                  totalRecovered: rowData.recovered,
                  totalDeaths: rowData.deaths,
                });
              } else {
                setTotalData({
                  totalConfirmed: rowData.TotalConfirmed,
                  totalRecovered: rowData.TotalRecovered,
                  totalDeaths: rowData.TotalDeaths,
                });
              }
            },
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </>
  );
};

export default DataTable;
