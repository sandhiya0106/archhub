import { Project } from "./types";

export const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Glass Pavilion",
    architect: "Ludwig Mies van der Rohe",
    location: "Plano, Illinois",
    category: "Modern Architecture",
    area: "2,100 sq.ft",
    description: "A minimalist masterpiece exploring the relationship between interior and exterior space through transparency and structural clarity. It is one of the most significant examples of modern architecture.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Bosco Verticale",
    architect: "Stefano Boeri Architetti",
    location: "Milan, Italy",
    category: "Residential Buildings",
    area: "40,000 sq.ft",
    description: "A sustainable residential model that integrates lush vegetation into the urban fabric, promoting biodiversity and air quality in the heart of Milan.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "The Lotus Temple",
    architect: "Fariborz Sahba",
    location: "New Delhi, India",
    category: "Traditional Architecture",
    area: "26,000 sq.ft",
    description: "An iconic Baháʼí House of Worship inspired by the lotus flower, symbolizing purity and unity through its 27 free-standing marble petals.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Fallingwater",
    architect: "Frank Lloyd Wright",
    location: "Mill Run, Pennsylvania",
    category: "Modern Architecture",
    area: "5,330 sq.ft",
    description: "A landmark residence built over a waterfall, exemplifying organic architecture and the seamless integration of man-made structures with nature.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Burj Khalifa",
    architect: "Adrian Smith (SOM)",
    location: "Dubai, UAE",
    category: "Commercial Buildings",
    area: "3.3M sq.ft",
    description: "The world's tallest building, a marvel of modern engineering and design that redefined the skyline of Dubai and pushed the limits of skyscraper construction.",
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    title: "The Shard",
    architect: "Renzo Piano",
    location: "London, UK",
    category: "Commercial Buildings",
    area: "1.3M sq.ft",
    description: "A vertical city that combines offices, residences, and public spaces, inspired by the spires of London's churches and the masts of tall ships.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    title: "Sydney Opera House",
    architect: "Jørn Utzon",
    location: "Sydney, Australia",
    category: "Modern Architecture",
    area: "1.8 hectares",
    description: "A multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    title: "Villa Savoye",
    architect: "Le Corbusier",
    location: "Poissy, France",
    category: "Modern Architecture",
    area: "4,400 sq.ft",
    description: "A modernist villa in Poissy, on the outskirts of Paris, France. It was designed by Swiss architects Le Corbusier and his cousin Pierre Jeanneret.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    title: "The Guggenheim",
    architect: "Frank Gehry",
    location: "Bilbao, Spain",
    category: "Modern Architecture",
    area: "24,000 m²",
    description: "A museum of modern and contemporary art, designed by Canadian-American architect Frank Gehry, and located in Bilbao, Basque Country, Spain.",
    image: "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date().toISOString()
  }
];
