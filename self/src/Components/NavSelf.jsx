import React from "react";
import { Link } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import ScoS from "../View/SCO/ScoS";
import ScoX from "../View/SCO/ScoX";



function NavSelf() {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newEvent) => {
        setSelectedTab(newEvent);
    };

    return (
        <Box sx={{margin:'2.5rem', width:'50%', padding:'2rem 2rem', borderRadius:'30px', border:'1px black none', marginLeft: 'auto', marginRight: 'auto', color: 'white'}} centered bgcolor='#141414'>
            <Box position="static" textColor="white"  >
                <Tabs value={selectedTab}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{ style: { background: '#D50F34' } }}
                    textColor="white"
                >
                    <Tab label="SELF S" />
                    <Tab label="SELF X" />
                    <Tab label="SELF S Status Light" />
                    <Tab label="SELF Hebe" />
                    <Tab label="SELF Super Pharm" />
                    <Tab label="SELF Dr. Max" />
                </Tabs>
            </Box>
            {selectedTab ===0 && <ScoS/>}
            {selectedTab ===1 && <ScoX/>}
        </Box>
        
    );
}
export default NavSelf;