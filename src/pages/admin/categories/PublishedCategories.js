import { AdminTemplate } from "../../../templates/AdminPageTemplate.js";

export class PagePublishedCategories extends AdminTemplate{
    constructor(req) {
        super(req)
    }

    main() {
        return `<h1>Sveiki gyvi atvyki i Admin page PUBLISHED Categories</h1>`
    }

}