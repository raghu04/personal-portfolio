import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import Button from "./ui/button";

export const ContactForm = () => {
  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
        <h3 className="text-4xl text-accent">Let's work together</h3>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum
          labore voluptatibus?
        </p>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input type="firstName" placeholder="First name" />
          <Input type="lastName" placeholder="Last name" />
          <Input type="email" placeholder="Email address" />
          <Input type="phone" placeholder="Phone number" />
        </div>
        {/* select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select item</SelectLabel>
              <SelectItem value="1">Item 1</SelectItem>
              <SelectItem value="2">Item 2</SelectItem>
              <SelectItem value="3">Item 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* textarea */}
        <Textarea className="h-[200px]" placeholder="Type your message here." />
        {/* button */}
        <Button size="md" className="max-w-40">
          Send message
        </Button>
      </form>
    </div>
  );
};
