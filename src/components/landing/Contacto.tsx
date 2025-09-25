import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ponte en Contacto
          </h2>
          <p className="text-gray-300 mb-8">
            ¿Interesado en una colaboración, patrocinio o simplemente quieres saludar? Envíame un mensaje.
          </p>
          <form action="mailto:juanitaramirezmora@gmail.com" method="POST" encType="text/plain" className="space-y-6 text-left">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" type="text" required className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors" />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" name="message" rows={4} required className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors" />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;