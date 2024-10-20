import React, { useState } from 'react';
import '../Table.scss'


function Hebe() {

    const rals = [
        { label: "", value: "none" },
        { label: "RAL 9010", value: "-9010" }
    ];

    const revs = [
        { label: "", value: "none" },
        { label: "1.0", value: "10" },
        { label: "2.0", value: "20" },
        { label: "3.0", value: "30" }
    ];

    const models = [
        { label: "", value: "none" },
        { label: "Wolnostojąca", value: "CD195E" },
        { label: "Nablatowa", value: "CD195F" }
    ];

    const variants = [
        { label: "", value: "none" },
        { label: "Polski", value: "PL" },
        { label: "Czeski / Słowacki", value: "CZ/SK" }
    ];

    const comps = [
        { label: "", value: "none" },
        { label: "Giada F105D", value: "F105D" },
        { label: "Giada F106D", value: "F106D" }
    ];

    const scaners = [
        { label: "Datalogic Magellan 1500i", value: "MGL1500" }
    ];

    const [ral, setRal] = useState();
    const [rev, setRev] = useState();
    const [variant, setVariant] = useState();
    const [model, setModel] = useState();
    const [comp, setComp] = useState();
    const [scaner, setScaner] = useState();


    const handleRalChange = (e) => {
        setRal(e.target.value);
    };
    const handleRevChange = (e) => {
        setRev(e.target.value);
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
    };
    const handleVariantChange = (e) => {
        setVariant(e.target.value);
    };
    const handleCompChange = (e) => {
        setComp(e.target.value);
    };
    const handleScanerChange = (e) => {
        setScaner(e.target.value);
    };

    return (
        <div className="App">
            < div className='container text-center'>
                <h3>Creator Hebe</h3>
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

                        {/* formularz wariant */}

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='ral'>
                                <h5>Wariant</h5>
                            </label>
                            <div class="col-sm-9">
                                <select class="form-select" onChange={handleVariantChange}>
                                    {variants.map((variant) => (
                                        <option value={variant.value}>{variant.label}</option>
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

                        {/* formularz zasilacz  */}
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" id='switch_sn'>
                                <h5>S/N Zasilacza LRS</h5>
                            </label>
                            <div class="col-sm-9">
                                <input type="group" className="form-control" id="inputSwitch_sn" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hebe;
