import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

export function RegisterMobileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <Card className="w-full max-w-md mx-auto border-0 bg-BgColor space-y-2 shadow-none">
      <CardContent className="space-y-2 py-2  ">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="firstName">Prenom</Label>
            <Input id="firstName" placeholder="Zakaria" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" placeholder="Regueig" />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">mot de passe</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="votre mot de passe"
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
          <Label htmlFor="confirmPassword">confirmation de mot de passe </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="confirmer votre mot de passe"
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
  );
}
