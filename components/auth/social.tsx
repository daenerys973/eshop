import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
// import { default_login_redirect } from "@/routes";

const Social = () => {
  const onClickSocial = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <CardFooter className="flex  gap-2">
      <Button
        className="w-full"
        variant="outline"
        onClick={() => onClickSocial("google")}
      >
        <FaGoogle className="pr-2" size={25} />
        <span className="text-xs">Google</span>
      </Button>

      <Button
        className="w-full"
        variant="outline"
        onClick={() => onClickSocial("github")}
      >
        <FaGithub className="pr-2" size={25} />
        <span className="text-xs">GitHub</span>
      </Button>
    </CardFooter>
  );
};

export default Social;
