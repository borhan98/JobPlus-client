import newsletterPhoto from "../assets/images/newsletter.png";

const Newsletter = () => {

    const handleSubscribe = e => {
        e.preventDefault();
        e.target.reset();
    }

  return (
    <div className="container mx-auto flex items-center gap-4 px-10 py-14 bg-[#FFE1D3] rounded-md">
      <figure className="flex-1">
        <img className="w-full" src={newsletterPhoto} alt="Newsletter image" />
      </figure>
      <div className="flex-1 max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold text-zinc-600 mb-4">
          Subscribe for Career Success!
        </h3>
        <p className="text-zinc-600 mb-10">
          Subscribe to our newsletter for a career boost! Get exclusive job
          alerts, expert advice, and industry insights delivered to your inbox.
          Stay ahead in your job search—subscribe now!
        </p>
        {/* Name and Email Field */}
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-9/12"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-9/12"
              required
            />
          </div>
          <button className="bg-[#FF5200] py-2 px-3 w-9/12 rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
