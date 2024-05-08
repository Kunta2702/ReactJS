const Notification = props => {
    const {imgsrc,children,eachClass}=props
return (<div className={`common ${eachClass}`}><img src={imgsrc}/><p> {children}</p></div>
)
//  Write your code here.
}

const element = (
  //  Write your code here.   
  <div class="bg-container">
    <h1>Notifications</h1>
    <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" children="Information Message" eachClass="info"/>
    <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"  children="Success Message" eachClass="success"/>

    <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"  children="Warning Message" eachClass="warning"/>

    <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"  children="Error Message" eachClass="error"/>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))
