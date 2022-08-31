import React, { useEffect, useState } from "react";
import ROSLIB from "roslib";
import ros from '../../config/ros-config';
import './blody-beta2_test_suite.css'

const BlodyBeta2TestSuite = () => {

    // var bummper = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/bummper',
    //     messageType : 'std_msgs/Bool'
    // });

    // var emergency = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/emergency',
    //     messageType : 'std_msgs/Bool'
    // });

    // var safetyLantern = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/uros/safety_lantern',
    //     messageType : 'std_msgs/Bool'
    // });

    // var battery = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/battery/voltage',
    //     messageType : 'std_msgs/Float32'
    // });

    // var imu = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/imu',
    //     messageType : 'sensor_msgs/Imu'
    // });

    // var scan = new ROSLIB.Topic({
    //     ros : ros,
    //     name : '/scan',
    //     messageType : 'sensor_msgs/LaserScan'
    // });

    const [bummperData, setBummperData] = useState(false);
    const [emergencyData, setEmergencyData] = useState(false);
    const [safetyLanternData, setSafetyLanternData] = useState(false);

    const BOOLTYPE = 'std_msgs/Bool'


    const [bummper,] = useState(new ROSLIB.Topic({
        ros : ros,
        name : '/bummper',
        messageType : BOOLTYPE
    }));

    const [emergency,] = useState(new ROSLIB.Topic({
        ros : ros,
        name : '/emergency',
        messageType : BOOLTYPE
    }));

    const [safety_lantern,] = useState(new ROSLIB.Topic({
        ros : ros,
        name : '/uros/safety_lantern',
        messageType : BOOLTYPE
    }));

    
    useEffect(() => {
        bummper.subscribe((m) => {
            console.log("bummper: " + m.data);
            setBummperData(m.data);
        });
    });

    useEffect(() => {
        emergency.subscribe((m) => {
            console.log("emergency: " + m.data);
            setEmergencyData(m.data);
        });
    });

    useEffect(() => {
        safety_lantern.subscribe((m) => {
            console.log("safety: " + m.data);
            setSafetyLanternData(m.data);
        });
    });


    return( 
        <div>
            <div className="container">
                <div className="bummper" style={bummperData ? {background: 'green'} : {background: 'red'}}>bummper</div>
                <div className="emergency" style={emergencyData ? {background: 'green'} : {background: 'red'}}>emergency</div>
                <div className="safety_lantern" style={safetyLanternData ? {background: 'green'} : {background: 'red'}}>safety_lantern</div>
                <div className="battery">battery</div>
                <div className="imu">imu</div>
                <div className="scan">scan</div>
            </div>
        </div>
    )
}

export default BlodyBeta2TestSuite;