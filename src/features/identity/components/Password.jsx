import React, { useState } from "react";
import FormComponent from "./formComponent";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { requestAtom } from "../../../atoms/requestAtom";
import { passwordService } from "../../../services/LoginService";

export default function Password() {
  const { secret } = useRecoilValue(requestAtom);
  const [form, setForm] = useState({
    secret: secret,
  });
  const [show, setShow] = useState(false);
  // console.log(requestInfo)
  console.log(form);
  const handleLoginwithPassword = async (e) => {
    e.preventDefault();
    await passwordService(form).then((response) => {
      const token = response.data.data?.token;
      localStorage.setItem("token", JSON.stringify(token));
    });
  };
  return (
    <>
      <FormComponent
        headerText="Password"
        labelText="Please enter your Password"
        icon={show ? faEye : faEyeSlash}
        handleClickIcon={() => {
          setShow(!show);
        }}
        inputType={show ? "text" : "password"}
        placeholder="password"
        onChangeInput={(event) =>
          setForm({ ...form, password: event.target.value })
        }
        buttonType="submit"
        handleClick={handleLoginwithPassword}
      />
    </>
  );
}
