export default function slider(targetToggles) {
    const toggles = targetToggles.querySelectorAll('.toggle');
    const circles = targetToggles.querySelectorAll('.circle');

    let activeToggle = targetToggles.querySelector('.toggle_active');
    let activeCircle = targetToggles.querySelector('.circle_active');

    for (let i = 0; i < toggles.length; i++) {
        toggles[i].setAttribute('data-id-toggle', i);
        toggles[i].addEventListener('click', (event) => {
            toggleSlider(event);
        });
    }

    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute('data-id-circle', i);
    }

    function toggleSlider(event) {
        event.preventDefault();
        const toggleId = event.target.getAttribute('data-id-toggle');
        const circleId = + activeCircle.getAttribute('data-id-circle');

        if (toggleId === '0') {
            if (circleId == 0) {
                return;
            } else {
                circles[circleId].classList.remove('circle_active');
                circles[circleId - 1].classList.add('circle_active');
                activeCircle = circles[circleId - 1];
                changingStyleToggle(circleId - 1);
                return;
            }
        }

        if (toggleId === '1') {
            if (circleId == 2) {
                return;
            } else {
                circles[circleId].classList.remove('circle_active');
                circles[circleId + 1].classList.add('circle_active');
                activeCircle = circles[circleId + 1];
                changingStyleToggle(circleId + 1);
                return;
            }

        }
    }

    function changingStyleToggle(id) {
        if (id === 0) {
            toggles[0].classList.remove('toggle_active');
            toggles[1].classList.add('toggle_active');
        }

        if (id == 1) {
            toggles[0].classList.add('toggle_active');
            toggles[1].classList.add('toggle_active');
        }

        if (id === 2) {
            toggles[1].classList.remove('toggle_active');
            toggles[0].classList.add('toggle_active');
        }
    }
}