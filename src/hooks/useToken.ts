import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "@/utils/storage";
import { useEffect } from "react";
export default function useToken() {
  const token = getLocalStorage("token");
  const { toast } = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast({
        title: "Vous n'êtes pas connecté",
        description: "Veuillez vous connecter pour accéder à cette page",
        variant: "destructive",
      });
    }
  }, []);
  return token;
}
