import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <Button>Button</Button>
      <Input color="primary"></Input>
    </div>
  </StrictMode>
);
