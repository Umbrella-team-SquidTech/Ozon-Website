import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Link } from "react-router-dom";

import FormSchema from "@/schemas/ValidateEmailSchema";

export default function ValidateRegisterPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="h-screen flex justify-center items-center font-Outfit">
          <div className="border flex justify-center items-center h-96 rounded-lg">
            <div className="flex flex-col items-center justify-between w-[35rem] h-full py-10 px-8 gap">
              <h2 className="font-bold text-3xl text-PrimaryColor">
                Une dernière étape !
              </h2>
              <p className="text-slate-500 text-base text-center max-w-[22rem]">
                Entrez le code à 6 chiffres que vous avez reçu sur votre boite
                mail.
              </p>
              <div className=" w-full px-14 flex flex-col gap-4 justify-center items-center">
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup className="flex gap-3 justify-center items-center">
                            <InputOTPSlot
                              index={0}
                              className="border rounded-lg"
                            />
                            <InputOTPSlot
                              index={1}
                              className="border rounded-lg"
                            />
                            <InputOTPSlot
                              index={2}
                              className="border rounded-lg"
                            />
                            <InputOTPSlot
                              index={3}
                              className="border rounded-lg"
                            />
                            <InputOTPSlot
                              index={4}
                              className="border rounded-lg"
                            />
                            <InputOTPSlot
                              index={5}
                              className="border rounded-lg"
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-[80%] bg-PrimaryColor hover:bg-SecondaryColor "
                >
                  Continuer
                </Button>
              </div>
              <Link to="/login" className="text-gray-800 font-light text-sm">
                Retour à la connexion
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
