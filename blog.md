---
layout: default
title: Technical Notes
---

Here I present occasional reflections on academia, research culture, and other topics of interest.

Nothing for now :) Btw, check out my photography here: 
<div class="external-links">
<a href="https://www.flickr.com/photos/184604166@N08/" target="_blank">
View on Flickr
</a>
</div>

{% for post in site.posts %}
  <div class="blog-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}
