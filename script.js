
        const container = document.getElementById('video-container');


        const video = document.createElement('video');
        video.src = 'img/kiho.mp4'; 
        video.autoplay = true; 
        video.muted = true;
        video.loop = true; 

        container.appendChild(video);