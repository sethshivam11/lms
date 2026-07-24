import {
  Button,
  Chip,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { ChevronRight, XIcon } from "lucide-react";
import {
  categorySchema,
  descriptionSchema,
  nameSchema,
  priceSchema,
  skillSchema,
  subDescriptionSchema,
} from "../schema/course";
import RichTextField from "./RichTextField";
import { useState } from "react";
import type { CourseDetailsFormI } from "../types/course";

function CourseDetailsForm({
  form,
  setForm,
  handleNext,
}: {
  form: CourseDetailsFormI;
  setForm: (form: CourseDetailsFormI) => void;
  handleNext: () => void;
}) {
  const [invalid, setInvalid] = useState(false);
  const [skill, setSkill] = useState("");

  const handleSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    if (form.skills.includes(skill)) return;
    setForm({ ...form, skills: [...form.skills, skill] });
    setSkill("");
  };

  const handleSkillList = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      return;
    }

    const items = Array.from(e.currentTarget.querySelectorAll("button"));
    if (!items.length) return;

    const current = document.activeElement?.closest(
      "button",
    ) as HTMLButtonElement | null;
    if (!current) return;

    const index = items.indexOf(current);
    if (index === -1) return;

    e.preventDefault();

    let nextIndex = index;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % items.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + items.length) % items.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = items.length - 1;
        break;
    }

    items.forEach((item) => (item.tabIndex = -1));

    const next = items[nextIndex];
    next.tabIndex = 0;
    next.focus();
  };

  const handleRemoveSkill = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: string,
  ) => {
    setForm({
      ...form,
      skills: form.skills.filter((skill) => skill !== item),
    });
    const skillsList = e.currentTarget.parentElement;
    if (
      skillsList?.attributes.getNamedItem("aria-label") &&
      skillsList.children.length >= 1
    ) {
      const items = Array.from(skillsList.querySelectorAll("button"));
      const lastElement = items[items.length - 1];
      if (lastElement === e.currentTarget) {
        if (skillsList.children.length >= 2) {
          items[items.length - 2]?.focus();
        } else {
          skillsList.parentNode?.querySelector("input")?.focus();
        }
      } else {
        lastElement?.focus();
      }
    }
  };

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
        <h4 className="text-xl font-poppins font-semibold tracking-tight">Course Details</h4>
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
      <TextField
        name="skills"
        type="text"
        onKeyDown={handleSkill}
        value={skill}
        onChange={(value) => setSkill(value)}
        isDisabled={form.skills.length >= 10}
        validate={(value) => {
          const result = skillSchema.safeParse(value);
          return result.success ? null : result.error.issues[0].message;
        }}
      >
        <Label>Skills</Label>
        <Input placeholder="Skills to be learnt by course" />
        <FieldError />
        <div
          className="flex items-center gap-1 mt-1"
          onKeyDown={handleSkillList}
          aria-label="Skills"
        >
          {form.skills.map((item, index) => (
            <button
              type="button"
              className="rounded-full size-fit cursor-pointer focus-visible:outline-none focus-visible:ring-2 ring-accent"
              tabIndex={index === 0 ? 0 : -1}
              onClick={(e) => handleRemoveSkill(e, item)}
              key={index}
            >
              <Chip className="bg-accent-soft text-accent rounded-full capitalize flex items-center gap-1">
                {item}
                <XIcon size={12} />
              </Chip>
            </button>
          ))}
        </div>
      </TextField>
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
