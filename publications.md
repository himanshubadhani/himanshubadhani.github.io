---
layout: default
title: Publications
---
<div class="scholar-button-container">
  <a href="https://scholar.google.com/citations?user=2b1W1P0AAAAJ&hl=en"
     class="scholar-button"
     target="_blank">

    <svg class="scholar-icon" viewBox="0 0 24 24">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      <path d="M5 13.18V17c0 2.21 3.58 4 7 4s7-1.79 7-4v-3.82l-7 3.82-7-3.82z"/>
    </svg>

    Google Scholar
  </a>
</div>

## Preprints

{% assign sorted_preprints = site.data.preprints | sort: "year" | reverse %}

{% for paper in sorted_preprints %}
<div class="pub-item preprint">
  <strong>{{ paper.title }}</strong><br>
  {{ paper.authors }}<br>
  {{ paper.archive }} ({{ paper.year }})<br>
  <a href="{{ paper.abstract }}">Abstract</a> ·
  <a href="{{ paper.pdf }}">PDF</a>
</div>
{% endfor %}
---
## Publications

{% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}

{% for y in years %}
### {{ y }}

{% for paper in site.data.publications %}
  {% if paper.year == y %}
  <div class="pub-item">
    <strong>{{ paper.title }}</strong><br>
    {{ paper.authors }}<br>
    {{ paper.venue }} ({{ paper.year }})<br>
    <a href="{{ paper.link }}">Link</a>
  </div>
  {% endif %}
{% endfor %}

{% endfor %}
