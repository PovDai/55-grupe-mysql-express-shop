import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageSomething extends PageTemplate{
      constructor(req) {
        super(req)
    }

    main() {
        return `
            <main>
               Page Something
            </main>`;
    }
    
}