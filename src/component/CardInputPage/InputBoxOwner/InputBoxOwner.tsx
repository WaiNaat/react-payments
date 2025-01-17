import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxOwner.css";
import CONSTANT from "../../../Constant";

interface Props {
  setPreviewDataHandler: () => void;
}

export default function InputBoxOwner(props: Props) {
  const { setPreviewDataHandler } = props;

  const [nameLength, setNameLength] = useState(0);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .split(/\s{2,}/)
      .filter((spelling) => spelling !== "")
      .join(" ");

    e.target.value = value.slice(0, CONSTANT.OWNER_NAME_MAX_LENGTH);

    setNameLength(e.target.value.trim().length);
  };
  
  return (
    <div className="input-box-card-owner">
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/{CONSTANT.OWNER_NAME_MAX_LENGTH}</p>
      <Input
        name="card-owner"
        className="input-card-owner"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeCallback(e);
          setPreviewDataHandler();
        }}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
      ></Input>
      <p>TBD</p>
    </div>
  );
}
