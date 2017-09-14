'use strict';
const fs = require('fs');
const obj = require('./list.json');
const year = 2018;
let content = `# ${year} Web Development Conferences
A list of ${year} web development conferences.
A list of [${year - 1} conferences](https://github.com/ryanburgess/${year - 1}-conferences).
`;
// create contributing instructions
const contribute =  `
## Contributing
1. Fork it
2. Add your conference to \`list.json\`
3. Run \`node index\` to update \`README.md\` with your changes
4. Create your feature branch (\`git checkout -b my-new-feature\`)
5. Commit your changes (\`git commit -am "Add some feature"\`)
6. Push to the branch (\`git push origin my-new-feature\`)
7. Create new Pull Request
`;

// create heading for conference list
content += `
# Conference List
`;

// format date
let formatDateYYYYMMDD = (_dateString) => {
  let _d = new Date(_dateString);
  return new Date(_d - _d.getTimezoneOffset() * 60 * 1000).toJSON().split(/T/)[0].replace(/-/g, '');
};

// create list of conferences
for (const conference of obj) {
  // create content for readme
  content += (    `
## [${conference.title}](${conference.url})
**Where:** ${conference.where}

**When:** ${conference.when}
    `
  );
}

// add contribute information after list of conferences
content += contribute;

// create README with the list of conferences
fs.writeFile('./README.md', content, function (err) {
  if (err) throw err;
  console.log('Updated conference list');
});
