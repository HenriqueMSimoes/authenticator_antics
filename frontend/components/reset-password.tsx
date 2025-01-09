import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ButtonForm from "./button/Button"
export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="bg-[#18181b]">
        <CardHeader>
          
          <CardTitle className="text-2xl text-center text-white ">Solicitar troca de senha</CardTitle>
          <CardDescription className=" text-center">
          
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              
              <ButtonForm>
                Enviar
              </ButtonForm>
              

            </div>
          
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
