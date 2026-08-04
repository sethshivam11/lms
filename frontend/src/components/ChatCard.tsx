import { Avatar, Button, Dropdown, Input, Label } from "@heroui/react";
import { Loader2, Paperclip, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import type { MessageI } from "../types/message";
import InfiniteScroll from "react-infinite-scroll-component";

function ChatCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollHeightRef = useRef<number>(0);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [attachment, setAttachment] = useState("");

  const chat = {
    cover:
      "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1780987669/lms/course/yndzt0xxjwmgkyrucwqy.jpg",
    name: "React.js",
    tagline: "React Tutorial",
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageI[]>([]);

  const handleSelect = (key: string) => {
    console.log(key);
    setAttachment(key);
    inputRef.current?.click();
  };

  const fetchMore = () => {
    if (!containerRef.current) return;
    const older = Array.from(
      { length: messages.length === 0 ? 20 : 10 },
      (_, i) => ({
        id: Date.now() + i,
        avatar: "/avatar-small.png",
        user: i.toString().includes("1") || i.toString().includes("5") ? 0 : 2,
        name: "Raghav",
        message: `Old message ${messages.length + i}`,
        attachment: null,
        created_at: new Date().toISOString(),
      }),
    );

    const prevHeight = containerRef.current?.scrollHeight;

    setMessages((prev) => [...prev, ...older]);

    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const newHeight = containerRef.current.scrollHeight;

      containerRef.current.scrollTop += newHeight - prevHeight;
    });
  };

  const handleSend = () => {
    if (!containerRef.current) return;
    const newMessage = {
      id: Date.now() + messages.length,
      avatar: "/avatar-small.png",
      user: 0,
      name: "Raghav",
      message,
      attachment: null,
      created_at: new Date().toISOString(),
    };

    setMessage("");
    inputRef.current?.focus();
    setMessages((prev) => [newMessage, ...prev]);

    requestAnimationFrame(() => {
      if (!containerRef.current) return;

      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "instant",
      });
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!scrollHeightRef) return;
    containerRef.current.scrollTo({
      top: scrollHeightRef.current,
      behavior: "instant",
    });
  }, [messages]);

  return (
    <div className="flex flex-col md:col-span-3">
      <div className="flex items-center gap-2 p-3 border-b">
        <Avatar className="rounded-full">
          <Avatar.Image src={chat.cover} />
          <Avatar.Fallback>S</Avatar.Fallback>
        </Avatar>
        <div>
          <p className=" font-outfit font-medium leading-4 text-xl">
            {chat.name}
          </p>
          <span className="text-sm text-muted">{chat.tagline}</span>
        </div>
      </div>
      <div
        className="w-full max-h-[60vh] p-2 overflow-y-auto flex-1"
        ref={containerRef}
        id="messages-container"
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMore}
          hasMore={messages.length < 100}
          loader={<Loader2 className="animate-spin" />}
          scrollableTarget="messages-container"
          inverse={true}
          className="flex flex-col-reverse gap-2"
        >
          {messages.map((item, index) => (
            <MessageBubble
              message={item}
              ref={index === messages.length - 1 ? lastMessageRef : null}
              key={item.id}
            />
          ))}
        </InfiniteScroll>
      </div>
      <div className="flex items-center gap-2 p-3 border-t">
        <Dropdown>
          <Button size="sm" variant="ghost" isIconOnly>
            <Paperclip />
          </Button>
          <input
            accept={attachment}
            className="size-0 opacity-0"
            ref={inputRef}
          />
          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => handleSelect(key.toString())}>
              <Dropdown.Item id="image" textValue="Image">
                <Label>Image</Label>
              </Dropdown.Item>
              <Dropdown.Item id="video" textValue="Video">
                <Label>Video</Label>
              </Dropdown.Item>
              <Dropdown.Item id="audio" textValue="Audio">
                <Label>Audio</Label>
              </Dropdown.Item>
              <Dropdown.Item id="document" textValue="Document">
                <Label>Document</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
        <Input
          placeholder="Your message here..."
          ref={inputRef}
          value={message}
          autoFocus
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
        />
        <Button size="sm" onClick={handleSend} isIconOnly>
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default ChatCard;
