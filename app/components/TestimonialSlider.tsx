"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "“Excellent work by the guys at wonderIT. They are very proficient at their skillset and have excellent communication. Listening to the client and making small adjustments is something I was especially appreciative of. I couldnt't recommend them more.”",
    author: "Rize HG",
  },
  {
    text: "“WonderIT are a great team! They understood the requirements, communicated effectively and delivered ahead of schedule. Would hire them again anytime. Thanks, guys!”",
    author: "Robert Aguilar",
  },
  {
    text: "“Have had a very positive working relationship with this team - they helped out with numerous Apps Script projects and always done a great job.”",
    author: "Roger Spears",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsFading(false);
    }, 400);
  };

  const goToIndex = (i: number) => {
    if (i === index) return;
    setIsFading(true);
    setTimeout(() => {
      setIndex(i);
      setIsFading(false);
    }, 400);
  };

  if (!isMounted) return <div style={{ minHeight: '350px' }}></div>;

  const uniqueId = "testimonial-gradient-" + index;

  return (
    <section className="py-12 overflow-visible relative testimonials-section">
      <div className="container">
        <h2 className="text-4xl mb-12 text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>
          Client Testimonials for Our <span className="gradient-text">Development Services</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto testimonial-container" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
          
          <div
            className="glass rounded-2xl shadow-xl w-full text-center testimonial-card"
            style={{ 
              width: '100%', 
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
              opacity: isFading ? 0 : 1,
              transform: isFading ? 'translateY(10px)' : 'translateY(0)',
              transition: 'all 0.4s ease-in-out'
            }}
          >
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <svg width="36" height="28" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                <path d="M12.6 36C8.85 36 5.625 34.6125 2.925 31.8375C0.225 29.0625 -1.125 25.5375 -1.125 21.2625C-1.125 17.55 0.3375 13.5375 3.2625 9.225C6.1875 4.9125 10.125 1.8375 15.075 0L17.775 5.4C14.7 6.675 12.1875 8.7 10.2375 11.475C8.2875 14.25 7.3125 16.9875 7.3125 19.6875H13.5V36H12.6ZM39.6 36C35.85 36 32.625 34.6125 29.925 31.8375C27.225 29.0625 25.875 25.5375 25.875 21.2625C25.875 17.55 27.3375 13.5375 30.2625 9.225C33.1875 4.9125 37.125 1.8375 42.075 0L44.775 5.4C41.7 6.675 39.1875 8.7 37.2375 11.475C35.2875 14.25 34.3125 16.9875 34.3125 19.6875H40.5V36H39.6Z" fill={`url(#${uniqueId})`}/>
                <defs>
                  <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b933d6"/>
                    <stop offset="100%" stopColor="#0bf7c9"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <p style={{ fontSize: '18px', marginBottom: '32px', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.8', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 2 }}>
              {testimonials[index].text}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '32px', height: '1.5px', backgroundColor: 'var(--accent-primary)', opacity: 0.6 }}></div>
              <span className="gradient-text uppercase" style={{ fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                {testimonials[index].author}
              </span>
              <div style={{ width: '32px', height: '1.5px', backgroundColor: 'var(--accent-secondary)', opacity: 0.6 }}></div>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="testimonial-dots" style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(i);
                }}
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  border: 'none', 
                  cursor: 'pointer',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span style={{
                  width: index === i ? '32px' : '10px', 
                  height: '10px', 
                  borderRadius: '10px', 
                  backgroundColor: index === i ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  opacity: index === i ? 1 : 0.3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'block'
                }} />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(185, 51, 214, 0.04)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>
    </section>
  );
}
