import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';//Handling React Forms and Validation with Yup; Formik does mainly 3 things: Getting values in and out of form state; validation and error messages; handling form submission
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your message*'}
        ]
    ]    
}


[
    {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
    {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
    {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your message*'}
]

class Contact extends Component {

    render(){
        return (
            <section id="contact">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-xenter">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate" onSubmit={e => this.submitForm}>
                    <div className="row">

                        {fields.section.map((section, sectionIndex) => {
                            console.log("Rendering section", sectionIndex, "with", section);
                            return (
                                <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field, i) => {
                                        return <Field
                                                    {...field}
                                                    key={i}
                                                    value={this.props.values[fields.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlue}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.error[field.name]}
                                                />
                                    })}
                                </div>
                            )
                        })}

                        <div className="clearfix"></div>    
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button 
                            className="btn btn-primary btn-xl text-uppercase" 
                            type="submit"
                        >Send Message</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>       
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro, your name is long than that.').required('You must give us your name.'),
        email: Yup.string().email('You need ot give us a valid email').required('We need your email.'),
        phone: Yup.string()
        .min(10, 'Please provide your 10 digit phone number.')
        .max(15, 'Your phone number is too long.')
        .required('We need a phone number to reach you at.'),
        message: Yup.string().min(500, 'You need to provide us more detailed information')
        .required('Message is required.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);