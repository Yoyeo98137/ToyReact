import { createElement, Component, render } from './toy-react';

class MyCompent extends Component {
    render(){
        return <div>
            <h1>my component</h1>
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