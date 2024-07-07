import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "@/schemas/RegisterSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function RegisterMobileForm() {
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
    console.log(values);
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (

      <form onSubmit={handleSubmit(onSubmit)} >
      <Card className="w-full max-w-md mx-auto border-0 bg-BgColor space-y-2 shadow-none">
        <CardContent className="space-y-2 py-2  ">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="firstName">Prenom</Label>
              <p className=" text-red-400 ">
                {errors.prenom?.message}
              </p>
              <Input id="firstName" placeholder="Zakaria" 
                {...register("prenom")}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">Nom</Label>
              <p className=" text-red-400">
                {errors.nom?.message}
              </p>
              <Input id="lastName" placeholder="Regueig" {...register("nom")}/>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <p className=" text-red-400">
              {errors.email?.message}
            </p>
            <Input id="email" type="email" placeholder="example@email.com" 
              {...register("email")}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">mot de passe</Label>
            <p className=" text-red-400">
              {errors.password?.message}
            </p>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="votre mot de passe"
                {...register("password")}
              />
              <button
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
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">
              confirmation de mot de passe{" "}
            </Label>
            <p className=" text-red-400">
              {errors.confirmPassword?.message}
            </p>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirmer votre mot de passe"
                {...register("confirmPassword")}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 end-2"
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
          <Button
            type="submit"
            className="w-full bg-SecondaryColor rounded-[100px] p-6 text-base font-[700] font-Outfit"
          >
            S’inscrire
          </Button>
        </CardFooter>
      </Card>
      </form>
   
  );
}