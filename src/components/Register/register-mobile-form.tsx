import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterMobileForm() {
  return (
    <Card className="w-full max-w-md mx-auto border-0 bg-BgColor space-y-2">
      <CardContent className="space-y-2 py-2">
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
          <Input
            id="password"
            type="password"
            placeholder="votre mot de passe"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirmPassword">Confirmation de  mot de passe</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="confirmer votre mot de passe"
          />
        </div>
      </CardContent>
      <CardFooter>
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
