/*
Fonia adalah sebuah Framework CSS ringan yang digunakan untuk mengatur tampilan teks, latar belakang, perataan teks, dan jenis font dalam desain web. Dikembangkan oleh Nelsen Niko, Fonia merupakan proyek tambahan dari Framework CSS Framework Indonesia, yang dirancang untuk memberikan penggunaan yang lebih sederhana dan efisien dalam memperindah tampilan halaman web.
*/

'use strict';

let fonia = function(selector) {
    let elements = document.querySelectorAll(selector);

    function RandomColor() {
        // Generate random hex value (e.g., #ffffff)
        let color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        return color;
    }


    function typeText(elementId, text, speed) {
        return new Promise((resolve, reject) => {
            let element = document.getElementById(elementId);
            if (!element) {
                reject(`Element with ID ${elementId} not found`);
                return;
            }

            // Kosongkan konten elemen sebelum menambahkan teks baru
            element.textContent = "";

            let index = 0;
            let timer = setInterval(() => {
                // Tambahkan satu karakter ke konten elemen
                element.textContent += text[index];
                index++;

                // Jika sudah mencapai akhir teks, hentikan interval
                if (index === text.length) {
                    clearInterval(timer);
                    resolve(); // Selesaikan Promise saat animasi selesai
                }
            },
                speed);
        });
    }

    return {
        changeBackgroundColor: function(elementId, color) {
            var element = document.getElementById(elementId);
            if (element) {
                element.style.backgroundColor = color;
            }
        },

        changeTextColor: function(elementClass, color) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = color;
            }
        },

        addHoverEffect: function(elementClass, hoverColor) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener("mouseover", function() {
                    this.style.color = hoverColor;
                });
                elements[i].addEventListener("mouseout", function() {
                    this.style.color = ''; // Revert to original color
                });
            }
        },

        changeFontSize: function(elementClass, fontSize) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.fontSize = fontSize;
            }
        },

        addBorder: function(elementId, borderWidth, borderColor) {
            var element = document.getElementById(elementId);
            if (element) {
                element.style.border = borderWidth + ' solid ' + borderColor;
            }
        },

        changeFontFamily: function(elementClass, fontFamily) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.fontFamily = fontFamily;
            }
        },

        addShadow: function(elementClass, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.boxShadow = shadowOffsetX + 'px ' + shadowOffsetY + 'px ' + shadowBlur + 'px ' + shadowColor;
            }
        },

        addTransition: function(elementClass, transitionProperty, transitionDuration, transitionTimingFunction) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.transition = transitionProperty + ' ' + transitionDuration + ' ' + transitionTimingFunction;
            }
        },

        setWidth: function(elementClass, width) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.width = width;
            }
        },

        setHeight: function(elementClass, height) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.height = height;
            }
        },

        hideElement: function(elementClass) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        },

        showElement: function(elementClass) {
            var elements = document.getElementsByClassName(elementClass);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'block';
            }
        },

        style: function(styles) {
            for (let selector in styles) {
                if (styles.hasOwnProperty(selector)) {
                    let elements = document.querySelectorAll(selector);
                    elements.forEach(function(element) {
                        let elementStyles = styles[selector];
                        for (let property in elementStyles) {
                            if (elementStyles.hasOwnProperty(property)) {
                                element.style[property] = elementStyles[property];
                            }
                        }
                    });
                }
            }
        },

        css: function(styles) {
            elements.forEach(function(element) {
                Object.assign(element.style, styles);
            });
        },

        addClass: function(className) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this;
        },

        removeClass: function(className) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove(className);
            }
            return this;
        },

        toggleClass: function(className) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.toggle(className);
            }
            return this;
        },

        on: function(event, handler) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener(event, handler);
            }
            return this;
        },

        off: function(event, handler) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].removeEventListener(event, handler);
            }
            return this;
        },



        RandomColor: RandomColor,
        typeText: typeText
    };
};

function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

const $ = fonia;
const versionText = "Fonia 1.0.2";
console.log(versionText); // Menampilkan versi ke konsol