export const Contact = () => {
 
    return (
<section id="Contact" className="min-h-screen flex items-center justify-center py-20 -mt-40">
    
<div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center" >Get In Touch</h2>
        <form className="space-y-6">
        <div className="relative">
            <input type="text" id="name" name="name" className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Your Name" required />
        </div>

        <div className="relative">
            <input type="email" id="email" name="email" className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg  text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Example@yahoo.com" required />
        </div>

        <div className="relative">
            <textarea  id="message" 
            name="message" 
            className="w-full bg-white/5 px-4 py-3 border border-white/10 rounded-lg  text-gray-300 focus:outline-none focus:border-blue-500 transition-focus" placeholder="Your Message..." required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">Send Message</button>
        </form>
    </div>

    </section>

    ); 

};