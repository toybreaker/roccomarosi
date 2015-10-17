#### [Rocco Marosi](http://roccomarosi.com) ⟐ Architecture Photography ⟐

Super light mobile first portfolio display. Fully rensponsive. Focus on speed and simplicity, with care for minimizing network request and delivering a polished meaninful user experience.

Adering to [K.I.S.S](https://en.wikipedia.org/wiki/KISS_principle), [D.R.Y.](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (uhm... well, partly. Really not yet!)

version 0.2.5
 

## 2DOs

urgent:

- captions
- qr in footer
- imager setup: retina
- gulp min + concat

## Slider considerations:

- [ ] [swiper.js](http://www.idangero.us/swiper/) (20kb) | fade need img as backgrounds: [demo](http://www.idangero.us/swiper/demos/16-effect-fade.html), [code](https://github.com/nolimits4web/Swiper/blob/master/demos/16-effect-fade.html)
- [ ] [flickity](http://flickity.metafizzy.co/) (58kb) | currently online 
- [ ] [vegas](https://github.com/jaysalvat/vegas) (64kb) | need at least zepto (9kb) or jquery(84kb)
- [X] native scroll + [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master) (9kb)
    
 

## Changelog
#### version 0.2.5:
- last slide no disappear

#### version 0.2.4:
- minimal [material](https://github.com/google/material-design-lite) feel with flat header
- [priority-nav](https://github.com/gijsroge/priority-navigation)
- [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master)

#### version 0.2.3:
- gulp images task to automate image generation

#### version 0.2.2:
 - [Imager.js](https://github.com/BBC-News/Imager.js) full screen
 - no slider

#### version 0.2.1:
- refactored with just html activated [flickity](http://flickity.metafizzy.co/)


## Features:
### frontend
- no jquery http calls
- no material design http calls
- [RWD](https://en.wikipedia.org/wiki/Responsive_web_design) with [Imager.js](https://github.com/BBC-News/Imager.js/) to handle images

### dev:
- `gulp images` task to produce sized copies
- `gulp` task to compile sass and enable browsersync




## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them.

Please, ask for permission first by contacting us: _info@junglestar.org_

All photos © Rocco Marosi. All rights reserved.

Thanks, Junglestar team
