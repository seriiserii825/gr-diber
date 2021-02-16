<template>
  <footer class="main-footer" v-if="contacts">
    <div class="main-footer__content">
      <div class="main-footer__info">
        <div class="main-footer__info-wrap">
          <div class="main-footer__info-item">
            <h3 class="title title--color">
              <pre>
                {{ contacts.title }}
              </pre>
            </h3>
            <div class="main-footer__contacts">
              <div class="main-footer__contacts__item">{{ contacts.address }}</div>
              <div class="main-footer__contacts__item">
                <ul class="socials">
                  <li class="socials__item" v-for="item in contacts.socials" :key="item.url">
                    <a target="_blank" :href="item.url" v-html="item.svg"></a>
                  </li>
                </ul>
              </div>
              <div class="main-footer__contacts__item">
                Email. <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
              </div>
              <div class="main-footer__contacts__item">
                <span style="display: inline-block;">Tel.</span>
                <Phone phone="+39 (0) 438 941681"/>
              </div>
              <div class="main-footer__contacts__item" v-html="contacts.hours"></div>
            </div>
          </div>
          <div class="main-footer__info-item">
            <h3 class="title title--color">{{ contacts.partners_title }}</h3>
            <div class="main-footer__partners">
              <a class="main-footer__partners-item" href="#" v-for="item in contacts.partners" :key="item.image">
                <img :src="item.image" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div class="map" v-html="contacts.map"></div>
      </div>
      <div class="main-footer__form">
        <h2 class="title title--color">Scrivici</h2>
        <div class="form">
          <form action="https://formspree.io/f/xyybajwb" method="POST" @submit.prevent="onSubmit" ref="form">
            <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="_replyto" id="email"/>
            </div>
            <div class="form-group">
              <label for="oggetto">Oggetto</label>
              <input type="text" name="oggetto" id="oggetto"/>
            </div>
            <div class="form-group">
              <label for="messaggio">Messaggio</label>
              <textarea name="messaggio" id="messaggio"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Invia" :disabled="submitIsDisabled ? 'disabled' : false"/>
              <input class="checkbox" type="checkbox" name="check" id="check"/>
              <label for="check"
                     @click="submitIsDisabled = !submitIsDisabled"
              >Cliccando su invia dichiari di aver preso visione e di accettare la nostra privacy policy
              </label>
            </div>
            <p class="response" v-if="message">{{ message }}</p>
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright__item" v-html="contacts.copyright"></div>
      <div class="copyright__item" v-html="contacts.partner_logo"></div>
    </div>
  </footer>
</template>
<script>
import Phone from "../Phone";

const axios = require("axios");
export default {
  data () {
    return {
      contacts: null,
      submitIsDisabled: true,
      message: ''
    }
  },
  mounted () {
    axios
      .get('https://gr-diber.seriiburduja.ru/wp-json/acf/v3/options/options')
      .then(response => {
        this.contacts = response.data.acf.contacts;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    Phone
  },
  methods: {
    onSubmit () {
      const form = this.$refs.form;
      console.log(form);
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      console.log(form.method);
      console.log(form.action);
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.message = 'Success';
        } else {
          this.message = 'Error';
        }
      };
      xhr.send(data);
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/variables";
@import "./Footer";
.socials {
  display: flex;
  margin-top: 40px;
  &__item {
    display: block;
    margin-right: 10px;
    svg {
      width: 24px;
      height: auto;
      fill: $accent;
    }
  }
}
</style>
