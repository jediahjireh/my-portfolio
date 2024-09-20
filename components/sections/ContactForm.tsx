import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircleHeart } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";
import Spotlight from "../containers/Spotlight";
import Confetti from "../ui/Confetti";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // confetti firing state
  const [fireConfetti, setFireConfetti] = useState<boolean>(false);

  // get the access key from the .env file
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  // handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // ensure accessKey is not undefined
    if (!accessKey) {
      toast.error("Invalid tokens");
      return;
    }

    // create formData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    // use the access key from .env
    formData.append("access_key", accessKey);

    // convert formData to object and then to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // send data to web3forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Your message has been sent :)");
      // trigger confetti
      setFireConfetti(true);
      // reset confetti trigger after a short delay
      setTimeout(() => setFireConfetti(false), 3000);

      // reset form after successful submission
      setName("");
      setEmail("");
      setMessage("");
      setIsOpen(false);
    } else {
      toast.error("Message could not be sent. Please retry :(");
    }
  }

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <Spotlight>
          <h2 className="text-3xl mb-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            get in touch
          </h2>
        </Spotlight>
      </div>

      {!isOpen && (
        <div onClick={() => setIsOpen(true)}>
          <PinContainer title="click to email me!" href="#contact">
            <div
              onClick={() => setIsOpen(true)}
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
            >
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-red-700 to-rose-600 justify-center items-center">
                <h3 className="flex max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                  <span>contact me</span>
                  <span className="ml-1">
                    <MessageCircleHeart className="w-4 h-4" />
                  </span>
                </h3>
              </div>
            </div>
          </PinContainer>
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            className="fixed top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-1/2 bg-red-300 rounded-3xl p-6 shadow-lg z-50 flex flex-col justify-center items-center"
          >
            <form onSubmit={handleSubmit} className="w-full text-gray-500">
              <div className="bg-red-200 rounded-2xl p-4 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/contact-image.png"
                    alt="Contact image"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <span className="font-semibold text-red-800 text-xl">
                    Jediah Jireh Naicker
                  </span>
                </div>
                <Input
                  placeholder="Name"
                  className="bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  placeholder="Message"
                  className="bg-white"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 text-lg"
                >
                  Send
                </Button>
              </div>
            </form>
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 rounded-full bg-red-500 hover:bg-red-600 text-white p-3.5"
            >
              X
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></motion.div>
      )}
      {/* confetti component */}
      <Confetti fireConfetti={fireConfetti} />
    </div>
  );
}
