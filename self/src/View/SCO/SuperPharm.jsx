import React, { useState } from 'react';
import '../Table.scss'


function SuperPharm() {

    const rals = [
        { label: "", value: "none" },
        { label: "RAL 9010", value: "-9010" },
        { label: "RAL 9003", value: "-9003" }
    ];

    const revs = [
        { label: "", value: "none" },
        { label: "1.0", value: "10" },
        { label: "2.0", value: "20" },
        { label: "3.0", value: "30" }
    ];

    const models = [
        { label: "", value: "none" },
        { label: "Stand Alone", value: "SA" },
        { label: "Stand Alone Slim", value: "SA Slim" },
        { label: "Super Fast", value: "SF" },
        { label: "Hebe nablatowe", value: "Hebe NB" }
    ];

    const comps = [
        { label: "", value: "none" },
        { label: "Giada F105D", value: "F105D" },
        { label: "Giada F106D", value: "F106D" }
    ];

    const scaners = [
        { label: "", value: "none" },
        { label: "Datalogic Magellan 3300HSi", value: "MGL3300" },
        { label: "Datalogic Magellan 3510HSi", value: "MGL3510" },
        { label: "Datalogic Magellan 1500i", value: "MGL1500" }
    ];
    const switches = [
        { label: "", value: "null" },
        { label: "Switch TL-SF1005D", value: "TL-SF1005D" },
        { label: "Switch TL-SG105e (zarządzalny)", value: "TL-SG105e" }
    ];

    const [ral, setRal] = useState();
    const [rev, setRev] = useState();
    const [model, setModel] = useState();
    const [comp, setComp] = useState();
    const [scaner, setScaner] = useState();
    const [_switche, setSwitche] = useState();
    const [option, setOption] = useState();


    const handleRalChange = (e) => {
        setRal(e.target.value);
    };
    const handleRevChange = (e) => {
        setRev(e.target.value);
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
    };
    const handleCompChange = (e) => {
        setComp(e.target.value);
    };
    const handleScanerChange = (e) => {
        setScaner(e.target.value);
    };
    const handleSwitchChange = (e) => {
        setSwitche(e.target.value);
    };

    return (
        <div className="App">
            < div className='container text-center'>
                <h3>Creator Super Pharm</h3>
                <form>
                    <div className='form-row'>
                        {/* formularz ZLM */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='zlm'>
                                <h5>ZLM</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputZLM" />
                            </div>
                        </div>

                        {/* formularz data */}

                        <div className="row mb-3">

                            <label className="col-md-3 col-form-label" id='finish'>
                                <h5>Data zakończenia produkcji</h5>
                            </label>
                            <div class="col-md-9">
                                <input type="date" className="form-control" id="inputfinish" />
                            </div>
                        </div>

                        {/* formularz kolor */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Kolor</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleRalChange}>
                                    {rals.map((ral) => (
                                        <option value={ral.value}>{ral.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* formularz rewizji */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Wersja obudowy</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleRevChange}>
                                    {revs.map((rev) => (
                                        <option value={rev.value}>{rev.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* formularz model */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Model</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleModelChange}>
                                    {models.map((model) => (
                                        <option value={model.value}>{model.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* formularz szyba */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='sn_screen'>
                                <h5>S/N Szyba</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputScreen" />
                            </div>
                        </div>

                        {/* formularz komputer */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Typ Giady</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleCompChange}>
                                    {comps.map((comp) => (
                                        <option value={comp.value}>{comp.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='sn_screen'>
                                <h5>S/N Giady</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputScreen" />
                            </div>
                        </div>

                        {/* formularz skaner */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Model Skaner</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleScanerChange}>
                                    {scaners.map((scaner) => (
                                        <option value={scaner.value}>{scaner.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='sn_screen'>
                                <h5>S/N Skaner</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputScreen" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='sn_screen'>
                                <h5>S/N Ramki skanera</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputScreen" />
                            </div>
                        </div>

                        {/* formularz switch  */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='switche'>
                                <h5>Model Switch</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleSwitchChange}>
                                    {switches.map((switche) => (
                                        <option value={switche.value}>{switche.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='switch_sn'>
                                <h5>S/N Switch</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputSwitch_sn" />
                            </div>
                        </div>

                        {/* formularz zasilacz  */}
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='switch_sn'>
                                <h5>S/N Zasilacza LRS</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputSwitch_sn" />
                            </div>
                        </div>

                        <h4> Towar klienta</h4>
                        <hr />
                        {/* formularz drukarka */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='finish'>
                                <h5>SN/PO drukarka</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputZLM" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='finish'>
                                <h5>EAZ drukarka</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputZLM" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default SuperPharm;
