const fs = require('fs');

const content = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/AuditOverviewSportsInterception.tsx', 'utf-8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('// Chart 2: CGSLDB')) {
        console.log(lines.slice(Math.max(0, i-5), i+15).join('\n'));
    }
}
