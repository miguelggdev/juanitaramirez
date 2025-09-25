import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from "@/utils/toast";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual Formspree form ID
    const formspreeUrl = "https://formspree.io/f/yourformid"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        showSuccess("¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        showError("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showError("Hubo un error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors text-white" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors text-white" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="bg-white/5 border-white/10 mt-2 focus:border-purple-500 transition-colors text-white" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;