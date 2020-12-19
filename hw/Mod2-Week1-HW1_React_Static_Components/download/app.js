var container = {
    margin: 'auto',
    backgroundColor: 'whitesmoke',
    padding: '35px',
    paddingTop: '55px',
    paddingBottom: '55px',
    display: 'grid',
    gridGap: '15px',
    width: '750px',
    fontFamily: 'Courier New'
}

var sidebarDiv = {
    backgroundColor: 'lightgrey',
    display: 'grid',
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '3',
    paddingTop: '150px'
}

var reviewDiv = {
    backgroundColor: 'lightgrey',
    display: 'grid',
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '1'
}

var avgDiv = {
    backgroundColor: 'lightgrey',
    display: 'grid',
    gridColumnStart: '3',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '1'
}

var sentiDiv = {
    backgroundColor: 'lightgrey',
    display: 'grid',
    gridColumnStart: '4',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '1'
}

var webDiv = {
    backgroundColor: 'lightgrey',
    display: 'grid',
    gridColumnStart: '2',
    gridColumnEnd: '5',
    gridRowStart: '2',
    gridRowEnd: '3'
}

var pBodyStyle = {
    textAlign: 'center',
    fontSize: '25px'
}

var pHeaderStyle = {
    margin: '0',
    padding: '0'
}

var pStyle = {
    paddingTop: '10px',
    fontSize: '25px'
}

var webDivInside = {
    backgroundColor: 'grey',
    height: '180px',
    margin: '40px'
}

var ulStyle = {
    paddingLeft: '10px',
    paddingTop: "5px",
    margin: '0',
    listStyleType: 'none'
}

class Sidebar extends React.Component {
    render() {
      return (
        <div style={ sidebarDiv }>
            <ul>
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </ul>
        </div>
      )
    }
  }

class Reviews extends React.Component {
    render() {
        return (
            <div style={ reviewDiv }>
                <ul style={ ulStyle }>
                    <li style={ pHeaderStyle }>Reviews</li>
                    <li style={ pStyle }>1,281</li>
                </ul>
            </div>
        )
    }
}

class AverageRating extends React.Component {
    render() {
        return (
            <div style={ avgDiv }>
                <ul style={ ulStyle }>
                    <li style={ pHeaderStyle }>Average Rating</li>
                    <li style={ pStyle }>4.6</li>
                </ul>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render() {
        return (
            <div style={ sentiDiv }>
                <ul style={ ulStyle }>
                    <p style={ pHeaderStyle }>Sentimental Analysis</p>
                    <p style={ pBodyStyle }>960</p>
                    <p style={ pBodyStyle }>122</p>
                    <p style={ pBodyStyle }>321</p>
                </ul>
            </div>
        )
    }
}

class WebsiteVisitors extends React.Component {
    render() {
        return (
            <div style={ webDiv }>
                <ul style={ ulStyle }>
                    <li style={ pHeaderStyle }>Website Visitors</li>
                    <li style={ pStyle }>821</li>
                    <li style={ webDivInside }></li>
                </ul>
            </div>
        )
    }
}

  class App extends React.Component {
    render() {
      return (
        <div style={ container }>
          <Sidebar />
          <Reviews />
          <AverageRating />
          <SentimentAnalysis />
          <WebsiteVisitors />
        </div>
      )
    }
  }
  ReactDOM.render( <App />, document.getElementById('content') );