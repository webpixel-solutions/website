import React from "react";
import one from "../../images/sliderTwo.jpg";
import two from "../../images/sliderThree.jpg";

const About = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={one} className="w-full rounded-lg" alt="About Us" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Welcome to <strong>Webpixel Solutions</strong>, where innovation meets excellence in the realm of professional Web & Mobile Apps Development in India. As a pioneering force in the
              digital landscape, we pride ourselves on our unwavering commitment to crafting bespoke solutions that propel businesses to new heights of success. Our journey began with a simple yet
              profound vision - to revolutionize the digital sphere by offering cutting-edge technologies and unparalleled expertise to our valued clients. At Webpixel Solutions, we believe in the
              power of collaboration and creativity. Our team of seasoned developers, designers, and strategists work tirelessly to translate your vision into reality, ensuring every project is a
              testament to our dedication to quality and innovation. Whether you're a startup looking to make your mark or an established enterprise seeking to redefine your online presence, we're
              here to guide you every step of the way. Driven by a passion for excellence and a relentless pursuit of perfection, we strive to exceed expectations with every project we undertake. Our
              unwavering commitment to customer satisfaction is the cornerstone of our success, and we take great pride in fostering long-term relationships built on trust, transparency, and mutual
              respect. At Webpixel Solutions, we're not just in the business of building websites and apps – we're in the business of transforming ideas into digital masterpieces that inspire, engage,
              and empower. Join us on this exhilarating journey as we redefine the future of digital innovation, one pixel at a time
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Webpixel Solutions, our mission is to empower businesses of all sizes to thrive in the digital era by providing them with innovative, tailor-made Web & Mobile Apps Development
              solutions that drive growth, efficiency, and success. We are committed to delivering exceptional value to our clients through our unwavering dedication to quality, integrity, and
              customer satisfaction. Our mission is to leverage cutting-edge technologies, best practices, and industry expertise to deliver transformative digital experiences that surpass
              expectations and unlock new opportunities for our clients. With a relentless focus on innovation, collaboration, and continuous improvement, we strive to be at the forefront of
              technological advancement, driving positive change and creating lasting impact in the digital ecosystem. Our mission is not just to build great products, but to empower businesses to
              achieve their goals, realize their visions, and shape a brighter future for themselves and their customers
            </p>
            <strong>What makes WebPixel solutions different?</strong>
            <p>
              At Webpixel Solutions we provide all your digital needs under one roof. We deliver top-quality UI/UX designs and comply with quality standards. Whether you are a start-up or a large
              enterprise in an industry, we have the expertise and innovative approach to assist you. Our team of highly motivated, result-driven professionals creates effective strategies for
              developing products. We helped our clients achieve their business objectives with our strategically developed products. As part of our development and design process, we ensure in-depth
              analysis and planning to increase sales, build your brand, and reach out to your potential customers faster.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <img src={two} className="w-full rounded-lg" alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
