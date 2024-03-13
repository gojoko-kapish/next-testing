import { Button } from "@/components/ui/button";
import { MainNavigationMenu } from "./test";
import { ModeToggle } from "@/components/theme";

export default function Home() {
  return (
    <main>
      <MainNavigationMenu />
      <ModeToggle />
    </main>
  );
}
