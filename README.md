# QueensU-Webring

A webring connecting all students and alumni at Queen's University in Kingston, Ontario.

**[Visit the live webring](#)** | **[How to join](#joining)** | **[Widget examples](#widget-examples)**

## What is a webring?

Webrings are collections of personal websites connected in a ring structure, allowing visitors to discover new sites by navigating between them. Popular in the early web, they're making a comeback as a way to build community and make personal sites more discoverable. The Queen's Computing Webring brings together current students and alumni to showcase their portfolios, projects, and personal spaces on the web.

## Joining

**Eligibility:** Current students or alumni of a recognized program at Queen's University (Kingston, ON, Canada).

### Steps to join:

1. **Add the webring widget to your site** (see templates below). We recommend placing it in your footer or navigation area.

2. **Fork this repository** and add your entry to the END of the array in your program's `.json` file under the `sites` folder (e.g., Computing students should add their entry to `cs.json`):
```json
{
    "name": "Your Name",
    "year": 20XX,
    "website": "https://yoursite.com/"
}
```

3. **Open a Pull Request** with your information. Include verification (like a LinkedIn profile or other social media) showing your connection to Queen's University.

Your PR will be reviewed and merged if you meet the eligibility requirements and your site contains no inappropriate content.

## Widget Examples

Every personal site is unique, so feel free to customize the widget to match your design! Here are starter templates using the white icon (Computing students can find other icon variants for their program below):

### HTML
```html
<div style="display: flex; align-items: center; gap: 8px;">
    <a href="https://queens.webring.dev/#yoursite.com?nav=prev">←</a>
    <a href="https://queens.webring.dev/#yoursite.com" target="_blank">
        <img src="https://queens.webring.dev/assets/icons/cs/icon-white.png" 
             alt="Queen's Computing Webring" 
             style="width: 24px; height: auto; opacity: 0.8;"/>
    </a>
    <a href="https://queens.webring.dev/#yoursite.com?nav=next">→</a>
</div>
<!-- Replace 'yoursite.com' with your actual URL -->
```

### JSX/React
```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <a href='https://queens.webring.dev/#yoursite.com?nav=prev'>←</a>
    <a href='https://queens.webring.dev/#yoursite.com' target='_blank'>
        <img
            src='https://queens.webring.dev/assets/icons/cs/icon-white.png'
            alt="Queen's Computing Webring"
            style={{ width: '24px', height: 'auto', opacity: 0.8 }}
        />
    </a>
    <a href='https://queens.webring.dev/#yoursite.com?nav=next'>→</a>
</div>
// Replace 'yoursite.com' with your actual URL
```

### Icon Variants

**Computing (cs):**
- White: `https://queens.webring.dev/assets/icons/cs/icon-white.png`
- Black: `https://queens.webring.dev/assets/icons/cs/icon-black.png`
- Navy Blue: `https://queens.webring.dev/assets/icons/cs/icon-blue.png`

**Other programs:** Check the `/assets/icons/` folder for your program's icons.

Feel free to download and host these locally if needed.

## Credits & Acknowledgments

This project takes heavy inspiration from the webrings:
- **[UW CS Webring](https://cs.uwatering.com)** 
- **[UW SE Webring](https://se-webring.xyz)**
- **[UofT SKULE™ WebRing](https://webring.skule.ca/)**
  
Without them, this project would not have been possible!

---

*Currently maintained by Aaron Su and Kevin Phan.*
