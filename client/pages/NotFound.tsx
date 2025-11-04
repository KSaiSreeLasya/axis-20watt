import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-extrabold mb-2">404</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Oops! Page not found
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
