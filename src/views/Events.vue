<template>
  <div>
    <SlickCarousel :arrows="false" :dots="true" id="featured">
      <featured-event
        image="feature.png"
        title="Tech at Home 2020"
        datetime="April 21, 2020 to May 28, 2020"
        location="Facebook Live, Youtube Live & Google Meet"
        linkTo="https://www.youtube.com/playlist?list=PL1hGGdX7S9aSC9WKruRWudglqhmMsUIj5"
        linkText="Rewatch now!"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </featured-event>
    </SlickCarousel>
    <section id="events" class="grey-bg">
      <div class="container">
        <div id="study-jams">
          <h2>Study Jams</h2>
          <p>Community-run study groups for developers</p>
          <div class="list">
            <div class="scroll" v-dragscroll>
              <margin :width="width"></margin>
              <event-card
                image="firebase-in-action.png"
                type="study-jam"
                @click.native="modalOpen(0)"
                >Firebase in Action: Actions on Google and
                DialogFlow</event-card
              >
              <event-card
                image="building-a-serverless.png"
                type="study-jam"
                @click.native="modalOpen(1)"
                >Firebase in Action: Building a Serverless Web App using
                Firebase</event-card
              >
              <event-card
                image="firebase-web.png"
                type="study-jam"
                @click.native="modalOpen(2)"
                >Firebase in Action: Firebase Web</event-card
              >
              <event-card
                image="baseline.png"
                type="study-jam"
                @click.native="modalOpen(3)"
              >
                Baseline: Deploy and
                <br />Develop
              </event-card>
              <event-card
                image="bigquery.jpg"
                type="study-jam"
                @click.native="modalOpen(4)"
              >
                BigQuery Basics for
                <br />Data Analysts
              </event-card>
              <event-card
                image="aiml.jpg"
                type="study-jam"
                @click.native="modalOpen(5)"
                >Baseline: Data, ML, and AI</event-card
              >
              <event-card
                image="gcp.jpg"
                type="study-jam"
                @click.native="modalOpen(6)"
                >GCP Essentials</event-card
              >
              <coming-event></coming-event>
            </div>
          </div>
        </div>
        <div id="hands-on-workshops">
          <h2>Hands-on Workshops</h2>
          <p>
            Opportunity for community members to learn something new in tech
          </p>
          <div class="list">
            <div class="scroll" v-dragscroll>
              <margin :width="width"></margin>
              <event-card
                image="python.jpg"
                type="workshop"
                @click.native="modalOpen(7)"
              >
                Pandas, Numpy, and
                <br />Matplotlib Workshop
              </event-card>
              <event-card
                image="mobile-dev.png"
                type="workshop"
                @click.native="modalOpen(8)"
              >
                Mobile Development
                <br />Workshop with Flutter PH
              </event-card>
              <event-card
                image="pandas.png"
                type="workshop"
                @click.native="modalOpen(9)"
                >Python Workshop</event-card
              >
              <coming-event></coming-event>
            </div>
          </div>
        </div>
        <div id="tech-talks">
          <h2>Speaker Session & Tech Talk</h2>
          <p>Community-run study groups for developers</p>
          <div class="list">
            <div class="scroll" v-dragscroll>
              <margin :width="width"></margin>
              <event-card
                image="solution-challenge.png"
                type="speaker-session"
                @click.native="modalOpen(10)"
              >
                Solution Challenge Info
                <br />Session and Design Day
              </event-card>
              <event-card
                image="google-tech.png"
                type="speaker-session"
                @click.native="modalOpen(11)"
              >
                DSC  General Assembly 2019
                <br />
              </event-card>
              <event-card
                image="dsc-info.jpg"
                type="speaker-session"
                @click.native="modalOpen(12)"
                >DSC Info Session 2019</event-card
              >
              <event-card
                image="info-session.png"
                type="speaker-session"
                @click.native="modalOpen(13)"
              >
                Introduction to
                <br />Google Technologies
              </event-card>
              <coming-event></coming-event>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal :info="info[event]" />
  </div>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";
import ComingEvent from "@/components/ComingEvent";
import Margin from "@/components/Margin";
import Modal from "@/components/Modal";

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
    SlickCarousel,
    FeaturedEvent,
    EventCard,
    Margin,
    ComingEvent,
    Modal
  },
  data() {
    return {
      width: window.innerWidth >= 768 ? 64 : 24,
      event: 0,
      info: [
        {
          type: "Study Jams",
          title: "Firebase in Action: Actions on Google and DialogFlow",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ',
          datetime: "February 26, 2020",
          location: "Nit Andhra",
          participants: "36",
          female: "5"
        },
        {
          type: "Study Jams",
          title:
            "Firebase in Action: Building a Serverless Web App using Firebase",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "February 19, 2020",
          location: "Nit Andhra",
          participants: "15",
          female: "3"
        },
        {
          type: "Study Jams",
          title: "Firebase in Action: Firebase Web",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "February 19, 2020",
          location: "Nit Andhra",
          participants: "15",
          female: "3"
        },
        {
          type: "Study Jams",
          title: "Baseline: Deploy and Develop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 28, 2019",
          location: "Nit Andhra",
          participants: "15",
          female: "7"
        },
        {
          type: "Study Jams",
          title: "BigQuery Basics for Data Analysts",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 25, 2019",
          location: "Nit Andhra",
          participants: "3",
          female: "1"
        },
        {
          type: "Study Jams",
          title: "Baseline: Data, ML, and AI & Neural Networks",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 11, 2019",
          location: "Nit Andhra",
          participants: "21",
          female: "6"
        },
        {
          type: "Study Jams",
          title: "GCP Essentials",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 6, 2019",
          location: "Nit Andhra",
          participants: "31",
          female: "11"
        },
        {
          type: "Hands-on Workshops",
          title: "Pandas, Numpy, and Matplotlib Workshop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "January 29, 2020",
          location: "Nit Andhra",
          participants: "30",
          female: "5"
        },
        {
          type: "Hands-on Workshops",
          title: "Mobile Development Workshop with Flutter PH",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 20, 2019",
          location: "Nit Andhra",
          participants: "40",
          female: "10"
        },
        {
          type: "Hands-on Workshops",
          title: "Python Workshop",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "November 4, 2019",
          location: "Nit Andhra",
          participants: "30",
          female: "12"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Solution Challenge Info Session and Design Day",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "February 13, 2020",
          location: "Nit Andhra",
          participants: "10",
          female: "1"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "DSC Loyola General Assembly 2019",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "October 28, 2019",
          location: "Nit Andhra",
          participants: "69",
          female: "16"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "DSC Info Session 2019",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "October 3, 2019",
          location: "Nit Andhra",
          participants: "17",
          female: "4"
        },
        {
          type: "Speaker Session & Tech Talk",
          title: "Introduction to Google Technologies",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
          datetime: "August 3, 2019",
          location: "Nit Andhra",
          participants: "18",
          female: "3"
        }
      ]
    };
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.width = 24;
      } else this.width = 64;
    },
    modalOpen(eventId) {
      this.event = eventId;
      this.$modal.show("event");
    }
  }
};
</script>

<style scoped>
#events {
  padding-bottom: calc(60px - 48px);
}

div.slick-slider {
  margin-top: 60px;
}

.list {
  width: 100vw;
  position: relative;
  left: 49%;
  right: 49%;
  margin: 48px -50vw;
  overflow: hidden;
}

.scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
}

@media screen and (max-width: 767px) {
  .list {
    margin-top: 24px;
  }
}
</style>
