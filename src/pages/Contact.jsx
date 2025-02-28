import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 ml-[103px] mt-[-96px]">
      {/* Contact Form */}
      <div className="shadow-lg rounded-lg p-8 max-w-lg w-full border">
        <h2 className="text-2xl font-bold text-purple-700">Get In Touch</h2>
        <p className="text-gray-600 mt-2">
          At QBS, we offer an extensive range of treatments, services & quality imported products for you to relax, rejuvenate & restore radiance. Providing well-being to our highly valued clients. Call for an Appointment.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Comment or Message <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 h-24"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition">
            SUBMIT
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="mt-6 md:mt-0  w-[600px] max-w-lg h-80 shadow-lg rounded-lg overflow-hidden border ">
        <iframe
          className="w-full h-full border-0"

					src="https://maps.google.com/maps?q=QBS%20Salon%20Vijayawada&#038;t=m&#038;z=16&#038;output=embed&#038;iwloc=near"          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
