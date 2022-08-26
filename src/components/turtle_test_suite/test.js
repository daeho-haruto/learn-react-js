import React, {useEffect} from "react";
import * as ROSLIB from "roslib"
import './test.css'

const TestRosBridge = () => {

    const ros = new ROSLIB.Ros();
    ros.connect('ws://localhost:9090', 'echo-protocol');

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

    
    return(
        <div className="tur">
            <h1>TurtleTestSuite</h1>
            <button className="sendStart-button" onClick={sendStart}>1m 갔다가 복귀</button>  
            <button className="sendStart-button" >360° 회전</button>  
            <button className="sendStart-button" >범퍼</button>  
            <button className="sendStart-button" >비상정지 버튼</button>  
            <button className="sendStart-button" >LCDirector</button>  
        </div>
        
    )
}

export default TestRosBridge;