import Button from "./Button";
import InputField from "./InputField";
import SocialLogin from "./SocialLogin";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <form className="bg-white w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] absolute top-28 left-[50%] translate-x-[-50%] rounded-sm flex flex-col gap-4  px-6 py-6">
      <h1 className="text-[#292929] font-bold text-center text-3xl md:text-4xl m-0">
        LOGIN
      </h1>
      <div className="flex flex-col gap-4 mb-6">
        <InputField
          type={"text"}
          label={"Username"}
          name={"username"}
          placeholder={"i.e johnappleseed88"}
          icon={faUser}
        />
        <InputField
          type={"password"}
          label={"Password"}
          name={"password"}
          icon={faLock}
          placeholder={"i.e Mypassword123!"}
        />
        <p className="w-fit text-right text-xs hover:text-blue-500 cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>

      <Button />
      <SocialLogin />
      <div>
        <p className="text-xs text-center">
          Not a member?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Create an account.
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
