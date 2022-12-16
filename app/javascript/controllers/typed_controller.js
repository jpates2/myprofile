import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

// Connects to data-controller="typed"
export default class extends Controller {
  connect() {
    console.log("check")
    let options = {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 40
    };

    let typed = new Typed('.element', options);
  }
}
