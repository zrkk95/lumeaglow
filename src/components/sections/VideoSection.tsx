import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section id="video-demo" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Voir la lampe <span className="gradient-text">en action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez la magie des couleurs et les mouvements hypnotisants de la Lampe Méduse LumeaGlow
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/10' }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={muted}
              loop
              playsInline
              preload="metadata"
            >
              <source src={`${import.meta.env.BASE_URL}videos/lumeaglow-demo.mp4`} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              aria-label={muted ? 'Activer le son' : 'Couper le son'}
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
