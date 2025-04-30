
export const Home = () => {

    return <section id="Home" className="min-h-screen flex items-center justify-center relative">
    <div className="text-center z-10 px-4">
<div><img src="my-portfolio/images/mypic.png" className="rounded-full w-50 h-50 mx-auto" /> </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 
     leading-right bg-clip-text text-transparent">
        Hi, I am Sidney Laryea</h1>
        
        <p classname="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications.<br></br>
            I specialize in both front-end and back-end development,
             ensuring a seamless user experience from start to finish.
        </p>
       

        <div className="flex justify-center space-x-4 mt-4">
            <a href="#Projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-o.5 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>

<a href="/my-portfolio/public/CV.pdf" download className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded 
            font-medium transition-all duration-200 hover:-translate-y-o.5 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">📥 Download Cv</a>
        </div>
        </div>
    </section>

};