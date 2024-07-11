import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "@/schemas/RegisterSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "@/config/axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/stores/useUser";
export function RegisterMobileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useUserStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // REQUEST API
    setIsSubmitting(true);
    try {
      axios
        .post("/register", {
          name: values.nom,
          last_name: values.prenom,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res);

          navigate("/home");
          toast({
            title: "Inscription réussie",
            description: "Vous êtes inscrit avec succès",
            className:
              "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Erreur",
            description: "Une erreur s'est produite lors de l'inscription",
            className: " text-white font-Outfit py-3 space-y-0 gap-0",
            variant: "destructive",
          });
        });
    } catch (err) {
      console.log(err);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription",
        className: " text-white font-Outfit py-3 space-y-0 gap-0",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-full max-w-md sm:max-w-max md:max- mx-auto border-0 bg-BgColor space-y-2 shadow-none px-8 ">
        <CardContent className="space-y-2 py-2  ">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="firstName">Prenom</Label>
              <Input
                id="firstName"
                placeholder="Zakaria"
                {...register("prenom")}
              />
              <p className=" text-red-400 text-xs">{errors.prenom?.message}</p>
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name">Nom</Label>
              <Input
                id="last_name"
                placeholder="Regueig"
                {...register("nom")}
              />
              <p className=" text-red-400 text-xs">{errors.nom?.message}</p>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email")}
            />
            <p className=" text-red-400 text-xs">{errors.email?.message}</p>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">mot de passe</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="votre mot de passe"
                {...register("password")}
              />
              <p className=" text-red-400 text-xs">
                {errors.password?.message}
              </p>
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 end-2"
                type="button"
              >
                {!showPassword ? (
                  <Eye color="#2D3A3A" />
                ) : (
                  <EyeOff color="#2D3A3A" />
                )}
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">
              confirmation de mot de passe{" "}
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirmer votre mot de passe"
                {...register("confirmPassword")}
              />
              <p className=" text-red-400 text-xs">
                {errors.confirmPassword?.message}
              </p>
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 end-2"
                type="button"
              >
                {!showConfirmPassword ? (
                  <Eye color="#2D3A3A" />
                ) : (
                  <EyeOff color="#2D3A3A" />
                )}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pb-2 ">
          {!isSubmitting ? (
            <Button
              type="submit"
              className="w-full h-10 bg-PrimaryColor text-lg hover:bg-SecondaryColor"
            >
              S'inscrire
            </Button>
          ) : (
            <Button
              disabled
              type="submit"
              className="w-full h-14 bg-PrimaryColor text-lg hover:bg-SecondaryColor"
            >
              <div>
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin  fill-PrimaryColor"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
