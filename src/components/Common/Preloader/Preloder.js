import React from "react";
import preloader from '../../../assets/img/spinner.gif';


let Preloader = (props) => {
    return <div style={{backgroundColor: 'darkcyan'} } >
           <img src = {preloader} />
        </div>
}
export default Preloader;