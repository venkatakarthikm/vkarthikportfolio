import { Helmet } from "react-helmet";

export default function Meta() {
  // Schema.org data for your portfolio
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muchu Venkata Karthik",
    "url": "https://mvkarthik.onrender.com",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KONERU LAKSHMAIAH EDUCATION FOUNDATION",
      "sameAs": "https://www.kluniversity.in/"
    },
    "knows": ["HTML5", "CSS3", "React", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL"],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": "AUTOMATION ANYWHERE"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Red Hat Certified Enterprise Application Developer",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": "Red Hat"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Salesforce Certified AI Associate",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": "Salesforce"
      }
    ]
  };

  return (
    <Helmet>
      {/* Improved title with better keyword usage */}
      <title>Muchu Venkata Karthik | Web Developer Portfolio</title>
      
      {/* Enhanced meta description with more details */}
      <meta 
        name="description" 
        content="Professional portfolio of Muchu Venkata Karthik, a web developer specializing in React, Node.js, and full-stack development. KL University graduate with certifications in RPA, Red Hat, and Salesforce AI." 
      />
      
      {/* Expanded keywords for better discoverability */}
      <meta 
        name="keywords" 
        content="Muchu Venkata Karthik, Web Developer, React Developer, Node.js Developer, Full Stack Developer, Portfolio, KL University, KONERU LAKSHMAIAH EDUCATION FOUNDATION, Automation Anywhere, Red Hat Certified, Salesforce AI Associate" 
      />
      
      <meta name="author" content="Muchu Venkata Karthik" />
      
      {/* Language specification */}
      <html lang="en" />
      
      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href="https://mvkarthik.onrender.com/" />
      
      {/* Open Graph metadata for social sharing */}
      <meta property="og:title" content="Muchu Venkata Karthik | Web Developer Portfolio" />
      <meta 
        property="og:description" 
        content="Professional portfolio of Muchu Venkata Karthik, a web developer specializing in React, Node.js, and full-stack development. View my projects and skills." 
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mvkarthik.onrender.com/" />
      <meta property="og:image" content="https://mvkarthik.onrender.com/muchuvenkatakarthik.png" />
      <meta property="og:site_name" content="Muchu Venkata Karthik Portfolio" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Muchu Venkata Karthik | Web Developer Portfolio" />
      <meta 
        name="twitter:description" 
        content="Professional portfolio of Muchu Venkata Karthik, a web developer specializing in React, Node.js, and full-stack development." 
      />
      <meta name="twitter:image" content="https://mvkarthik.onrender.com/muchuvenkatakarthik.png" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Schema.org JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
