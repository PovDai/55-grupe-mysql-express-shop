import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageShop extends PageTemplate{
      constructor(req) {
        super(req)
    }
    
    main() {
        return `
            <main>
               Page Shop
            </main>`;
    }
}