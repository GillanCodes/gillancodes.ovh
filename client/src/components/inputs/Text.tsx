import { isEmpty } from "@this/common/utils/isEmpty";

type Errors = {
  [key:string]: any;
};

export function Text({name, errors, data, setData, type="text"}: {name:string, errors:Errors, data:any, setData:any, type?:"text" | "email" | "password"}) {
  return (
    <div className="field">
      <label className="label" style={{textTransform:"capitalize"}}>{name}</label>
      <div className="control">
        <input
          type={type}
          className={!isEmpty(errors) && !isEmpty(errors[name]) ? "input is-danger" : "input"}
          onChange={(e) => setData({ ...data, [name]: e.target.value })}
          value={data[name]}
        />
      </div>
      {!isEmpty(errors) && !isEmpty(errors[name]) && (
        <p className="help is-danger">{errors[name]}</p>
      )}
    </div>
  )
}
