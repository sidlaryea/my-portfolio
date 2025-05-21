export const About = () => {
    const frontendskills = [
        "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Sass"
    ];

    const backendskills = [
        ".Net", "C#", "WebAPI"
    ];
    return (
        <section id="About" 
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center ">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300  mb-6">
                        I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications.
                        I specialize in both front-end and back-end development, ensuring a seamless user experience from start to finish.
                    </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">FrontEnd:</h3>
                        <div className="flex flex-wrap gap-2">

                            {frontendskills.map((skill, index) => (
                                <span key={index} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend:</h3>
                        <div className="flex flex-wrap gap-2">

                            {backendskills.map((skill, index) => (
                                <span key={index} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>                

                   </div>

                </div>

            
                < div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education:</h3>
                        <ul type="none" className="list-disc pl-4 text-l" >
                            <li className="text-gray-300 mb-2"><strong>Bsc Computing With Education</strong> - Regent University College, Ghana (2007-2011) 🇬🇭</li>
                            <li className="text-gray-300 mb-2"><strong>Pg Dip I.T Business Analysis</strong> - NBCC Saint John, Canada (2023-2024) 🇨🇦  </li>
                            <li className="text-gray-300 mb-2"><strong>Project Management Professional PMP®</strong>- PMI PensylVania, USA (2025) 🇺🇸 </li>
                                        


                        </ul>
                       </div> 
                    
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🧑‍💼 Work Experience:</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4><li><strong>Full stack Web App Development</strong></li></h4>
                                <p>Web development using .Net Web API,React,PHPMysql,HTML And CSS</p>
                                <h4><li><strong>Data Analyst</strong></li></h4>
                                <p>Developed Interactive Dashboards with Ms.PowerBI</p>
                                <h4><li><strong>Agile Certified Practioner</strong></li></h4>
                                <p>Able to lead cross-functional teams to develop MVP's within Time and Budeget.</p>
                            </div>
                        </div>
                        </div>            
                </div>
            </div>  
        </section>
    );
};