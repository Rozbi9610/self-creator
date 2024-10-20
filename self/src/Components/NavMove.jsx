import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import MoveS from "../View/MOVE/MoveS";

function NavMove() {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newEvent) => {
        setSelectedTab(newEvent);
    };

    return (
        <Box sx={{ margin: '2.5rem', width: '50%', padding: '2rem 2rem', borderRadius: '30px', border: '1px black none', marginLeft: 'auto', marginRight: 'auto', color: 'white' }} centered bgcolor='#141414'>
            <Box position="static" textColor="white"  >
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{ style: { background: '#97D700' } }}
                    textColor="white"
                >
                    <Tab label="Move Stacjonarny S320" />
                    <Tab label="Move Mobilny M215" />
                    <Tab label="Move Outdoor E320" />
                </Tabs>
            </Box>
            {selectedTab === 0 && <MoveS />}
            {/* {selectedTab ===1 && <ScoX/>} */}
        </Box>
    );
}
export default NavMove;