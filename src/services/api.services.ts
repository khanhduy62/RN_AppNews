import RequestHelper from "./api.base";

export async function getArticlesByCatogry(cate:string,page=1) {
    try {
        const data = await RequestHelper.get('category',{},{category:cate,page},false);
        return [null,data]
    } catch (error) {
        return [error,null];
    }
}

export async function getArticle(slug) {
    try {
        const data = await RequestHelper.get('article',{},{slug},false);
        return [null,data]
    } catch (error) {
        return [error,null];
    }
}

// /latest
// Return array of the latest news in the last 3 days, sorted by published date. The most recent ones come first.
export async function getPostsLatest() {
    try {
        const data = await RequestHelper.get('latest',{},false);
        return [null,data]
    } catch (error) {
        return [error,null];
    }
}


// GET /editor-picks
// Return array of editor-picked articles.
// Actually they are just random articles
export async function getEditorPicks() {
    try {
        const data = await RequestHelper.get('/editor-picks',{},false);
        return [null,data]
    } catch (error) {
        return [error,null];
    }
}

