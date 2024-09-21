"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";
import Spotlight from "../containers/Spotlight";
import Confetti from "../ui/Confetti";
import toast from "react-hot-toast";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState(false);
  const [fireConfetti, setFireConfetti] = useState<boolean>(false);

  // define functions to handle modal state
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
      closeModal();
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
            get in touch!
          </h2>
        </Spotlight>
      </header>

      <main className="z-10">
        {!isOpen && (
          <Link
            href="#contact"
            className="relative group/pin z-50 cursor-pointer"
            onClick={openModal}
          >
            <PinContainer title="click to email me :)" />
          </Link>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              className="pointer-events-auto fixed top-1/4 left-[15%] -translate-x-1/2 -translate-y-1/2 w-[70%] bg-red-300 rounded-3xl p-6 shadow-lg z-50 flex flex-col justify-center items-center"
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
                onClick={closeModal}
                className="absolute -top-3 -right-3 rounded-full bg-red-500 hover:bg-red-600 text-white p-3.5"
              >
                X
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* dimmed background to focus user attention on modal */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            // close backdrop when modal clicked
            onClick={closeModal}
          ></motion.div>
        )}
      </main>

      {/* confetti component */}
      <Confetti fireConfetti={fireConfetti} />
    </div>
  );
};

export default ContactForm;
