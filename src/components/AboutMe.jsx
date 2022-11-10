import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../assets/me.jpg";
const AboutMe = () => {
  return (
    <div className="aboutme-card-container ">
      <div className="profile-photo-container">
        <img src={me} alt="me" className=" object-cover object-fill " />
      </div>

      <div className=" text-neutral-300 text-start   flex justify-center items-start p-5 gap-3 flex-col">
        <div className="">
          <h3 className="text-xl">Hi,I'm</h3>
          <h1 className="text-5xl font-extrabold">Reed Clifford Palbacal</h1>
          <h2 className="text-2xl font-semibold">
            I enjoy making things for the web
          </h2>
        </div>
        <address className="flex items-center gap-4 ">
          <a
            href="mailto:palbacalclifford12@yahoo.com.ph"
            className="flex gap-2 items-center"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            palbacalclifford12@yahoo.com.ph
          </a>
          <br />
          <a href="tel:+09084161980" className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>(+63) 908-4161-980
          </a>
        </address>
        <p className="text-base   text-start ">
          Hi!! my name is Reed and I enjoy creating things that live on the
          internet. I'am a fresh graduate with a degree Bachelor in Science of
          Information Technology at University of Batangas, I still lacked
          experience but I'm confident with the knowledge I know. Im looking
          forward at the experiences that I will acquire, like learning new
          things, overcoming challenges, meeting goals and targets,being
          frustrated of things that I lack knowledge about and alsolearning from
          it. Because the gratification of overcoming an obstacle is my greatest
          motivator and feeling of accomplishment that comes with exceeding
          challenging goals is what drew me to my choosen path.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
