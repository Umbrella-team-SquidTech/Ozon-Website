import RootLayout from "@/components/RootLayout";
import useAuth from "@/hooks/useAuth";
export default function HomePage() {
  useAuth();
  return (
    <RootLayout>
      <div className="px-20">hello</div>
    </RootLayout>
  );
}
