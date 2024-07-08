import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import formSchema from "@/schemas/RecoverPassSchema";

export default function RecoverPass() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // REQUEST API
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="h-screen w-screen flex justify-center items-center font-Outfit">
          <div className="border  md:px-0 flex justify-center items-center h-96 rounded-lg w-5/6 md:w-full ">
            <div className="flex flex-col items-center justify-between md:w-[35rem] h-full py-10 md:px-8 w-full gap">
              <h2 className="font-bold text-3xl">Mot de passe oublié ?</h2>
              <p className="text-slate-500 text-base text-center  w-full  ">
                Veuillez entrez l'adresse e-mail que vous avez utilisée pour créer votre
                compte.
              </p>
              <div className=" w-full px-4 md:px-14 flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          required
                          className=" h-14"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="bg-PrimaryColor hover:bg-SecondaryColor text-lg h-14">
                  Envoyer l'email de réinitialisation
                </Button>
              </div>
              <Link to="/login" className="text-gray-800 font-light">
                Retour à la connexion
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
