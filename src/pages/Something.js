import { PageTemplate } from "../templates/PageTemplate.js";

export class PageSomething extends PageTemplate{

    main() {
        return `
            <main>
               Page Something
            </main>`;
    }
    
}