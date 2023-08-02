const interestCheck = [...document.querySelectorAll('.interest__check')];
interestCheck.forEach((check) => check.addEventListener('change', (event => {
    let parent = event.target.closest('.interest');
    let children = [...parent.querySelectorAll('.interest__check')];
    if (!children[0].checked) {
        children.forEach(child => child.checked = false);
        return
    } else {
        children.forEach(child => child.checked = true)
    }
})))