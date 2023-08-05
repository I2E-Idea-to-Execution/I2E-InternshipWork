// console.log("from script file");

function modalClick(id){
    let title = document.getElementById("modal_title");
    let body = document.getElementById("modal_body");
    
    if(id === "grow_i2e"){
        title.innerHTML = "Grow with I2E";
        body.innerHTML = "Drive sustainable business growth with our tailored strategies, market analysis, and targeted marketing campaigns - unlock your business's full potential today!";
    }
    
    else if(id === "Startup_i2e"){
        title.innerHTML = "StartUp with I2E";
        body.innerHTML = "Launch your startup confidently with our end-to-end solutions, covering business registration, branding, website development, and expert mentorship - turn your entrepreneurial dreams into reality.";
    }


    else if(id === "Validate_i2e"){
        title.innerHTML = "Validate with I2E";
        body.innerHTML = "Validate your business idea with expert market research, mentorship, and rigorous validation process - make informed decisions and set a solid foundation for success.";
    }


    else if(id === "doc_i2e"){
        title.innerHTML = "Documentation with I2E";
        body.innerHTML = "Simplify your business registration process with our expert assistance and streamlined documentation services - focus on your core activities while we handle the paperwork.";
    }


    else if(id === "ie_i2e"){
        title.innerHTML = "Import/Export with I2E";
        body.innerHTML = "Expand your business globally with our comprehensive import/export services, including market analysis, supply chain optimization, and international trade expertise - unlock new growth opportunities in the global marketplace.";
    }
}