import React from 'react';
import COLORS from '../assets/Styles/color';
import './Gallery.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', caption: 'Early run vibes' },
  { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop', caption: 'Strength zone' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', caption: 'Mountain focus' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', caption: 'City sprint' },
  { src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=800&auto=format&fit=crop', caption: 'Gym grind' },
  { src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=800&auto=format&fit=crop', caption: 'Gym grind' },

  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', caption: 'Calm before sets' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', caption: 'Calm before sets' },
  { src: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=800&auto=format&fit=crop', caption: 'Recovery walk' },
  { src: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop', caption: 'Focus and form' },
  { src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop', caption: 'Night track' },
  // Extra images to keep columns filled
  { src: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop', caption: 'Barbell setup' },
  { src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop', caption: 'Pool recovery' },
  { src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop', caption: 'Trail run' },
  { src: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=800&auto=format&fit=crop', caption: 'Box jumps' },
  
  { src: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=800&auto=format&fit=crop', caption: 'Recovery walk' },
  { src: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop', caption: 'Barbell setup' },


  { src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop', caption: 'Yoga balance' },
  { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', caption: 'Battle ropes' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section py-5">
      <div className="gallery-header mb-4">
        <h2 style={{ fontWeight: '700' }}>
          Image <span style={{ color: COLORS.primary }}>Gallery</span>
        </h2>
        <p className="mt-2" style={{ color: COLORS.lightText }}>
          Moments from our workouts, community and coaching sessions.
        </p>
      </div>

      <div className="masonry-wrapper">
        <div className="masonry">
          {images.map((img, idx) => (
            <figure key={idx} className="masonry-item">
              <img src={img.src} alt={img.caption} loading="lazy" />
              <figcaption className="caption">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
