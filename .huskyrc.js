// .huskyrc.js
module.exports = {
    hooks: {
        "pre-commit": "(cd web && next lint)",
    },
};