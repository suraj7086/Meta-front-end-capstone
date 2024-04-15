import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    author: "Isabella Montgomery",
    description:
      "The Bruschetta at Petite Citrus is a harmonious blend of textures and flavors; the crunchiness of the bread paired with the tanginess of the tomatoes creates a culinary masterpiece.",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Alexander Thompson",
    description:
      "At Petite Citrus, our burger is a sensory delight; each bite of the succulent, expertly prepared meat, complemented by carefully selected ingredients, offers a symphony of taste sensations.",
    image:
      "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
    rating: 5,
  },
  {
    id: 3,
    author: "Olivia Jenkins",
    description:
      "The Greek Salad at Little Lemon is a burst of freshness and flavor, with crisp vegetables and a dressing that elevates the dish to a new level of culinary excellence.",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Customer Reviews</h1>
        </div>

        <div className="testimonials-list">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
