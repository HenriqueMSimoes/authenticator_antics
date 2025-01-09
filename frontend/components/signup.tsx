import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import ButtonForm from "./button/Button"

export function Signup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="bg-[#18181b]">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastrar</CardTitle>
         
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input id="password" type="password" required />

                <div className="flex items-center">
                  <Label htmlFor="passwordconfirm">Confirmação de senha</Label>
                </div>
                <Input id="passwordconfirm" type="password" required />

              </div>
              <ButtonForm>
                Cadastrar
              </ButtonForm>
            </div>
            <div className="mt-4 text-center text-sm">
            Já possui conta? <Link href="login" className=" text-link">Faça Login</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
