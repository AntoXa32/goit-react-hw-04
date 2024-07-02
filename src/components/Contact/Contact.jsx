import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p className={css.icon}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.icon}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
