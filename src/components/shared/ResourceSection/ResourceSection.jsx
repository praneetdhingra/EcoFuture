import ResourceCard from "./ResourceCard";
import resourceCard1 from "../../../assets/resourcecard1.webp"
import resourceCard2 from "../../../assets/resourcecard2.webp"
import resourceCard3 from "../../../assets/resourcecard3.webp"
import resourceCard4 from "../../../assets/resourcecard4.webp"
const ResourcesSection = () => {
    const resources = [
      {
        label: "Academy",
        title: "Read our blog on corporate sustainability and climate science",
        description: "Dive into various topics related to corporate sustainability.",
        image: resourceCard1 // Replace with actual image URL
      },
      {
        label: "Glossary",
        title: "Learn the language of corporate sustainability from A to Z",
        description: "Glossary of terms related to sustainability.",
        image:resourceCard2
      },
      {
        label: "Whitepaper",
        title: "Dive into reports on business, ESG, and sustainability",
        description: "Explore detailed reports and case studies.",
        image: resourceCard3
      },
      {
        label: "Policies",
        title: "Discover which climate and ESG policies are relevant to your company",
        description: "Stay updated with the latest regulations.",
        image: resourceCard4
      },
    ];
  
    return (
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-6">
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm uppercase font-semibold">
              Resources
            </span>
          </div>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                image={resource.image}
                title={resource.title}
                description={resource.description}
                label={resource.label}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ResourcesSection;