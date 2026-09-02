import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TestimonialCard, {
    type Testimonial,
} from "./TestimonialCard";
import "./testimonials.css";
import ShinyText from "@/components/animations/ShinyText";
import Profile5 from "@/assets/images/profile-pic (5).png";

const AUTO_SLIDE_TIME = 5000;

const Testimonials: React.FC = () => {
    const { t } = useTranslation();

    const testimonials = t("testimonials.items", {
        returnObjects: true,
    }) as Testimonial[];

    const testimonialsWithImages = testimonials.map((testimonial, index) => ({
        ...testimonial,
        image: index === 0 ? Profile5 : testimonial.image,
    }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((current) =>
            current === testimonialsWithImages.length - 1 ? 0 : current + 1
        );
    }, [testimonialsWithImages.length]);

    const previousTestimonial = useCallback(() => {
        setCurrentIndex((current) =>
            current === 0
                ? testimonialsWithImages.length - 1
                : current - 1
        );
    }, [testimonialsWithImages.length]);

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused || testimonialsWithImages.length <= 1) {
            return;
        }

        const interval = window.setInterval(() => {
            nextTestimonial();
        }, AUTO_SLIDE_TIME);

        return () => window.clearInterval(interval);
    }, [
        isPaused,
        nextTestimonial,
        testimonialsWithImages.length,
    ]);

    const getPosition = (
        index: number
    ): "active" | "left" | "right" | "hidden" => {
        if (index === currentIndex) {
            return "active";
        }

        const previousIndex =
            currentIndex === 0
                ? testimonialsWithImages.length - 1
                : currentIndex - 1;

        const nextIndex =
            currentIndex === testimonialsWithImages.length - 1
                ? 0
                : currentIndex + 1;

        if (index === previousIndex) {
            return "left";
        }

        if (index === nextIndex) {
            return "right";
        }

        return "hidden";
    };

    if (!testimonialsWithImages.length) {
        return null;
    }

    return (
        <section
            className="testimonials-section"
            id="testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="text-center">
    <span className="testimonials-section__eyebrow font-semibold">
        {t("testimonials.eyebrow")}
    </span>

                <h2 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-secondary-custom sm:text-5xl">
                    <ShinyText
                        text={t("testimonials.title")}
                        speed={2}
                        delay={0}
                        color="currentColor"
                        shineColor="#F97316"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="font-semibold text-slate-900 dark:text-white"
                    />
                </h2>

                <p className="mx-auto mt-3 max-w-2xl px-4 text-base leading-6 text-secondary-custom/60 sm:px-0 sm:text-lg">
                    {t("testimonials.description")}
                </p>
            </div>

            <div className="testimonials-carousel">
                <button
                    type="button"
                    className="testimonials-carousel__arrow testimonials-carousel__arrow--left"
                    onClick={previousTestimonial}
                    aria-label={t("testimonials.previous")}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="testimonials-carousel__viewport">
                    {testimonialsWithImages.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id ?? index}
                            testimonial={testimonial}
                            position={getPosition(index)}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className="testimonials-carousel__arrow testimonials-carousel__arrow--right"
                    onClick={nextTestimonial}
                    aria-label={t("testimonials.next")}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            <div className="testimonials-carousel__dots">
                {testimonialsWithImages.map((testimonial, index) => (
                    <button
                        key={testimonial.id ?? index}
                        type="button"
                        className={`testimonials-carousel__dot ${
                            index === currentIndex
                                ? "testimonials-carousel__dot--active"
                                : ""
                        }`}
                        onClick={() => goToTestimonial(index)}
                        aria-label={`${t("testimonials.goTo")} ${index + 1}`}
                        aria-current={
                            index === currentIndex ? "true" : undefined
                        }
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
