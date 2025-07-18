import { AdminTemplate } from "../../../templates/AdminPageTemplate.js";

export class PageDraftCategories extends AdminTemplate{
    constructor(req) {
        super(req)
    }

    main() {
        return `
        <h1>Sveiki gyvi atvyki i Admin page Draft Categories</h1>
        `
    }
}