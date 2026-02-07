import React from "react";
import { motion } from "framer-motion";


const About = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      title: "Axis Community",
      text: "A vibrant community fostering technical growth, collaboration, and innovation through workshops, sessions, and tech fests.",
      img: "/Gemini_Generated_Image_8hn4ah8hn4ah8hn4.png", // Replace with actual image
    },
    {
      title: "Sanganak Shila Society",
      text: "The driving force behind Gandhigiri — empowering students with opportunities to explore, learn, and build through technology.",
      img: "/generated-image.png",
    },
    {
      title: "Coding Contests",
      text: "Sharpen your problem-solving skills and compete in coding challenges designed for learners and developers alike.",
      img: "/Gemini_Generated_Image_kkyqrekkyqrekkyq.png",
    },
    {
      title: "Hackathons",
      text: "Collaborate, innovate, and build real-world solutions — turning creative ideas into impactful projects.",
      img: "/Gemini_Generated_Image_r0jeysr0jeysr0je.png",
    },
    {
      title: "Innovation & Projects",
      text: "Hands-on projects, IoT, AI, and Web Development experiences that bridge theory with real-world applications.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Fdocumentation-project-innovation-uttam-kumar-tamboli&psig=AOvVaw287zrWA4DJpCTN81myMmM8&ust=1760503695971000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJigtL3xopADFQAAAAAdAAAAABAE",
    },
    {
      title: "Industry Exposure",
      text: "Workshops, guest lectures, and internship opportunities providing valuable insights into professional tech ecosystems.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fthe-double-exposure-of-industry-40-with-oil-and-gas-refinery-background-icons-concept-technology-of-manufacturing-and-oil-refining-industry-image353545179.html&psig=AOvVaw3hxt8tsLhKBpFZ7HAHJyDl&ust=1760503728189000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjDoc_xopADFQAAAAAdAAAAABAE",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 text-gray-800">About Axis College</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-600">Gandhigiri Event</span> — a celebration of innovation, creativity, and collaboration.
          Hosted under the <span className="font-semibold text-indigo-600">Sanganak Shila Society</span> and powered by the <span className="font-semibold text-indigo-600">Axis Community</span>,
          this event unites tech enthusiasts to showcase talent through <span className="text-indigo-600 font-medium">coding contests</span> and <span className="text-indigo-600 font-medium">hackathons</span>.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="group h-full relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${card.img})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3 border-b-2 border-indigo-500 inline-block pb-1 w-fit">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gandhigiri Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Gandhigiri Event</h3>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          The Gandhigiri Event symbolizes creativity, teamwork, and innovation. It unites students to participate in coding contests, hackathons,
          and tech challenges — celebrating the true spirit of technology and community.
        </p>
      </motion.div>

      {/* Embedded Google Map */}
      <div className="flex justify-center mt-12 px-6 pb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.432721220281!2d80.45014237487553!3d26.344862584263982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4278f92f3a69%3A0xb7805a7e15877959!2sAxis%20Colleges!5e0!3m2!1sen!2sin!4v1760377562006!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="rounded-2xl shadow-xl max-w-5xl w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Axis College Location"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
