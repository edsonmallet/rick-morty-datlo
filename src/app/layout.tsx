import "../styles/normalize.css";
import { RootStyleRegistry, StyledComponentsRegistry } from "@/lib";
import { TopBar } from "../components";
import { Providers } from "../utils";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

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
      <body className={font.className}>
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
