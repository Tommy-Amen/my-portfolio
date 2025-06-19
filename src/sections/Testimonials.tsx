import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Thomas was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Thomas was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Thomas's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Thomas is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Thomas's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          title="What Clients Say About Me"
          eyebrow="Happy Clients"
          description="Don't just take my word for it. Here's what my clients have to say."
        />
        <div className="mt-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center">
                 <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.position}</div>
                </div>
              </div>
              <p className="mt-4 text-sm">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
