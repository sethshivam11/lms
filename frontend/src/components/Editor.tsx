import { forwardRef, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../config/quill-icons";
import { ToolbarButton } from "./ToolbarButton";
import EditorInfo from "./EditorInfo";
import { cn } from "@heroui/styles";

interface EditorProps {
  id?: string;
  value?: string;
  readOnly?: boolean;
  className?: string;
  isInvalid?: boolean;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (content: string) => void;
}

const Editor = forwardRef<Quill, EditorProps>(
  (
    {
      id = "",
      value = "",
      isInvalid,
      readOnly = false,
      placeholder = "Write something...",
      className = "",
      onBlur,
      onChange,
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);
    const onChangeRef = useRef(onChange);
    const onBlurRef = useRef(onBlur);

    const handleToolbarKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
        return;
      }

      const items = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>(
          "button, .ql-picker-label",
        ),
      );

      if (!items.length) return;

      const current = (document.activeElement as HTMLElement)?.closest(
        "button, .ql-picker-label, .ql-picker-item",
      ) as HTMLElement | null;

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
        case "ArrowDown":
          if (current.className.includes(".ql-picker-item")) {
            console.log("I ran");
          }
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

    useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
      if (!editorRef.current || quillRef.current) return;

      const editorElement = document.createElement("div");
      editorRef.current.appendChild(editorElement);

      const quill = new Quill(editorElement, {
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarRef.current,
          },
          keyboard: {
            bindings: {
              tab: {
                key: "Tab",
                handler: function () {
                  return true;
                },
              },
            },
          },
        },
        placeholder,
        readOnly,
      });

      quillRef.current = quill;

      if (value) {
        quill.root.innerHTML = value;
      }

      quill.on("text-change", () => {
        onChangeRef.current?.(quill.root.innerHTML);
      });

      quill.on("selection-change", (range) => {
        const isFocused = range !== null;

        setFocused(isFocused);

        if (!isFocused) {
          onBlurRef.current?.();
        }
      });

      quill.keyboard.addBinding({ ctrlKey: true, key: "[" }, () => {
        quill.format("indent", "-1");
        return true;
      });

      quill.keyboard.addBinding({ ctrlKey: true, key: "]" }, () => {
        quill.format("indent", "+1");
        return true;
      });

      if (typeof ref === "function") ref(quill);
      else if (ref) ref.current = quill;

      return () => {
        quillRef.current = null;
        editorRef.current?.replaceChildren();
      };
    }, []);

    useEffect(() => {
      quillRef.current?.enable(!readOnly);
    }, [readOnly]);

    useEffect(() => {
      const quill = quillRef.current;
      if (!quill) return;
      if (quill.root.innerHTML !== value) {
        quill.root.innerHTML = value;
      }
    }, [value]);

    return (
      <div
        data-invalid={isInvalid}
        className={`shadow-sm bg-white transition-colors rounded-field ring-2 ${focused ? "ring-accent data-[invalid='true']:ring-danger bg-white" : "ring-transparent data-[invalid='true']:ring data-[invalid='true']:ring-danger hover:bg-field-hover"}`}
      >
        <div
          className="flex! flex-wrap justify-end border-none! w-full! gap-4 max-sm:flex-nowrap"
          ref={toolbarRef}
          aria-label="Formatting Toolbar"
        >
          <div
            className="flex flex-wrap flex-1 gap-2 border-none! p-0! px-1! py-2! max-sm:flex-nowrap max-sm:overflow-x-scroll"
            aria-label="Text Formatting"
            // role="toolbar"
            onKeyDown={handleToolbarKeys}
          >
            <div className="rounded-3xl h-9 inline-flex">
              <ToolbarButton
                className="ql-bold rounded-l-3xl"
                separator={true}
                tabIndex={0}
              />
              <ToolbarButton
                className="ql-italic"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-underline"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-strike rounded-r-3xl"
                tabIndex={-1}
              />
            </div>
            <div className="rounded-3xl h-9 inline-flex">
              <ToolbarButton
                className="ql-align rounded-l-3xl"
                value=""
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-align"
                value="center"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-align"
                value="right"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-align rounded-r-3xl"
                value="justify"
                tabIndex={-1}
              />
            </div>
            <div className="rounded-3xl h-9 inline-flex">
              <ToolbarButton
                className="ql-header rounded-l-3xl"
                value="1"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-header"
                value="2"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-header rounded-r-3xl"
                value="3"
                tabIndex={-1}
              />
            </div>
            <div className="rounded-3xl h-9 inline-flex">
              <ToolbarButton
                className="ql-list rounded-l-3xl"
                value="ordered"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-list rounded-r-3xl"
                value="bullet"
                tabIndex={-1}
              />
            </div>
            <div className="rounded-3xl h-9 inline-flex">
              <ToolbarButton
                className="ql-link rounded-l-3xl"
                separator={true}
                tabIndex={-1}
              />
              <ToolbarButton
                className="ql-code-block rounded-r-3xl"
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="flex py-2 gap-2" aria-label="Formatting Toolbar">
            <select
              className="ql-size"
              aria-label="Text Size"
              name="text-size"
              role="toolbar"
              defaultValue=""
            >
              <option value="small">S</option>
              <option value="">M</option>
              <option value="large">L</option>
              <option value="huge">XL</option>
            </select>
            <EditorInfo />
          </div>
        </div>
        <div
          id={id}
          ref={editorRef}
          aria-label="description"
          className={cn("editor-container", className)}
        />
      </div>
    );
  },
);

export default Editor;
