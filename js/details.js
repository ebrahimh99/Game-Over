import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", function () {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(id);
    }

    async getDetails(idGames) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b6c884730fmsh92e5bcb187e2310p1d98b9jsn378c9af09afb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
            const response = await api.json();
            this.ui.displayDetails(response);
        } catch (error) {
            console.error('Error fetching game details:', error);
        }
    }
}
