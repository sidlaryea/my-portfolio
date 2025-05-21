import React, { useState } from 'react';
import emailjs from 'emailjs-com';
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""

    });
 const handlesubmit = (e) => {


e.preventDefault();
emailjs.sendForm(import.meta.env.VIT_SERVICE_ID, import.meta.env.VIT_TEMPLATE_ID, e.target, import.meta.env.VIT_PUBLIC_KEY).then ((result) => {
    alert("Message sent successfully!");
    setFormData({
        name: "",
        email: "",
        message: ""
    })
    .catch (() => {
        alert("Error sending message, please try again later.");
    });
    console.log(result.text);
 })
}
    return (
<section id="Contact" className="min-h-screen flex items-center justify-center py-20 -mt-40">
    
<div className="w-150 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center" >Get In Touch</h2>
        <form className="space-y-6" onSubmit={handlesubmit}>
        <div className="relative">
            <input type="text" id="name" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            
            name="name" className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Your Name" required />
        </div>

        <div className="relative">
            <input type="email" id="email" name="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email} className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg  text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Example@yahoo.com" required />
        </div>

        <div className="relative">
            <textarea  id="message" 
            name="message" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            rows={5}
            className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg  text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Your Message..." required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Send Message</button>
        </form>
    </div>

    </section>

    ); 

};