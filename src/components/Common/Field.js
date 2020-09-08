import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ?
                <input
                className="form-control" 
                id="name" type="text" 
                type={this.props.type}
                placeholder="Your Name *" 
                required="required" 
                data-validation-required-message="Please enter your name." 
                name={this.props.name}
                onChange={this.props.onChange}
                onBlur={this.props.onBlue}
            />
                :
                <textarea
                    className="form-control" 
                    id="message" placeholder="Your Message *" 
                    required="required" 
                    data-validation-required-message="Please enter a message."
                    name={this.props.name}
                    onBlur={this.props.onBlue}
            />
            }
            <p className="help-block text-danger">
                {(this.props.touched && this.props.errors) &&
                    <span>This field is required!</span>
                }
            </p>
            </div>
        )
    }
}

export default Field;