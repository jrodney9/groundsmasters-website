document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
});

// Simple project filter logic
document.addEventListener("DOMContentLoaded", () => {
  const filterChips = document.querySelectorAll(".filter-chip");
  const projects = document.querySelectorAll(".projects-grid .project");

  if (!filterChips.length || !projects.length) return;

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter || "all";

      // Active chip styling
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      // Show/hide projects
      projects.forEach((proj) => {
        const cat = (proj.dataset.category || "").toLowerCase();
        if (filter === "all" || cat === filter.toLowerCase()) {
          proj.style.display = "";
        } else {
          proj.style.display = "none";
        }
      });
    });
  });
});
