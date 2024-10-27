document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('heroForm');
    const formSteps = document.querySelectorAll('.form-step');
    const progress = document.getElementById('progress');
    let currentStep = 0;
    const totalSteps = formSteps.length - 1; // Excluding result step
    const formData = {};

    formSteps[currentStep].classList.add('active');
    updateProgress();

    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (!validateStep(currentStep)) return;
            saveStepData(currentStep);
            gotoStep(currentStep + 1);
        });
    });

    document.querySelectorAll('.prev-btn').forEach(button => {
        button.addEventListener('click', () => {
            gotoStep(currentStep - 1);
        });
    });

    // Restart Quiz
    document.querySelector('.restart-btn')?.addEventListener('click', () => {
        location.reload();
    });

    // Update scale values
    document.getElementById('powerLevel').addEventListener('input', function() {
        document.getElementById('powerValue').textContent = this.value;
    });

    document.getElementById('gadgetMastery').addEventListener('input', function() {
        document.getElementById('gadgetValue').textContent = this.value;
    });

    // Add event listeners to Origins checkboxes for auto-progress
    document.querySelectorAll('input[name="origins"]').forEach(input => {
        input.addEventListener('change', () => {
            const selected = Array.from(document.querySelectorAll('input[name="origins"]:checked')).length;
            if (selected > 0) {
                saveStepData(currentStep);
                gotoStep(currentStep + 1);
            }
        });
    });

    function updateProgress() {
        const progressPercent = ((currentStep) / totalSteps) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    function validateStep(step) {
        const stepElement = formSteps[step];
        const inputs = stepElement.querySelectorAll('input, select, textarea');
        for (let input of inputs) {
            if (input.hasAttribute('required') && !input.value.trim()) {
                alert('Please fill out all required fields.');
                return false;
            }
            if (input.type === 'radio') {
                const name = input.name;
                if (!stepElement.querySelector(`input[name="${name}"]:checked`)) {
                    alert('Please select an option.');
                    return false;
                }
            }
            if (input.type === 'checkbox') {
                const name = input.name;
                if (!stepElement.querySelector(`input[name="${name}"]:checked`)) {
                    alert('Please select at least one option.');
                    return false;
                }
            }
        }
        return true;
    }

    function saveStepData(step) {
        const stepElement = formSteps[step];
        const inputs = stepElement.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (!formData[input.name]) {
                    formData[input.name] = [];
                }
                if (input.checked) {
                    formData[input.name].push(input.value);
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    formData[input.name] = input.value;
                }
            } else {
                formData[input.name] = input.value;
            }
        });
    }

    function gotoStep(step) {
        formSteps[currentStep].classList.remove('active');
        currentStep = step;
        if (currentStep < totalSteps) {
            formSteps[currentStep].classList.add('active');
            updateProgress();
        } else {
            generateResult();
            formSteps[currentStep].classList.add('active');
            progress.style.width = `100%`;
        }
    }

    function generateResult() {
        const resultContent = document.getElementById('resultContent');
        const origins = formData.origins ? formData.origins.join(', ') : 'N/A';
        const acquisitionMethod = formData.acquisitionMethod ? formData.acquisitionMethod.join(', ') : 'N/A';

        resultContent.innerHTML = `
            <p><strong>Hero Name:</strong> ${formData.heroName}</p>
            <p><strong>Alias:</strong> ${formData.alias}</p>
            <p><strong>General Appearance:</strong> ${formData.generalAppearance}</p>
            <p><strong>Color Theme:</strong> ${formData.colorTheme}</p>
            <p><strong>Material:</strong> ${formData.material}</p>
            <p><strong>Power Level:</strong> ${formData.powerLevel} / 5</p>
            <p><strong>Gadget Mastery:</strong> ${formData.gadgetMastery} / 5</p>
            <p><strong>Origins:</strong> ${origins}</p>
            <p><strong>Acquisition Method:</strong> ${acquisitionMethod}</p>
        `;
    }
});
