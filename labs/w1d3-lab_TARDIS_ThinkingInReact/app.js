class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tardis : { name: 'Time and Relative Dimension in Space', caps: false, } 
    };
    this.changeIt = this.changeIt.bind(this);
}
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState ( { tardis: { name: text.toLowerCase() , caps: false } } )
        }else {
            this.setState ( { tardis: { name: text.toUpperCase(), caps: true } } )
        }
    }

    render() {
        const 
        return (
            <div>
                <div>
                    {
                    
                    /* <h3 onClick={ () => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>*/
                    <DivOne ParentMethod={ this.changeIt } tardisParent={ this.state.tardis }/> 
                    }
                </div>
            </div>
        )
    }
}

class DivOne extends React.Component {
    render() {
        return(
            <div>
                <h3 onClick={ () => this.props.ParentMethod()}>
                        {this.props.tardisParent.name}
                    </h3>
                
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('container'));