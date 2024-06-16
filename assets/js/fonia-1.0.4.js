'use strict';
function fonia(selector) {
    let elements = document.querySelectorAll(selector);

    return {
        elements: elements,

        addClass: function(className) {
            elements.forEach(function(element) {
                element.classList.add(className);
            });
            return this;
        },

        removeClass: function(className) {
            elements.forEach(function(element) {
                element.classList.remove(className);
            });
            return this;
        },

        toggleClass: function(className) {
            elements.forEach(function(element) {
                element.classList.toggle(className);
            });
            return this;
        },

        on: function(event, handler) {
            elements.forEach(function(element) {
                element.addEventListener(event, handler);
            });
            return this;
        },

        off: function(event, handler) {
            elements.forEach(function(element) {
                element.removeEventListener(event, handler);
            });
            return this;
        },

        css: function(styles) {
            elements.forEach(function(element) {
                Object.assign(element.style, styles);
            });
            return this;
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

        addHoverEffect: function(elementClass, hoverColor) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.addEventListener('mouseenter', function() {
                        this.style.transition = 'background-color 0.3s ease';
                        this.style.backgroundColor = hoverColor;
                    });
                    element.addEventListener('mouseleave', function() {
                        this.style.transition = 'background-color 0.3s ease';
                        this.style.backgroundColor = '';
                    });
                }
            });
            return this;
        },

        changeFontSize: function(elementClass, fontSize) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.fontSize = fontSize;
                }
            });
            return this;
        },

        addBorder: function(elementId, borderWidth, borderColor) {
            elements.forEach(function(element) {
                if (element.id === elementId) {
                    element.style.border = `${borderWidth}px solid ${borderColor}`;
                }
            });
            return this;
        },

        changeFontFamily: function(elementClass, fontFamily) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.fontFamily = fontFamily;
                }
            });
            return this;
        },
        changeBackgroundColor: function(elementId, color) {
            var element = document.getElementById(elementId);
            if (element) {
                element.style.backgroundColor = color;
            }
        },

        addShadow: function(elementClass, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`;
                }
            });
            return this;
        },

        addTransition: function(elementClass, transitionProperty, transitionDuration, transitionTimingFunction) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.transition = `${transitionProperty} ${transitionDuration} ${transitionTimingFunction}`;
                }
            });
            return this;
        },

        setWidth: function(elementClass, width) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.width = width;
                }
            });
            return this;
        },

        setHeight: function(elementClass, height) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.height = height;
                }
            });
            return this;
        },

        randomColor: function() {
            elements.forEach(function(element) {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hex color
                element.style.backgroundColor = randomColor;
                element.textContent = randomColor; // Update text content with color code
            });
            return this;
        },

        typeText: function(elementId, text, speed) {
            let targetElement = document.getElementById(elementId);
            if (targetElement) {
                let index = 0;
                let intervalId = setInterval(function() {
                    if (index < text.length) {
                        targetElement.textContent += text.charAt(index);
                        index++;
                    } else {
                        clearInterval(intervalId);
                    }
                },
                    speed);
            }
            return this;
        },

        hideElement: function(elementClass) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.display = 'none';
                }
            });
            return this;
        },

        showElement: function(elementClass) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.display = '';
                }
            });
            return this;
        },

        fadeIn: function(elementClass, duration) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.transition = `opacity ${duration}s ease`;
                    element.style.opacity = '1';
                }
            });
            return this;
        },

        fadeOut: function(elementClass, duration) {
            elements.forEach(function(element) {
                if (element.classList.contains(elementClass)) {
                    element.style.transition = `opacity ${duration}s ease`;
                    element.style.opacity = '0';
                }
            });
            return this;
        },

        scrollToTop: function(duration) {
            let scrollStep = -window.scrollY / (duration / 15);
            let scrollInterval = setInterval(function() {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            },
                15);
            return this;
        },

        smoothScrollToElement: function(elementId, duration) {
            let targetElement = document.getElementById(elementId);
            if (targetElement) {
                let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                let startPosition = window.scrollY;
                let distance = targetPosition - startPosition;
                let startTime = null;

                function scrollTo(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = timestamp - startTime;
                    window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
                    if (progress < duration) {
                        window.requestAnimationFrame(scrollTo);
                    }
                }

                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                window.requestAnimationFrame(scrollTo);
            }
            return this;
        }
    };
}

function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

const $ = fonia; // Alias $ untuk fonia
const versionText = "Fonia 1.0.4";
console.log(versionText); // Menampilkan versi ke konsol