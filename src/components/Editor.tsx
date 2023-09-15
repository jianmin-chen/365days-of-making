import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Header from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Strike from '@tiptap/extension-strike'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import { EditorProvider, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import dayjs from 'dayjs'

export default function Editor() {
  const extensions = [
    StarterKit,
    Header.configure({ levels: [1, 2, 3] }),
    Highlight,
    Image,
    Link.configure({ autolink: true, openOnLink: true }),
    Placeholder.configure({ placeholder: 'Start writing!' }),
    Strike,
    Subscript,
    Superscript,
    Underline
  ]

  const handleSubmission = event => {
    if (editor && !editor.isEmpty) {
      // Send out email
    }
  }

  return (
    <div className="prose" id="editor">
      <EditorProvider
        content={`<p>Ah! Day one of making.</p>
<p>First, about this specific one! (Yes, you can start your own.) This is the original one, with a start date of 09/15/2023 and a time period of 365 days, or exactly one year.</p>
<p>So what exactly do <a href="https://jianminchen.com">I</a> plan to do during this one year? Well, right now I’d like to get my hands to start tinkering a tad bit more with hard(ware) things, and I’d also like to explore low-level computer stuff a bit more too.</p>
<p>So I sat down and thought about what I’d like to be able to do and/or build by the end of the year:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled=""> Graduation cap (or any other surface)… but add lights! PCB designed to power a grid of LEDS (e.g., 50x50) and design a <a href="https://github.com/jianmin-chen/lights">custom programming language</a> to program the lights over Bluetooth with programs like Conway’s Game of Life or the Life Engine. (Maybe ones to hang on walls, as a Christmas/birthday gift.)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> DIY typewriter for the iPad! Learn 3D printing (Onshape) and design parts for typewriter (keys, etc.) and then wire up to custom designed PCB to have a typewriter iPad.</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Sorting hat! Design PCB to write up to mic and speaker, with the mic feeding content into ChatGPT and returning a result (the houses! Hufflepuff, Ravenclaw, Gryffindor, and Slytherin) based on the given content (i.e., an icebreaker).</li>
<li class="task-list-item"><input type="checkbox" disabled=""> A cheap and easy drone kit from scratch, with support for a protocol like <a href="https://mavlink.io/en/">Mavlink</a> so we can create something like <a href="https://github.com/jianmin-chen/beav">Beav</a>, a programming language that will be to take in sensor data and map that a LOGO inspired language</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Adjust <a href="https://blot.hackclub.com">Blot</a> to become an actual moving turtle, as in <a href="http://www.secret-coders.com/">Secret Coders</a> (highly recommend as a birthday gift for kids!)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Clue but in Slack. (One of the things I learned how to do recently was build Slack bots.)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write a explainer on Rust, with a couple of projects (I see this as <em>Rust but Fun</em>):
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled=""> A tarot card simulator (and an explanation on how tarot cards work?! I’ve always wanted to learn)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write <code>netcrab</code>, chat over sockets but in Rust (<code>netc</code> → <code>netcrab</code>, get it?)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write a web server and deploy a static site with it</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write a static site generator to be used in conjunction with the web server!</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write a Markdown parser for the static site generator, and explore how to port that to WebAssembly for funsies</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Write a chess engine in Rust. (Maybe pair program with <a href="https://github.com/pensquid/yobmef">someone</a> on this?)</li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Build a game. This is in its infant stages and I’m not sure what this entails, but we’ll see.</li>
</ul>
<p>Whew, that’s a lot already, and I’m 110% sure this list will grow as the year goes on! And some cool projects that I never finished but would love to finish and do a writeup on:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled=""> <a href="https://github.com/jianmin-chen/marrow"><code>marrow</code></a>, a minimal modal-based text editor like Vim.</li>
<li class="task-list-item"><input type="checkbox" disabled=""> <a href="https://github.com/jianmin-chen/faceterm"><code>faceterm</code></a>, FaceTime over the terminal.</li>
<li class="task-list-item"><input type="checkbox" disabled=""> <a href="https://github.com/jianmin-chen/pokegotchi"><code>pokegotchi</code></a>, what happens when you combine Pokemon with Tamagotchi with exercise. (Although, <a href="#extras">what if I use my own art</a>?)</li>
<li class="task-list-item"><input type="checkbox" disabled=""> <a href="https://github.com/racoagency/startwebdev"><code>startwebdev</code></a>, a little guide on web development zero to hero that I never actually got around to writing</li>
<li class="task-list-item"><input type="checkbox" disabled=""> <code>nest</code>, a DIY PaaS from scratch (very basic, literally just interfacing with Docker on a VM on DigitalOcean) to learn a bit more about devops</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Doom but make it multiplayer. Because why not?</li>
</ul>
<h2 id="but-why">But why?</h2>
<p>I kind of had to ask myself the same question. There’s the obvious answer: <strong>it’s cool</strong>. But I also think that there aren’t enough resources/demonstrations out there that show how one person got from A to B in the engineering world - or any kind of creative pursuit really - we just kind of assume that people know how to do things. I’d like to change that, and I’d like to show that it’s okay to not know how to do something, and that it’s actually monumental to learn things slowly, one day at a time.</p>
<p>Not only do I want people to be able to see that they can build cool shit just by doing one thing everyday and really appreciating the journey (something that I should start doing more), I want people to also be able to follow along in theory if they want to. <strong>This is why I plan on posting more longform content</strong> vs. a short update every day - I can describe my struggles in more detail. Another thing I plan on doing is actually writing more formal guides on how to do everything I’m going to be doing, perhaps through <a href="https://jams.hackclub.com">Hack Club Jams</a>.</p>
<h2 id="how">How?</h2>
<p>Everyday, I’ll write one of these and send out a respective newsletter update to those who are subscribed. This website lets me do that (I write more about it below.) Every time I update a day, you’ll see one of the boxes on the main page unlocked, which I think is a really cool indication of progress. Over time all the boxes will slowly be unlocked, leading up to the final, 365th day!</p>
<p><em>No, but how?</em> Oh, yeah. Let’s take a look at some of these. Someone I work with recently recommended <a href="https://fabacademy.org">Fab Academy</a>, which I’m going to work through every day kind of like I did with <a href="https://cs50.harvard.edu/college/">CS50</a>. This is going to be super useful for learning hardware stuff (I mean, it’s a course on how to make almost anything, so). For Rust, I’m looking at <a href="https://fasterthanli.me/articles/a-half-hour-to-learn-rust">this</a> excellent article by <a href="https://fasterthanli.me/">Faster Than Lime</a> and Frontend Master’s <a href="https://frontendmasters.com/courses/rust/">course</a> (which you can get for <a href="https://education.github.com/pack">free</a> if you’re a teen!) on Rust. I also am super grateful that I know a bunch of people around me who are super well-versed in topics that fall in line with what I’m trying to learn, which is perfect.</p>
<h2 id="today">Today</h2>
<p>Okay, so what am I planning to do today? Well, for starters, I just finished and deployed this website, which is awesome. I built it with <a href="https://astro.build/">Astro</a> and <a href="https://firebase.google.com/">Firebase</a>, which I haven’t really worked with. (Ok, I’ve worked with Firebase before, but it was a long time ago when I didn’t know what leaking API keys meant.)</p>
<p>Most of this site is statically generated with Asto. Astro is actually really easy to use! It reminds me of <a href="https://svelte.dev/">Svelte</a> but more compromising - it lets you add adapters for other libraries/frameworks. For example, the header and the webring on this site is written with React.</p>
<p>I can <a href="/signin">login</a> and write newsletters with Markdown, which gets sent using <a href="https://www.mailgun.com/">Mailgun</a>’s Node wrapper. All newsletters are saved within Firebase so that you can see them if you’re not interested in subbing to updates.</p>
<p>The comment system is powered by <a href="https://giscus.app/"><code>giscus</code></a>, which lets me use GitHub Discussions for commenting with replies.</p>
<h2 id="extras">Extras</h2>
<p>I would consider myself to be a generally creative person and also want to explore other venues for expressing creativity outside of software/hardware stuff this year. I really think I’ll enjoy doing these things and posting about them occasionally:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled=""> Learn digital art, as in making art with Procreate. I would love to be able to make art for a redesign of a personal website or perhaps for <a href="https://hackathons.hackclub.com">events</a> that I’ll be helping run.</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Learn how to make music. As in, producing a song. I’d like to learn how to do that, I just need to do a tad bit more research on how exactly. It would be awesome to listen to something I made that I can jam out to.</li>
<li class="task-list-item"><input type="checkbox" disabled=""> Learn photography. Really, expressing emotion through photography. I was in the New York Public Library recently and I found two really nice books that I might read: <a href="https://www.goodreads.com/book/show/35209766-zen-camera">Zen Camera</a> and <a href="https://www.goodreads.com/book/show/29027800-langford-s-basic-photography">Langford’s Basic Photography</a>. I also need a camera currently, <a href="https://www.kenrockwell.com/tech/recommended-cameras.htm">Ken Rockwell’s</a> website (recommended by a <a href="https://www.hugohu.me/">friend</a>) has been really useful and I may consider (or I mean, I have to) buy a camera.</li>
</ul>
<p>That reminds me - in newsletters, I’ll occasionally also post other daily “things” - maybe an cool article I found, or a cool video I found. If you’re not subscribed to these newsletters but still want to view them, they’ll be embed at the bottom of every one of these daily entries after I send them out.</p>
<p>P.S. learning how to do these things reminds me of this quote:</p>
<blockquote>
<p>Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn’t have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know it’s normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story. It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met. It’s gonna take a while. It’s normal to take a while. You’ve just gotta fight your way through. — Ira Glass</p>
</blockquote>
<p>See you tomorrow!</p><p>Have a question? Fire below.</p>`}
        extensions={extensions}></EditorProvider>
      <button>Send &rarr;</button>
    </div>
  )
}
