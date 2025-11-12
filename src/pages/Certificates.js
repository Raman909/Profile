import React, { useState } from 'react';

const Certificates = ({ isDarkMode }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Web Development Training",
      issuer: "Internshala Trainings",
      date: "June 5, 2024",
      grade: "Top Performer",
      description: "Certificate of completion for the Web Development Course, awarded to Raman Mishra with Grade A, issued on June 5, 2024, by Internshala Trainings in partnership with Skill India and NSDC.",
      image: "/certificates/C1.png"
    },
    {
      id: 2,
      title: "Generative AI Virtual Internship",
      issuer: "AICTE EduSkills",
      date: "January - March 2025",
      grade: null,
      description: "Certificate of Virtual Internship in Generative AI, completed by Raman Kumar Mishra from Meerut Institute of Engineering & Technology, with curriculum provided by Google Cloud. Awarded for 10 weeks of successful completion during January - March 2025.",
      image: "/certificates/C2.png"
    },
    {
      id: 3,
      title: "Web Full Stack Developer",
      issuer: "AICTE EduSkills",
      date: "April - June 2025",
      grade: null,
      description: "Certificate of Virtual Internship for Web Full Stack Developer Virtual Internship, completed by Raman Kumar Mishra from Meerut Institute of Engineering & Technology. Awarded for 10 weeks of successful completion during April - June 2025.",
      image: "/certificates/C3.png"
    },
    {
      id: 4,
      title: "Web Development Course",
      issuer: "Scholiverse Educare",
      date: "June 5, 2024",
      grade: "Grade A",
      description: "Certificate of completion for the Web Development Course, awarded to Raman Mishra with Grade A, issued on June 5, 2024, by Internshala Trainings in partnership with Skill India and NSDC.",
      image: "/certificates/C4.png"
    }
  ];

  const openPreview = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closePreview = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates">
      <div className="certificates-background">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">My Certificates</h1>
            <p className="page-subtitle">
              Here are my professional certificates and achievements that showcase my learning journey and expertise.
            </p>
          </div>

          <div className="certificates-grid">
            <div className="certificate-card" onClick={() => openPreview(certificates[0])}>
              <div className="certificate-image">
                <img src={certificates[0].image} alt={certificates[0].title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificates[0].title}</h3>
                <p className="certificate-issuer">{certificates[0].issuer}</p>
                <p className="certificate-description">{certificates[0].description}</p>
                 <div className="certificate-meta">
                   <span className="certificate-date">{certificates[0].date}</span>
                   {certificates[0].grade && <span className="certificate-grade">{certificates[0].grade}</span>}
                 </div>
                <button className="preview-btn">Preview Certificate</button>
              </div>
            </div>

            <div className="certificate-card" onClick={() => openPreview(certificates[1])}>
              <div className="certificate-image">
                <img src={certificates[1].image} alt={certificates[1].title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificates[1].title}</h3>
                <p className="certificate-issuer">{certificates[1].issuer}</p>
                <p className="certificate-description">{certificates[1].description}</p>
                 <div className="certificate-meta">
                   <span className="certificate-date">{certificates[1].date}</span>
                   {certificates[1].grade && <span className="certificate-grade">{certificates[1].grade}</span>}
                 </div>
                <button className="preview-btn">Preview Certificate</button>
              </div>
            </div>

            <div className="certificate-card" onClick={() => openPreview(certificates[2])}>
              <div className="certificate-image">
                <img src={certificates[2].image} alt={certificates[2].title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificates[2].title}</h3>
                <p className="certificate-issuer">{certificates[2].issuer}</p>
                <p className="certificate-description">{certificates[2].description}</p>
                 <div className="certificate-meta">
                   <span className="certificate-date">{certificates[2].date}</span>
                   {certificates[2].grade && <span className="certificate-grade">{certificates[2].grade}</span>}
                 </div>
                <button className="preview-btn">Preview Certificate</button>
              </div>
            </div>

            <div className="certificate-card" onClick={() => openPreview(certificates[3])}>
              <div className="certificate-image">
                <img src={certificates[3].image} alt={certificates[3].title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificates[3].title}</h3>
                <p className="certificate-issuer">{certificates[3].issuer}</p>
                <p className="certificate-description">{certificates[3].description}</p>
                 <div className="certificate-meta">
                   <span className="certificate-date">{certificates[3].date}</span>
                   {certificates[3].grade && <span className="certificate-grade">{certificates[3].grade}</span>}
                 </div>
                <button className="preview-btn">Preview Certificate</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePreview}>×</button>
            <div className="modal-header">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer}</p>
            </div>
            <div className="modal-image">
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            </div>
             <div className="modal-footer">
               <div className="modal-meta">
                 <span className="modal-date">{selectedCertificate.date}</span>
                 {selectedCertificate.grade && <span className="modal-grade">{selectedCertificate.grade}</span>}
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
