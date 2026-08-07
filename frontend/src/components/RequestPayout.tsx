import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { amountSchema } from "../schema/transactions";

function RequestPayout() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-outfit font-semibold tracking-tight">
        Request Payout
      </h3>
      <TextField
        name="amount"
        type="number"
        value={amount}
        onChange={(value) => setAmount(value)}
        validate={(value) => {
          const result = amountSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>
          Amount <span className="text-danger text-sm">*</span>
        </Label>
        <Input placeholder="Enter amount" />
        <Description>
          Payouts will be credited within 24 hrs of request if it&apos;s not
          blocked.
        </Description>
        <FieldError />
      </TextField>
      <Button className="w-full">Request</Button>
    </Form>
  );
}

export default RequestPayout;
