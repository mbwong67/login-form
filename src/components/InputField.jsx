import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = ({ type, label, name, placeholder, icon }) => {
  return (
    <div id="input-container" className="flex flex-col gap-1 w-[100%] m-auto">
      <label htmlFor={name} className="text-[#292929] font-semibold rounded-sm">
        {label}
      </label>
      <div className="w-full flex flex-row items-center pl-1 gap-2 border-b">
        <FontAwesomeIcon icon={icon} color="gray" />
        <input
          type={type}
          required
          name={name}
          id={name}
          className="w-full px-2 py-1 rounded-sm"
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  );
};

export default InputField;
