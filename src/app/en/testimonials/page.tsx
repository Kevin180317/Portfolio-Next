"use client";
import { testimonialsEN } from "@/app/data/testimonials";

export default function TestimonialsEN() {
  return (
    <div className="flex items-center justify-center px-6 mt-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Client Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsEN.map((item) => (
            <div
              key={item.id}
              className={`bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition hover:border-orange-500 
              ${item.id === 5 ? "md:col-span-2" : ""}`}
            >
              {/* Header with avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {item.author?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white uppercase">
                    {item.author}
                  </h2>
                  <p className="text-orange-400 text-sm">{item.project}</p>
                </div>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                “{item.testimonial}”
              </p>

              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <svg
                    key={`empty-${i}`}
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    strokeWidth="1.5"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
