<template>
  <div>
    <section
      id="hero"
      :style="backgroundHero"
      class="d-flex align-items-center"
    >
      <div class="container py-5">
        <div id="hero-text">
          <h1>Creating impact together</h1>
          <p class="feature-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div>
            <!-- <a href="/" target="_blank" rel="noopener noreferrer">
              <button class="blue primary">Join us</button>
            </a>-->
            <router-link to="/about">
              <button class="white-light">Learn more</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="do">
      <div class="container">
        <h2 class="text-center">What we do</h2>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <do-card image="talks.svg" title="Talks" color="blue">
              Listen from esteemed speakers as they share their insights,
              experience and wisdom
            </do-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <do-card image="codelabs.svg" title="Codelabs" color="red">
              Get a chance to learn new skills through hands-on workshops and
              study jams
            </do-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <do-card image="webinars.svg" title="Webinars" color="yellow">
              Learning never stops! Watch events online by Developer Student
              Clubs and by Google
            </do-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <do-card
              image="tech-solutions.svg"
              title="Tech Solutions"
              color="green"
            >
              Use the skills you learn in our events to solve community problems
              through projects
            </do-card>
          </div>
        </div>
      </div>
    </section>

    <section id="next" :style="backgroundNext">
      <div class="container">
        <h2>What's coming next?</h2>
        <p>Check out the next event of DeveopersPoint.</p>
        <div class="row" style="margin: 0">
          <div id="next-event" class="col-12 col-lg-9">
            <h5>Tech at Home 2020</h5>
            <p class="description">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p class="datetime">
              <i class="material-icons">date_range</i>
              <span>April 21, 2020 to May 28, 2020</span>
            </p>
            <p class="location">
              <i class="material-icons">location_on</i>
              <span>Google Meet & Youtube Live</span>
            </p>
            <a
              href="#next"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="blue">Rewatch now!</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="chapters" class="grey-bg">
      <div class="container">
        <h2>Check out other chapters.</h2>
        <p class="bottom">
          Explore more People....
        </p>
        <div id="chapter-scroll-container">
          <div id="chapter-scroll" v-dragscroll>
            <margin :width="width"></margin>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <chapter-circle
              image="chapter.png"
              title="Lorem Ipsum"
              location="India"
            ></chapter-circle>
            <margin :width="width"></margin>
          </div>
        </div>
        <p class="top">
          Want to start your own chapter? Apply to be a lead now!
        </p>
        <a
          href="https://g.co/dev/dscleads"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="blue">Apply as lead</button>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import DoCard from "@/components/DoCard";
import ChapterCircle from "@/components/ChapterCircle";
import Margin from "@/components/Margin";

export default {
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    DoCard,
    ChapterCircle,
    Margin
  },
  data() {
    return {
      width: window.innerWidth >= 768 ? 64 : 24,
      backgroundHero: {
        
         backgroundImage: "url(" + require("@/assets/images/impact.png") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      backgroundNext: {
        backgroundImage: "url(" + require("@/assets/images/next.png") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    };
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.width = 24;
      } else this.width = 64;
    }
  }
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: calc(100vh);
}

#hero p {
  padding: 15px 0 30px;
}

#hero-text {
  max-width: 720px;
}

#hero .primary {
  border: 2px solid #2f80ed;
  margin-right: 20px;
}

#hero h1,
#hero p,
#next h2,
#next p {
  color: #fff;
}

#do div.row {
  margin-top: 48px;
}

#do div.row > div {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#next-event {
  background: #fff;
  border-radius: 4px;
  width: 100%;
  padding: 32px 40px;
  margin-top: 48px;
}

#next-event h5 {
  margin-bottom: 16px;
}

#next-event p {
  color: #4f4f4f;
}

#next-event .description {
  margin-bottom: 25px;
  line-height: 1.5rem;
}

#next-event .datetime,
#next-event .location {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

#next-event i {
  margin-right: 26px;
}

#next-event span {
  padding-top: 5px;
}

#next-event button {
  margin-top: 22px;
}

#chapter-scroll-container {
  width: 100vw;
  position: relative;
  left: 49%;
  right: 49%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

#chapter-scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
}

#chapters button {
  margin-top: 16px;
}

#chapters .top {
  margin-top: 64px;
}

#chapters .bottom {
  margin-bottom: 64px;
}

@media screen and (max-width: 767px) {
  #do {
    padding-bottom: 20px;
  }

  #next-event {
    padding: 20px;
    margin-top: 40px;
  }

  #next-event .description {
    line-height: 1.2rem;
  }

  #next-event .datetime,
  #next-event .location {
    margin-bottom: 8px;
    align-items: flex-start;
  }

  #next-event i {
    margin-right: 16px;
  }

  #next-event span {
    padding-top: 0;
  }

  #chapters .top {
    margin-top: 24px;
  }

  #chapters .bottom {
    margin-bottom: 24px;
  }
}
</style>
