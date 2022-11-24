var rule = {
    title:'剧荒',
    host:'https://www.juhuang.tv',    
    // homeUrl:'/',
    url:'/type/fyclass_type.html',
    searchUrl:'/s/**/fypage.html',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA', },
    class_name:'电视剧&电影&综艺&动漫',//静态分类名称拼接
    class_url:'2&1&3&4',//静态分类标识拼接
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text","img":".module-item-pic&&img&&data-src","desc":";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1) a&&Text;.video-info-items:eq(0) a&&Text","content":".video-info-content&&Text","tabs":".module-tab-title","lists":".module-blocklist&&.sort-item a"},
    搜索:'.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
