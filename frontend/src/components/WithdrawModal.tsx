import { Button, Form, Input, Label, Modal, TextField } from "@heroui/react";
import { Banknote } from "lucide-react";
import React, { useState } from "react";
import { amountSchema } from "../schema/transactions";

function WithdrawModal() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <Button>
        <Banknote />
        <span className="max-sm:hidden">Withdraw</span>
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <h3 className="text-2xl font-outfit tracking-tight font-semibold text-center">
                Request Payout
              </h3>
            </Modal.Header>
            <Modal.Body className="font-lora p-1">
              <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <TextField
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={(value) => setAmount(value)}
                  validate={(value) => {
                    const result = amountSchema.safeParse(value);
                    return result.success
                      ? null
                      : result.error.issues[0].message;
                  }}
                >
                  <Label>
                    Amount <span className="text-danger text-sm">*</span>
                  </Label>
                  <Input placeholder="Enter amount" />
                </TextField>
                <Button className="w-full">Request</Button>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default WithdrawModal;
