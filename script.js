document.addEventListener('DOMContentLoaded', () => {
    const subredditInput = document.getElementById('subredditInput');
    const addSubredditButton = document.getElementById('addSubredditButton');
    const lanesContainer = document.getElementById('lanesContainer');

    // Load lanes from localStorage
    const loadLanes = () => {
        const lanes = JSON.parse(localStorage.getItem('lanes')) || [];
        lanes.forEach(subreddit => addLane(subreddit));
    };

    // Save lanes to localStorage
    const saveLanes = () => {
        const lanes = Array.from(document.querySelectorAll('.lane')).map(lane => lane.dataset.subreddit);
        localStorage.setItem('lanes', JSON.stringify(lanes));
    };

    // Fetch data from Reddit API
    const fetchSubredditData = async (subreddit) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
            if (!response.ok) throw new Error('Subreddit not found');
            return await response.json();
        } catch (error) {
            throw error;
        }
    };

    // Create a new lane
    const addLane = async (subreddit) => {
        const lane = document.createElement('div');
        lane.classList.add('lane');
        lane.dataset.subreddit = subreddit;

        const title = document.createElement('h2');
        title.textContent = `r/${subreddit}`;
        lane.appendChild(title);

        // Create a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        lane.appendChild(deleteButton);

        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = '<div class="loading">Loading...</div>';
        lane.appendChild(content);

        lanesContainer.appendChild(lane);

        // Fetch data and update lane
        try {
            const data = await fetchSubredditData(subreddit);
            console.log(data);
            
            const posts = data.data.children;
            content.innerHTML = posts.map(post => `
                <div>
                    <strong>${post.data.title}</strong>
                    <p>by ${post.data.author} - ${post.data.ups} upvotes</p>
                </div>
            `).join('');
        } catch (error) {
            content.innerHTML = `<div class="error">${error.message}</div>`;
        }

        // Add event listener for delete button
        deleteButton.addEventListener('click', () => {
            lane.remove(); // Remove the lane from the DOM
            saveLanes();   // Update localStorage
        });

        saveLanes();
    };

    // Add a new subreddit lane
    addSubredditButton.addEventListener('click', () => {
        const subreddit = subredditInput.value.trim();
        if (subreddit) {
            addLane(subreddit);
            subredditInput.value = '';
        }
    });

    // Initial load
    loadLanes();
});
