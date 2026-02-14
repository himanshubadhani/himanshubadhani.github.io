---
layout: default
title: About
---
## About

I am a Postdoctoral fellow at IIIT Hyderabad, working under the supervision of Dr. Siddhartha Das. I am fascinated by quantum physics and its potential in transforming the technology of the future. I work in quantum information theory, with interests in quantum thermodynamics, resource theories, and thermodynamic aspects of quantum processes. I completed my Ph.D. at IMSc, Chennai, in 2025, where I was advised by Dr. C. M. Chandrashekar and worked closely with Dr. Sibasish Ghosh. Before joining the doctoral program, I spent a year ('16-'17) in HRI Allahabad as a long-term visiting student, working with Dr. Dileep Jatkar on the aspects of de Sitter Cosmology. Before that, I received my BS-MS dual degree from IISER Pune. I was advised by Dr. Alok Laddha (CMI Chennai) for my Master's thesis on quantum field theory in de Sitter spacetime.

<div style="text-align: center; margin: 1.5rem 0;">
<a href="{{ '/assets/cv/CV.pdf' | relative_url }}" download>
<button>Download CV (PDF)</button>
</a>
</div>
---

## Research
---
## Preprints
- HB, Dhanuja G. S, and S. Das, Thermodynamic work capacity of quantum information processing, arXiv:2510.23731 [quant-ph] (2025).
- HB, Dhanuja G. S, and S. Das, Thermodynamics of quantum processes: An operational framework for free energy and reversible athermality, arXiv:2510.12790 [quant-ph] (2025).
  
## Pulications
{% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}

{% for y in years %}
### {{ y }}

{% for paper in site.data.publications %}
  {% if paper.year == y %}
  <div class="pub-item">
  <strong>{{ paper.title }}</strong><br>
  {{ paper.authors }}<br>
  {{ paper.venue }} ({{ paper.year }})  <a href="{{ paper.link }}">Link</a>
  </div>

  
  {% endif %}
{% endfor %}

{% endfor %}

---

## Teaching

- Quantum Information Theory by  Dr. Siddhartha Das, Monsoon 2025
- Introduction to Quantum Information by Dr. C. M. Chandrashekar, Spring 2020

---

## Contact

Email: himanshubadhani@gmail.com  
