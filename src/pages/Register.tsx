import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Layout, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate register
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to TeamHub.",
      });
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Column - Visuals */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 z-0" />
        <div className="z-10 text-white p-12 max-w-lg">
          <div className="mb-8 p-3 bg-white/10 rounded-lg w-fit backdrop-blur-sm border border-white/10">
            <Layout className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Join thousands of agile teams.</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Get started with TeamHub today and experience the future of project management.
            Free forever for small teams.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl">Unlimited</h3>
              <p className="text-sm text-blue-100">Projects & Tasks</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl">24/7</h3>
              <p className="text-sm text-blue-100">Support Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
            <p className="text-muted-foreground mt-2">Enter your details to get started.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none" htmlFor="firstName">First name</label>
                <Input id="firstName" required placeholder="John" className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none" htmlFor="lastName">Last name</label>
                <Input id="lastName" required placeholder="Doe" className="h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
              <Input id="email" required type="email" placeholder="name@example.com" className="h-11" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
              <Input id="password" required type="password" className="h-11" />
            </div>

            <Button type="submit" className="w-full h-11 text-base" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4 hover:text-primary font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
