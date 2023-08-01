import FormComponent from "./formComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { requestAtom } from "../../../atoms/requestAtom";
import { useState } from "react";
import { requestService } from "../../../services/LoginService";

const initialValue = {
  type: "mobile",
  mobile_prefix: "+98",
  mobile: "",
};

export default function Login() {
  const [request, setRequest] = useRecoilState(requestAtom);
  const [form, setForm] = useState(initialValue);
  const navigate = useNavigate();
  // console.log({form})

  const handleRequest = async (e) => {
    e.preventDefault();
    await requestService(form).then((response) => {
      const has_password = response.data.data.has_password;
      setRequest(response.data.data);
      //   console.log(has_password)
      if (has_password) {
        navigate("/password");
      } else {
        navigate("/otp");
      }
    });
  };

  return (
    <>
      <FormComponent
        headerText="Login"
        labelText="Please enter your Phone number"
        icon={faPhone}
        inputType="text"
        placeholder="number"
        onChangeInput={(event) =>
          setForm({ ...form, mobile: event.target.value })
        }
        buttonType="submit"
        handleClick={handleRequest}
      />
    </>
  );
}
