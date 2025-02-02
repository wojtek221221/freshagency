
    function filterProjects(category) {
        const allProjects = document.querySelectorAll('.project-item');
        allProjects.forEach(project => {
            if (project.id === category || category === 'all') {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });

        const buttons = document.querySelectorAll('#projekty button');
        buttons.forEach(button => {
            if (button.id === category + '-btn') {
                button.classList.add('bg-gradient-to-r', 'from-[#957BFF]', 'to-[#594A99]');
                button.classList.remove('border-2', 'border-[#594A99]', 'bg-transparent');
            } else {
                button.classList.remove('bg-gradient-to-r', 'from-[#957BFF]', 'to-[#594A99]');
                button.classList.add('border-2', 'border-[#594A99]', 'bg-transparent');
            }
            button.classList.add('text-white');
        });
    }

    document.getElementById('grafiki-btn').addEventListener('click', () => {
        filterProjects('grafiki');
    });

    document.getElementById('strony-btn').addEventListener('click', () => {
        filterProjects('strony');
    });

    document.getElementById('filmy-btn').addEventListener('click', () => {
        filterProjects('filmy');
    });

    window.onload = () => {
        filterProjects('grafiki');
    };
