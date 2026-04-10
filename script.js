window.addEventListener('load', () => {
    let progressBar = document.getElementById('progress-bar');
    let loadPercent = document.getElementById('load-percent');
    let splashScreen = document.getElementById('splash-screen');
    let sound = document.getElementById('startup-sound');
    
    let width = 0;
    let loading = setInterval(() => {
        if (width >= 100) {
            clearInterval(loading);
            
            // Sound play karo agar user ne interact kiya ho
            if(sound) sound.play().catch(() => console.log("Sound blocked by browser"));

            // Splash Screen hatao
            setTimeout(() => {
                splashScreen.classList.add('splash-hidden');
                // Splash hatne ke baad login form dikhane ke liye
document.getElementById('auth-overlay').style.display = 'flex';
            }, 500);
        } else {
            width += Math.floor(Math.random() * 10) + 1; // Random speed loading
            if(width > 100) width = 100;
            progressBar.style.width = width + '%';
            loadPercent.innerHTML = width;
        }
    }, 150); // Har 150ms mein progress badhega
});
// --- 1. CONFIGURATION & DATA ---
const interests = ["IT", "Healthcare", "Business","Arts", "Science", "Engineering", "Marketing", "Finance", "Design", "Writing", "Research", "Management", "Sales", "Analytics", "Psychology", "Mathematics", "Problem Solving", "Creativity", "Strategy","Coding","Software","Quality Control","Detail Oriented","JavaScript", "Full-Stack","MongoDB","Express.js","React","Node.js"];
const skills = ["Programming", "Data Analysis", "Project Management", "Communication", "Problem Solving", "Leadership", "Creativity", "Critical Thinking", "Teamwork", "Time Management", "Public Speaking", "Writing", "Research", "Design", "Marketing", "Sales", "Customer Service", "Analytics", "Strategy", "Technical Skills", "Interpersonal Skills","Java","Python","SQL","Manual Testing","Bug Tracking","SDLC","Fronted","Backend"];

const careerDatabase = [
    { id: 1, title: "Data Scientist", category: "IT", skills: ["Programming", "Data Analysis"], interests: ["IT", "Science", "Analytics", "Problem Solving"], minEducation: "bachelor", salary: "₹95,000 - ₹1,65,000", growth: "31%", description: "Analyze complex data to help businesses make decisions." },
    { id: 2, title: "Corporate Lawyer", category: "Law", skills: ["Legal Research", "Public Speaking"], interests: ["Law & Justice", "Writing", "Problem Solving"], minEducation: "bachelor", salary: "₹80,000 - ₹2,50,000", growth: "15%", description: "Provide legal advice and represent clients in court." },
    { id: 3, title: "Medical Doctor", category: "Healthcare", skills: ["Medical Diagnosis"], interests: ["Healthcare", "Science", "Problem Solving"], minEducation: "master", salary: "₹1,00,000 - ₹3,00,000", growth: "20%", description: "Diagnose and treat illnesses and injuries." },
    { id: 4, title: "Commercial Pilot", category: "Aviation", skills: ["Navigation"], interests: ["Aviation"], minEducation: "bachelor", salary: "₹2,00,000 - ₹5,00,000", growth: "12%", description: "Fly aircraft for airlines or private companies." },
    { id: 5, title: "Software Engineer", category: "IT", skills: ["Programming"], interests: ["IT", "Problem Solving"], minEducation: "bachelor", salary: "₹85,000 - ₹1,60,000", growth: "22%", description: "Design, develop, and maintain software applications." },
    { id: 6, title: "Business Strategist", category: "Business", skills: ["Strategy", "Problem Solving"], interests: ["Business", "Strategy", "Management", "Problem Solving"], minEducation: "bachelor", salary: "₹70,000 - ₹1,80,000", growth: "18%", description: "Develop long-term plans for company growth and efficiency." },
    { id: 7, title: "Graphic Designer", category: "Arts", skills: ["Design", "Creativity"], interests: ["Arts", "Design", "Creativity"], minEducation: "bachelor", salary: "₹40,000 - ₹95,000", growth: "10%", description: "Create visual concepts to communicate brand messages." },
    { id: 8, title: "Financial Analyst", category: "Finance", skills: ["Analytics", "Mathematics"], interests: ["Finance", "Mathematics", "Problem Solving"], minEducation: "bachelor", salary: "₹60,000 - ₹1,40,000", growth: "14%", description: "Evaluate investment opportunities and financial data." },
    { id: 9, title: "Marketing Manager", category: "Marketing", skills: ["Marketing", "Communication"], interests: ["Marketing", "Sales", "Creativity", "Writing"], minEducation: "bachelor", salary: "₹55,000 - ₹1,30,000", growth: "16%", description: "Lead marketing campaigns and brand outreach programs." },
    { id: 10, title: "Operations Manager", category: "Management", skills: ["Leadership", "Project Management"], interests: ["Management", "Business", "Problem Solving"], minEducation: "bachelor", salary: "₹75,000 - ₹1,60,000", growth: "12%", description: "Oversee day-to-day business operations and team productivity." },
    { id: 11, title: "Sales Director", category: "Sales", skills: ["Sales", "Communication"], interests: ["Sales", "Marketing", "Management"], minEducation: "bachelor", salary: "₹85,000 - ₹2,10,000", growth: "11%", description: "Manage sales teams and drive company revenue growth." },
    { id: 12, title: "Psychologist", category: "Psychology", skills: ["Communication", "Critical Thinking"], interests: ["Psychology", "Healthcare", "Education", "Research"], minEducation: "master", salary: "₹50,000 - ₹1,20,000", growth: "19%", description: "Study mental processes and help patients with mental health." },
    { id: 13, title: "Aerospace Engineer", category: "Engineering", skills: ["Mathematics", "Physics", "Technical Skills"], interests: ["Engineering", "Aviation", "Science", "Problem Solving"], minEducation: "bachelor", salary: "₹1,20,000 - ₹3,50,000", growth: "15%", description: "Design and test aircraft, spacecraft, and missiles." },
    { id: 14, title: "Software Architect", category: "Engineering", skills: ["Programming", "System Design"], interests: ["Engineering", "IT", "Management", "Problem Solving"], minEducation: "bachelor", salary: "₹1,80,000 - ₹4,50,000", growth: "25%", description: "Make high-level design choices and frame technical standards for software." },
    //  Academic Careers (Arts & Science) ---
    { id: 15, title: "IAS / Civil Servant", category: "Arts", skills: ["Leadership", "Writing", "Public Administration"], interests: ["Arts", "Political Science", "Geography", "Problem Solving"], minEducation: "bachelor", salary: "₹60,000 - ₹2,50,000", growth: "10%", description: "Top-level government administrator responsible for public policy and law." },
    { id: 16, title: "Scientific Researcher", category: "Science", skills: ["Critical Thinking", "Research", "Analysis"], interests: ["Science", "Research", "Education"], minEducation: "master", salary: "₹70,000 - ₹1,60,000", growth: "18%", description: "Conduct experiments and scientific studies to discover new knowledge." },
    { id: 17, title: "Political Analyst", category: "Arts", skills: ["Critical Thinking", "Writing"], interests: ["Arts", "Political Science", "Research"], minEducation: "bachelor", salary: "₹50,000 - ₹1,20,000", growth: "14%", description: "Analyze political systems, policies, and public opinion." },
    { id: 18, title: "Geographer", category: "Science", skills: ["Research"], interests: ["Science", "Geography", "Environment"], minEducation: "bachelor", salary: "₹45,000 - ₹1,10,000", growth: "9%", description: "Study the earth's physical features and human-environment relationships." },
    {id: 19, 
    title: "Software Developer", 
    category: "IT", 
    skills: ["Java", "Python", "SQL"], 
    interests: ["Coding", "Software"], 
    minEducation: "BCA", 
    salary: "₹4,00,000 - ₹10,00,000", 
    growth: "75%", 
    description: "Build and maintain software applications using modern programming languages."},
    {id: 20, 
    title: "Software Tester (QA)", 
    category: "Quality Assurance", 
    skills: ["Manual Testing", "Bug Tracking", "SDLC"], 
    interests: ["Quality Control", "Detail Oriented"], 
    minEducation: "BCA", 
    salary: "₹3,50,000 - ₹7,00,000", 
    growth: "70%", 
    description: "Execute test cases manually to identify software defects and ensure product quality before release."},
    {id: 21, 
    title: "MERN Stack Developer", 
    category: "IT", 
    skills: ["Fronted","Backend"],
     interests: ["JavaScript", "Full-Stack","MongoDB","Express.js","React","Node.js"], 
    minEducation: "BCA", 
    salary: "₹6,00,000 - ₹15,00,000", 
    growth: "25%", 
    description: "Develop end-to-end web applications using the MERN stack, focusing on high-performance APIs and scalable UI."}
];
// --- 2. DOM ELEMENTS ---
const interestsContainer = document.getElementById('interests-container');
const skillsContainer = document.getElementById('skills-container');
const recommendBtn = document.getElementById('recommend-btn');
const loadingElement = document.getElementById('loading');
const resultsContainer = document.getElementById('results-container'); // Section div
const careerResultsDiv = document.getElementById('career-results'); // Card area
const compareBtn = document.getElementById('compare-btn');
const saveBtn = document.getElementById('save-btn');

// --- 3. INITIALIZATION  ---
function initApp() {
    if(interestsContainer) interests.forEach(interest => createTag(interest, interestsContainer, 20));
    if(skillsContainer) skills.forEach(skill => createTag(skill, skillsContainer, 20));
    
    if(recommendBtn) recommendBtn.onclick = generateRecommendations;
    if(saveBtn) saveBtn.onclick = saveResults;
    if(compareBtn) compareBtn.onclick = showComparison;
}

function createTag(text, container, limit) {
    const el = document.createElement('div');
    el.className = 'skill-tag';
    el.textContent = text;
    el.onclick = () => {
        el.classList.toggle('selected');
    };
    container.appendChild(el);
}

// --- 4. GENERATE RECOMMENDATIONS (Salary + Cards + Buttons) ---
function generateRecommendations() {
    if(loadingElement) loadingElement.style.display = 'block';
    if(resultsContainer) resultsContainer.style.display = 'none';

    setTimeout(() => {
        const selectedInterests = Array.from(document.querySelectorAll('#interests-container .selected')).map(el => el.textContent);
        const selectedSkills = Array.from(document.querySelectorAll('#skills-container .selected')).map(el => el.textContent);

        if (selectedInterests.length === 0 && selectedSkills.length === 0) {
            alert("Please select at least one interest or skill to get recommendations.");
            if(loadingElement) loadingElement.style.display = 'none';
            return;
        }

        if(careerResultsDiv) careerResultsDiv.innerHTML = '';
        
        const matches = careerDatabase.filter(job => {
            const skillMatch = job.skills.some(s => selectedSkills.includes(s));
            const interestMatch = job.interests.some(i => selectedInterests.includes(i));
            return skillMatch || interestMatch;
        });

        matches.forEach(job => {
            const card = document.createElement('div');
            card.className = 'career-card';
            card.style.cssText = "margin-bottom: 20px; border-left: 6px solid #4a90e2; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: left;";
            card.innerHTML = `
                <h3 style="color: #4a90e2; margin-top: 0;">${job.title}</h3>
                <p style="color: #444;"><b>Description:</b> ${job.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <span style="color: #27ae60;">💰 Salary: ${job.salary}</span>
                    <span style="color: #e67e22;">📈 Growth: ${job.growth}</span>
                </div>
            `;
            careerResultsDiv.appendChild(card);
        });

        if(loadingElement) loadingElement.style.display = 'none';
        if(resultsContainer) {
            resultsContainer.style.display = 'block';
            
            // Buttons 
            if(compareBtn) compareBtn.style.setProperty('display', 'inline-block', 'important');
            if(saveBtn) saveBtn.style.setProperty('display', 'inline-block', 'important');
            
            resultsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }, 1000);
}

// --- 5. MONGODB SAVE ---
// --- 5. MONGODB SAVE (Fixed: Populated Arrays & Professional English) ---
function saveResults() {
    const cards = document.querySelectorAll('.career-card');
    if (cards.length === 0) return alert("Please generate results first!");

    // Catching selected tags
    const selectedInterests = Array.from(document.querySelectorAll('#interests-container .selected')).map(el => el.textContent);
    const selectedSkills = Array.from(document.querySelectorAll('#skills-container .selected')).map(el => el.textContent);

    const userData = {
        name: document.getElementById('name')?.value || "Anonymous",
        interests: selectedInterests,
        skills: selectedSkills,
        recommendations: Array.from(cards).map(card => ({
            title: card.querySelector('h3').textContent,
            salary: card.innerText.match(/Salary: (.*)/)?.[1] || "N/A"
        }))
    };

    fetch('http://localhost:3000/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(res => {
        if(res.ok) alert("✅ Success: Data has been saved to MongoDB!");
        else alert("❌ Error: Failed to save data.");
    })
    .catch(() => alert("❌ Server Error: Connection refused."));
}

// --- 6. COMPARISON ---
function showComparison() {
    const compareDiv = document.getElementById('comparison-results');
    const selectedSkills = Array.from(document.querySelectorAll('#skills-container .selected')).map(el => el.textContent);
    
    if (selectedSkills.length === 0) {
        alert("Please select your skills first to view the career comparison.");
        return;
    }

    if(compareDiv) {
        compareDiv.style.display = "block";
        compareDiv.innerHTML = `
            <div style="padding:25px; background: #fff; border-radius:15px; margin-top:20px; border: 2px solid #4a90e2; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <h3 style="color: #4a90e2; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">📊 AI Career Market Analysis</h3>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background: #f8f9fa;">
                        <th style="padding: 12px; border: 1px solid #eee; text-align: left;">Metric</th>
                        <th style="padding: 12px; border: 1px solid #eee; text-align: left;">Analysis Result</th>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Skills Match</td>
                        <td style="padding: 12px; border: 1px solid #eee; color: #4a90e2;">${selectedSkills.join(', ')}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Industry Demand</td>
                        <td style="padding: 12px; border: 1px solid #eee; color: #27ae60;">🔥 Very High (Top Tier)</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Growth Prediction</td>
                        <td style="padding: 12px; border: 1px solid #eee; color: #e67e22;">🚀 25% YoY Increase</td>
                    </tr>
                </table>

                <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; color: #0d47a1; font-size: 0.95rem; line-height: 1.6;">
    <strong>Market Growth Analysis:</strong> The career paths listed above show exceptional growth potential with a strong year-over-year increase in market demand and compensation.
</div>
            </div>
        `;
        compareDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

// Start everything
document.addEventListener('DOMContentLoaded', initApp);


// --- 7. LIVE DATA VIEW & DELETE LOGIC (Safe Mode) ---
const viewBtn = document.getElementById('view-data-btn');
const adminView = document.getElementById('admin-view');
const recordsBody = document.getElementById('records-body');

if(viewBtn) {
    viewBtn.onclick = async () => {
        if(adminView) adminView.style.display = 'block';
        loadRecords();
    };
}

async function loadRecords() {
    if(!recordsBody) return;
    try {
        const res = await fetch('http://localhost:3000/api/all');
        const data = await res.json();
        
        recordsBody.innerHTML = ''; 
        data.forEach(item => {
            const row = document.createElement('tr');
            row.style.borderBottom = "1px solid #eee";
            row.innerHTML = `
                <td style="padding: 12px;"><b>${item.name}</b></td>
                <td style="padding: 12px; font-size: 13px; color: #555;">
                    <strong>Interests:</strong> ${item.interests ? item.interests.join(', ') : 'N/A'} <br> 
                    <strong>Skills:</strong> ${item.skills ? item.skills.join(', ') : 'N/A'}
                </td>
                <td style="padding: 12px; text-align: center;">
                    <button onclick="deleteRecord('${item._id}')" style="background:#ff4757; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            recordsBody.appendChild(row);
        });
    } catch (err) { 
        console.error("Fetch Error:", err);
    }
}

async function deleteRecord(id) {
    if(!confirm("Are you sure you want to permanently delete this record from MongoDB?")) return;
    try {
        const response = await fetch(`http://localhost:3000/api/delete/${id}`, { method: 'DELETE' });
        if(response.ok) loadRecords(); 
    } catch (err) { 
        alert("Delete fail ho gaya!"); 
    }
}


// --- DROP-DOWN TO TAGS LOGIC (THE FINAL FIX) ---
document.getElementById('interests-select').addEventListener('change', function() {
    if(this.value) {
        createTag(this.value, interestsContainer);
        
        const tags = interestsContainer.getElementsByClassName('skill-tag');
        const newTag = tags[tags.length - 1];
        if(newTag) newTag.classList.add('selected'); 
        
        this.value = ""; // Dropdown reset
    }
});

document.getElementById('skills-select').addEventListener('change', function() {
    if(this.value) {
        createTag(this.value, skillsContainer);
        
        const tags = skillsContainer.getElementsByClassName('skill-tag');
        const newTag = tags[tags.length - 1];
        if(newTag) newTag.classList.add('selected');

        this.value = ""; // Dropdown reset
    }
});

// ==========================================
// 🚀 FINAL STEP: CV GENERATOR LOGIC
// ==========================================

document.getElementById('generateCVBtn').onclick = async function() {
    const { jsPDF } = window.jspdf;
    const cvElement = document.getElementById('resume-template');

    // 1. Check Name
    const nameInput = document.getElementById('name').value;
    if (!nameInput) { alert("Please enter your full name to generate the CV.!"); return; }

    // 2. Capture Data
    const eduDropdown = document.getElementById('education');
    const eduText = eduDropdown.options[eduDropdown.selectedIndex].text;
    const expText = document.getElementById('experience').value;
    
    const selectedSkills = Array.from(document.querySelectorAll('#skills-container .skill-tag.selected')).map(el => el.textContent);
    const selectedInterests = Array.from(document.querySelectorAll('#interests-container .skill-tag.selected')).map(el => el.textContent);

    const customInfo = document.getElementById('additional-info').value.trim();

   // 3. Smart Content 
        const mainInterest = selectedInterests[0] || "General";
        let summary = "", pTitle = "", pDesc = "";

        if (selectedInterests.includes("Marketing")) {
            summary = "Dynamic marketing enthusiast with a focus on digital strategy and brand growth.";
            pTitle = "Digital Brand Growth & Market Sentiment Analysis";
            pDesc = "Strategized and executed a comprehensive digital marketing campaign that improved brand engagement by 45%. Conducted deep-dive market sentiment analysis using social listening tools to optimize ad spend across global platforms.";
        } 
        else if (selectedInterests.includes("IT")) {
            summary = "Tech-driven professional specializing in software development and automated AI solutions.";
            pTitle = "AI-Powered Career Intelligence System";
            pDesc = "Engineered a sophisticated full-stack MERN application integrated with Google Gemini AI to provide real-time career roadmaps. Developed automated algorithms for skill-gap analysis and professional documentation.";
        } 
        else if (selectedInterests.includes("Healthcare")) {
            summary = "Aspiring Healthcare professional focused on clinical excellence and patient care management.";
            pTitle = "Clinical Data Optimization & Patient Safety Framework";
            pDesc = "Led a research project focused on streamlining medical record workflows to ensure 100% data accuracy. Implemented a predictive framework for patient safety protocols by analyzing historical clinical data.";
        }
        else if (selectedInterests.includes("Business")) {
            summary = "Strategic business thinker focused on operational efficiency and enterprise scaling.";
            pTitle = "Enterprise Resource Planning & Strategic Scaling";
            pDesc = "Developed a strategic business model focused on operational efficiency. Analyzed complex financial datasets to identify revenue growth opportunities and implemented lean management techniques to reduce overhead costs.";
        }
        else if (selectedInterests.includes("Aviation")) {
            summary = "Aviation enthusiast focused on air traffic safety and logistics optimization.";
            pTitle = "Air Traffic Management & Safety Logistics Study";
            pDesc = "Conducted a detailed analysis of next-generation air traffic control systems. Researched high-efficiency flight path optimization to reduce fuel consumption and analyzed safety protocols to enhance passenger security.";
        }
        else if (selectedInterests.includes("Law & Justice")) {
            summary = "Legal researcher dedicated to judicial transparency and regulatory compliance.";
            pTitle = "Legal Compliance Framework & Judicial Data Research";
            pDesc = "Researched and drafted a comprehensive legal compliance framework for emerging tech industries. Conducted extensive case law analysis to support judicial transparency and evaluated digital privacy laws.";
        }
        else {
            summary = "Dedicated professional committed to continuous learning and organizational success.";
            pTitle = "Professional Process Excellence & Workflow Strategy";
            pDesc = "Researched industry-standard operational strategies to improve organizational productivity. Focused on implementing agile methodologies and performance-tracking systems to ensure high-quality output.";
        }

        
if (customInfo !== "") {
    pDesc += `
        <br><br>
        <h3 style="background: #f8f9fa; padding: 8px; border-left: 5px solid #4a90e2; font-size: 16px; margin-top: 15px; margin-bottom: 10px;">ADDITIONAL INFORMATION</h3>
        <div style="white-space: pre-line; padding-left: 10px; line-height: 1.6;">${customInfo}</div>
    `;
}

    // 4. Update Template 
    document.getElementById('res-name').innerText = nameInput.toUpperCase();
    
    
    if(document.getElementById('res-title')) {
       document.getElementById('res-title').innerText = mainInterest.toUpperCase() + " CANDIDATE";
    }
    
    // Summary update
    const summaryElement = document.getElementById('res-edu-summary'); 
    
    if(summaryElement) summaryElement.innerText = summary;

    document.getElementById('res-edu-val').innerText = eduText;
    document.getElementById('res-exp-val').innerText = expText && expText > 0 ? expText + " Years" : "Entry Level";
    
    // Project Update
    document.getElementById('res-project-title').innerHTML = `<strong>${pTitle}:</strong>`;
   document.getElementById('res-project-desc').innerHTML = pDesc;

    // Interests Update (Bullet Points Logic)
    const resInterestsList = document.getElementById('res-interests-list');
    if(resInterestsList) {
        resInterestsList.innerHTML = ""; 
        if (selectedInterests.length > 0) {
            selectedInterests.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                resInterestsList.appendChild(li); 
            });
        } else {
            resInterestsList.innerHTML = "<li>Professional Development</li>";
        }
    }

    
    const resSkillsList = document.getElementById('res-skills-list');
    resSkillsList.innerHTML = "";
    if (selectedSkills.length > 0) {
        selectedSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            resSkillsList.appendChild(li);
        });
    } else {
        resSkillsList.innerHTML = "<li>Professional Skills</li>";
    }

    // 5. Download Action (Screenshot Logic)
    cvElement.style.display = 'block';
    cvElement.style.position = 'fixed';
    cvElement.style.top = '0';
    cvElement.style.left = '0';
    cvElement.style.zIndex = '10000';
    cvElement.style.background = 'white';
    cvElement.style.width = '800px';

    await new Promise(r => setTimeout(r, 500));

    html2canvas(cvElement, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${nameInput}_CV_2026.pdf`);

        cvElement.style.display = 'none';
        alert("Success! Your professional CV has been generated and downloaded");
    }).catch(err => {
        console.error("System Error: PDF generation failed. Technical details:", err);
        alert("Error: PDF generation failed due to a library conflict. Please check the system console for details.");
    });
};

// Form Toggle Logic
function toggleForm(isSignup) {
    document.getElementById('login-form').style.display = isSignup ? 'none' : 'block';
    document.getElementById('signup-form').style.display = isSignup ? 'block' : 'none';
}

// Login/Signup API Connection
async function handleAuth(type) {
    
    const email = type === 'login' ? document.getElementById('auth-email').value : document.getElementById('reg-email').value;
    const password = type === 'login' ? document.getElementById('auth-pass').value : document.getElementById('reg-pass').value;

    
    if (!email || !password) {
        return alert("Validation Error: Please enter both email and password to continue.");
    }

    try {
        // 3. API call 
        const response = await fetch(`http://localhost:3000/api/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        

    

    if (response.ok) {
            alert(type === 'login' ? "✅ Welcome Back!" : "✅ Authentication successful. ✅ Account created successfully! Please log in to continue");
            
            if (type === 'login') {
                document.getElementById('auth-overlay').style.display = 'none';
                document.getElementById('logout-btn').style.display = 'block';
            } else {
                toggleForm(false);
            }
        } else {
            alert("❌ Error: " + data.message);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("❌ Connection Error: Unable to reach the server. Please ensure the backend is running.");
    }
} // Line 457: handleAuth 

function handleLogout() {
    
    document.getElementById('auth-overlay').style.display = 'flex';
    
    document.getElementById('logout-btn').style.display = 'none';
    
    document.getElementById('auth-email').value = '';
    document.getElementById('auth-pass').value = '';
    
    alert("Logged Out: You have been securely logged out of your session.");
} 