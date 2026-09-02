import React from "react";

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company?: string;
    message: string;
    image: string;
    rating?: number;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    position: "active" | "left" | "right" | "hidden";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
                                                             testimonial,
                                                             position,
                                                         }) => {
    const rating = testimonial.rating ?? 5;

    return (
        <article className={`testimonial-card testimonial-card--${position}`}>
            <div className="testimonial-card__quote">“</div>

            <div className="testimonial-card__avatar">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                />
            </div>

            <div className="testimonial-card__content">
                <div
                    className="testimonial-card__rating"
                    aria-label={`${rating} out of 5 stars`}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span
                            key={index}
                            className={
                                index < rating
                                    ? "testimonial-card__star testimonial-card__star--active"
                                    : "testimonial-card__star"
                            }
                        >
              ★
            </span>
                    ))}
                </div>

                <p className="testimonial-card__message">
                    {testimonial.message}
                </p>

                <div className="testimonial-card__author">
                    <h4>{testimonial.name}</h4>

                    <p>
                        {testimonial.role}
                        {testimonial.company && ` · ${testimonial.company}`}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;
