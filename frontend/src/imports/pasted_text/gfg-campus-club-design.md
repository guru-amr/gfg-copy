Design a multi-page website for "GeeksforGeeks Campus Club" at a college. The design must closely mirror the official GeeksforGeeks website (geeksforgeeks.org) in visual language — using GFG's signature green (#2F8D46) as the primary brand color, dark headers, clean white content areas, and the GFG logo style. The overall feel should be professional, developer-friendly, and modern.

📄 Page 1 — Homepage / Landing Page

Design a hero section with a dark navbar containing the GFG Campus Club logo (geek head icon in green), navigation links: Home, Events, Resources, Leaderboard, Blog, Contact. Include a prominent CTA banner with headline: "Code. Learn. Build. — GFG Campus Club, [College Name]", subtext, and two CTA buttons: "Join the Club" (green filled) and "View Events" (outlined). Below the hero, add a stats row: Members, Events Hosted, Problems Solved, Active Streaks — displayed as bold number counters. Then add a "Featured Upcoming Events" card grid (3 cards), a "Why Join Us?" section with icon cards, and a footer with GFG branding, social links, and contact.


📄 Page 2 — Events Page

Design an events listing page with a filter bar (All / Upcoming / Past / Workshops / Contests). Show events as cards with: event banner thumbnail, title, date/time badge, tags (e.g., DSA, Web Dev, CP), "Register Now" CTA in green, and a seat availability indicator. Include a featured banner at the top for the next big event with a countdown timer. Add a modal/drawer design for event detail view with full description, speakers, and registration form fields.


📄 Page 3 — Learning Resources Page

Design a resource hub page similar to GFG's course/article layout. Include a top search bar, category tabs: DSA, Web Dev, CP, System Design, Aptitude. Show resource cards with: topic icon, title, difficulty badge (Easy/Medium/Hard in green/yellow/red), estimated time, and a "Start Learning" button. Add a "Recommended Learning Paths" horizontal scroll section with roadmap cards (e.g., "SDE Preparation Path", "Frontend Dev Path"). Include a "Practice Problems" section with a mini LeetCode-style problem list table.


📄 Page 4 — Community / Leaderboard Page

Design a community dashboard. Top section: a leaderboard table with rank, avatar, name, college year, problems solved, events attended, and streak badge. Use gold/silver/bronze highlights for top 3. Add a profile card sidebar. Below, show an "Achievements & Badges" section with badge icons (e.g., "First Commit", "100-Day Streak", "Event Organizer"). Include a "Recent Activity Feed" showing latest member actions. Add a student contribution graph (like GitHub's green grid heatmap).


📄 Page 5 — Blog / Updates Page

Design a blog page matching GFG's article layout. Show a hero featured article with large thumbnail. Below, a 3-column grid of blog cards: thumbnail, category tag, title, author avatar + name, read time, and date. Include a sidebar with: trending topics, top contributors, and newsletter signup. Individual article page should have a clean reading layout with table of contents sidebar, code block styling (dark background), and share buttons.


📄 Page 6 — Contact & Support Page

Design a contact page with: a query support form (Name, Email, Query Type dropdown, Message), a live chat widget button (green floating bubble), club coordinator cards with photo, name, role, and LinkedIn icon, embedded Google Map placeholder for club room location, and official links section: GFG Official, LinkedIn Group, Discord, GitHub Org.


🎨 Design System Specification (add to Figma as a Style Guide frame):

Create a design system frame with:

Primary color: #2F8D46 (GFG Green)
Dark bg: #1A1A1A, Card bg: #FFFFFF, Surface: #F4F4F4
Typography: Headings in "Poppins Bold", Body in "Roboto Regular", Code in "JetBrains Mono"
Components: Navbar, Event Card, Resource Card, Leaderboard Row, Blog Card, Badge, Button (Primary/Secondary/Ghost), Input Field, Tag/Chip, Avatar, Progress Bar
Spacing system: 4px base grid
Border radius: 8px cards, 4px buttons
Shadows: Soft card shadows, hover lift effect specs
Icons: Use Feather Icons or Heroicons set



💡 Innovation Features to Include (prompt AI to design these):

Also design UI screens for:

AI Problem Recommender widget — a floating panel where a student types their weak topic and gets 3 recommended problems with difficulty and source tag
Event Check-in QR screen — a mobile-size frame showing a QR code scanner screen for event attendance
Streak Tracker widget — a compact sidebar widget showing daily coding streak with a fire icon and calendar grid
Club Announcement Banner — a dismissible top banner component for urgent club news



📐 Figma-Specific Instructions:


Use Auto Layout for all components and frames
Create Components for Cards, Buttons, Nav, Footer
Use Variants for Button states: Default, Hover, Disabled
Set up Color Styles and Text Styles in the design system
Make the design responsive with Desktop (1440px), Tablet (768px), and Mobile (375px) frames
Add prototype links between pages for clickable demo flow