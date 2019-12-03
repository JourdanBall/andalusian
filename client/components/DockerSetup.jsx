import React from "react";
import MyDropzone from "./MyDropzone.jsx";
import axios from "axios";

// const exec = require('child_process').exec;
const DockerSetup = props => {
    function containerSetup() {  
        axios
        .post('/docker/containerSetup', {
            runtimeEnv: props.runtimeEnv,
            workDir: props.workDir,
            runtimeCom: props.runtimeCom,
            exposePort: props.exposePort,
            com: props.com,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function defaultSetup() {  
        axios
        .post('/docker/defaultSetup', {})
        .then((response) => {console.log(response);})
        .catch((error) => {console.log(error);})
    }

    function funcSetup() {
        axios
        .post('/docker/funcSetup', {
            code: props.code,
            functionName: props.functionName,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function deployDocker() {
        axios
        .post('/docker/deployDocker', {})
        .then((response) => {console.log(response);})
        .catch((error) => {console.log(error);})
    }
    
    // function configure() {
    //     let runtimeEnv = props.runtimeEnv;
    //     let workDir = props.workDir;
    //     let runtimeCom = props.runtimeCom;
    //     let exposePort = props.exposePort;
    //     let com = props.com;
    // }

    return (
        <React.Fragment>
            <pre>
                <h4>Container Setup</h4>
                <input
                    type="text"
                    name="runtimeEnv"
                    placeholder="FROM"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <input
                    type="text"
                    name="workDir"
                    placeholder="WORKDIR"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <input
                    type="text"
                    name="runtimeCom"
                    placeholder="RUN"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <input
                    type="text"
                    name="exposePort"
                    placeholder="EXPOSE"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <input
                    type="text"
                    name="com"
                    placeholder="CMD [string, ...]"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <div>
                    <button onClick={() => containerSetup()}>Set Dockerfile</button>
                    <button onClick={() => defaultSetup()}>Default Dockerfile</button>
                </div>
                <div>
                <input onChange={(e) => props.updateInfo('functionName', e.target.value)} type="text" name="functionName" placeholder="Function Name" />
                <MyDropzone uploadedFunction={props.uploadedFunction} updateInfo={props.updateInfo} />
                <button onClick={() => funcSetup()}>Set Function</button>
                </div>
                <button onClick={() => deployDocker()}>Deploy</button>
            </pre>
        </React.Fragment>
    )

    
}

export default DockerSetup;