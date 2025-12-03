---
layout: default
title: Sessions
---

# 🛹 Skate Sessions

This folder contains all your skateboard session plans and notes.

## Available Sessions

{% assign sorted_sessions = site.sessions | sort: 'date' | reverse %}
{% for session in sorted_sessions %}

- [{{ session.title | default: session.name }}]({{ session.url }})
  {% endfor %}

---

[← Back to Home](../index.html)
