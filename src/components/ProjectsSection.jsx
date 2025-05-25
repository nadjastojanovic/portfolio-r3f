import { useState } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const projectsData = [
  {
    title: 'CodeCooks',
    description:
      'A full-stack recipe sharing platform for aspiring cooks and foodies!',
    image: '/projects/codeCooks.png',
    tags: ['React', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
    category: 'App Development',
    link: 'https://github.com/nadjastojanovic/codeCooks/',
  },
  {
    title: 'MealsToGo',
    description:
      'A mobile application for finding nearby restaurants and sorting them according to user preferences.',
    image: '/projects/mealstogo.png',
    tags: ['React Native', 'Expo', 'API Integration'],
    category: 'App Development',
    link: 'https://github.com/nadjastojanovic/MealsToGo',
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
      'An unsupervised anomaly detection model for detecting fraudulent credit card transactions.',
    image: '/projects/creditcard.jpg',
    tags: ['scikit-learn'],
    category: 'Data Science',
    link: 'https://github.com/nadjastojanovic/CreditCardFraud',
  },
  {
    title: 'Save Tuba',
    description:
      'A gamified mobile application designed to be incorporated in Kazakhstan\'s primary school ecology curriculum.',
    image: '/projects/savetuba.png',
    tags: ['React Native', 'React', 'Expo'],
    category: 'App Development',
    link: 'https://www.savetuba.blog/',
  },
  {
    title: 'News Classification',
    description:
      'Using transformers to train a classifier in Vowpal Wabbit, in order to sort news articles into one of 24 categories.',
    image: '/projects/newsc.png',
    tags: ['Vowpal Wabbit', 'Transformers', 'sklearn'],
    category: 'Data Science',
    link: 'https://github.com/nadjastojanovic/news-classification',
  },
  {
    title: 'Pomodoro',
    description:
      'An intuitive mobile app for studying and working using the Pomodoro technique.',
    image: '/projects/focustime.png',
    tags: ['React Native', 'React'],
    category: 'App Development',
    link: 'https://github.com/nadjastojanovic/focus-time',
  },
  {
    title: 'Pegasus',
    description:
      'A digital pegboard system for hand dexterity training and cognitive rehabilitation. ',
    image: '/projects/app_screenshots.png',
    tags: ['React Native', 'Arduino', 'Node.js', 'MongoDB'],
    category: 'App Development',
    link: 'https://github.com/nadjastojanovic/pegasus',
  },
  {
    title: 'Self-Driving RC Car',
    description:
      'Small-scale autonomous car with line-following and track-following capabilities.',
    image: '/projects/donkeycar.png',
    tags: ['Raspberry Pi', 'PyTorch', 'TensorFlow'],
    category: 'Robotics',
    link: '#',
  },
]

const categories = ['All', 'App Development', 'Robotics', 'Data Science']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory)

  return (
    <div id="projects" className="section py-20 px-6 bg-white text-black">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm tracking-wide uppercase font-medium px-4 py-2 rounded-full border transition-all duration-300 hover:text-white hover:bg-gray-500 ${
                selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="break-inside-avoid rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="relative group">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 bg-gray-300/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center z-10"
              >
                <FaArrowUpRightFromSquare className="text-white text-xl" />
              </a>
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold text-lg mb-1 uppercase">{project.title}</h4>
              <p className="text-sm text-gray-700 leading-snug">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-4 text-left gap-2">
        <p className="text-gray-700 text-base">
          During my time at university, I've also worked on neuroscience research, incorporating signal processing and deep learning methods.
          Curious to learn more? Check out my full CV ->
        </p>
        <a
          href="/CV_NadaStojanovic.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
        >
          CV <FaArrowUpRightFromSquare className="text-sm" />
        </a>
      </div>
    </div>
  )
}
