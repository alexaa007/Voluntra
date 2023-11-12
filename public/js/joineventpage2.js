document.getElementById('invite-a-friend').addEventListener('click', displayCopyLinkOverlay);


function displayCopyLinkOverlay() {
    const copyLinkOverlay = document.getElementById('copy-link-overlay');

    copyLinkOverlay.style.display = "flex";

    const copyLinkBlur = document.getElementById('copy-link-blur');
    copyLinkBlur.onclick = () => {
        copyLinkOverlay.style.display = "none";
    }
}