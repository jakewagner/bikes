import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./Scene/Layout";
import "./app.css";

const theme = {
  LightBackground: "#FFFFFF",
  DarkBackground: "#E7E7E7",
  Header: "#0076A8",
  Sidebar: "#2C3F50",
  Hover: "#678678",
  Selected: "#F26522",
  Dropshadow: "#AAAAAA",
  Text: "#333333"
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [networks, setNetworks] = useState();

  useEffect(() => {
    if (loading) {
      fetch("http://api.citybik.es/v2/networks?fields=location.country,href,id")
        .then(response => response.json())
        .then(data => {
          const networks = data.networks;
          const networkSortedByCountry = networks.reduce(
            (sorted, item, i) => {
              if (item.location) {
                sorted.country[item.location.country] = {
                  [i]: item,
                  ...sorted.country[item.location.country]
                };
                return sorted;
              }
            },
            { country: {} }
          );
          setNetworks(networkSortedByCountry);
          setLoading(false);
        });
    }
  }, [loading]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout appData={networks} />
    </ThemeProvider>
  );
};

export default App;
