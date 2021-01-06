const data = [
    {
      time: '2019-09-12T13:53:57.370Z',
      url: 'https://css-irl.info/debugging-css-grid-part-2-what-the-fraction/',
      pageTitle: 'CSS { In Real Life } | Debugging CSS Grid – Part 2: What the Fr(action)?',
      description: 'CSS In Real Life is a blog covering CSS topics and useful snippets on the web’s most beautiful language. Published by Michelle Barker, front end developer at Ordoo and CSS superfan.'
    },
    {
      time: '2019-09-12T17:08:12.025Z',
      url: 'https://bryanlrobinson.com/',
      pageTitle: 'My site for testing',
      description: 'Some description'
    },
    {
      time: '2019-09-14T19:44:26.080Z',
      url: 'https://bryanlrobinson.com/blog/2019/04/02/using-eleventys-javascript-data-files/',
      pageTitle: "Using Eleventy's (11ty) JavaScript Data Files - bryanlrobinson.com",
      description: "I enjoy building workflows for pure static sites. I enjoy ingesting data into my build process instead of loading my client-side with fetches. In this example, we'll use Eleventy's ability to use a JavaScript file, to execute code to fetch data on site build, negating the need for task runners like Gulp."
    },
    {
      time: '2019-09-16T14:36:17.170Z',
      url: 'https://bryanlrobinson.com/blog/',
      pageTitle: 'Blog - bryanlrobinson.com'
    },
    {
      time: '2019-09-16T14:41:41.610Z',
      url: 'https://bryanlrobinson.com/blog/gap-provides-bright-future-for-margins-in-flex-as-well-as-grid/',
      pageTitle: 'CSS Gap creates a bright future for margins in Flex as well as Grid - bryanlrobinson.com',
      description: "In this tutorial, we'll take a look at how we've added margins in the past with Flex and how gap makes it so we can have these internal margins with no hacks."
    },
    {
      time: '2019-09-16T15:09:19.460Z',
      url: 'https://dev.to/binconsole/curated-list-of-project-based-tutorials-project-based-learning-frontend-3c8l',
      pageTitle: 'Curated list of project-based frontend tutorials [Project-Based Learning Frontend] - DEV Community 👩‍💻👨‍💻',
      description: ''
    },
    {
      time: '2019-09-16T15:21:22.390Z',
      url: 'https://dev.to/philhawksworth/netlify-pro-tip-using-split-testing-to-power-private-beta-releases-a7l',
      pageTitle: 'Netlify pro tip: Using Split Testing to power private beta releases - DEV Community 👩‍💻👨‍💻',
      description: 'Giving users ways to opt in and out of your private betas. Video and tutorial.'
    },
    {
      time: '2019-09-16T15:23:50.250Z',
      url: 'https://ladybug.dev/episode/what-the-heck-is-graphql/',
      pageTitle: 'What The Heck Is GraphQL? | Ladybug Podcast 🐞 ',
      description: 'GraphQL has taken this industry by storm, but what is it exactly? In this special episode of the Ladybug Podcast we’ve invited 14 GraphQL experts from the community to educate us on all things GraphQL!'
    },
    {
      time: '2019-09-16T15:27:08.280Z',
      url: 'https://dev.to/laurieontech/nuxt-next-nest-my-head-hurts-5h98',
      pageTitle: 'Nuxt, Next, Nest?! My Head Hurts. - DEV Community 👩‍💻👨‍💻',
      description: "I clearly know what all of these things are. Their names are not at all similar. But let's review, just to make sure we know..."
    },
    {
      time: '2019-09-16T17:08:44.160Z',
      url: 'https://css-irl.info/amending-your-past-commits-with-git/',
      pageTitle: 'CSS { In Real Life } |  Amending Your Past Commits with Git',
      description: 'CSS In Real Life is a blog covering CSS topics and useful snippets on the web’s most beautiful language. Published by Michelle Barker, front end developer at Ordoo and CSS superfan.'
    },
    {
      time: '2019-09-16T17:14:58.490Z',
      url: 'https://m.youtube.com/watch?v=OikwaVcdHG4',
      pageTitle: 'Make it Boring - Jeremy Wagner - JSConf US 2019 - YouTube',
      description: "A good case can be made for why boring is preferable to exciting in many aspects of our lives. Yet, we're reluctant to apply this sentiment to the web. Rathe..."
    },
    {
      time: '2019-09-16T19:16:17.270Z',
      url: 'https://www.webstoemp.com/blog/headless-cms-graphql-api-eleventy/',
      pageTitle: 'Consuming a headless CMS GraphQL API with Eleventy - Webstoemp',
      description: 'With Eleventy, consuming data coming from a GraphQL API to generate static pages is as easy as using Markdown files.'
    },
    {
      time: '2019-09-16T19:26:30.650Z',
      url: 'https://css-tricks.com/should-a-website-work-without-javascript/',
      pageTitle: '\n    Should a website work without JavaScript? | CSS-Tricks  ',
      description: 'The JS Party podcast just had a fun episode where they debated this classic question by splitting into two groups of two. Each group was assigned a "side"'
    },
    {
      time: '2019-09-16T19:52:26.230Z',
      url: 'https://css-tricks.com/how-to-contribute-to-an-open-source-project/',
      pageTitle: '\n    How to Contribute to an Open Source Project | CSS-Tricks  ',
      description: 'The following is going to get slightly opinionated and aims to guide someone on their journey into open source. As a prerequisite, you should have basic'
    },
    {
      time: '2019-09-16T19:54:06.600Z',
      url: 'https://www.netlify.com/docs/functions/',
      pageTitle: '\n  \n    Functions | Netlify\n  \n',
      description: '\n' +
        '  \n' +
        '    Netlify builds, deploys, and hosts your front end. Learn how to get started, see examples, and view documentation for the modern web platform.\n' +
        '  \n'
    },
    {
      time: '2019-09-17T18:23:33.660Z',
      url: 'https://thatsmyjamstack.com/',
      pageTitle: "A Podcast examining the best of the JAMstack community - That's My JAM...stack"
    },
    {
      time: '2019-09-23T15:31:52.610Z',
      url: 'https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/',
      pageTitle: '\n' +
        '    Static First: Pre-Generated JAMstack Sites with Serverless Rendering as a Fallback | CSS-Tricks  ',
      description: 'You might be seeing the term JAMstack popping up more and more frequently. I’ve been a fan of it as an approach for some time. One of the principles of'
    },
    {
      time: '2019-09-27T19:12:05.740Z',
      url: 'https://tobiasahlin.com/blog/layered-smooth-box-shadows/',
      pageTitle: '\n' +
        '    Smoother & sharper shadows with layered box-shadows | Tobias Ahlin\n' +
        '  ',
      description: 'With a simple CSS trick, we can get fine-tuned control over how shadows are rendered, and create richer and more realistic 3D effects'
    },
    {
      time: '2019-09-28T19:06:08.650Z',
      url: 'https://community.netlify.com/t/netlify-identity-for-paid-subscriptions/1947/2',
      pageTitle: 'Netlify Identity for paid subscriptions - Access Control / Identity - Netlify Community',
      description: 'I want to limit certain functionality on my website to paying users. \n' +
        'Now I’m using a payment provider (Mollie) similar to Stripe. \n' +
        'My idea was to use the webhook fired by this service to call a Netlify function and give&hellip;'
    },
    {
      time: '2019-10-01T19:35:31.260Z',
      url: 'https://www.netlify.com/blog/2019/09/30/seven-jamstack-podcasts-we-love/?utm_source=twitterpodcastsd&utm_medium=twitter&utm_campaign=devex',
      pageTitle: '\n  \n    Seven JAMstack Podcasts We Love | Netlify\n  \n',
      description: '\n' +
        '  \n' +
        "    In honor of International Podcast Day, we thought we'd share a few JAMstack Podcasts we love!\n" +
        '  \n'
    },
    {
      time: '2019-10-01T19:39:22.370Z',
      url: 'https://css-tricks.com/how-i-learned-to-stop-worrying-and-love-git-hooks/',
      pageTitle: '\n    How I Learned to Stop Worrying and Love Git Hooks | CSS-Tricks  ',
      description: 'The merits of Git as a version control system are difficult to contest, but while Git will do a superb job in keeping track of the commits you and your'
    },
    {
      time: '2019-10-01T19:46:34.600Z',
      url: 'https://css-tricks.com/the-many-ways-to-link-up-shapes-and-images-with-html-and-css/',
      pageTitle: '\n' +
        '    The Many Ways to Link Up Shapes and Images with HTML and CSS | CSS-Tricks  ',
      description: 'Different website designs often call for a shape other than a square or rectangle to respond to a click event. Perhaps your site has some kind of tilted'
    },
    {
      time: '2019-10-01T20:01:30.995Z',
      url: 'https://www.smashingmagazine.com/2019/10/smashingconf-freiburg-2019/',
      pageTitle: 'SmashingConf Freiburg 2019: Videos And Photos — Smashing Magazine',
      description: 'We had a lovely time at SmashingConf Freiburg. This post wraps up the event and also shares the video of all of the Freiburg presentations.'
    },
    {
      time: '2019-10-02T00:17:09.810Z',
      url: 'https://notlaura.com/css-algorithm-pull/',
      pageTitle: '.a-pull: A CSS algorithm for pulling one box outside another | Lara Schenck',
      description: 'Design Engineer'
    },
    {
      time: '2019-10-02T18:20:24.800Z',
      url: 'https://m.youtube.com/watch?v=aHUtMbJw8iA&feature=youtu.be',
      pageTitle: 'Why Is CSS So Weird? - YouTube',
      description: "Love it or hate it, CSS is weird! It doesn't work like most programming languages, and it doesn't work like a design tool either. But CSS is also solving a v..."
    },
    {
      time: '2019-10-08T18:13:26.320Z',
      url: 'https://css-doodle.com/',
      pageTitle: 'CSS Doodle',
      description: 'A web component for drawing patterns with CSS'
    },
    {
      time: '2019-10-08T18:17:55.070Z',
      url: 'https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/',
      pageTitle: 'Editorial Design Patterns With CSS Grid And Named Columns — Smashing Magazine',
      description: 'By naming lines when setting up our CSS Grid layouts, we can tap into some interesting and useful features of Grid &mdash; features that become even more powerful when we introduce subgrids.'
    },
    {
      time: '2019-10-10T11:09:47.150Z',
      url: 'https://blog.benmyers.dev/clickable-divs/',
      pageTitle: 'How (Not) to Build a Button | Ben Myers',
      description: 'When you reinvent the wheel, you might miss a few spokes.'
    },
    {
      time: '2019-10-11T13:27:45.110Z',
      url: 'https://www.creativebloq.com/colour/colour-theory-11121290',
      pageTitle: 'Colour theory: The ultimate guide | Creative Bloq',
      description: 'Everything you need to know about colour theory, from concepts to terminology.'
    },
    {
      time: '2019-10-11T16:54:18.110Z',
      url: 'https://dev.to/blacksonic/the-tale-of-three-dots-in-javascript-4287',
      pageTitle: 'The tale of three dots in Javascript - DEV Community 👩‍💻👨‍💻',
      description: "One upon a time, there was a significant upgrade to the Javascript language called ES6/ES2015. It introduced many different new features. One of them was the three consecutive dots that we can write in front of any compatible container (objects, arrays, strings, sets, maps). These tiny little dots enable us to write a more elegant and concise code. I'll explain how the three dots work and show the most common use-cases."
    },
    {
      time: '2019-10-13T16:57:33.926Z',
      url: 'https://humanwhocodes.com/blog/2019/10/scheduling-jekyll-posts-netlify-github-actions/',
      pageTitle: 'Scheduling Jekyll posts with Netlify and GitHub Actions - Human Who Codes',
      description: 'Last year, I wrote about how to schedule Jekyll posts using Netlify and AWS Lambda[^1]. I used that approach from the moment I wrote that blog post up until today. What changed? In...'
    },
    {
      time: '2019-10-13T23:41:27.060Z',
      url: 'https://bejamas.io/blog/jamstack-seo-guide/?ref=quuu&utm_content=buffer1db96&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer',
      pageTitle: 'JAMstack SEO Guide: The Ultimate Guide For Beginners - Bejamas',
      description: 'Whether you are running a JAMstack website or not this is a comprehensive overview of everything you need to know to be successful at SEO.'
    },
    {
      time: '2019-10-24T14:27:19.130Z',
      url: 'https://www.smashingmagazine.com/2019/10/bookmarking-application-faunadb-netlify-11ty/',
      pageTitle: 'Create A Bookmarking Application With FaunaDB, Netlify And 11ty — Smashing Magazine',
      description: 'In this article, we’ll create a personal bookmarking site using FaunaDB, Netlify Functions and 11ty data files.'
    },
    {
      time: '2019-10-29T00:09:55.320Z',
      url: 'https://bitsofco.de/how-to-use-puppeteer-in-a-netlify-aws-lambda-function/',
      pageTitle: 'How to use Puppeteer in a Netlify (AWS Lambda) function',
      description: ''
    },
    {
      time: '2019-10-29T11:25:35.180Z',
      url: 'https://dev.to/ananyaneogi/demystifying-modern-frontend-jargon-1agf',
      pageTitle: 'Demystifying Modern Frontend Jargon - DEV Community 👩‍💻👨‍💻',
      description: 'Simplifying some confusing frontend related terms with very limited to no code examples!'
    },
    {
      time: '2019-10-29T11:29:09.880Z',
      url: 'https://css-irl.info/a-modern-front-end-workflow-part-1/',
      pageTitle: 'CSS { In Real Life } | A Modern Front End Workflow Part 1: Building a Project Starter with NPM Scripts',
      description: 'CSS In Real Life is a blog covering CSS topics and useful snippets on the web’s most beautiful language. Published by Michelle Barker, front end developer at Ordoo and CSS superfan.'
    },
    {
      time: '2019-10-29T12:12:08.030Z',
      url: 'https://hackernoon.com/serverless-can-do-that-7nw32mk',
      pageTitle: 'Serverless Can Help You To Focus - By Simona Cotin'
    },
    {
      time: '2019-10-30T11:43:00.715Z',
      url: 'https://bejamas.io/blog/jamstack-for-clients/',
      pageTitle: 'JAMstack for Clients - Bejamas',
      description: 'How to clearly and effectively communicate the benefits of JAMstack with your prospects and your clients?'
    },
    {
      time: '2019-10-31T19:06:53.370Z',
      url: 'https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/',
      pageTitle: '\n' +
        '    Build a state management system with vanilla JavaScript | CSS-Tricks  ',
      description: 'Managing state is not a new thing in software, but it’s still relatively new for building software in JavaScript. Traditionally, we’d keep state within'
    },
    {
      time: '2019-11-02T12:16:45.770Z',
      url: 'https://www.smashingmagazine.com/2019/11/css-things-cant-yet-do/',
      pageTitle: 'Things We Can’t (Yet) Do In CSS — Smashing Magazine',
      description: 'In this article, Rachel Andrew looks at some common layout patterns that we can’t yet do on the web and the CSS Specifications that might let us achieve them in the future.'
    },
    {
      time: '2019-11-04T19:59:33.300Z',
      url: 'https://www.bbcgoodfood.com/recipes/1666638/classic-cheese-scones',
      pageTitle: 'Classic cheese scones | BBC Good Food',
      description: 'Classic cheese scones'
    },
    {
      time: '2019-11-05T12:54:34.660Z',
      url: 'https://m.youtube.com/watch?v=pXb2jA43A6k',
      pageTitle: 'Emma Wedekind: Foundations of Design Systems / React Boston 2019 - YouTube',
      description: 'Emma Wedekind: Foundations of Design Systems / React Boston 2019 Presented by: Emma Wedekind – LogMeIn Design systems are in the world around us, from street...'
    },
    {
      time: '2019-11-09T12:42:19.800Z',
      url: 'https://www.benjystanton.co.uk/blog/accessibility-checklist/',
      pageTitle: 'Accessibility checklist – Benjy Stanton',
      description: 'A list of accessibility recommendations, tips and resources.'
    },
    {
      time: '2019-11-13T11:59:40.465Z',
      url: 'https://adactio.com/journal/16099',
      pageTitle: 'Adactio: Journal—Third party',
      description: 'Imagine a web where cookies and JavaScript had to be self-hosted.'
    },
    {
      time: '2019-11-13T20:57:12.280Z',
      url: 'https://webaim.org/resources/designers/',
      pageTitle: 'WebAIM: Web Accessibility for Designers'
    },
    {
      time: '2019-11-17T13:08:13.890Z',
      url: 'https://amp.theguardian.com/technology/2019/nov/17/firefox-mozilla-fights-back-against-google-chrome-dominance-privacy-fears?__twitter_impression=true',
      pageTitle: 'Firefox’s fight for the future of the web | Firefox | The Guardian',
      description: 'With Google’s Chrome dominating the market,  not-for-profit rival Mozilla is staking a comeback on its dedication to privacy'
    },
    {
      time: '2019-11-19T13:15:32.230Z',
      url: 'https://www.raymondcamden.com/2019/11/18/adding-google-calendar-to-your-jamstack',
      pageTitle: 'Adding Google Calendar to your JAMStack',
      description: 'A look at using Google APIs to add events to your static site.'
    },
    {
      time: '2019-11-20T12:24:07.110Z',
      url: 'https://css-tricks.com/oh-the-places-javascript-will-go/',
      pageTitle: '\n    Oh, the Places JavaScript Will Go | CSS-Tricks  ',
      description: "I tend to be pretty vocal about the problems client-side JavaScript cause from a performance perspective. We're shipping more JavaScript than ever to our"
    },
    {
      time: '2019-11-20T21:42:56.750Z',
      url: 'https://css-tricks.com/the-future-is-bright-because-the-future-is-static/',
      pageTitle: '\n    The future is bright, because the future is static | CSS-Tricks  ',
      description: "I've been doing this web thing for money for 10 years this year and although I haven’t been around as long as some folks, I feel like I've seen a few"
    },
    {
      time: '2019-11-21T21:35:42.190Z',
      url: 'https://www.netlify.com/blog/2019/11/18/what-are-microservices/?utm_source=twitter&utm_medium=microservice-sad&utm_campaign=devex',
      pageTitle: '\n  \n    What are Microservices? | Netlify\n  \n',
      description: '\n' +
        '  \n' +
        "    Let's break down what we mean when we talk about microservices.\n" +
        '  \n'
    },
    {
      time: '2019-11-22T12:00:02.670Z',
      url: 'https://www.theregister.co.uk/2019/11/20/org_registry_sale_shambles/',
      pageTitle: 'Internet world despairs as non-profit .org sold for $$$$ to private equity firm, price caps axed • The Register'
    },
    {
      time: '2019-11-25T01:11:13.830Z',
      url: 'https://wattenberger.com/guide/scaling-svg',
      pageTitle: 'Amelia Wattenberger'
    },
    {
      time: '2019-11-26T01:01:34.110Z',
      url: 'https://www.happyhues.co/',
      pageTitle: 'Happy Hues'
    },
    {
      time: '2019-11-30T14:56:12.680Z',
      url: 'https://sia.codes/posts/webmentions-eleventy-in-depth/?utm_campaign=the%20New%20Dynamic&utm_medium=email&utm_source=Revue%20newsletter',
      pageTitle: 'An In-Depth Tutorial of Webmentions + Eleventy',
      description: 'Add Webmentions to your Eleventy static site with this step-by-step tutorial.'
    },
    {
      time: '2019-12-01T13:17:42.830Z',
      url: 'https://24ways.org/2019/making-a-better-custom-select-element/',
      pageTitle: 'Making a Better Custom Select Element ◆ 24 ways'
    },
    {
      time: '2019-12-02T00:52:13.250Z',
      url: 'https://www.madebymike.com.au/writing/css-architecture-for-modern-web-applications/',
      pageTitle: 'CSS Architecture for Modern JavaScript Applications - MadeByMike',
      description: 'My attempt to modernise some learnings from CSS architecture and how to apply them in the context of modern JavaScript applications.'
    },
    {
      time: '2019-12-03T16:45:30.660Z',
      url: 'https://css-tricks.com/masking-gifs-with-other-gifs/',
      pageTitle: '\n    Masking GIFs with other GIFs | CSS-Tricks  ',
      description: 'The other day, Cassie Evans tweeted a really neat trick that I’ve never seen before: using SVG to mask one GIF on top of another. The effect is quite'
    },
    {
      time: '2019-12-04T16:49:18.300Z',
      url: 'https://blog.jim-nielsen.com/2019/netlify-public-folder-part-i-what/',
      pageTitle: '\n' +
        '          Netlify Public Folder, Part I: What? Recreating the Dropbox Public Folder With Netlify | Jim Nielsen’s Weblog\n' +
        '        '
    },
    {
      time: '2019-12-08T16:20:41.070Z',
      url: 'https://twitter.com/thorazos/status/1158556879485906944?s=12',
      pageTitle: `Julia Gfrörer on Twitter: "Tumblr screwed us, Facebook screwed us, and eventually Twitter will screw us too. If you want a cheap, accessible platform to make friends and share your art that will never screw you to make a buck, my friend, it's time to get into zines… https://t.co/DUHRteAJmP"`
    },
    {
      time: '2019-12-08T19:37:40.130Z',
      url: 'https://tympanus.net/codrops/2019/12/03/motion-paths-past-present-and-future/',
      pageTitle: 'Motion Paths - Past, Present and Future | Codrops',
      description: "Let's explore a few ways of moving an element along a path, including the upcoming CSS motion path module and the newly released GSAP3."
    },
    {
      time: '2019-12-12T12:27:54.020Z',
      url: 'https://css-irl.info/7-uses-for-css-custom-properties/',
      pageTitle: 'CSS { In Real Life } |  7 Uses for CSS Custom Properties',
      description: 'CSS In Real Life is a blog covering CSS topics and useful snippets on the web’s most beautiful language. Published by Michelle Barker, front end developer at Ordoo and CSS superfan.'
    },
    {
      time: '2019-12-16T22:15:57.460Z',
      url: 'https://dev.to/emmawedekind/i-built-a-successful-blog-in-one-year-and-you-can-too-7-tips-for-enhancing-readership-5f8b',
      pageTitle: 'I Built A Successful Blog In One Year, And You Can Too; 7 Tips For Enhancing Readership - DEV Community 👩‍💻👨‍💻',
      description: ''
    },
    {
      time: '2019-12-18T13:04:04.765Z',
      url: 'https://www.smashingmagazine.com/2019/12/dynamic-async-functionality-jamsstack-websites/',
      pageTitle: 'Adding Dynamic And Async Functionality To JAMstack Sites — Smashing Magazine',
      description: 'Skipping servers and using the JAMstack to build and deliver websites and apps can save time, money, and headache by allowing us to deliver only static assets on a CDN. But the trade-off of ditching traditional server-based deployments means that standard approaches to dynamic, asynchronous interactions in our sites and apps aren’t available anymore.<br /><br />Does that mean that JAMstack sites can’t handle dynamic interactions? Definitely not!<br /><br />JAMstack sites are great for creating highly dynamic, asynchronous interactions. With some small adjustments to how we think about our code, we can create fun, immersive interactions using only static assets!'
    },
    {
      time: '2019-12-20T19:51:05.420Z',
      url: 'https://brycewray.com/posts/2019/12/code-comfort-eleventy-webpack/',
      pageTitle: 'Code comfort: Eleventy and webpack | BryceWray.com',
      description: 'Excerpts from my Eleventy/webpack configuration.'
    }
  ]



const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'myf3wh95',
  dataset: 'production',
  token: 'skm4Hzgph7B4c8030CXLQX9jn5SOqgEWsayCj852QxXQ1oGXRkMzaaXwZmzkVP5uhxmXu5dcVarP0eEL00oJmyr7Hbh8yGuRAcJPioG7sElLpR89ya19oYrQI3wVv9VXCQ6ZOwTJXb1tpPC1pJwkgp555eOtZ0zTrreesB7shKnr4A4BeJH1', // or leave blank to be anonymous user
})

const fs = require('fs')



function writebookmarks () {
  const dataToWrite = data.map(doc => {
    doc._type = "bookmark"
    doc._createdAt = doc.time
    const stringDoc = `${JSON.stringify(doc)} \n`
    return stringDoc
  })
  const stringToWrite = dataToWrite.join(`\n`)
console.log(stringToWrite)
  fs.writeFile('import.ndjson', stringToWrite, err=>console.log(err))
  
}
async function deleteAll() {
  const allItems = await client.fetch(`*[_type == "bookmark"]{_id}`)
  const itemIds = await allItems.map(item => item._id)
  client.delete(itemIds)
    .then().catch(err => console.log(err))
}
writebookmarks()