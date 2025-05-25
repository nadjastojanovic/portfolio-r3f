import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <div id="contact" className="section py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
      <p className="text-lg mb-10 max-w-xl mx-auto">
        I'm currently open to <strong>remote</strong> or <strong>on-site</strong> opportunities, and based in <strong>Montenegro</strong>. 
        Feel free to reach out — I'd love to connect!
      </p>

      <div className="flex justify-center gap-10 text-3xl">
        <a
          href="mailto:nadja.stojanovic@outlook.com"
          aria-label="Email"
          className="hover:text-gray-500 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/nadjastojanovic"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nada-stojanovic/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}
