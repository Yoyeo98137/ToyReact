import { createElement, Component, render } from './toy-react';

class MyCompent extends Component {
    constructor(){
        super()
        this.state = {
            a: 1,
            b: 2
        }
    }

    render(){
        return <div>
            <h1>my component</h1>
            <span onClick={() => {
                this.setState({
                    a: this.state.a + 1
                })
            }}>{ this.state.a.toString() }</span>
            <p>{ this.state.b.toString() }</p>
            { this.children }
        </div>
    }
}

render(<MyCompent id="a" class="class-demo">
    <div>abc</div>
    <div>abcadsad</div>
    <div>abcdasd</div>
    <div></div>
</MyCompent>, document.body)