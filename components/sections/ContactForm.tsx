"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
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

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState(false);
  const [fireConfetti, setFireConfetti] = useState<boolean>(false);

  // handle form submission using sendEmail
  const onSubmit = async (data: FormData) => {
    const result = await sendEmail(data);

    if (result.success) {
      toast.success("Your message has been sent :)");
      setFireConfetti(true);
      setTimeout(() => setFireConfetti(false), 3000);
      // reset form fields
      reset();
      // close modal
      setIsOpen(false);
    } else {
      toast.error("Message could not be sent. Please retry :(");
      console.log(result.message);
    }
  };

  return (
    <div className="relative">
      <header className="text-center">
        <Spotlight>
          <h2 className="relative z-50 text-3xl mb-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            get in touch
          </h2>
        </Spotlight>
      </header>

      <main className="z-10">
        {!isOpen && (
          <div onClick={() => setIsOpen(true)}>
            <PinContainer title="click to email me!" href="#contact">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-red-700 to-rose-600 justify-center items-center">
                  <h3 className="flex max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
                    <span>contact me</span>
                    <span className="ml-1">
                      <MessageCircleHeart className="w-4 h-4" />
                    </span>
                    <p>form under construction. email me directly, please.</p>
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
              className="fixed top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 lg:w-[1/2] md:w-[2/3] w-[2.5/3] bg-red-300 rounded-3xl p-6 shadow-lg z-50 flex flex-col justify-center items-center"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full text-gray-500"
              >
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
                    placeholder="Full Name"
                    className="bg-white"
                    {...register("name", { required: true })}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white"
                    {...register("email", { required: true })}
                  />
                  <Textarea
                    placeholder="Message"
                    rows={4}
                    className="bg-white"
                    {...register("message", { required: true })}
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
      </main>

      {/* confetti component */}
      <Confetti fireConfetti={fireConfetti} />
    </div>
  );
};

export default ContactForm;
