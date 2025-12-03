---
layout: default
title: Home
---

# Skate Session Planner

Welcome to the Skate Session Planner - your skateboard session trainer!

## About

This project helps skateboarders plan and track their practice sessions effectively.

For more information, see the [README](README.md).

## Recent Sessions

{% assign sorted_sessions = site.sessions | sort: 'date' | reverse %}
{% for session in sorted_sessions %}

- [{{ session.title | default: session.name }}]({{ site.baseurl }}{{ session.url }})
  {% endfor %}

[View all sessions →]({{ site.baseurl }}/sessions/)
