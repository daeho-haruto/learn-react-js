import React, {Component} from "react";
class EventPractice extends Component{
    state = {
        username: '홍길동',
        message: '안녕하세요 초기값입니다.'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //키를 []로 감싸면 레퍼런스가 가리키는 값이 키값으로 사용
        });
    }

    handleClick = () => {
        alert(this.state.username+' : '+this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type='text'
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;

