import { donuts } from '@/data/Donuts';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { useState } from 'react';

export const PrateleiraDonuts = () => {

    const [quantidade, setQuantidade] = useState(0);

    // aqui poderia ter uma API pra pegar produto destaque/lançamentos

    const handleQuantidade = (e: any) => {
        const valor = e.target.innerHTML;

        if (valor === '+') {
            setQuantidade((q: number) => q + 1);
        } else if (valor === '-') {
            setQuantidade((q: number) => (q > 0 ? q - 1 : 0));
        }
    };



    return (
        <section className="w-screen h-screen flex gap-6 justify-center items-center">

            {donuts.map((d, index) => (
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >

                    <Card
                        key={index}
                        className="w-full max-w-[350px] mx-auto rounded-2xl shadow-lg border-0 bg-white px-4"
                    >
                        <CardHeader>
                            <CardTitle className="text-pink-700 text-2xl">{d.title}</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <img
                                src={d.image}
                                alt={d.title}
                                className="w-full max-h-64 object-contain mx-auto hover:scale-125 duration-200 ease-in-out"
                            />
                            <p className="mt-4 text-sm text-gray-600">{d.details}</p>
                            <p className="mt-2 text-lg font-bold text-pink-600 line-through">
                                R$ {d.price.toFixed(2)}
                            </p>
                            <p className="text-2xl font-extrabold text-pink-800">
                                R$ {d.promotion.toFixed(2)}
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
                                            <DialogTitle>{d.title}</DialogTitle>
                                            <DialogDescription>
                                                {d.details}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="flex w-full items-center justify-center">
                                            <img src={d.image} alt="" />

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

                </motion.div>
            ))}

        </section>
    )

}