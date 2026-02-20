---
layout: default
title: Technical Notes
---

I intend to put my views on academia and other random things I am interested in.

For now, check out my photography: <div class="external-links">
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
