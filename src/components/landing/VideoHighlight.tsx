const VideoHighlight = () => {
  return (
    <section id="video" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            En Plena Acción
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Siente la velocidad y la adrenalina de la competencia. Este es un vistazo a la dedicación y el esfuerzo en cada carrera.
          </p>
        </div>
        <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden border-2 border-purple-800/50">
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="/images/imag1.jpeg"
          >
            {/* Reemplaza este video de ejemplo por el tuyo */}
            <source src="https://videos.pexels.com/video-files/8093321/8093321-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;