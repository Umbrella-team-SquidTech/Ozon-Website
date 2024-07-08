import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useUserStore from "@/stores/useUser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import formSchema from "@/schemas/LoginSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const { user } = useUserStore();
  console.log(user);
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // REQUEST API
    try {
      console.log(values);
      toast({
        title: "Inscription réussie",
        description: "Vous êtes inscrit avec succès",
        className: "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription",
        className: " text-white font-Outfit py-3 space-y-0 gap-0",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className=" space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="Email">Email</Label>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className=" h-14"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password ">Mot de passe</Label>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            className=" h-14"
                            placeholder="Mot de passe"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 end-2"
                          >
                            {!showPassword ? (
                              <Eye color="#2D3A3A" />
                            ) : (
                              <EyeOff color="#2D3A3A" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-PrimaryColor text-lg hover:bg-SecondaryColor"
              >
                Connexion
              </Button>
              <Link
                to="/account/recover"
                className="inline-block w-full text-center text-sm underline text-muted-foreground "
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
