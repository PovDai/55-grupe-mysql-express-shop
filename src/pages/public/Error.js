import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageError extends PageTemplate{
    constructor(req) {
        super(req)
    }
    main() {
       return `
        <main>
        <div class="col-12 center pingvinas">
       <h1 class="color-danger">Oops looks like page not found !!!</h1>
        <div class="col-8 col-sm-5 col-md-5">
        <img src="/img/pinguin.jpg" class="col-12">
        </div>
        <img src="/img/spiner.png" class="suktukas" alt="spinner">
                
        <a href="/"><button type="button" class="btn btn-primary w-100 py-2 fs-5 color-danger-button mt-5">Go Home</button> </a>
        </div>
        
        </main>
        
        `
    }

}