import { Button } from "@/components/ui/button";
import { Menu, Navigation } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <main>
            <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
                {/* logo big donuts */}
                <img src="Logo.png" alt="Logo Big Bite Donuts" className="h-10 w-auto" />

                {/* menu - desktop */}
                <ul className="hidden md:flex gap-6 text-base font-medium text-pink-600 items-center">
                    <li>
                        <a href="#menu" className="inline-block transition-all hover:text-pink-800 hover:scale-105">Menu</a>
                    </li>
                    <li>
                        <a href="#sobre" className="inline-block transition-all hover:text-pink-800 hover:scale-105">Sobre nós</a>
                    </li>
                    <li>
                        <a
                            href="#localizacao"
                            className="inline-flex gap-2 items-center transition-all hover:text-pink-800 hover:scale-105"
                        >
                            Localização <Navigation size={20} />
                        </a>
                    </li>
                    <li>
                        <Button variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                            Contato
                        </Button>
                    </li>
                </ul>


                {/* menu - mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Abrir menu"
                >
                    <Menu className="text-pink-600" />
                </button>
            </nav>

            {/* menu aberto - mobile */}
            {mobileOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-sm text-pink-600 font-medium">
                    <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
                    <a href="#sobre" onClick={() => setMobileOpen(false)}>Sobre nós</a>
                    <a href="#localizacao" onClick={() => setMobileOpen(false)}>Localização</a>
                    <Button
                        variant="outline"
                        className="border-pink-600 text-pink-600 hover:bg-pink-50"
                        onClick={() => setMobileOpen(false)}
                    >
                        Contato
                    </Button>
                </div>
            )}
        </main>
    );
}