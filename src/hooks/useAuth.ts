import { useEffect } from "react";
import { authenticateUser } from "@/utils/auth";
import useUserStore from "@/stores/useUser";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function useAuth() {
  const { toast } = useToast();
  const { setUser, user } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.auth) return;
    const authenticate = async () => {
      const user = await authenticateUser();
      if (!user!.auth) {
        // TODO : redirect to login page
        // // navigate("/login");
        // // toast({
        // //   title: "Session expirée",
        // //   description: "Veuillez vous reconnecter",
        // //   variant: "destructive",
        // // });
      }
      setUser(user as UserI);
    };
    authenticate();
  }, []);
}
