'use client';

import { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  link: string;
  image: string | null;
  stack: string;
  category: string;
  content: string;
}

function getPerPage(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 4;
  return 6;
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Sync perPage with window width and reset to page 0
  useEffect(() => {
    function handleResize() {
      const next = getPerPage(window.innerWidth);
      setPerPage(prev => {
        if (prev !== next) setPage(0);
        return next;
      });
    }
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / perPage);
  const slice = projects.slice(page * perPage, page * perPage + perPage);

  function navigate(dir: 'next' | 'prev') {
    if (animating) return;
    if (dir === 'next' && page >= totalPages - 1) return;
    if (dir === 'prev' && page <= 0) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(p => dir === 'next' ? p + 1 : p - 1);
      setAnimating(false);
    }, 280);
  }

  function goTo(i: number) {
    if (animating || i === page) return;
    setDirection(i > page ? 'next' : 'prev');
    setAnimating(true);
    setTimeout(() => {
      setPage(i);
      setAnimating(false);
    }, 280);
  }

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === 'next' ? '-40px' : '40px'})`
      : 'translateX(0)',
    transition: 'opacity 0.28s ease, transform 0.28s ease',
  };

  return (
    <div>
      {/* Cards grid */}
      <div style={slideStyle} className="carousel-grid">
        {slice.map((project, i) => (
          <ProjectCard key={`${page}-${i}`} project={project} />
        ))}
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '56px',
      }}>
        {/* Prev button */}
        <button
          onClick={() => navigate('prev')}
          disabled={page === 0 || animating}
          className="carousel-nav-btn"
          aria-label="Previous page"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Prev
        </button>

        {/* Dot indicators */}
        <div className="carousel-dots-wrapper" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`carousel-dot${i === page ? ' active' : ''}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => navigate('next')}
          disabled={page >= totalPages - 1 || animating}
          className="carousel-nav-btn"
          aria-label="Next page"
        >
          Next
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Page counter */}
      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
        Page {page + 1} of {totalPages} · {projects.length} projects
      </p>
    </div>
  );
}
