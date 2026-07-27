import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-display-l text-foreground">Looks like this page has moved.</h1>
        <p className="mt-4 text-muted-foreground">Let's help you find what you're looking for.</p>
        <Link to="/" className="mt-8 text-signal hover:underline">
          Back to home
        </Link>
      </div>
    </PageTransition>
  );
}
