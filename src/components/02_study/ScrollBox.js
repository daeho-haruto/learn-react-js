import React, {Component} from "react";

class ScrollBox extends Component {
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        /*  비구조화 할당 문법 사용
            아래 코드와 같음
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
        */
       this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };
    

        const innerStyle = {
            height: '650px',
            width: '100%',
            background: 'linear-gradient(red, blue)'
        }

        return (
            <div 
                style={style}
                ref={(ref) => this.box=ref}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;