"./index.css";
const Button = (props) => {
  //  Write your code here.
//   console.log(props)
return <button className={`button ${props.class}`} >{props.children}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="button-container">
    <Button children="Like" class="likeButton"/>
    <Button children="Comment" class="commentButton" />
    <Button children="Share" class="shareButton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
