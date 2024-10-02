import React from 'react';

const Features = () => {
  return (
    <section className="bg-[#0D1117] text-white py-16 p-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">What we offer</h2>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Discover Curated Top Articles</h3>
            <p className="text-lg">
              We sift through thousands of sources daily to bring you the most relevant articles, tailored to your interests.
            </p>
          </div>
          <div className="bg-gray-500 h-[320px] md:h-[520px] rounded-lg"></div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="order-2 md:order-1 bg-gray-500 h-[320px] md:h-[520px] rounded-lg"></div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Listen On the Go</h3>
            <p className="text-lg">
              Busy schedule? Transform articles into audio and listen on the go. Stay informed while commuting, working out, or during lunch breaks.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Engage with Persona Conversations</h3>
            <p className="text-lg">
              Gain unique insights as AI-generated personas, like industry leaders and experts, explain articles from their perspectives.
            </p>
          </div>
          <div className="bg-gray-500 h-[320px] md:h-[520px] rounded-lg"></div>
        </div>

        {/* Feature 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="order-2 md:order-1 bg-gray-500 h-[320px] md:h-[520px] rounded-lg"></div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Personalize Your Audio Experience</h3>
            <p className="text-lg">
              Tailor your journey by selecting personas and topics that resonate with you for a truly customized experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
