import { useState, useEffect } from "react";
import Input from "../../common/Input";
import { INPUT_STATUS } from "../../../type/InputStatus";
import styles from "./inputBoxSecurityCode.module.css";
import { validateSecurityNumber } from "../../../validation/securityNumber";
import CONSTANT from "../../../Constant";
import { useCreditCardContext } from "../../../context/CreditCardContext";

interface Props {
  setIsComplete: (value: boolean) => void;
}

const alertCvcInfo = () => {
  alert("CVC는 카드 뒷면의 세 자리 숫자를 말합니다!!");
};

export default function InputBoxSecurityCode(props: Props) {
  const { setIsComplete } = props;

  const [inputStatus, setInputStatus] = useState(INPUT_STATUS.NOT_COMPLETE);
  const { setCardInfo } = useCreditCardContext();

  const lengthParser = (value: string) => value.slice(0, CONSTANT.SECURITY_INPUT_MAX_LENGTH);

  const inputStatusHandler = (value: string) => {
    if (!validateSecurityNumber(value)) {
      setInputStatus(INPUT_STATUS.ERROR);
      return;
    }

    const status = value.length === CONSTANT.SECURITY_INPUT_MAX_LENGTH
        ? INPUT_STATUS.COMPLETE
        : INPUT_STATUS.NOT_COMPLETE;
      
    setInputStatus(status);
  };

  useEffect(() => {
    setIsComplete(inputStatus === INPUT_STATUS.COMPLETE);
  }, [inputStatus]);

  const securityCodeSetter = (value: string) => {
    setCardInfo({ securityCode: value });
  };

  return (
    <div className={styles.inputBox}>
      <p>보안 코드(CVC/CVV)</p>
      <Input
        name="security-code"
        className={styles.input}
        type="password"
        inputMode="numeric"
        parsers={[lengthParser]}
        valueChangeSubscribers={[inputStatusHandler, securityCodeSetter]}
      ></Input>
      <button className={styles.button} type="button" onClick={alertCvcInfo}>
        ?
      </button>
      <p className={inputStatus === INPUT_STATUS.ERROR ? styles.visible : ""}>
        보안 코드는 세 자리의 숫자로 입력해 주세요!!!
      </p>
    </div>
  );
}
