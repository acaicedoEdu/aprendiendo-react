import { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import autoAnimate from "@formkit/auto-animate";

export const IsConnectEmail: React.FC = () => {
  const [connectToEmail, setConnectToEmail] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);

  const animaRefSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!animaRefSection.current) return;
    autoAnimate(animaRefSection.current);
  }, [animaRefSection]);
  return (
    <section ref={animaRefSection} className="flex items-center justify-between px-3.5 py-5">
      <div className="flex items-center gap-1.5">
        <Switch
          id="connect-email"
          checked={connectToEmail}
          onCheckedChange={setConnectToEmail}
          className="data-[state=checked]:bg-[#b83f45] h-6"
        />
        <Label htmlFor="connect-email" className="text-lg">
          Conectar con correo
        </Label>
      </div>
      {connectToEmail && (
        <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Mail className="h-3.5 w-3.5" />
              Seleccionar correo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Seleccionar correo</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
