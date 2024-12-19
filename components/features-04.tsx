export default function Features04() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blurred shape */}
        <div
          className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs4-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs4-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Why trust us?
            </h2>
            <p className="text-lg text-slate-400">
              At Bookless, we’re driven by a clear vision: to revolutionize
              travel experiences on Earth and beyond. With deep expertise in
              technology and a passion for innovation, our team is building an
              AI travel agent that simplifies and personalizes every journey.
              Starting with sailing adventures, we’re paving the way to become
              the trusted platform for future space travel. Transparent,
              user-focused, and forward-thinking—Bookless is your partner in
              exploring the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
