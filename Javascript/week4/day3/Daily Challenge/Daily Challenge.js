
class Video {
  constructor(title, uploader, time) {
    this.title = title;       
    this.uploader = uploader; 
    this.time = time;         
  }

  // Create a method called watch()
  watch() {
    
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
  }
}


console.log("--- Individual Video Instances ---");
const video1 = new Video("Learn JavaScript Basics", "DevGenius", 3600);
console.log(video1.watch()); 


const video2 = new Video("Mastering CSS Flexbox", "StyleCrafter", 1200);
console.log(video2.watch()); 


const videoData = [
  { title: "React Hooks Explained", uploader: "CodeWizard", time: 2700 },
  { title: "Node.js Microservices", uploader: "BackendBoss", time: 5400 }, 
  { title: "Python for Data Science", uploader: "DataScientist", time: 4800 },
  { title: "Mobile App UI/UX Design", uploader: "DesignGuru", time: 3000 }, 
  { title: "Introduction to Cyber Security", uploader: "SecurityExpert", time: 3900 } 
];


videoData.forEach((data, index) => {
  
  const videoInstance = new Video(data.title, data.uploader, data.time);

 
  console.log(`Video ${index + 1}: ${videoInstance.watch()}`);
});