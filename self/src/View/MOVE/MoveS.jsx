import React, { useState } from 'react';
import '../Table.scss'

function MoveS() {

    const rals = [
        { label: "", value: "none" },
        { label: "RAL 7031 Stalowy Średni", value: "-7021" }
    ];
    const revs = [
        { label: "", value: "none" },
        { label: "4.0", value: "40" },
        { label: "5.0", value: "50" }
    ];

    const displays = [
        { label: "", value: "none" },
        { label: "Szyba Polregio", value: "PRv1" },
        { label: "Szyba Uniwersalna", value: "UNIv1" }
    ];

    const routers = [
        { label: "", value: "none" },
        { label: "Teltonika RUT241", value: "RUT241" },
    ];

    const motherBoards = [
        { label: "", value: "none" },
        { label: "Giga IPC iTXL-5105A", value: "-G5105" }
    ];
    const rams = [
        { label: "", value: "none" },
        { label: "GoodRam Industrial DDR4 8GB 2666MHz GR4S8G266S8C", value: "GR4S8G266S8C" },
        { label: "Inne", value: "Other" }
    ]

    const mainDisks = [
        { label: "", value: "none" },
        { label: "GoodRam Industrial M.2 128GB SSD78-1283CG", value: "SSD78-1283CG" },
        { label: "Inne", value: "Other" }
    ];

    const backUpDisks = [
        { label: "", value: "none" },
        { label: "GoodRam Industrial SSD 2,5 256GB 256GBSSD10-2563CG", value: "SSD10-2563CG" },
        { label: "Inne", value: "Other" }
    ]

    const [ral, setRal] = useState();
    const [rev, setRev] = useState();
    const [display, setDisplay] = useState();
    const [router, setRouter] = useState();
    const [motherBoard, setMotherBoard] = useState();
    const [ram, setRam] = useState();
    const [mainDisk, setMainDisk] = useState();
    const [backUpDisk, setBackUpDisk] = useState();

    const handleRalChange = (e) => {
        setRal(e.target.value);
    };
    const handleRevChange = (e) => {
        setRev(e.target.value);
    };
    const handleDisplayChange = (e) => {
        setDisplay(e.target.value);
    };
    const handleRouterChange = (e) => {
        setRouter(e.target.value);
    };
    const handleMotherBoardChange = (e) => {
        setMotherBoard(e.target.value);
    };

    return (
        <div className="App">
            < div className='container text-center'>
                <h3>Creator Move S320</h3>
                <form>
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

                    {/* formularz wersji szyby */}

                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='ral'>
                            <h5>Wersja Szyby</h5>
                        </label>
                        <div class="col-sm-9">
                            <select class="form-select" onChange={handleDisplayChange}>
                                {displays.map((display) => (
                                    <option value={display.value}>{display.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* formularz router */}

                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='ral'>
                            <h5>Model routera</h5>
                        </label>
                        <div class="col-sm-9">
                            <select class="form-select" onChange={handleRouterChange}>
                                {routers.map((router) => (
                                    <option value={router.value}>{router.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='ral'>
                            <h5>S/N routera</h5>
                        </label>
                        <div class="col-sm-9">
                            <input type="text" className="form-control" id="inputfinish" />
                        </div>
                    </div>

                    {/* formularz płyta */}

                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='motherboard'>
                            <h5>Płyta główna</h5>
                        </label>
                        <div class="col-sm-9">
                            <select class="form-select" onChange={handleMotherBoardChange}>
                                {motherBoards.map((motherBoard) => (
                                    <option value={motherBoard.value}>{motherBoard.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='mb_sn'>
                            <h5>S/N Płyty głównej</h5>
                        </label>
                        <div class="col-sm-9">
                            <input type="group" className="form-control" id="inputMB_sn" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='mb_sn'>
                            <h5>MAC Adres 1</h5>
                        </label>
                        <div class="col-sm-9">
                            <input type="group" className="form-control" id="inputMB_sn" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label" id='mb_sn'>
                            <h5>MAC Adres 2</h5>
                        </label>
                        <div class="col-sm-9">
                            <input type="group" className="form-control" id="inputMB_sn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MoveS;
