import React from 'react'

 function Alert(props) {
  return (
    <div>
      <div>
        <div className={`alert alert-${props.alert.type} alert-dismissable fade-show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}<br/>
        <button type="button " className="btn-close" data-bs-dismiss="aslert" aria-label="Close"></button>
        </div>
            
    </div>
    </div>
  )
}
export default Alert
