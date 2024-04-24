const rootElement = document.getElementById("root");

// example1

// const element = <h1 className="greeting">Hello World</h1>;
// ReactDOM.render(element, rootElement);

// example2

//   const name = "Rahul";
//   const element2 = <h1 className="greeting">Hello {name}</h1>;
//   ReactDOM.render(element2, rootElement);

//example3

//   const fullname = (user) => user.firstName + " " + user.lastName;
//   const user = { firstName: "Rahul", lastName: "Attuluri" };
//   const element = <h1 className="greeting">Hello {fullname(user)} </h1>;
//   ReactDOM.render(element, rootElement);

//example 4..nesting jsx elements

const element = (
  <div>
    <h1>Hi</h1>
    <p>Nice to meet you!</p>
  </div>
);
ReactDOM.render(element, rootElement);
