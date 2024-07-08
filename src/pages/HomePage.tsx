import SuggestedEvent from "@/components/HomePage/SuggestedEvent";
import RootLayout from "@/components/RootLayout";
import useAuth from "@/hooks/useAuth";

export default function HomePage() {
  useAuth();
  return (
    <RootLayout>
      <div className="p-5 md:px-20">
        <SuggestedEvent />
      </div>
    </RootLayout>
  );
}
