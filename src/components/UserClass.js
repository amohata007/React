import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Somewhere",
        followers: 0,
        following: 0,
      },
    };
    console.log("I'm Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amohata007");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("I'm CDM");
  }

  render() {
    // const { name, city } = this.props;
    const { name, location, followers, following, avatar_url } =
      this.state.userInfo;
    console.log("I'm Render");
    return (
      <div className="border border-black p-4 m-4 w-72">
        <img className="rounded-full h-24 w-24" src={avatar_url} />
        <h3 className="font-bold">Name:- {name}</h3>
        <h3>City:- {location}</h3>
        <h3>Followers:- {followers}</h3>
        <h3>Following:- {following}</h3>
        <h3>Contact:- @AbhishekMohata</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          className="p-1 bg-green-100"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
