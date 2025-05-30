import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { lancamentos } from '../data/Lancamentos';

export const ProdutoDestaque = () => {

    const [quantidade, setQuantidade] = useState(0);

    // aqui poderia ter uma API pra pegar produto destaque/lançamentos

    const handleQuantidade = (e) => {
        const valor = e.target.innerHTML;

        if (valor === '+') {
            setQuantidade((q) => q + 1);
        } else if (valor === '-') {
            setQuantidade((q) => (q > 0 ? q - 1 : 0));
        }
    };


    return (
        <section className="min-h-screen pt-20 flex flex-col items-center justify-center bg-pink-50 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-12">
                Descubra novos sabores
            </h1>

            {lancamentos.map((l, index) => (
                <Card
                    key={index}
                    className="w-full max-w-[350px] mx-auto rounded-2xl shadow-lg border-0 bg-white px-4"
                >
                    <CardHeader>
                        <CardTitle className="text-pink-700 text-2xl">{l.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <img
                            src={l.image}
                            alt={l.title}
                            className="w-full max-h-64 object-contain mx-auto hover:scale-125 duration-200 ease-in-out"
                        />
                        <p className="mt-4 text-sm text-gray-600">{l.details}</p>
                        <p className="mt-2 text-lg font-bold text-pink-600 line-through">
                            R$ {l.price.toFixed(2)}
                        </p>
                        <p className="text-2xl font-extrabold text-pink-800">
                            R$ {l.promotion.toFixed(2)}
                        </p>
                    </CardContent>

                    <div className="w-full">


                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button className="w-full bg-transparent text-pink-600 border-2 border-pink-600 hover:bg-pink-600 hover:text-white cursor-pointer">Adicionar ao carrinho</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{l.title}</DialogTitle>
                                        <DialogDescription>
                                            {l.details}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="flex w-full items-center justify-center">
                                        <img src="donuts_coberturachocolate.png" alt="" />

                                    </div>

                                    <div className="w-full h-24 flex gap-4 items-center justify-center">


                                        <Button className="rounded-full w-8 h-8 bg-pink-600 font-bold hover:bg-pink-800 cursor-pointer" onClick={handleQuantidade}>-</Button>

                                        <span className="text-2xl font-semibold">{quantidade}</span>

                                        <Button className="rounded-full w-8 h-8 bg-pink-600 font-bold hover:bg-pink-800 cursor-pointer" onClick={handleQuantidade}>+</Button>


                                    </div>


                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="destructive">Cancelar</Button>
                                        </DialogClose>
                                        <Button type="submit" className="bg-transparent text-pink-600 border-2 border-pink-600 hover:text-white hover:bg-pink-600 cursor-pointer">Finalizar Compra</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>
                    </div>

                </Card>
            ))}
        </section>
    );
};
