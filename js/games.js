import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
    constructor() {
        this.ui = new Ui();
        this.getGames("mmorpg");
    
        const links = document.querySelectorAll(".menu a");
    
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        }
    }
    

    async getGames(category) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b6c884730fmsh92e5bcb187e2310p1d98b9jsn378c9af09afb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {  
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const response = await api.json();
            this.ui.displayDataGame(response);
            this.setEventOnAllCards();
        } catch (error) {
            console.error('Error fetching games:', error);
        }

    }

    setEventOnAllCards() {
        const items = document.querySelectorAll(".card");
    
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", (e) => {
                const id = items[i].dataset.id;
                this.showDetails(id);
            });
        }
    }

    showDetails(idGame) {
        new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}
