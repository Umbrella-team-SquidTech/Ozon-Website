import RootLayout from "@/components/RootLayout";
import useAuth from "@/hooks/useAuth";
export default function HomePage() {
  useAuth();
  return (
    <RootLayout>
      <div>hello</div>
    </RootLayout>
  );
}
