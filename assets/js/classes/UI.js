export default class {
    static printReceivedInvitations(containerId, invitations, skills) {
        const container = document.getElementById(containerId)
        invitations.forEach(invitation => {
            container.innerHTML += `<div class="card card-matter mt-3">
                                        <div class="card-body">
                                            <form id="form-feedback${invitation.id}" onsubmit="event.preventDefault(), sendFeedback(${invitation.id})">
                                                <p>Dar feedback a ${invitation.user_invited.name}</p>
                                                ${this.htmlAnswers(skills)}
                                                <button class="btn btn-primary">Send Feedback</button>
                                            </form>
                                        </div>
                                    </div>`
        });
    }
    static htmlAnswers(skills) {
        let html = ``
        skills.forEach((skill, index) => {
            html += `<h6>${skill.name}</h6>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="one${index}" data-skill="${skill.id}" value="1" checked>
                <label class="form-check-label" for="one${index}">
                1 point
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="two${index}" data-skill="${skill.id}" value="2">
                <label class="form-check-label" for="two${index}">
                2 points
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="score${index}" id="three${index}" data-skill="${skill.id}" value="3">
                <label class="form-check-label" for="three${index}">
                3 points
                </label>
            </div>`;
        })
        return html;
    }
}