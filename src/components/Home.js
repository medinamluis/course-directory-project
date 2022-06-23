import React from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

const Home = () => {

  let topic = React.createRef();
  let lname = React.createRef();
  let fname = React.createRef();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let teacherTopic = topic.current.value;
    let teacherFname = fname.current.value;
    let teacherLname = lname.current.value;
    let path = `teachers-featured/${teacherTopic}/${teacherLname}/${teacherFname}`;
    // console.log(path);
    navigate(path);
  };

  return (
    <div className="main-content home">
      <h2>Front End Course Directory</h2>
      <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
      <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
      <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
      <hr />
      <h3>Teachers' Profiles</h3>

      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Topic" ref={ topic } />
        <input type="text" placeholder="Last Name" ref={ lname } />
        <input type="text" placeholder="First Name" ref={ fname } />
        <button type="submit">Go to Profile</button>
      </form>
      <br />
      <span>Browse Featured Teachers:</span>
      <br />
      <br />
      <Link to="teachers-featured/HTML/Ackerman/Abby">A. Ackerman</Link>
      <Link to="teachers-featured/HTML/Burman/Bobby">B. Burman</Link>
      <Link to="teachers-featured/CSS/Chapman/Coddy">C. Chapman</Link>
      <Link to="teachers-featured/CSS/Dorman/Donny">D. Dorman</Link>
      <Link to="teachers-featured/JS/Elman/Elly">E. Elman</Link>
      <Link to="teachers-featured/JS/Foreman/Fanny">F. Foreman</Link>
    </div>
  );
}

export default Home;