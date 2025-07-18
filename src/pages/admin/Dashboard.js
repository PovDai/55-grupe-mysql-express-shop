import { COOKIE_MAX_AGE } from "../../env.js";
import { AdminTemplate } from "../../templates/AdminPageTemplate.js";


export class PageDashboard extends AdminTemplate{
    main() {
        const cookie = this.req.user.login_token_created_at.getTime();
        const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;


        return `
            <main class="dashboard">
               <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">Sveikas prisijunges i admin page :) !</h1>
                            <p class="display-6">Username: ${this.req.user.username}</p>
                            <p class="display-6">Email: ${this.req.user.email}</p>
                            <p class="display-6">ID: ${this.req.user.id}</p>
                            <p class="display-6">Sukurtas useris: ${this.req.user.login_token_created_at}</p>
                            <p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}