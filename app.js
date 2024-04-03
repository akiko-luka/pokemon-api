<ul class="stat">
${data.stats
  .map((stat) => `<li><span class="stat-name">${stat.stat.name}:</span> <span class="base-stat">${stat.base_stat}</span></li>`)
  .join("")}
</ul>