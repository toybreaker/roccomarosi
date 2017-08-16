#### [Rocco Marosi](http://roccomarosi.com) ⟐ Architecture Photography ⟐

Super light mobile-first portfolio display static website. Fully responsive. Focus on speed and simplicity, with care for minimizing network request and delivering a polished meaningful user experience.

Adhering to [K.I.S.S](https://en.wikipedia.org/wiki/KISS_principle) • [D.R.Y.](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (uhm... well, partly. Really not yet!)

version: 0.3.0


## 2DOs

Urgent:

- animate: shake the "v" icon
- helpers: (temporarly show) "tap to see photo details" on photos
- imager setup: retina
- gulp min + concat

Sometime soon:

- service workers
- some-kind-of template (jade?)

Maybe:

- quick contact form


## Slider considerations:

- [ ] [swiper.js](http://www.idangero.us/swiper/) (20kb) | fade need img as backgrounds: [demo](http://www.idangero.us/swiper/demos/16-effect-fade.html), [code](https://github.com/nolimits4web/Swiper/blob/master/demos/16-effect-fade.html)

- [ ] [flickity](http://flickity.metafizzy.co/) (58kb) | currently online

- [ ] [vegas](https://github.com/jaysalvat/vegas) (64kb) | need at least zepto (9kb) or jquery(84kb)

- [X] native scroll + [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master) (9kb)


#### frontend features

- no jquery

- no material design http calls (just good stuff in css)

- [RWD](https://en.wikipedia.org/wiki/Responsive_web_design) with [Imager.js](https://github.com/BBC-News/Imager.js/) to handle images

#### setup

- `npm install` setup dependencies

- `npm install imagemin-pngquant` to work images

#### dev features

- `gulp` task to compile sass and enable browsersync

- `gulp images` task to produce sized copies


## Changelog

#### v 0.3.0:

- jekyll installed

- Netlify hosting

- Netlify SSL/HTTPS

#### v 0.2.11:

- it prints like biz card now, no shots no details just QRcode and contacts

#### v 0.2.10:

- footer improvements

#### v 0.2.9:

- landing screen vw, vh, no scipt, no flexbox, just plain old css

- footer icon refactor with line icons

#### v 0.2.8:

- landing page feel

- viewport sized typograhpy on **first screen** aka **100vwx100vh**

#### v 0.2.7:

- killed the icons on the shots

- no more material design, just some paper photos feel with shadow!

- no more hamburger! this piece of unicode `☰` also written `&#9776;` is not showing on android 4.1.2:  ...lame!

#### v 0.2.6:

- now with some material design flavour

- captions visible on click

- g+ footer link

#### v 0.2.5:

- last slide no disappear

#### v 0.2.4:

- minimal [material](https://github.com/google/material-design-lite) feel with flat header

- [priority-nav](https://github.com/gijsroge/priority-navigation)

- [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master)

#### v 0.2.3:

- gulp images task to automate image generation

#### v 0.2.2:

 - [Imager.js](https://github.com/BBC-News/Imager.js) full screen

 - no slider

#### v 0.2.1:

- refactored with just html activated [flickity](http://flickity.metafizzy.co/)



## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them.

Please, ask for permission first by contacting us: _info@junglestar.org_

All photos © Rocco Marosi. All rights reserved.

Thanks, Junglestar team
