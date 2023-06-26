import "../styles/normalize.css";
import { Inter } from "next/font/google";
import { RootStyleRegistry, StyledComponentsRegistry } from "@/lib";
import { TopBar } from "./components";
import { Providers } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricky and Morty | Datlo Teste",
  description: "Criado para teste de front-end da Datlo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <RootStyleRegistry>
            <Providers>
              <TopBar />
              {children}
            </Providers>
          </RootStyleRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
