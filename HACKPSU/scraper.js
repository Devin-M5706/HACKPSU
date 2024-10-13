async function fetchArticleContent(url) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      
      // Parse the HTML string into a document
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      
      // Define possible selectors for the main article content
      const possibleSelectors = [
        'article',                        // Standard HTML5 article tag
        'main',                           // Main content section
        'div[class*="article"]',          // Divs with 'article' in class name
        'div[class*="content"]',          // Divs with 'content' in class name
        'div[class*="post"]',             // Divs with 'post' in class name (for blogs)
        'div[class*="story"]',            // Divs with 'story' in class name
        'section[class*="article"]',      // Section tags used in articles
        'section[class*="content"]',      // Section tags used for content
        'div[class*="entry"]',            // Common in blogs
        'div[class*="body"]',             // Article body specific
        'section[class*="post-body"]',    // Another variation
        'section[class*="story-body"]',   // Story body variations
        'div[class*="text"]',             // General catch-all for text sections
        'div#article-body',               // ID-based selections
        'div#main-content',               // Main content section by ID
      ];

      // Attempt to find article content based on the selectors
      let articleBody = null;
      for (const selector of possibleSelectors) {
        articleBody = doc.querySelector(selector);
        if (articleBody) break;
      }

      // If an article body is found, clean up irrelevant sections
      if (articleBody) {
        // Remove unwanted sections like ads, sidebars, footers, etc.
        const unwantedSelectors = [
          'aside',                     // Sidebars
          'nav',                       // Navigation menus
          'footer',                    // Footer content
          'div[class*="ad"]',          // Ad-related divs
          'div[class*="promo"]',       // Promotional content
          'div[class*="related"]',     // Related articles or stories
          'div[class*="social"]',      // Social media buttons
          'div[class*="comments"]',    // Comment sections
          'div[class*="subscribe"]',   // Subscription boxes
          'div[class*="share"]'        // Share buttons
        ];

        unwantedSelectors.forEach(sel => {
          const unwanted = articleBody.querySelectorAll(sel);
          unwanted.forEach(el => el.remove());
        });

        // Clean up the white space
        let cleanText = articleBody.innerText
          .replace(/\s+/g, ' ')    // Replace multiple spaces, newlines, tabs with a single space
          .replace(/^\s+|\s+$/g, '')  // Trim leading and trailing white space
          .replace(/(\.|\?|\!)\s*/g, '$1\n\n'); // Add line breaks after periods or sentence enders for readability

        return cleanText;
      } else {
        return 'Article body not found!';
      }
    } catch (error) {
      console.error('Error fetching the article:', error);
      return 'Error fetching the article!';
    }
  }