import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { ChevronRight } from "lucide-react";
import {
  categorySchema,
  descriptionSchema,
  levelSchema,
  nameSchema,
  priceSchema,
  subDescriptionSchema,
} from "../schema/course";
import RichTextField from "./RichTextField";
import { useState } from "react";

export interface FormI {
  name: string;
  subDescription: string;
  description: string;
  category: string;
  level: string;
  skills: string[];
  price: string;
}

function CourseDetailsForm({
  form,
  setForm,
  handleNext,
}: {
  form: FormI;
  setForm: (form: FormI) => void;
  handleNext: () => void;
}) {
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = descriptionSchema.safeParse(form.description);
    if (result.success) {
      return handleNext();
    }
    setInvalid(true);
  };

  return (
    <Form
      id="course-details"
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit}
      onInvalid={() => setInvalid(true)}
    >
      <div>
        <h4 className="text-xl font-semibold tracking-tight">Course Details</h4>
        <p className="text-muted text-sm">Describe your course</p>
      </div>
      <TextField
        name="name"
        type="text"
        value={form.name}
        onChange={(value) => setForm({ ...form, name: value })}
        validate={(value) => {
          const result = nameSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
        autoComplete="name"
      >
        <Label>
          Name <span className="text-danger">*</span>
        </Label>
        <Input placeholder="Name of the course" />
        <FieldError />
      </TextField>
      <TextField
        name="subDescription"
        type="text"
        value={form.subDescription}
        onChange={(value) => setForm({ ...form, subDescription: value })}
        validate={(value) => {
          const result = subDescriptionSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>
          Sub Description <span className="text-danger">*</span>
        </Label>
        <Input placeholder="Describe your course in a line" />
        <FieldError />
      </TextField>
      <RichTextField
        label={
          <>
            Description <span className="text-danger">*</span>
          </>
        }
        value={form.description}
        onChange={(value) => setForm({ ...form, description: value })}
        invalid={invalid}
        placeholder="Explain this course"
        validate={(value) => {
          const result = descriptionSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      />
      <TextField
        name="category"
        type="text"
        value={form.category}
        onChange={(value) => setForm({ ...form, category: value })}
        validate={(value) => {
          const result = categorySchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>
          Category <span className="text-danger">*</span>
        </Label>
        <Input placeholder="Provide a category to this course" />
        <FieldError />
      </TextField>
      <Select
        name="level"
        value={form.level}
        onChange={(value) =>
          setForm({ ...form, level: value?.toString() || "beginner" })
        }
        validate={(value) => {
          const result = levelSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>
          Level <span className="text-danger">*</span>
        </Label>
        <Select.Trigger>
          <Select.Value className="capitalize" />
          <Select.Indicator />
        </Select.Trigger>
        <FieldError />
        <Select.Popover>
          <ListBox>
            {["beginner", "intermediate", "advanced"].map((item, index) => (
              <ListBox.Item
                id={item}
                textValue={item}
                key={index}
                className="capitalize"
              >
                {item}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
      <TextField
        name="price"
        type="text"
        value={form.price}
        onChange={(value) => setForm({ ...form, price: value })}
        validate={(value) => {
          const result = priceSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>Price</Label>
        <Input placeholder="Value of this course" />
        <Description>Enter 0 if you want this course to be free</Description>
        <FieldError />
      </TextField>
      <div className="flex justify-end gap-2">
        <Button type="submit">
          Next
          <ChevronRight />
        </Button>
      </div>
    </Form>
  );
}

export default CourseDetailsForm;
