import SearchBar from './SearchBar';
import './HeroSection.css';

export default function HeroSection({ onSearch }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Aggregating jobs from 5+ sources
        </div>

        <h1 className="hero__title">
          Find Your Dream Job{' '}
          <span className="hero__title-gradient">Across the Web</span>
        </h1>

        <p className="hero__subtitle">
          Carvia searches Findwork, Jooble, Arbeitnow, Jobicy & LinkedIn simultaneously
          so you never miss an opportunity.
        </p>

        <div className="hero__search-wrapper">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-number">5+</div>
            <div className="hero__stat-label">Job Sources</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">1000s</div>
            <div className="hero__stat-label">Jobs Indexed</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number">Real-time</div>
            <div className="hero__stat-label">Search Results</div>
          </div>
        </div>
      </div>
    </section>
  );
}
