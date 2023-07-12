import React from 'react'

function Alert(props) {
    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}

export default Alert



// import React from 'react';

// function Alert(props) {
//     const { alert } = props; // Destructure the alert prop

//     return (
//         // Check if alert exists and is truthy
//         alert && (
//             <div className="alert alert-warning alert-dismissible fade show" role="alert">
//                 <strong>{alert.type}</strong>: {alert.msg}
//                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//             </div>
//         )
//     );
// }

// export default Alert;

