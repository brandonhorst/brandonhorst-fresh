import { FaGithub, FaLinkedin, FaMastodon } from "jsr:@preact-icons/fa6";

export default function Home() {
  return (
    <div class="flex items-center justify-center min-h-screen font-serif bg-gradient-to-br from-orange-200 to-orange-100 p-4">
      <main class="max-w-lg w-full mx-auto p-8 bg-white shadow-sm rounded-lg">
        <header class="text-center">
          <div class="mb-6 relative">
            <img
              src="/images/avatar.jpg"
              alt="Brandon Horst"
              class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
          <h1 class="text-2xl font-semibold text-gray-800 mb-1">
            Brandon Horst
          </h1>
          <p class="text-gray-600 mb-1">Software Engineer, Google</p>
          <p class="text-gray-600 mb-1">
            Developer of{" "}
            <a
              href="https://lacona.app"
              class="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Lacona for Mac
            </a>
          </p>
          <p class="text-gray-600">Cambridge MA, USA</p>
        </header>

        <hr class="my-6 border-gray-200" />

        <footer class="text-center">
          <p>
            <a
              href="mailto:brandonhorst@gmail.com"
              class="text-blue-600 hover:text-blue-800 transition-colors"
            >
              brandonhorst{"\u200B"}@gmail.com
            </a>
          </p>

          <div class="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/brandonhorst"
              target="_blank"
              class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub class="w-6 h-6" />
            </a>
            <a
              href="https://techhub.social/@brandonhorst"
              target="_blank"
              rel="me"
              class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Mastodon"
            >
              <FaMastodon class="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brandonhorst/"
              target="_blank"
              class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin class="w-6 h-6" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
