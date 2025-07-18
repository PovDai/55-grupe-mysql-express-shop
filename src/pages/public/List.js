import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageList extends PageTemplate{
      constructor(req) {
        super(req)
    }
    
    main() {
        return `
            <main>
               page List
            </main>`;
    }
}