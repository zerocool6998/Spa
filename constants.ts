/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Minimalist Design',
    tagline: 'Principles of Less',
    description: 'A comprehensive guide to minimalist design philosophy in the digital age.',
    longDescription: 'Explore the foundations of minimalism in web and product design. This ebook covers whitespace, typography, and the art of subtraction to create impactful user experiences.',
    price: 29,
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['PDF & ePub formats', '200+ pages', 'High-res diagrams', 'Dark mode optimized'],
    downloadUrl: 'https://example.com/downloads/minimalist-design.pdf',
    author: {
      name: 'Sarah Jenkins',
      bio: 'Sarah is a senior product designer with over 15 years of experience at top tech companies. She advocates for ethical, user-centered design.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '2',
    name: 'Future of AI',
    tagline: 'Understanding Tomorrow',
    description: 'An in-depth look at how artificial intelligence is reshaping our world.',
    longDescription: 'From machine learning to neural networks, this book demystifies AI concepts for non-technical readers while providing deep insights for industry professionals.',
    price: 35,
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Interactive charts', 'Expert interviews', 'Audiobook included', 'Lifetime updates'],
    downloadUrl: 'https://example.com/downloads/future-of-ai.pdf',
    author: {
      name: 'Dr. Alan Chen',
      bio: 'Dr. Chen is a leading AI researcher and professor at MIT. His work focuses on the intersection of artificial intelligence and human ethics.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '3',
    name: 'Silent Echoes',
    tagline: 'A Modern Thriller',
    description: 'A gripping novel about memory, identity, and the secrets we keep.',
    longDescription: 'In a world where memories can be digitized, a detective must solve a murder where the only witness is a corrupted backup. A fast-paced narrative that questions the nature of reality.',
    price: 15,
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Award-winning author', 'Book club guide', 'Author commentary', 'Kindle compatible'],
    downloadUrl: 'https://example.com/downloads/silent-echoes.pdf',
    author: {
      name: 'Elena Rostova',
      bio: 'Elena is a bestselling author of five mystery novels. Her unique storytelling style blends psychological depth with fast-paced action.',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '4',
    name: 'Sustainable Living',
    tagline: 'Guide to Green',
    description: 'Practical steps to reduce your footprint and live harmoniously with nature.',
    longDescription: 'A handbook for the modern eco-conscious citizen. Learn about zero-waste practices, ethical consumption, and how to build a sustainable home environment.',
    price: 24,
    category: 'Non-Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Checklists included', 'Resource directory', 'Printable worksheets', 'Community access'],
    downloadUrl: 'https://example.com/downloads/sustainable-living.pdf',
    author: {
      name: 'Marcus Green',
      bio: 'Marcus is an environmental activist and founder of the Green Earth Initiative. He has dedicated his life to promoting sustainable living practices.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Art of Deep Reading",
        date: "April 12, 2025",
        excerpt: "Why our minds crave long-form narratives in a world of endless scrolling.",
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "We live in a world of snippets. Tweets, captions, headlines. Our attention is fractured into thousand-shard fragments. And yet, the human mind was built for stories."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Deep reading is not just about consuming information; it is an act of resistance. When we immerse ourselves in a book, we reclaim our time. We step out of the algorithmic feed and into a singular, sustained thought."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"To read is to voyage through time.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "At Aura, we curate books that demand your full presence. We believe that the format—whether digital or physical—matters less than the intent. A screen can be a window to wisdom, if we choose to open it."
            )
        )
    },
    {
        id: 2,
        title: "Building a Digital Library",
        date: "March 28, 2025",
        excerpt: "How to curate a personal collection of knowledge that travels with you.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "The library of the future is weightless. It is not defined by mahogany shelves or dust, but by accessibility. It is the ability to carry the wisdom of the ages in your pocket."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "\"We tend to hoard files,\" says digital archivist Elena Vance. \"But a true library is curated. It is a reflection of who you are and who you want to become. Delete what doesn't serve you. Keep what challenges you.\""
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "The shelf is infinite"),
                React.createElement("p", null, "But time is not."),
                React.createElement("p", null, "Choose your words"),
                React.createElement("p", null, "With care."),
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "This philosophy drives our selection process. We don't want to sell you everything. We want to sell you the one book that changes your perspective this month."
            )
        )
    },
    {
        id: 3,
        title: "Spring Reading List",
        date: "March 15, 2025",
        excerpt: "Notes from our editors: renewal, growth, and the power of starting over.",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Spring is a time of awakening. As the world thaws, our minds seek fresh ideas. We find ourselves drawn to narratives of transformation—stories of people who built something new from the ashes of the old."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Our reading list this month is a study in potential. It is about the transition state—the moment before the leap. It is the dawn of the year."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
                React.createElement("p", null, "A seed in the dark"),
                React.createElement("p", null, "Waiting for the rain"),
                React.createElement("p", null, "To become a forest.")
            )
        )
    }
];

export const BRAND_NAME = 'Aura';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';