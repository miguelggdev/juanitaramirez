const Profile = () => {
  return (
    <section id="perfil" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12 grid md:grid-cols-3 gap-12 items-center">
          <div className="relative md:col-span-1">
            <img
              src="/images/imag3.jpg"
              alt="Emmy Juanita Ramirez Mora"
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi vida es el ritmo de la pista. Como deportista de alto rendimiento, cada entrenamiento y competencia es un compromiso con mi sueño: dar siempre lo mejor de mí para superar mis límites. El patinaje de velocidad es mi pasión y mi lenguaje, donde convierto la disciplina en progreso y los desafíos en triunfos. Esta es la determinación que me impulsa a llegar más lejos cada día, porque cuando pones corazón y pasión, no hay meta que no se pueda alcanzar.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-purple-400">
              <span>#AltoRendimiento</span>
              <span>#PasionSobreRuedas</span>
              <span>#PatinajeDeVelocidad</span>
              <span>#Disciplina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;