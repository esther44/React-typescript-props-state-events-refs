import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface userSearchState {
  name: string;
  user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps> {
  state: userSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  }

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Fin user</button>
        <div>
          {user?.name}
          {user?.age}
        </div>
      </div>
    );
  }
}
