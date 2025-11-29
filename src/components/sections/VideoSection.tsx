const VideoSection = () => {
  return (
    <section id="video-demo" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Voir la lampe <span className="gradient-text">en action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez la magie des couleurs et les mouvements hypnotisants de la Lampe Méduse AquaGlow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/videos/aquaglow-demo.mp4#t=0.1"
            >
              <source src="/videos/aquaglow-demo.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
