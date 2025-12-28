import { Link } from 'react-router-dom' ;

const About = () => {
    return (
        <section>
            <h2>About Page</h2>
            <Link to = '/' className = 'btn' >Home</Link>
        </section>
    );
};

export default About;