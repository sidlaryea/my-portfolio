export const Projects = () => {

return (
<section id="Projects" className="min-h-screen flex items-center justify-center py-20">
<div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center ">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div  classname="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:
    shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">Library Management System</h3>
    <p className="text-gray-400 mb-4">
        A web application that allows users to manage library operations, including book borrowing, 
        returning, and inventory management. Built with .NET web API,React, Node.js, and Sql.
    </p>
        <div>
            {["React, Node.js", "SQL", ".NET"].map((tech, key) => (
                <span key={key} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium mr-2 mb-2">
                    {tech}
                </span>
            ))}
        </div>
        
            <div className="flex justify-between items-center">    
                <a href="https://github.com/sidlaryea" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span className="ml-1">&rarr;</span> </a>
            </div>
           
    </div>


    <div  classname="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:
    shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">Invoice API</h3>
    <p className="text-gray-400 mb-4">
    A RESTful API built with ASP.NET Web API that allows businesses to manage invoicing operations efficiently. 
    Key features include creating, retrieving, updating, and deleting invoices; managing clients; calculating totals with tax and discounts; and tracking payment status. 
    Designed for integration with accounting systems or business apps, this API ensures secure, scalable, and streamlined invoice processing.
    </p>
        <div>
            {["React, Node.js", "SQL", ".NET"].map((tech, key) => (
                <span key={key} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium mr-2 mb-2">
                    {tech}
                </span>
            ))}
        </div>
        
            <div className="flex justify-between items-center">    
                <a href="https://sidlaryea.github.io/InvoiceAPI_LandingPage/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span className="ml-1">&rarr;</span> </a>
            </div>
    </div>

    <div  classname="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:
    shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">Inventory Management API</h3>
    <p className="text-gray-400 mb-4">
    This API streamlines the tracking and management of inventory across products, categories, and locations. 
    Built with .NET Web API, it enables real-time stock monitoring, supports CRUD operations for items and suppliers,
     manages stock levels and reorder alerts, and provides secure, RESTful endpoints for seamless integration with front-end apps, 
     ERP systems, or e-commerce platforms.
    </p>
        <div>
            {["React, Node.js", "SQL", ".NET"].map((tech, key) => (
                <span key={key} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium mr-2 mb-2">
                    {tech}
                </span>
            ))}
        </div>
        
            <div className="flex justify-between items-center">    
                <a href="https://github.com/sidlaryea" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span className="ml-1">&rarr;</span></a>
            </div>
    </div>




    <div  classname="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:
    shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">Time And Attendance Dashboard</h3>
    <p className="text-gray-400 mb-4">
    This dashboard provides a clear, real-time view of employee work hours, attendance trends, and punctuality. 
    It tracks clock-ins/outs, leaves, and absences, offering visual insights through charts and summaries.
     Designed to support HR and management decisions,
     it helps improve workforce productivity and ensures accurate payroll processing.
    </p>
        <div>
            {["SQL Server Management Studio, Microsoft PowerBI"].map((tech, key) => (
                <span key={key} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-medium mr-2 mb-2">
                    {tech}
                </span>
            ))}
        </div>
        
            <div className="flex justify-between items-center">    
                <a href="https://github.com/sidlaryea" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project <span className="ml-1">&rarr;</span> </a>
            </div>
    </div>



    </div>
    </div>    

</section>
);



};