import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLogin = () => {
  return (
    <div className="w-[50%] m-auto flex flex-col justify-center items-center gap-2 mb-4">
      <p>Or login using</p>
      <div className="flex gap-8">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2xl"
          className="cursor-pointer hover:text-blue-600"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2xl"
          className="cursor-pointer hover:text-pink-500"
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          className="cursor-pointer hover:text-gray-600"
        />
        <FontAwesomeIcon
          icon={faGoogle}
          size="2xl"
          className="cursor-pointer hover:text-green-600"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
