// Front end Debelopment Libraries Certification

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        <h1>
          {/* Change code below this line */}
          {this.state.name}
          {/* Change code above this line */}
        </h1>
      </div>
    );
  }
}
