import { experiences } from '../../data/experienceData';
import { calculateDuration, formatDisplayDate } from '../../utils/dateUtils';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp) => {
            const duration = calculateDuration(exp.startDate, exp.endDate, exp.isPresent);
            const startFormatted = formatDisplayDate(exp.startDate);
            const endFormatted = exp.isPresent ? 'Present' : formatDisplayDate(exp.endDate);

            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-icon" aria-hidden="true">
                    <FiBriefcase size={16} />
                  </div>
                  <div className="marker-line" aria-hidden="true" />
                </div>

                <div className="timeline-content glass-panel">
                  <div className="exp-header">
                    <div className="exp-role-group">
                      <div className="exp-title-row">
                        <h3 className="exp-role">{exp.role}</h3>
                      </div>

                      <div className="exp-company-row">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-company-link"
                          >
                            <span>{exp.company}</span>
                            <FiExternalLink size={13} className="ext-icon" />
                          </a>
                        ) : (
                          <span className="exp-company-name">{exp.company}</span>
                        )}
                        <span className="exp-dot-divider">•</span>
                        <span className="exp-type-badge">{exp.employmentType}</span>
                        {exp.location && (
                          <>
                            <span className="exp-dot-divider">•</span>
                            <span className="exp-location">
                              <FiMapPin size={13} className="loc-icon" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="exp-date-box">
                      <div className="exp-date-range">
                        <FiCalendar size={14} className="calendar-icon" />
                        <time dateTime={exp.startDate}>{startFormatted}</time>
                        <span>—</span>
                        <span>{endFormatted}</span>
                      </div>
                      <div className="exp-duration-tag">
                        <span>{duration}</span>
                      </div>
                    </div>
                  </div>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="exp-highlights">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="highlight-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="exp-tech-stack">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="exp-tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
