import React, { useState } from 'react';
import '../Table.scss'


function StatusLight() {

    const rals = [
        { label: "", value: "none" },
        { label: "RAL 7021 Czarny", value: "-7021" },
        { label: "RAL 9003 Biały", value: "-9003" }
    ];

    const revs = [
        { label: "", value: "none" },
        { label: "1.0", value: "10" }
    ];

    const types = [
        { label: "", value: "none" },
        { label: "Standard", value: "Standard" },
        { label: "DOZ", value: "DOZ" }
    ];

    const cameraSecuritys = [
        { label: "Nie", value: "Nie" },
        { label: "Tak", value: "Tak" },
    ];

    const cameraChceckAges = [
        { label: "Nie", value: "Nie" },
        { label: "Tak", value: "Tak" },
    ];


    const [ral, setRal] = useState();
    const [rev, setRev] = useState();
    const [type, setType] = useState();
    const [cameraSecurity, setCameraSecurity] = useState();
    const [cameraChceckAge, setCameraCheckAge] = useState();


    const handleRalChange = (e) => {
        setRal(e.target.value);
    };
    const handleRevChange = (e) => {
        setRev(e.target.value);
    };
    const handleTypeChange = (e) => {
        setRev(e.target.value);
    };
    const handleCameraSecurityChange = (e) => {
        setCameraSecurity(e.target.value);
    };
    const handleCameraCheckAgeChange = (e) => {
        setCameraCheckAge(e.target.value);
    };

    return (
        <div className="App">
            < div className='container text-center'>
                <h3>Creator Status Light SELF S</h3>
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

                        {/* formularz rodzaj */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Wariant</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleTypeChange}>
                                    {types.map((type) => (
                                        <option value={type.value}>{type.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* formularz kamery */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Kamera Security</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleCameraSecurityChange}>
                                    {cameraSecuritys.map((cameraSecurity) => (
                                        <option value={cameraSecurity.value}>{cameraSecurity.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Kamera Check Age (DOZ)</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleCameraCheckAgeChange}>
                                    {cameraChceckAges.map((cameraChceckAge) => (
                                        <option value={cameraChceckAge.value}>{cameraChceckAge.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StatusLight;
