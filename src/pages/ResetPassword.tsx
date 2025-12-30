
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ResetPassword = () => {
  const [sent, setSent] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleReset}
        className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 space-y-6 border animate-scale-in"
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {sent ? (
          <div className="text-center text-green-600 py-3 font-medium">
            An email with reset instructions has been sent.
          </div>
        ) : (
          <>
            <Input required type="email" name="email" placeholder="Your email" className="mb-2" />
            <Button type="submit" className="w-full flex items-center justify-center">
              <Mail className="mr-2" size={20} />
              Send Reset Email
            </Button>
          </>
        )}
        <div className="flex justify-end mt-4 text-xs">
          <Link to="/login" className="text-muted-foreground hover:underline">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
