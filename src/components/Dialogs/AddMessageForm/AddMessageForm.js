import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../../utils/validation/validators";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody"/>
            </div>
            <div>
                <button>send</button>
            </div>

        </form>
    )
}


export default reduxForm ({form: 'dialog-add-message-form'})(AddMessageForm);