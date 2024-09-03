import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      VISITOR WEBSITE - NOT APP
      <Button>
        <Link href='/dashboard'>Go to Dashboard</Link>
      </Button>
    </main>
  );
}
