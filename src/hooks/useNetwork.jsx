import React, { createContext, useContext, useState, useEffect } from 'react';

const NetworkContext = createContext({
  enpointMap: {},
  setEndpointMap: () => {},
});

const useNetworkContext = () => useContext(NetworkContext);

export function NetworkContextProvider(props) {
  const [endpointMap, setEndpointMap] = useState({});
  return <NetworkContext.Provider value={{ endpointMap, setEndpointMap }} {...props} />;
}

export function useNetwork(endpoint) {
  const { endpointMap, setEndpointMap } = useNetworkContext();
  
  useEffect(() => {
    (async () => {
      const res = await fetch(endpoint);
      const data = await res.json();
      
      setEndpointMap({
        ...endpointMap,
        [endpoint]: data,
      });
    })();
  }, []);
  
  return endpointMap[endpoint];
}