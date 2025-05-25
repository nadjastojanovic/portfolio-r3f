import reactIcon from '/skills-icons/react.svg'
import typeScriptIcon from '/skills-icons/typescript.svg'
import html5Icon from '/skills-icons/html5.svg'
import css3Icon from '/skills-icons/css3.svg'
import tailwindCSSIcon from '/skills-icons/tailwindcss.svg'
import materialUIIcon from '/skills-icons/mui.svg'
import viteIcon from '/skills-icons/vite.svg'
import webpackIcon from '/skills-icons/webpack.svg'
import yarnIcon from '/skills-icons/yarn.svg'
import npmIcon from '/skills-icons/npm.svg'
import gitIcon from '/skills-icons/git.svg'
import figmaIcon from '/skills-icons/figma.svg'
import framerIcon from '/skills-icons/framer.svg'
import nodeIcon from '/skills-icons/nodedotjs.svg'
import expressIcon from '/skills-icons/express.svg'
import springBootIcon from '/skills-icons/springboot.svg'
import pythonIcon from '/skills-icons/python.svg'
import numPyIcon from '/skills-icons/numpy.svg'
import rIcon from '/skills-icons/r.svg'
import pandasIcon from '/skills-icons/pandas.svg'
import sciPyIcon from '/skills-icons/scipy.svg'
import scikitLearnIcon from '/skills-icons/scikitlearn.svg'
import kerasIcon from '/skills-icons/keras.svg'
import pyTorchIcon from '/skills-icons/pytorch.svg'
import tensorFlowIcon from '/skills-icons/tensorflow.svg'
import vowpalWabbitIcon from '/skills-icons/vowpalwabbit.svg'
import AWSIcon from '/skills-icons/amazonwebservices.svg'
import DockerIcon from '/skills-icons/docker.svg'

export default function SkillsSection() {
  const icons = [
    { src: reactIcon, alt: 'React' },
    { src: typeScriptIcon, alt: 'TypeScript' },
    { src: html5Icon, alt: 'HTML5' },
    { src: css3Icon, alt: 'CSS3' },
    { src: tailwindCSSIcon, alt: 'TailwindCSS' },
    { src: materialUIIcon, alt: 'MUI' },
    { src: viteIcon, alt: 'Vite' },
    { src: webpackIcon, alt: 'Webpack' },
    { src: yarnIcon, alt: 'Yarn' },
    { src: npmIcon, alt: 'npm' },
    { src: gitIcon, alt: 'Git' },
    { src: figmaIcon, alt: 'Figma' },
    { src: framerIcon, alt: 'Framer' },
    { src: nodeIcon, alt: 'Node.js' },
    { src: expressIcon, alt: 'Express.js' },
    { src: springBootIcon, alt: 'Spring Boot' },
    { src: pythonIcon, alt: 'Python' },
    { src: numPyIcon, alt: 'NumPy' },
    { src: rIcon, alt: 'R' },
    { src: pandasIcon, alt: 'Pandas' },
    { src: sciPyIcon, alt: 'SciPy' },
    { src: scikitLearnIcon, alt: 'scikit-learn' },
    { src: kerasIcon, alt: 'Keras' },
    { src: pyTorchIcon, alt: 'PyTorch' },
    { src: tensorFlowIcon, alt: 'TensorFlow' },
    { src: vowpalWabbitIcon, alt: 'Vowpal Wabbit' },
    { src: AWSIcon, alt: 'AWS' },
    { src: DockerIcon, alt: 'Docker' },
  ]
  return (
    <div id="skills" className="section py-20 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Nađa Stojanović</h1>
        <p className="text-lg max-w-2xl mx-auto">
          I'm a Computer Science graduate from Lehigh University with a strong foundation in both <strong>full-stack web development</strong> and <strong>data-driven research</strong>.
        </p>
        <br/>

        <p className="text-lg max-w-2xl mx-auto">
          I'm currently open to new opportunities — remote or on-site in Montenegro — in either area.
        </p>
      </div>

      <div className="mt-12 overflow-hidden w-full max-w-3xl">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {icons.concat(icons).map((icon, idx) => (
            <img
              key={idx}
              src={icon.src}
              alt={icon.alt}
              className="w-[60px] h-[60px] inline-block"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
