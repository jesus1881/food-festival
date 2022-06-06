require("bootstrap");
const { createLoremIpsum, dateConverter } = require("./helpers");
const createEl = require("./domMethods");

$(document).ready(function () {
  if (window.location.href.indexOf("schedule") > -1) {
    const i = new Date(),
      o = (i.getDate(), i.getMonth()),
      r = i.getFullYear();
    const s = [
        {
          title: "Vegan Day",
          start: new Date(r, o + 1, 20),
          description:
            "Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!\n        Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!",
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          title: "Harvest Festival",
          start: new Date(r, o + 1, 20),
          image:
            "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          title: "Bacon Day",
          start: new Date(r, o + 1, 20),
          description:
            "Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!\n        As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!",
          image:
            "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        },
        {
          title: "Fry-day",
          description:
            "You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,\n        prepare to shock your tastebuds.",
          start: new Date(r, o + 1, 21),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Pizza Party!",
          description:
            "This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!",
          start: new Date(r, o + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Pasta Bonanza",
          description: "All things pasta.",
          start: new Date(r, o + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Fruity Foods!",
          description:
            "We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!",
          start: new Date(r, o + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Veggie Mix Up",
          description:
            "We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!",
          start: new Date(r, o + 1, 23),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Fry-day",
          description:
            "You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!",
          start: new Date(r, o + 1, 23),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
      ],
      n = document.querySelector("#page");
    function a(a) {
      return a.map((a) =>
        e(
          "div",
          {
            class: "card-body clickable",
            onClick: () =>
              (function (e) {
                const t = dateConverter(e.start);
                localStorage.setItem(
                  "currentEvent",
                  JSON.stringify({
                    title: e.title,
                    subtitle: t,
                    description: e.description,
                    image: e.image,
                  })
                ),
                  (window.location.href = "events.html");
              })(a),
          },
          e("h5", { class: "card-title" }, a.title || ""),
          e("p", { class: "card-text" }, a.description || t()),
          e("hr")
        )
      );
    }
    const c = e(
        "div",
        { class: "container mt-5" },
        e(
          "div",
          { class: "card mb-5" },
          e("h5", { class: "card-header" }, "Day 1"),
          ...a(s.slice(0, 3))
        )
      ),
      l = e(
        "div",
        { class: "container" },
        e(
          "div",
          { class: "card mb-5" },
          e("h5", { class: "card-header" }, "Day 2"),
          ...a(s.slice(3, 6))
        )
      ),
      d = e(
        "div",
        { class: "container" },
        e(
          "div",
          { class: "card mb-5" },
          e("h5", { class: "card-header" }, "Day 3"),
          ...a(s.slice(6, 9))
        )
      );
    n.appendChild(c), n.appendChild(l), n.appendChild(d);
  }
});