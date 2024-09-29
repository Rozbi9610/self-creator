import React, { useState } from 'react';

module.exports = function Data() {
    const rals = [
        { label: "", value: "none" },
        { label: "RAL 7021 Czarny", value: "-7021" },
        { label: "RAL 9003 Biały", value: "-9003" }
      ];

      const [ral, setRal] = useState();

      const handleRalChange = (e) => {
        setRal(e.target.value);
      };
      
  }
  
  
  
  