const username = 'ash1eygrace';
let displayedPullRequests = 5;

async function fetchLatestPullRequests() {
    const apiUrlRepos = `https://api.github.com/users/${username}/repos`;

    try {
        const reposResponse = await fetch(apiUrlRepos);

        if (!reposResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const repos = await reposResponse.json();
        const allPullRequests = [];

        for (const repo of repos) {
            const apiUrlPRs = `https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`;
            const pullRequestsResponse = await fetch(apiUrlPRs);

            if (pullRequestsResponse.ok) {
                const pullRequests = await pullRequestsResponse.json();
                allPullRequests.push(...pullRequests.filter(pr => pr.user.login === username));
            }
        }

        displayUsername(username);
        displayPullRequests(allPullRequests, displayedPullRequests);
        showLoadMoreButton();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayUsername(username) {
    document.getElementById('username').textContent = username;
}

function displayPullRequests(pullRequests, count) {
    const githubEmbed = document.getElementById('github-embed');
    githubEmbed.innerHTML = '';

    pullRequests.slice(0, count).forEach((pullRequest) => {
        const prDiv = document.createElement('div');
        prDiv.classList.add('pull-request');

        const prTitle = document.createElement('h2');
        prTitle.textContent = pullRequest.title;
        prDiv.appendChild(prTitle);

        const prLink = document.createElement('a');
        prLink.href = pullRequest.html_url;
        prLink.textContent = 'View on GitHub';
        prDiv.appendChild(prLink);

        githubEmbed.appendChild(prDiv);
    });
}

function showLoadMoreButton() {
    document.getElementById('load-more').classList.remove('hidden');
}

document.getElementById('load-more').addEventListener('click', async () => {
    displayedPullRequests += 5;
    await fetchLatestPullRequests();
});

fetchLatestPullRequests();