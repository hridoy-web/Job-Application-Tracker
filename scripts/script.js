// 1: all jobs data array store list

let jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "NOT APPLIED"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "NOT APPLIED"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "NOT APPLIED"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "NOT APPLIED"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "NOT APPLIED"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "NOT APPLIED"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "NOT APPLIED"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "NOT APPLIED"
    }
];

let currentFilter = 'All';

//  2. dashboard update function 
function updateDashboard() {
    let interviewCount = 0;
    let rejectedCount = 0;

    // for loop -- check interview and rejected jobs
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'INTERVIEW') interviewCount++;
        if (jobs[i].status === 'REJECTED') rejectedCount++;
    }

    // html text change
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
}

// 3. jobs card design function
function jobsCard(filter) {
    const jobContainer = document.getElementById('jobs-container');
    const jobCountText = document.getElementById('job-count');

    // container defult style delete
    jobContainer.innerHTML = '';
    let count = 0;

    // for loop
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];

        // job status filtering
        if (filter === 'All' || job.status === filter) {
            count++;
            const card = document.createElement('div');
            card.className = 'card bg-white border border-gray-100 p-8 shadow-sm relative mb-4';

            // jobs card content load inner html
            card.innerHTML = `
<button onclick="deleteJob(${job.id})" class="absolute top-10 right-6 text-gray-400 hover:text-red-500"><i class="fa-solid fa-trash"></i></button>

<h3 class="text-[#002C5C] text-2xl font-bold">${job.companyName}</h3>
<p class="text-gray-500 font-medium mb-5">${job.position}</p>

<div class="grid grid-cols-1 gap-1 text-sm text-gray-500 mb-5">

<span>${job.location}</span>
<span>${job.type}</span>
<span>${job.salary}</span> 

</div>

<div class="badge badge-ghost rounded-md font-semibold p-5 mb-5">${job.status}</div>
<p class="text-gray-600 font-medium mb-5">${job.description}</p>

<div class="flex gap-3">
<button onclick="changeStatus(${job.id}, 'INTERVIEW')" 
class="btn btn-outline btn-success btn-sm px-3 font-semibold text-[14px] ${job.status === 'INTERVIEW' ? 'bg-green-600 text-white' : ''}">INTERVIEW</button>

<button onclick="changeStatus(${job.id}, 'REJECTED')" 
class="btn btn-outline btn-error btn-sm px-3 font-semibold text-[14px] ${job.status === 'REJECTED' ? 'bg-red-600 text-white' : ''}">REJECTED</button>
</div>
`;

// show card -- div container
            jobContainer.appendChild(card);
        }
    }
    // filter jobs showing
    jobCountText.innerText = count + ' jobs';

    // 4. no jobs massage box
    if (count === 0) {
        jobContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div class="mb-3">
                    <img src="./images/document.png">
                </div>
                <h3 class="text-2xl font-bold text-[#002C5C] mb-2">No jobs available</h3>
                <p class="text-gray-400">Check back soon for new job opportunities</p>
            </div>
        `;
    }
}

// 5. job status change function
function changeStatus(id, status) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            if (jobs[i].status === status) {
                jobs[i].status = "NOT APPLIED";
            } else {
                jobs[i].status = status;
            }
        }
    }
    updateDashboard();
    jobsCard(currentFilter);
}

// 6.  job delete function
function deleteJob(id) {
    let removeJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id !== id) {
            removeJobs.push(jobs[i]);
        }
    }
    jobs = removeJobs;
    updateDashboard();
    jobsCard(currentFilter);
}

// 7. tab button click events
document.getElementById('all-tab').onclick = function () {
    switchTab('All', 'all-tab');
};
document.getElementById('interview-tab').onclick = function () {
    switchTab('INTERVIEW', 'interview-tab');
};
document.getElementById('rejected-tab').onclick = function () {
    switchTab('REJECTED', 'rejected-tab');
};

// 8. tab style change function
function switchTab(f, id) {
    currentFilter = f;
    const tabs = document.querySelectorAll('.tab');

    // change active tab class style 
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-active', 'bg-blue-600', 'text-white');
    }

    // clicked  tab showing style
    const active = document.getElementById(id);
    active.classList.add('tab-active', 'bg-blue-600', 'text-white');
    jobsCard(f);
}

// 9. function call
updateDashboard();
jobsCard('All');