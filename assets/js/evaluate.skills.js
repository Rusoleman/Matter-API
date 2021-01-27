import Request from './classes/Request.js'
import UI from './classes/UI.js';
import Notification from './classes/Notification.js'


Request.receivedInvitations()
    .then((response) => response.json())
    .then((data) => {
        Request.getSkills()
            .then((response) => response.json())
            .then((skills) => {
                UI.printReceivedInvitations('invitations-container', data, skills);
            })
    })

function sendFeedback(invitationId) {
    const form = document.getElementById(`form-feedback${invitationId}`)
    const inputsChecked = form.querySelectorAll('input:checked');

    const inputsArray = Array.from(inputsChecked);
    inputsArray.forEach(input => {
        const skillId = input.getAttribute('data-skill');

        Request.evaluateSkill(invitationId, skillId, input.value)
            .then(response => {
                if(response.status === 200) {
                    new Notification('success', 'Se envió el feedback exitosamente');
                } else {
                    new Notification('danger', 'Tuvimos un error enviando el feedback');
                }
            })
    })
}
window.sendFeedback = sendFeedback;