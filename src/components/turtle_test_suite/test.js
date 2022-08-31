import React, { useState } from "react";
import * as ROSLIB from "roslib"
import ros from '../config/ros-config';
import './test.css'

const TestRosBridge = () => {
    const [topicArr, setTopicArr] = useState([])
    const [serviceArr, setServiceArr] = useState([])
    const [nodeArr, setNodeArr] = useState([])

    const rosTopic = new ROSLIB.Topic({
		ros : ros,
		name : '/turtle1/start',
		messageType : 'turtle_test_suite_msgs/Start'
	});

	const start = new ROSLIB.Message({
		data : 1
	});

    const sendStart = () => {
        console.log("sendStart", rosTopic, start);
		rosTopic.publish(start);
    }

    // --------------------------------------------------------------------

    function getTopics() {
        var topicsClient = new ROSLIB.Service({
            ros : ros,
            name : '/rosapi/topics',
            serviceType : 'rosapi/Topics'
        });
    
        var request = new ROSLIB.ServiceRequest();
    
        topicsClient.callService(request, function(result) {
            console.log(result.topics);
            setTopicArr(result.topics)
        });
    }

    function getServices() {
        var servicesClient = new ROSLIB.Service({
            ros : ros,
            name :'/rosapi/services',
            serviceType : 'rosapi/Services'
        });

        var request = new ROSLIB.ServiceRequest();

        servicesClient.callService(request, function(result) {
            console.log(result.services)
            setServiceArr(result.services)
        });
    }

    function getNodes() {
        var nodesClient = new ROSLIB.Service({
            ros : ros,
            name : '/rosapi/nodes',
            serviceType : 'rosapi/Nodes'
        });

        var request = new ROSLIB.ServiceRequest();

        nodesClient.callService(request, function(result) {
            console.log(result.nodes)
            setNodeArr(result.nodes)
        });
    }


    return(
        <div className="turtle-test-suite">
            <div className="header">
                <h1>TurtleTestSuite</h1>
            </div>
            
            <div className="section">
                <div className="article-test-buttons">
                    <button onClick={sendStart}>1m 갔다가 복귀</button> 
                </div>
                <div className="article-show-buttons">
                    <button onClick={getTopics}>Get Topics</button>
                    <button onClick={getServices}>Get Services</button>
                    <button onClick={getNodes}>Get Nodes</button>
                </div>
                <div className="article-show-scrollbox">
                    {topicArr.map((topic, index)=> {
                    return (<div key={index}>{topic}</div>)
                    })}
                </div>
                <div className="article-show-scrollbox">
                    {serviceArr.map((service, index)=> {
                    return (<div key={index}>{service}</div>)
                    })}
                </div>
                <div className="article-show-scrollbox">
                    {nodeArr.map((node, index)=> {
                    return (<div key={index}>{node}</div>)
                    })}
                </div>
            </div>

            <div className="footer">

            </div>
        </div>
    )
}

export default TestRosBridge;