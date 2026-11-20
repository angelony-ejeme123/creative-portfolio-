const portfolioContact = {
  email: "angelonyejeme@gmail.com",
  whatsapp: "09016689025",
  social: {
    linkedin: "https://www.linkedin.com/in/onyejeme-angel-424b983b3/",
    instagram: "https://www.instagram.com/angelonyejeme/?hl=en",
    other: "https://www.facebook.com/profile.php?id=100093851005294"
  }
};

const sampleContent = {
  social: {
    category: "Social media captions",
    title: "A gentle reminder for the busy days",
    paragraphs: [
      "A gentle reminder that even on your busiest days, you deserve time to rest, recharge and appreciate how far you've come. Keep going, one step at a time. 💛",
      "Progress doesn’t have to be loud to count. Small steps still move you forward.",
      "What’s one thing you’re proud of this week?"
    ]
  },
  email: {
    category: "Email writing",
    title: "A warm welcome that makes a great first impression",
    paragraphs: [
      "Subject: Welcome to GlowNest! We're Happy You're Here 💛",
      "Hello Joy,",
      "Welcome to GlowNest Skincare! We're so happy to have you here.",
      "We're passionate about making skincare simple, enjoyable and accessible. Whether you're building your first skincare routine or looking for new favourites, we're here to help you find products that suit your everyday needs.",
      "Take a moment to explore our collection and discover your next skincare favourite.",
      "Thank you for being part of our community. We look forward to having you with us!",
      "Warm regards,",
      "The GlowNest Skincare Team",
      "Sample project: Welcome email for a fictional skincare brand.",
      "Is this conversation helpful so far?"
    ]
  },
  product: {
    category: "Product descriptions",
    title: "GlowNest Daily Hydrating Face Serum",
    paragraphs: [
      "Give your skin the hydration and care it deserves. The GlowNest Daily Hydrating Face Serum is designed to add a refreshing touch to your skincare routine, helping your skin feel soft, smooth and refreshed.",
      "Lightweight and easy to incorporate into your daily routine, it's a simple way to make skincare feel more enjoyable.",
      "Sample project: Product description for a fictional skincare brand."
    ]
  },
  service: {
    category: "Customer service responses",
    title: "Helpful replies, with a human touch",
    paragraphs: [
      "Hi Joy,",
      "Thank you for reaching out. I'm sorry your order didn't arrive as expected. I understand how disappointing that can be.",
      "I'd be happy to help resolve this. Please share your order number and a few details about the issue so I can look into it and guide you on the next steps.",
      "We appreciate your patience and the opportunity to make things right.",
      "Warm regards,",
      "GlowNest Customer Support Team",
      "Sample project: Customer service response addressing a delayed or problematic order."
    ]
  },
  promo: {
    category: "Promotional messages",
    title: "Exclusive skincare offer",
    paragraphs: [
      "We have something special for you! 🎉",
      "Enjoy 20% OFF selected skincare products at GlowNest Skincare. It's a great time to get your skincare favourites at a better price!",
      "Hurry! This special offer is available until 30 November 2026.",
      "Take a look at our collection and place your order today:",
      "🛍️ Shop here: https://skincaretrips.netlify.app/",
      "Thank you for choosing GlowNest Skincare! 💕",
      "Sample project: Promotional WhatsApp marketing message for a fictional skincare brand.",
      "Note: The discount and deadline are fictional examples."
    ]
  },
  copy: {
    category: "Copywriting",
    title: "GlowNest skincare copy",
    paragraphs: [
      "Clearer care. Stronger glow.",
      "GlowNest Skincare helps busy, beauty-conscious customers build routines that feel simple, effective, and worth returning to every day.",
      "With gentle product messaging, confident benefits, and a calm, premium brand voice, every touchpoint invites trust and action.",
      "Ready to create skincare messaging that feels polished, helpful, and conversion-ready? Let’s build your next brand story.",
      "Project: GlowNest Skincare – Landing Page Copywriting (Fictional Brand)."
    ]
  }
};

const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

function closeNavigation() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  primaryNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isExpanded);
  document.body.classList.toggle("menu-open", !isExpanded);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".work-card");
const filterEmpty = document.querySelector("#filter-empty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("is-active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });

    portfolioCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    filterEmpty.hidden = visibleCount > 0;
  });
});

const sampleDialog = document.querySelector("#sample-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogCopy = document.querySelector("#dialog-copy");

document.querySelectorAll(".sample-open").forEach((button) => {
  button.addEventListener("click", () => {
    const sample = sampleContent[button.dataset.sample];
    if (!sample) return;

    dialogCategory.textContent = sample.category;
    dialogTitle.textContent = sample.title;
    dialogCopy.replaceChildren(...sample.paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    }));
    sampleDialog.querySelector(".dialog-disclosure").textContent =
      "Original concept sample for portfolio demonstration; not client work.";
    sampleDialog.showModal();
  });
});

sampleDialog.querySelector(".dialog-close").addEventListener("click", () => {
  sampleDialog.close();
});

sampleDialog.addEventListener("click", (event) => {
  if (event.target === sampleDialog) sampleDialog.close();
});

const stories = {
  story1: {
    category: "Story by Angel",
    title: "The Secret Life of Mrs. Unknown",
    paragraphs: ["Open the PDF below to read the complete story."]
  }
};

document.querySelectorAll(".story-open").forEach((button) => {
  button.addEventListener("click", () => {
    const story = stories[button.dataset.story];
    if (!story) return;
    dialogCategory.textContent = story.category;
    dialogTitle.textContent = story.title;
    dialogCopy.replaceChildren(...story.paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    }));
    const readLink = document.createElement("a");
    readLink.className = "story-pdf-link";
    readLink.href = "assets/the-secret-life-of-mrs-unknown.pdf";
    readLink.target = "_blank";
    readLink.rel = "noopener";
    readLink.textContent = "Read or download the full story ↗";
    dialogCopy.append(readLink);
    sampleDialog.querySelector(".dialog-disclosure").textContent = "Written by Angel.";
    sampleDialog.showModal();
  });
});

const typedText = document.querySelector("#typed-text");
const phrases = ["make an impact.", "move people.", "tell a story.", "build trust."];
let phraseIndex = 0;

function typePhrase() {
  if (!typedText || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const phrase = phrases[phraseIndex];
  let characterIndex = 0;
  let deleting = false;

  const update = () => {
    typedText.textContent = phrase.slice(0, characterIndex);
    if (!deleting && characterIndex < phrase.length) {
      characterIndex += 1;
      window.setTimeout(update, 72);
    } else if (!deleting) {
      deleting = true;
      window.setTimeout(update, 1450);
    } else if (characterIndex > 0) {
      characterIndex -= 1;
      window.setTimeout(update, 38);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(typePhrase, 260);
    }
  };

  update();
}

typePhrase();

const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .section-heading, .about-copy, .strengths, .service-card, .work-card, .process-grid li, .why-list li, .stories-heading, .story-card"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

function configuredValue(value) {
  return value.trim() !== "" && !value.includes("YOUR_") && !value.includes("example.com");
}

function setContactLinks() {
  const emailLink = document.querySelector("[data-email-link]");
  if (configuredValue(portfolioContact.email)) {
    emailLink.href = `mailto:${portfolioContact.email}`;
    emailLink.textContent = `${portfolioContact.email} ↗`;
  } else {
    emailLink.href = "#contact-form";
    emailLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#email").focus();
      document.querySelector("#form-status").textContent = "Add your email address in index.js to show it here.";
    });
  }

  document.querySelectorAll("[data-social]").forEach((link) => {
    const url = portfolioContact.social[link.dataset.social];
    if (configuredValue(url) && /^https:\/\/\S+$/i.test(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#contact";
      link.setAttribute("aria-label", `${link.textContent.trim()}: add your profile link in index.js`);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#form-status").textContent = `Add your ${link.dataset.social} profile URL in index.js before publishing.`;
        document.querySelector("#contact-form").scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  });
}

setContactLinks();

document.querySelector('[data-channel="whatsapp"]').addEventListener("click", () => {
  let number = portfolioContact.whatsapp.replace(/\D/g, "");
  if (!number) {
    const enteredNumber = window.prompt("Add your WhatsApp number with country code (digits only). This number is used only to open your chat.");
    if (!enteredNumber) return;
    number = enteredNumber.replace(/\D/g, "");
  }

  if (number.length < 8 || number.length > 15) {
    document.querySelector("#form-status").textContent = "Please enter a valid WhatsApp number with country code (8–15 digits).";
    document.querySelector("#form-status").classList.add("is-error");
    return;
  }

  window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("input", () => {
  formStatus.textContent = "";
  formStatus.classList.remove("is-error");
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());