import Quill from "quill";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link,
  List,
  ListCheck,
  ListOrdered,
  Strikethrough,
  Underline,
} from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

const icons = Quill.import("ui/icons") as Record<string, string | object>;

icons.bold = renderToStaticMarkup(
  <Bold className="size-4 group-hover:text-black" />,
);
icons.italic = renderToStaticMarkup(
  <Italic className="size-4 group-hover:text-black" />,
);
icons.underline = renderToStaticMarkup(
  <Underline className="size-4 group-hover:text-black" />,
);
icons.strike = renderToStaticMarkup(
  <Strikethrough className="size-4 group-hover:text-black" />,
);
icons.header = {
  "1": renderToStaticMarkup(
    <Heading1 className="size-4 group-hover:text-black" />,
  ),
  "2": renderToStaticMarkup(
    <Heading2 className="size-4 group-hover:text-black" />,
  ),
  "3": renderToStaticMarkup(
    <Heading3 className="size-4 group-hover:text-black" />,
  ),
};
icons.align = {
  "": renderToStaticMarkup(
    <AlignLeft className="size-4 group-hover:text-black" />,
  ),
  "center": renderToStaticMarkup(
    <AlignCenter className="size-4 group-hover:text-black" />,
  ),
  "right": renderToStaticMarkup(
    <AlignRight className="size-4 group-hover:text-black" />,
  ),
  "justify": renderToStaticMarkup(
    <AlignJustify className="size-4 group-hover:text-black" />,
  ),
};
icons.list = {
  ordered: renderToStaticMarkup(
    <ListOrdered className="size-4 group-hover:text-black" />,
  ),
  bullet: renderToStaticMarkup(
    <List className="size-4 group-hover:text-black" />,
  ),
  check: renderToStaticMarkup(
    <ListCheck className="size-4 group-hover:text-black" />,
  ),
};
icons.link = renderToStaticMarkup(
  <Link className="size-4 group-hover:text-black" />,
);
icons["code-block"] = renderToStaticMarkup(
  <Code2 className="size-4 group-hover:text-black" />,
);

