import React from "react";
import FormGroup from "./FormGroup";
import { MdEdit, MdAddCircle } from "react-icons/md";
export default function ExpensesForm({
  handleSubmit,
  date,
  handleDate,
  charge,
  handleCharge,
  amount,
  handleAmount,
  edit,
}) {
  return (
    <form onSubmit={handleSubmit} className="card bg-primary text-light">
      <div className="card-body">
        <FormGroup
          labelText={"Data"}
          inputType="date"
          values={date}
          onChange={handleDate}
        />
        <FormGroup
          labelText={"Expense"}
          inputType="text"
          values={charge}
          onChange={handleCharge}
          placeholder={"e.g. rent"}
        />{" "}
        <FormGroup
          labelText={"Amount"}
          inputType="number"
          values={amount}
          onChange={handleAmount}
          placeholder={"e.g. 1500"}
        />
        {edit ? (
          <button className={"btn-block"}
          >
            <MdEdit />
            Edit
            </button>

        ) : (
          <button
            className={"btn-block btn-warning"}
            >
            <MdAddCircle className="btn-icon" /> Add
            </button>
        )}
      </div>
    </form>
  );
}