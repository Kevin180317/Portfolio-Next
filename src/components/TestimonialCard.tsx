import type { Testimonial } from "@/app/data/testimonials";
import { Star } from "@/components/ui/Icons";
import Spotlight from "@/components/ui/Spotlight";

export default function TestimonialCard({
  testimonial,
  large = false,
}: {
  testimonial: Testimonial;
  large?: boolean;
}) {
  return (
    <Spotlight className="rounded-2xl">
      <figure className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-500 hover:border-line-strong md:p-8">
        <div>
          <div className="flex gap-0.5 text-accent" aria-label={`${testimonial.rating}/5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "" : "text-line-strong"}`} />
            ))}
          </div>
          <blockquote
            className={`mt-6 leading-relaxed tracking-tight text-fg ${
              large ? "text-xl md:text-3xl" : "text-base md:text-lg"
            }`}
          >
            &ldquo;{testimonial.testimonial}&rdquo;
          </blockquote>
        </div>
        <figcaption className="flex items-center gap-4 border-t border-line pt-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 font-medium text-fg">
            {testimonial.author?.charAt(0).toUpperCase()}
          </span>
          <span>
            <span className="block text-sm font-medium">{testimonial.author}</span>
            <span className="block text-sm text-muted">{testimonial.project}</span>
          </span>
        </figcaption>
      </figure>
    </Spotlight>
  );
}
