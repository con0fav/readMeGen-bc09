//function/template literal? for generating markdown

function createMarkdown(data) {
    
    return `# ${data.name}
    # Description ${data.description}

    ## Table of contents
    [Installation](#installation)
    [Usage](#usage)
    [Testing](#tests)
    [Software License](#license)
    [Questions/Contact](#contact)

    ## Installation ${data.installation}

    ## Usage ${data.usage}

    ## License
    This application uses the ${data.license} license

    ## Testing ${data.testing}

    ## Questions/Contact
    **Github:** ${data.username}
    **Email:** ${data.email}

    `;
}

// export for use with index.js
module.exports = createMarkdown;