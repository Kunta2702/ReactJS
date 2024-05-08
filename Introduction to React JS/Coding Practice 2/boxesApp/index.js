const Box = props => {
  //  Write your code here.
  const {children,customClass}=props;
  return (
      <div className={`box ${customClass}`}>
          <p>{children}</p>
      </div>
  )
}

const element = (
  //  Write your code here. 
  <div class="bg-container">
      <h1>Boxes</h1>
      <div class="boxesContainer">
            <Box children="Small" customClass="smallBox"/>
            <Box children="Medium" customClass="mediumBox"/>
            <Box children="Large" customClass="largeBox"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
