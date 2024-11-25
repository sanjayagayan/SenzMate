

$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        }else{
            $("header").removeClass('bgc');
        }
    });
});



const features = [
    {
        title: "Device Management",
        description: "Integrate seamlessly with AI and IoT devices to accelerate product development. This module features a step-by-step device onboarding process and powerful modules, redefining efficiency and control in the AIoT landscape while providing unparalleled flexibility and ease of use.",
        image: "/img/Display.png"
    },
    {
        title: "AI Integration",
        description: "Leverage advanced AI capabilities to enhance data analysis and decision-making processes. This feature allows for seamless integration with existing AI systems, offering powerful insights and predictive analytics.",
        image: "/img/Display.png"
    },
    {
        title: "IoT Connectivity",
        description: "Ensure reliable and secure connectivity across a wide range of IoT devices. This feature provides robust networking solutions that support high scalability and performance, enabling efficient device management and data transmission.",
        image: "/img/Display.png"
    }
];

let current2Index = 0;

function changeContent(direction) {
    current2Index += direction;
    if (current2Index < 0) {
        current2Index = features.length - 1;
    } else if (current2Index >= features.length) {
        current2Index = 0;
    }

    document.getElementById("feature-title").textContent = features[current2Index].title;
    document.getElementById("feature-description").textContent = features[current2Index].description;
    document.getElementById("feature-image").src = features[current2Index].image;
}


document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('mouseenter', () => {
        character.querySelector('.popup').style.display = 'block';
    });

    character.addEventListener('mouseleave', () => {
        character.querySelector('.popup').style.display = 'none';
    });
});

document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('click', () => {
        alert('Stat clicked!');
    });
});



// product Lines

// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


