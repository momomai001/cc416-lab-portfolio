# CC416 Lab Portfolio - Mailla Alarao BSIS 1B

## LAB 03.02 - Iteration 2

**Student:** Mailla Alarao  
**Section:** BSIS 1B  
**Subject:** CC416 - Lab 03.02

### Features - Iteration 2
- ✅ Git branching workflow
- ✅ Enhanced portfolio design with rainbow highlight
- ✅ Mobile-responsive layout
- ✅ Pull Request workflow (Part 13)

### How to Run
cd lab_03.02_ON_YOUR_OWN
npm install
npm run dev

### Git Workflow Commands Used
git checkout -b add-workflow-section
git add .
git commit -m "Add workflow section"
git push -u origin add-workflow-section
# Then Create Pull Request on GitHub -> Merge

### Part 13 - PR Workflow
This README is created via Pull Request workflow as required in Part 13.

## Part 14 - Common Problems and Fixes

Problem: git is not recognized
Fix: Install Git then reopen PowerShell, check git --version

Problem: origin already exists  
Fix: git remote -v tapos git remote set-url origin https://github.com/momomai001/cc416-lab-portfolio.git

Problem: nothing to commit
Fix: git status - tapos Ctrl+S muna sa file bago git add .

Problem: accidentally staged many files
Fix: git restore --staged . tapos git add lab_03.02_ON_YOUR_OWN lang
