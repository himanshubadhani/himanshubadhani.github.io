---
layout: default
title: Publications
---
## Preprints

<div class="scholar-button-container">
  <a href="https://scholar.google.com/citations?user=2b1W1P0AAAAJ&hl=en"
     class="scholar-button"
     target="_blank">
     Google Scholar Profile
  </a>
</div>

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
