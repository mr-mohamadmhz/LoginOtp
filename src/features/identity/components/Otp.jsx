import React, { useState } from "react";
import FormComponent from "./formComponent";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { requestAtom } from "../../../atoms/requestAtom";
import { otpService } from "../../../services/LoginService";

export default function Otp() {
  const { secret } = useRecoilValue(requestAtom);
  const [form, setForm] = useState({
    secret: secret,
  });
  const [show, setShow] = useState(false);
  // console.log(requestInfo)
  console.log(form);
  const handleLoginwithOtp = async (e) => {
    e.preventDefault();
    await otpService(form).then((response) => {
      const token = response.data.data?.token;
      localStorage.setItem("token", JSON.stringify(token));
    });
  };
  return (
    <>
      <FormComponent
        headerText="Otp"
        labelText="Please enter your Otp"
        icon={faArrowsRotate}
        inputType="text"
        placeholder="otp"
        onChangeInput={(event) => setForm({ ...form, otp: event.target.value })}
        buttonType="submit"
        handleClick={handleLoginwithOtp}
      />
    </>
  );
}
