import useUserStore from "@/stores/useUser";
import { useState, useEffect } from "react";
import axios from "@/config/axios";

export default function useUser(token: string) {
  const { setUser, user } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // TODO: refactor to a function that returns the connected user from the token

  function getUser() {
    axios
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }
  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      setIsLoading(false);
    }
  }, []);
  return { user, isLoading, error };
}
