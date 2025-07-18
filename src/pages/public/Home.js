import {PageTemplate} from '../../templates/PageTemplate.js'

export class PageHome extends PageTemplate {
    constructor(req) {
        super(req)
    }
    main() {
        return `
            <main>
               Page Home
            </main>`;
    }
}
