import { useEffect } from "react";
import authenticateUser from "@/utils/auth";
import useUserStore from "@/stores/useUser";
import { useToast } from "@/components/ui/use-toast";

export default function useAuth() {
  const { toast } = useToast();
  const { setUser } = useUserStore();
  useEffect(() => {
    const authenticate = async () => {
      const user = await authenticateUser();
      if (!user!.auth) {
        toast({
          title: "Session expirée",
          description: "Veuillez vous reconnecter",
          variant: "destructive",
        });
      }
      setUser(user as UserI);
    };
    authenticate();
  }, []);
}
