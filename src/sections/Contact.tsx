import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together!
              </h2>
              <p className="text-sm mt-2  md:text-base">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/thomas-amenlemah">
                <button className="text-white border border-gray-900 bg-gray-900 inline-flex items-center justify-center gap-2 mt-6 h-12 px-6 md:px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-max">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
