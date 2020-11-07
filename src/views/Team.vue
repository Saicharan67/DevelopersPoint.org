<template>
  <div>
    <section id="executive-board" class="grey-bg">
      <div class="container">
        <h2>Developerspoint</h2>
        <p class="feature-text">Our lineup that empowers, enlightens, and nurtures student developers in the National Institute Technology, Andhra Pradesh</p>
        <h4>Team Board</h4>
        <div class="row justify-content-center">
          <team-circle
            
            
            v-for="item in Items"
            :key="item"
            class="col-12 col-sm-12 col-md-4"
            :name="item"
            
             facebook='https://www.facebook.com/login/'
             linkedin="https://www.linkedin.com/feed/"
             github="https://github.com/"
            >Lorem Ipsum is the position currently</team-circle
          >
        </div>
      </div>
    </section>

    

    <section id="join" class="grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h2>Join our community!</h2>
            <p>Be part of the DevelopersPoint circle where we create impact together!</p>
            <a
              href="mailto:developerspoint.org@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="green">Join us</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamCircle from "@/components/TeamCircle";
//import Department from "@/components/Department";
//import { app } from "../main";

export default {
  
  components: {
    TeamCircle,
    
  },
  data() {
    return {
      Items: ['a','b','c','d']
    };
  }
};
</script>

<style scoped>
#executive-board {
  margin-top: 60px;
}

#executive-board h2,
#executive-board h4 {
  text-align: center;
}

#executive-board h4 {
  margin: 48px 0 0;
  /* color: #0f9d58; */
}

#join p {
  margin-bottom: 40px;
  line-height: 25px;
}

.feature-text {
  text-align: center;
}
@media screen and (max-width: 767px) {
  #executive-board h2 {
    text-align: left;
  }

  .feature-text {
    text-align: left;
  }
}

@media screen and (min-width: 992px) {
  .col-lg-2-4 {
    flex: 0 1 20%;
    max-width: 20%;
  }
}
</style>
