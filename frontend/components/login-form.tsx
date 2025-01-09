import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "@/components/image/logo.png"
import Image from "next/image"
import Link from "next/link"
import ButtonForm from "./button/Button"
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="bg-[#18181b]">
        <CardHeader>
          <div className=" flex justify-center items-center">
          <Image src={Logo} alt="logo" />
          </div>
          
          <CardTitle className="text-2xl text-center text-white ">Entre com sua conta</CardTitle>
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  
                </div>
                <div>
                  <div>
                <Input id="password" type="password" required />
                <div>
                  <Link
                    href="resetpassword"
                    className="ml-auto text-sm underline-offset-4 hover:underline flex justify-end"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                </div>
                </div>
              </div>
              <ButtonForm>
                Login
              </ButtonForm>
              <div className="flex justify-center">
                <Button className="bg-salmao rounded-full w-12 h-12 flex items-center justify-center">
                  G
                </Button>
              </div>

            </div>
            <div className="mt-4 text-center text-sm">
            Ainda não possui conta?
              <Link href="signup" className=" text-[#22C55E]"> Cadastre-se</Link>
              <p className=" text-sm text-[gray]">
              ou faça login pelo Google clicando no G acima.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
