import CreatePost from "@/components/HomePage/CreatePost";
import SinglePost from "@/components/HomePage/SinglePost";
import SuggestedEvent from "@/components/HomePage/SuggestedEvent";
import RootLayout from "@/components/RootLayout";
import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";
import HomePagePlaceholder from "@/components/HomePage/HomePagePlaceholder";
import axios from "@/config/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "@/components/LoadingAnimation";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  const token = useToken();
  const { user, isLoading, error } = useUser(token);
  const { toast } = useToast();
  const [loadingPosts, setLoadinPosts] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [suggestedEvent, setSuggestedEvent] = useState(null);
  const [loadingSuggested, setLoadingSuggested] = useState(true);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    setLoadinPosts(true);
    const getPosts = () => {
      axios
        .get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoadinPosts(false);
          setPosts(res.data.data);
        })
        .catch((error) => {
          toast({
            title:
              "Une erreur s'est produite lors de la récupération des posts",
            description: "Veuillez réessayer plus tard",
            variant: "destructive",
          });
          if (error.response.status === 401) {
            navigate("/login");
            toast({
              title: "Veuillez vous reconnecter",
              description: "Votre session a expiré",
              variant: "destructive",
            });
          }
        });
    };
    const getSuggestedEvent = () => {
      setLoadingSuggested(true);
      axios
        .get("/events/location", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoadingSuggested(false);
          setSuggestedEvent(res.data.data[0]); // [2]
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPosts();
    getSuggestedEvent();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        error occured
        <Link to="/login">Go to login</Link>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (loadingPosts || loadingSuggested) {
    return (
      <RootLayout>
        <HomePagePlaceholder />
      </RootLayout>
    );
  }
  return (
    <RootLayout>
      <div className="p-5 pt-0 md:px-20">
        <SuggestedEvent suggestedEvent={suggestedEvent} />
        <CreatePost />
        <div className="pb-[70px] md:pb-0">
          {posts.map((post: PostI) => (
            <SinglePost key={post.id} post={post} />
          ))}
        </div>
      </div>
      {isVisible && <ScrollToTop scrollToTop={scrollToTop} />}
    </RootLayout>
  );
}
