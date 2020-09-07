import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';

class About extends Component {
    render(){
        return(
            <div>
                <Header
                 title="About"
                 subtitle="It's really a great story"
                 showButton={false}
                 image={image}
            />
            <Timeline />
            <Team />
            </div>
            
        )
    }
}

export default About