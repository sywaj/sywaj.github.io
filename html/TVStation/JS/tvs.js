//电视台构造函数
function TV(name,url){
    this.name = name
    this.url = url
}
//打印函数
function print(tv){
    console.log(`电视台名称：${tv.name}\t链接：${tv.url}`)
}
//电视台分类构造函数
function TVType(type,id){
    this.type = type
    this.id = id
    this.tvs = []   //存放直播网站 new TV()
    this.webs = []  //存放官方网站 new TVWeb()
}
//电视台官网构造函数
function TVWeb(name,area,url){
    this.name = name
    this.area = area
    this.url = url
}

let cctv = new TVType("中国中央电视台","cctv")
let gd = new TVType("广东电视台","gd")
let hk = new TVType("香港电视台","hk")
let mo = new TVType("澳门电视台","mo")
let ah = new TVType("安徽电视台","ah")
let bj = new TVType("北京电视台","bj")
let cq = new TVType("重庆电视台","cq")
let fj = new TVType("福建电视台","fj")
let gs = new TVType("甘肃电视台","gs")
let gx = new TVType("广西电视台","gx")
let gz = new TVType("贵州电视台","gz")
let hi = new TVType("海南电视台","hi")
let he = new TVType("河北电视台","he")
let ha = new TVType("河南电视台","ha")
let hl = new TVType("黑龙江电视台","hl")
let hb = new TVType("湖北电视台","hb")
let hn = new TVType("湖南电视台","hn")
let jl = new TVType("吉林电视台","jl")
let js = new TVType("江苏电视台","js")
let jx = new TVType("江西电视台","jx")
let ln = new TVType("辽宁电视台","ln")
let nm = new TVType("内蒙古电视台","nm")
let nx = new TVType("宁夏电视台","nx")
let qh = new TVType("青海电视台","qh")
let sd = new TVType("山东电视台","sd")
let sx = new TVType("山西电视台","sx")
let sn = new TVType("陕西电视台","sn")
let sh = new TVType("上海电视台","sh")
let sc = new TVType("四川电视台","sc")
let tj = new TVType("天津电视台","tj")
let xz = new TVType("西藏电视台","xz")
let xj = new TVType("新疆电视台","xj")
let yn = new TVType("云南电视台","yn")
let zj = new TVType("浙江电视台","zj")
let tw = new TVType("台湾电视台","tw")
let noAut = new TVType("没有官方直播","noAut")
let isStop = new TVType("已停播","isStop")

//直播
//中央电视台
var u = "https://tv.cctv.com/live/"
cctv.tvs.push(new TV("CCTV-1 综合",u + "cctv1"))
cctv.tvs.push(new TV("CCTV-2 财经",u + "cctv2"))
cctv.tvs.push(new TV("CCTV-3 综艺",u + "cctv3/"))
cctv.tvs.push(new TV("CCTV-4 中文国际(亚洲)",u + "cctv4"))
cctv.tvs.push(new TV("CCTV-5 体育",u + "cctv5"))
cctv.tvs.push(new TV("CCTV-6 电影",u + "cctv6"))
cctv.tvs.push(new TV("CCTV-7 国防军事",u + "cctv7"))
cctv.tvs.push(new TV("CCTV-8 电视剧",u + "cctv8"))
cctv.tvs.push(new TV("CCTV-9 记录",u + "cctvjilu"))
cctv.tvs.push(new TV("CCTV-10 科教",u + "cctv10"))
cctv.tvs.push(new TV("CCTV-11 戏曲",u + "cctv11"))
cctv.tvs.push(new TV("CCTV-12 社会与法",u + "cctv12"))
cctv.tvs.push(new TV("CCTV-13 新闻",u + "cctv13"))
cctv.tvs.push(new TV("CCTV-14 少儿",u + "cctvchild"))
cctv.tvs.push(new TV("CCTV-15 音乐",u + "cctv15"))
cctv.tvs.push(new TV("CCTV-16 奥林匹克",u + "cctv16"))
cctv.tvs.push(new TV("CCTV-17 农村农业",u + "cctv17"))
cctv.tvs.push(new TV("CCTV-17 农村农业",u + "cctv17"))
cctv.tvs.push(new TV("CCTV-4 中文国际(欧洲)",u + "cctveurope"))
cctv.tvs.push(new TV("CCTV-4 中文国际(美洲)",u + "cctvamerica"))
cctv.tvs.push(new TV("CCTV-5+ 体育赛事",u + "cctv5plus"))

//广东
var u = "https://www.gdtv.cn/tvChannelDetail/"
gd.tvs.push(new TV("广东卫视",u + "43"))
gd.tvs.push(new TV("广东珠江",u + "44"))
gd.tvs.push(new TV("广东新闻",u + "45"))
gd.tvs.push(new TV("广东公共",u + "45"))
gd.tvs.push(new TV("大湾区卫视",u + "51"))
gd.tvs.push(new TV("经济科教",u + "49"))
gd.tvs.push(new TV("广东影视",u + "53"))
gd.tvs.push(new TV("广东综艺",u + "16"))
gd.tvs.push(new TV("广东国际",u + "46"))
gd.tvs.push(new TV("广东少儿",u + "54"))
gd.tvs.push(new TV("嘉佳卡通",u + "66"))
gd.tvs.push(new TV("南方购物",u + "42"))
gd.tvs.push(new TV("岭南戏曲",u + "15"))
gd.tvs.push(new TV("广东房产",u + "67"))
gd.tvs.push(new TV("现代教育",u + "13"))
gd.tvs.push(new TV("广东移动",u + "74"))
gd.tvs.push(new TV("广东珠江(荔枝台)",u + "100"))
gd.tvs.push(new TV("南方卫视(GRTN)",u + "99"))
gd.tvs.push(new TV("广东影视(GRTN)",u + "75"))
var u = "https://www.gztv.com/tvfile/tv.html"
gd.tvs.push(new TV("广州综合频道",u))
gd.tvs.push(new TV("广州新闻频道",u))
gd.tvs.push(new TV("广州法制频道",u))
gd.tvs.push(new TV("广州竞赛频道",u))
gd.tvs.push(new TV("广州影视频道",u))
gd.tvs.push(new TV("广州南国都市",u))
var u = "https://www.sztv.com.cn/dianshi.shtml?id="
gd.tvs.push(new TV("深圳卫视",u + "7867"))
gd.tvs.push(new TV("深圳都市频道",u + "7868"))
gd.tvs.push(new TV("深圳电视剧频道",u + "7880"))
gd.tvs.push(new TV("深圳公共频道",u + "7874"))
gd.tvs.push(new TV("深圳财经频道",u + "7871"))
gd.tvs.push(new TV("深圳娱乐频道",u + "7872"))
gd.tvs.push(new TV("深圳少儿频道",u + "7881"))
gd.tvs.push(new TV("深圳移动电视",u + "7869"))
gd.tvs.push(new TV("深圳宜和购物",u + "7878"))
gd.tvs.push(new TV("深圳国际频道",u + "7944"))
gd.tvs.push(new TV("汕头综合","http://tv.cutv.com/index.html"))

//安徽
var u = "http://www.ahtv.cn/folder9000/folder20193?channelIndex="
ah.tvs.push(new TV("安徽卫视",u + "0"))
ah.tvs.push(new TV("经济生活",u + "1"))
ah.tvs.push(new TV("综艺体育",u + "2"))
ah.tvs.push(new TV("影视频道",u + "3"))
ah.tvs.push(new TV("公共频道",u + "4"))
ah.tvs.push(new TV("农业科教",u + "5"))
ah.tvs.push(new TV("安徽国际",u + "6"))
var u = "https://www.hfbtv.com/fccommon/Home/detail?site_id=57&detail_type=7&cid="
ah.tvs.push(new TV("合肥新闻频道",u + "10"))
ah.tvs.push(new TV("合肥生活频道",u + "13"))
ah.tvs.push(new TV("合肥财经频道",u + "14"))
ah.tvs.push(new TV("合肥教育法制频道",u + "15"))
ah.tvs.push(new TV("合肥故事休闲频道",u + "16"))
ah.tvs.push(new TV("合肥公共频道",u + "21"))
var u = "http://www.wuhubtv.com/live/?channel="
ah.tvs.push(new TV("芜湖新闻综合",u + "1"))
ah.tvs.push(new TV("芜湖生活频道",u + "2"))
ah.tvs.push(new TV("芜湖公共频道",u + "3"))
ah.tvs.push(new TV("芜湖教育频道",u + "8"))
var u = "http://www.hsnewsnet.com/web/"
ah.tvs.push(new TV("黄山新闻综合",u + "tvnews/index.shtml"))
ah.tvs.push(new TV("黄山公共频道",u + "tvlife/index.shtml"))
var u = "http://www.ahsz.tv/"
ah.tvs.push(new TV("宿州新闻综合",u + "xwzh"))
ah.tvs.push(new TV("宿州公共频道",u + "gonggong"))
ah.tvs.push(new TV("宿州科学教育",u + "kejiao"))
var u = "http://www.cztv.cc/Live/index?liveid="
ah.tvs.push(new TV("滁州新闻综合",u + "1"))
ah.tvs.push(new TV("滁州公共频道",u + "2"))
ah.tvs.push(new TV("滁州科教频道",u + "3"))
var u = "http://www.china-latv.com/"
ah.tvs.push(new TV("六安公共频道",u))
ah.tvs.push(new TV("六安综合频道",u))
var u = "http://www.ahbztv.com/television.html"
ah.tvs.push(new TV("亳州综合频道",u))
ah.tvs.push(new TV("亳州农村频道",u))

//北京
var u = "https://www.brtn.cn/btv/btvsy_index"
bj.tvs.push(new TV("北京卫视",u))
bj.tvs.push(new TV("冬奥纪实",u))
bj.tvs.push(new TV("BRTV文艺",u))
bj.tvs.push(new TV("BRTV科教",u))
bj.tvs.push(new TV("BRTV影视",u))
bj.tvs.push(new TV("BRTV财经",u))
bj.tvs.push(new TV("BRTV i生活",u))
bj.tvs.push(new TV("BRTV青年",u))
bj.tvs.push(new TV("BRTV新闻",u))
bj.tvs.push(new TV("卡酷少儿",u))

//重庆
var u = "https://www.cbg.cn/web/list/4918/"
cq.tvs.push(new TV("重庆卫视",u))
cq.tvs.push(new TV("重庆新闻",u))

//福建
var u = "http://live.fjtv.net/"
fj.tvs.push(new TV("综合频道",u + "zhpd"))
fj.tvs.push(new TV("东南卫视",u + "setv"))
fj.tvs.push(new TV("公共频道",u + "ggpd"))
fj.tvs.push(new TV("新闻频道",u + "xwpd"))
fj.tvs.push(new TV("电视剧频道",u + "dsjpd"))
fj.tvs.push(new TV("旅游频道",u + "dspd"))
fj.tvs.push(new TV("经视频道",u + "jspd"))
fj.tvs.push(new TV("文体频道",u + "typd"))
fj.tvs.push(new TV("少儿频道",u + "sepd"))
fj.tvs.push(new TV("海峡卫视",u + "hxtv"))
var u = "http://www.zohi.tv/app/tv/109"
fj.tvs.push(new TV("福州新闻综合频道",u))
fj.tvs.push(new TV("福州生活频道",u))
fj.tvs.push(new TV("福州少儿频道",u))
var u = "https://www.qztv.cn/index/Medias/index/media_id/"
fj.tvs.push(new TV("泉州新闻综合频道",u + "wq95wqbDnMKyd8KiwqzChnt0w5nChcKowoHCoQ/stream_name/news.html"))
fj.tvs.push(new TV("泉州闽南语频道",u + "wq95wqbDnMKyd8KiwqzChnt0w5nChcKofcKh/stream_name/mny.html"))
var u = "https://www.ptbtv.com/live/"
fj.tvs.push(new TV("莆田一套",u + "pt1t"))
fj.tvs.push(new TV("莆田二套",u + "pt2t"))
fj.tvs.push(new TV("仙游电视",u + "xyds"))
var u = "http://www.lytv.net.cn/folder1/folder83/"
fj.tvs.push(new TV("龙岩新闻综合",u + "folder84"))
fj.tvs.push(new TV("龙岩公共",u + "folder85"))

//甘肃
var u = "https://www.gstv.com.cn/zxc.jhtml"
gs.tvs.push(new TV("甘肃卫视",u))
gs.tvs.push(new TV("经济频道",u))
gs.tvs.push(new TV("文化影视",u))
gs.tvs.push(new TV("公共应急",u))
gs.tvs.push(new TV("少儿频道",u))
gs.tvs.push(new TV("都市频道",u))
gs.tvs.push(new TV("移动电视",u))
var u = "https://www.lztv.tv/folder25/folder26/"
gs.tvs.push(new TV("兰州新闻综合",u + "folder28"))
gs.tvs.push(new TV("兰州经济生活",u + "folder29"))
gs.tvs.push(new TV("兰州文旅频道",u + "folder30"))
var u = "http://www.0937tv.com/tvsLive.html"
gs.tvs.push(new TV("嘉峪关综合频道",u))
gs.tvs.push(new TV("嘉峪关公共频道",u))
var u = "http://www.jcnrtv.com/folder50/folder55/folder92/"
gs.tvs.push(new TV("金昌综合频道",u + "folder92"))
gs.tvs.push(new TV("金昌公共频道",u + "folder93"))
var u = "https://www.gsjqtv.com/folder6/folder147/folder151/folder152/"
gs.tvs.push(new TV("酒泉综合频道",u + "folder154"))
gs.tvs.push(new TV("酒泉公共频道",u + "folder155"))
var u = "https://www.gsqytv.com.cn/folder384/folder96/folder97/"
gs.tvs.push(new TV("庆阳新闻综合",u + "folder99"))
gs.tvs.push(new TV("庆阳公共频道",u + "folder100"))
var u = "http://www.gnrtv.com/m/display.php?id="
gs.tvs.push(new TV("甘南汉语",u + "96"))
gs.tvs.push(new TV("迭部电视台",u + "95"))
gs.tvs.push(new TV("玛曲电视台",u + "94"))
gs.tvs.push(new TV("临潭电视台",u + "93"))
gs.tvs.push(new TV("卓尼电视台",u + "92"))
gs.tvs.push(new TV("舟曲电视台",u + "91"))
gs.tvs.push(new TV("碌曲电视台",u + "90"))
gs.tvs.push(new TV("夏河电视台",u + "89"))

//广西
var u = "https://tv.gxtv.cn/channel/"
gx.tvs.push(new TV("广西卫视",u + "channelivePlay_e7a7ab7df9fe11e88bcfe41f13b60c62.html"))
gx.tvs.push(new TV("都市频道",u + "channelivePlay_fdbaf085f9fe11e88bcfe41f13b60c62.html"))
gx.tvs.push(new TV("影视频道",u + "channelivePlay_5e923d82058e11e9ba67e41f13b60c62.html"))
gx.tvs.push(new TV("新闻频道",u + "channelivePlay_9dfd8600075811e9ba67e41f13b60c62.html"))
gx.tvs.push(new TV("国际频道",u + "channelivePlay_bfa17b64157f11e999f0e41f13b60c62.html"))
gx.tvs.push(new TV("乐思购物频道",u + "channelivePlay_ed58bc4a207811e999f0e41f13b60c62.html"))
gx.tvs.push(new TV("移动数字电视频道",u + "channelivePlay_78dbfd44e6b74ab687204d2d8113cbf5.html"))
gx.tvs.push(new TV("中国教育电视台CETV-1",u + "channelivePlay_ffa6b6e1b32b4a16a73eb3ef66f8bfc7.html"))
gx.tvs.push(new TV("中国教育电视台CETV-2",u + "channelivePlay_80d0ffb42c114eaf9663708629ff0a3e.html"))
gx.tvs.push(new TV("中国教育电视台CETV-3",u + "channelivePlay_67eace939278435bb4bca90800fb4225.html"))
var u = "http://www.nntv.cn/live/"
gx.tvs.push(new TV("南宁新闻综合",u + "nntv_xw"))
gx.tvs.push(new TV("南宁都市生活",u + "nntv_ds"))
gx.tvs.push(new TV("南宁影视娱乐",u + "nntv_ys"))
gx.tvs.push(new TV("南宁公共频道",u + "nntv_gg"))
gx.tvs.push(new TV("南宁老友live",u + "nntv_live"))
var u = "https://live.lzgd.com.cn/tv/"
gx.tvs.push(new TV("柳州新闻综合",u + "1902"))
gx.tvs.push(new TV("柳州科教频道",u + "1808"))
gx.tvs.push(new TV("柳州热门活动",u + "xmt_live.ashx"))
var u = "http://www.wzrtv.cn/folder80/folder83/folder134"
gx.tvs.push(new TV("梧州新闻综合",u))
gx.tvs.push(new TV("梧州公共频道",u))
gx.tvs.push(new TV("梧州教育生活",u))
var u = "http://www.bhtv.cc/index?path=live"
gx.tvs.push(new TV("北海新闻频道",u))
gx.tvs.push(new TV("北海科教频道",u))
gx.tvs.push(new TV("北海图文频道",u))
var u = "http://www.gxcztv.cn/zb/dszb/"
gx.tvs.push(new TV("崇左综合",u))
var u = "http://www.yltvb.com/fccommon/Home/detail?site_id=75&detail_type=7&cid="
gx.tvs.push(new TV("玉林新闻综合",u + "11"))
gx.tvs.push(new TV("玉林公共频道",u + "12"))
var u = "http://bssjt.qingk.cn/videolive-info/afxdfauvqqaxsppawwwutbfaufcbxbcv/0eb7684272cfcab0e6bca85774757a83/acf2f96ab0c04d058964deea70349131"
gx.tvs.push(new TV("百色综合频道",u))
var u = "http://www.gxqzxw.com/folder401/folder406"
gx.tvs.push(new TV("钦州综合频道",u))
gx.tvs.push(new TV("钦州公共频道",u))
var u = "http://www.fcgtvb.com/lives/"
gx.tvs.push(new TV("防城港新闻综合",u + "2"))
gx.tvs.push(new TV("防城港公共频道",u + "3"))

//贵州
var u = "https://www.gzstv.com/tv/"
gz.tvs.push(new TV("贵州卫视",u + "ch01"))
gz.tvs.push(new TV("公共频道",u + "ch02"))
gz.tvs.push(new TV("影视文艺",u + "ch03"))
gz.tvs.push(new TV("大众生活",u + "ch04"))
gz.tvs.push(new TV("第5频道",u + "ch05"))
gz.tvs.push(new TV("科教健康",u + "ch06"))
gz.tvs.push(new TV("移动电视",u + "ch07"))
var u = "https://www.gystv.com/fccommon/Home/detail?site_id=75&detail_type=7&cid="
gz.tvs.push(new TV("贵阳新闻综合",u + "18"))
gz.tvs.push(new TV("贵阳生活频道",u + "19"))
gz.tvs.push(new TV("贵阳都市频道",u + "21"))
var u = "http://www.gzastv.com/live/"
gz.tvs.push(new TV("安顺新闻综合",u + "live.shtml"))
gz.tvs.push(new TV("安顺公共频道",u + "live_public.shtml"))
var u = "http://www.qdntv.com/live/"
gz.tvs.push(new TV("黔东南新闻综合",u + "index.html"))
gz.tvs.push(new TV("黔东南凯里频道",u + "qdntv-2.html"))
var u = "http://www.qxndt.com/folder74/folder77?channel_id="
gz.tvs.push(new TV("黔西南综合频道",u + "11"))
gz.tvs.push(new TV("黔西南公共频道",u + "14"))

//海南
var u = "http://www.hnntv.cn/live/"
hi.tvs.push(new TV("海南卫视",u + "lylive"))
hi.tvs.push(new TV("三沙卫视",u + "sslive"))
hi.tvs.push(new TV("海南自贸",u + "zhlive"))
hi.tvs.push(new TV("海南新闻",u + "xwlive"))
hi.tvs.push(new TV("海南公共",u + "gglive"))
hi.tvs.push(new TV("海南文旅",u + "yslive"))
hi.tvs.push(new TV("海南少儿",u + "qslive"))
var u = "http://s1.news.hkbtv.cn/web/hg_news.html?gid=4630456880936779776&num=undefined"
hi.tvs.push(new TV("海口综合频道",u))
hi.tvs.push(new TV("海口生活娱乐",u))
hi.tvs.push(new TV("海口乡村经济",u))

//河北
var u = "https://www.hebtv.com/19/19js/st/xdszb/index.shtml"
he.tvs.push(new TV("河北卫视",u))
he.tvs.push(new TV("经济生活",u))
he.tvs.push(new TV("农民频道",u))
he.tvs.push(new TV("河北都市",u))
he.tvs.push(new TV("河北影视剧",u))
he.tvs.push(new TV("少儿科教",u))
he.tvs.push(new TV("河北公共",u))
he.tvs.push(new TV("三佳购物",u))
var u = "http://www.sjzntv.cn/wzsy/pd/"
he.tvs.push(new TV("石家庄新闻综合",u))
he.tvs.push(new TV("石家庄娱乐",u))
he.tvs.push(new TV("石家庄生活",u))
he.tvs.push(new TV("石家庄都市",u))
var u = "http://www.tsr.he.cn/video/video.shtml"
he.tvs.push(new TV("唐山新闻综合",u))
he.tvs.push(new TV("唐山生活服务",u))
he.tvs.push(new TV("唐山影视频道",u))
he.tvs.push(new TV("唐山公共频道",u))
var u = "http://www.xttv.com.cn/index/channel/index/id/"
he.tvs.push(new TV("邢台新闻综合",u + "62.html"))
he.tvs.push(new TV("邢台城市生活",u + "64.html"))
var u = "https://www.bdgdw.com/live/?channel="
he.tvs.push(new TV("保定新闻综合",u + "1"))
he.tvs.push(new TV("保定公共频道",u + "2"))
he.tvs.push(new TV("保定生活健康",u + "3"))
var u = "https://www.zjkgdcs.com/Live/index?liveid="
he.tvs.push(new TV("张家口新闻综合",u + "1"))
he.tvs.push(new TV("张家口公共频道",u + "1"))
var u = "http://www.czgd.tv/Article/des?infoid="
he.tvs.push(new TV("沧州一套",u + "32768&modelid=3"))
he.tvs.push(new TV("沧州二套",u + "32769&modelid=3"))
he.tvs.push(new TV("沧州三套",u + "32770&modelid=3"))

//河南
var u = "https://static.hntv.tv/kds/"
ha.tvs.push(new TV("河南卫视",u))
ha.tvs.push(new TV("都市频道",u))
ha.tvs.push(new TV("民生频道",u))
ha.tvs.push(new TV("法制频道",u))
ha.tvs.push(new TV("电视剧频道",u))
ha.tvs.push(new TV("新闻频道",u))
ha.tvs.push(new TV("欢腾购物",u))
ha.tvs.push(new TV("公共频道",u))
ha.tvs.push(new TV("河南乡村频道",u))
ha.tvs.push(new TV("河南国际",u))
ha.tvs.push(new TV("梨园频道",u))
ha.tvs.push(new TV("文物宝库",u))
ha.tvs.push(new TV("武术频道",u))
ha.tvs.push(new TV("睛彩中原",u))
ha.tvs.push(new TV("移动戏曲频道",u))
ha.tvs.push(new TV("象视界",u))
ha.tvs.push(new TV("中华特产",u))
var u = "http://www.zztv.tv/folder129/kandianshi/"
ha.tvs.push(new TV("郑州新闻综合",u))
ha.tvs.push(new TV("郑州商都频道",u))
var u = "http://www.kftv.net.cn/"
ha.tvs.push(new TV("开封新闻综合",u + "new_live37.html"))
ha.tvs.push(new TV("开封公共频道",u + "new_live36.html"))
var u = "http://www.lytv.com.cn/info/"
ha.tvs.push(new TV("洛阳新闻综合",u + "914"))
ha.tvs.push(new TV("洛阳科教频道",u + "938"))
ha.tvs.push(new TV("洛阳文旅频道",u + "939"))
var u = "http://zhibo.tv373.com/live_watch.php?id=8813"
ha.tvs.push(new TV("新乡新闻综合",u))
var u = "http://www.jzrt.com/"
ha.tvs.push(new TV("焦作晴彩频道",u + "Category_62/Index.aspx"))
ha.tvs.push(new TV("焦作教育频道",u + "Category_61/Index.aspx"))
ha.tvs.push(new TV("焦作公共频道",u + "Category_60/Index.aspx"))
ha.tvs.push(new TV("焦作综合频道",u + "Category_59/Index.aspx"))
var u = "http://zhibo.sqrtv.com/live/page/"
ha.tvs.push(new TV("商丘新闻综合",u + "2C9895B1EE9B8ABF"))
ha.tvs.push(new TV("商丘公共频道",u + "575C3DB7B7CC6F5B"))
ha.tvs.push(new TV("商丘文体科教",u + "BC78507C2A02334B4B8EBB5DA37B9081"))
var u = "http://zksjt.qingk.cn/videolive-info/osqvxeedtasdsfqpxfqtqprrppxasqqf/d6506f5cde460cc655431cdd572c610a/"
ha.tvs.push(new TV("周口新闻综合",u + "8462ee38cf36494e880db7982eaedb46"))
ha.tvs.push(new TV("周口教育频道",u + "6331848ff31d479d9b49809a7d50ffcd"))
ha.tvs.push(new TV("周口公共频道",u + "3966dc51ebe2497395667c4debb18c2f"))
ha.tvs.push(new TV("周口川汇频道",u + "c9634fab8ec84f998f9b4fadeac9124c"))
var u = "https://www.xytv.cn/television/"
ha.tvs.push(new TV("信阳新闻综合",u + "137.html"))
ha.tvs.push(new TV("信阳公共频道",u + "138.html"))
ha.tvs.push(new TV("信阳浉河广电",u + "139.html"))

//黑龙江
var u = "https://www.hljtv.com/live/"
hl.tvs.push(new TV("黑龙江卫视",u + "folder418"))
hl.tvs.push(new TV("文体频道",u + "folder423"))
hl.tvs.push(new TV("影视频道",u + "folder425"))
hl.tvs.push(new TV("新闻法制频道",u + "folder424"))
hl.tvs.push(new TV("都市频道",u + "folder419"))
hl.tvs.push(new TV("农业科教频道",u + "folder420"))
hl.tvs.push(new TV("少儿频道",u + "folder422"))
var u = "https://www.hrbtv.net/folder79/"
hl.tvs.push(new TV("哈尔滨新闻综合",u + "folder81"))
hl.tvs.push(new TV("哈尔滨都市资讯",u + "folder83"))
hl.tvs.push(new TV("哈尔滨生活频道",u + "folder85"))
hl.tvs.push(new TV("哈尔滨娱乐频道",u + "folder89"))
hl.tvs.push(new TV("哈尔滨影视频道",u + "folder87"))
var u = "https://www.qqhrnews.com/p/"
hl.tvs.push(new TV("齐齐哈尔新闻综合",u + "qiqihaerxinwen.html"))
hl.tvs.push(new TV("齐齐哈尔公共频道",u + "gonggongpindao.html"))
var u = "https://web.guangdianyun.tv/tv/"
hl.tvs.push(new TV("大庆新闻综合",u + "2281"))
hl.tvs.push(new TV("大庆公共频道",u + "2282"))
hl.tvs.push(new TV("大庆教育频道",u + "2283"))
var u = "http://www.yichuntv.com/wlzb/wlds/"
hl.tvs.push(new TV("伊春新闻综合",u + "489.shtml"))
hl.tvs.push(new TV("伊春公共频道",u + "141598.shtml"))

//湖北
var u = "http://news.hbtv.com.cn/app/tv/"
hb.tvs.push(new TV("湖北卫视",u + "431"))
hb.tvs.push(new TV("湖北财经",u + "432"))
hb.tvs.push(new TV("湖北综合",u + "433"))
hb.tvs.push(new TV("湖北公共",u + "434"))
hb.tvs.push(new TV("湖北影视",u + "435"))
hb.tvs.push(new TV("湖北生活",u + "436"))
hb.tvs.push(new TV("湖北教育",u + "437"))
hb.tvs.push(new TV("湖北垄上",u + "438"))
var u = "https://www.syiptv.com/tv?station_id="
hb.tvs.push(new TV("十堰新闻频道",u + "1"))
hb.tvs.push(new TV("十堰公共频道",u + "2"))
hb.tvs.push(new TV("十堰经济旅游",u + "3"))
var u = "http://www.3xgd.com/live/"
hb.tvs.push(new TV("宜昌综合频道",u + "1.html"))
hb.tvs.push(new TV("宜昌旅游生活",u + "2.html"))
var u = "http://www.xyrtv.com/live/"
hb.tvs.push(new TV("襄阳新闻综合",u))
hb.tvs.push(new TV("襄阳经济生活",u))
hb.tvs.push(new TV("襄阳公共频道",u))
var u = "http://www.jmtv.com.cn/folder48/folder50"
hb.tvs.push(new TV("荆门新闻综合",u))
hb.tvs.push(new TV("荆门教育频道",u))

//湖南
var u = "https://live.mgtv.com/"
hn.tvs.push(new TV("湖南卫视","http://www.hunanweishi.tv/"))
hn.tvs.push(new TV("金鹰卡通",u))
hn.tvs.push(new TV("国际频道",u))
hn.tvs.push(new TV("金鹰纪实",u))
hn.tvs.push(new TV("湖南公共",u))
hn.tvs.push(new TV("湖南经视",u))
hn.tvs.push(new TV("湖南都市",u))
hn.tvs.push(new TV("湖南电视剧",u))
hn.tvs.push(new TV("湖南电影",u))
hn.tvs.push(new TV("先锋乒羽",u))
hn.tvs.push(new TV("茶频道",u))
hn.tvs.push(new TV("快乐垂钓",u))
hn.tvs.push(new TV("长沙新闻",u))
hn.tvs.push(new TV("长沙法政",u))
hn.tvs.push(new TV("长沙女性",u))
hn.tvs.push(new TV("快乐购",u))
var u = "http://www.zzbtv.com/live/"
hn.tvs.push(new TV("株洲新闻综合",u + "index.shtml"))
hn.tvs.push(new TV("株洲公共频道",u + "nzz/index.shtml"))
var u = "http://www.hnxttv.com/live/2015-11/23/"
hn.tvs.push(new TV("湘潭新闻综合",u + "cms60580article.shtml"))
hn.tvs.push(new TV("湘潭公共都市",u + "cms60581article.shtml"))
var u = "http://www.hydst.com/"
hn.tvs.push(new TV("衡阳新闻综合",u + "dianshizb-160.html"))
hn.tvs.push(new TV("衡阳公共频道",u + "dianshizb-114.html"))
var u = "http://www.sytv.net.cn/folder2188/folder2190"
hn.tvs.push(new TV("邵阳新闻综合",u))
hn.tvs.push(new TV("邵阳公共频道",u))
var u = "https://web.guangdianyun.tv/tv/"
hn.tvs.push(new TV("岳阳新闻综合",u + "1699"))
hn.tvs.push(new TV("岳阳公共频道",u + "1701"))
hn.tvs.push(new TV("岳阳科教频道",u + "1700"))
var u = "http://www.zjjrtv.com/folder1/folder25/"
hn.tvs.push(new TV("张家界一台",u + "folder103"))
hn.tvs.push(new TV("张家界二台",u + "folder104"))
var u = "https://www.yyrtv.com/Audiovisual/"
hn.tvs.push(new TV("益阳新闻综合(高清)",u + "463/1.html"))
hn.tvs.push(new TV("益阳教育频道",u + "308/1.html"))
hn.tvs.push(new TV("益阳公共频道",u + "307/1.html"))
hn.tvs.push(new TV("益阳新闻综合",u + "306/1.html"))
var u = "http://www.ldntv.cn/Portal/Html/option/com_content/ItemId/121/"
hn.tvs.push(new TV("娄底综合频道",u))
var u = "https://www.ngcz.tv/folder83/folder86"
hn.tvs.push(new TV("郴州新闻频道",u))
hn.tvs.push(new TV("郴州公共频道",u))
var u = "http://www.21ytv.com/folder41/folder42/"
hn.tvs.push(new TV("永州新闻频道",u + "folder44"))
hn.tvs.push(new TV("永州公共频道",u + "folder45"))

//吉林
var u = "http://www.jlntv.cn/newpc/wlt/live/index.php?channel_id="
jl.tvs.push(new TV("吉林卫视",u + "9"))
jl.tvs.push(new TV("都市频道",u + "33"))
jl.tvs.push(new TV("生活频道",u + "11"))
jl.tvs.push(new TV("影视频道",u + "12"))
jl.tvs.push(new TV("乡村频道",u + "34"))
jl.tvs.push(new TV("公共新闻频道",u + "35"))
jl.tvs.push(new TV("综艺文化频道",u + "13"))
jl.tvs.push(new TV("东北戏曲",u + "37"))
jl.tvs.push(new TV("家有购物",u + "14"))
var u = "http://www.chinactv.com/live/"
jl.tvs.push(new TV("长春综合频道",u + "1442880654565093377.html"))
jl.tvs.push(new TV("长春娱乐频道",u + "1442880767035355137.html"))
jl.tvs.push(new TV("长春市民生活",u + "1442880854423678977.html"))
jl.tvs.push(new TV("长春经济频道",u + "1442880940893450241.html"))
jl.tvs.push(new TV("长春汽车频道",u + "1442881026868293634.html"))
var u = "http://evfh-www.plus.jlntv.cn/siping/folder134/folder158"
jl.tvs.push(new TV("四平电视台",u))
var u = "http://10c9-www.plus.jlntv.cn/"
jl.tvs.push(new TV("通化新闻频道",u))
jl.tvs.push(new TV("通化科教频道",u))
jl.tvs.push(new TV("通化公共频道",u))
var u = "http://uogz-www.plus.jlntv.cn/songyuan/folder133/folder101"
jl.tvs.push(new TV("松原电视台",u))
var u = "http://www.yb983.com/"
jl.tvs.push(new TV("延边卫视",u + "cys/index.html"))
jl.tvs.push(new TV("延边朝鲜语综合",u + "ybtv1/index.html"))
jl.tvs.push(new TV("延边汉语综合",u + "ybtv2/index.html"))

//江苏
var u = "http://live.jstv.com/"
js.tvs.push(new TV("江苏卫视",u))
js.tvs.push(new TV("江苏公共新闻",u))
js.tvs.push(new TV("江苏城市",u))
js.tvs.push(new TV("江苏靓妆",u))
js.tvs.push(new TV("江苏体育休闲",u))
js.tvs.push(new TV("江苏影视",u))
js.tvs.push(new TV("江苏综艺",u))
js.tvs.push(new TV("优漫卡通",u))
js.tvs.push(new TV("好享购物",u))
js.tvs.push(new TV("江苏国际",u))
js.tvs.push(new TV("学习频道",u))
var u = "http://www.nbs.cn/live/"
js.tvs.push(new TV("南京新闻综合",u))
js.tvs.push(new TV("南京科教频道",u))
js.tvs.push(new TV("南京生活频道",u))
js.tvs.push(new TV("南京娱乐频道",u))
js.tvs.push(new TV("南京十八频道",u))
js.tvs.push(new TV("南京少儿频道",u))
js.tvs.push(new TV("南京信息频道",u))
var u = "http://v2.thmz.com/folder4/"
js.tvs.push(new TV("无锡新闻综合",u + "folder27"))
js.tvs.push(new TV("无锡都市资讯",u + "folder26"))
js.tvs.push(new TV("无锡娱乐频道",u + "folder1162"))
js.tvs.push(new TV("无锡经济频道",u + "folder25"))
js.tvs.push(new TV("无锡生活频道",u + "folder24"))
var u = "http://www.cztv.tv/channel.html"
js.tvs.push(new TV("常州综合频道",u))
js.tvs.push(new TV("常州都市频道",u))
js.tvs.push(new TV("常州生活频道",u))
js.tvs.push(new TV("常州公共频道",u))
var u = "http://www.csztv.com/"
js.tvs.push(new TV("苏州新闻综合",u + "zhibo1.shtml"))
js.tvs.push(new TV("苏州社会经济",u + "zhibo2.shtml"))
js.tvs.push(new TV("苏州文化生活",u + "zhibo3.shtml"))
js.tvs.push(new TV("苏州生活资讯",u + "zhibo4.shtml"))
var u = "https://www.ntjoy.com/jianghaimingzhu/dianshi/"
js.tvs.push(new TV("南通新闻综合",u))
js.tvs.push(new TV("南通社教频道",u))
js.tvs.push(new TV("南通公共频道",u))
js.tvs.push(new TV("南通崇川TV",u))
var u = "http://www.lyg1.com/dianshi?channel_id="
js.tvs.push(new TV("连云港新闻综合",u + "5"))
js.tvs.push(new TV("连云港公共频道",u + "6"))
var u = "https://glive.habctv.com/tv/"
js.tvs.push(new TV("淮安综合频道",u + "803"))
js.tvs.push(new TV("淮安公共频道",u + "808"))
js.tvs.push(new TV("淮安影视娱乐",u + "902"))
var u = "https://www.0515yc.cn/tvlook/"
js.tvs.push(new TV("盐城一套",u + "folder76"))
js.tvs.push(new TV("盐城一套",u + "folder77"))
js.tvs.push(new TV("盐城一套",u + "folder78"))
var u = "https://pc.96189.com/maintab/livel?cid="
js.tvs.push(new TV("扬州一套",u + "235"))
js.tvs.push(new TV("扬州二套",u + "291"))
js.tvs.push(new TV("扬州三套",u + "236"))
js.tvs.push(new TV("扬州邗江频道",u + "292"))
var u = "http://tv.xichu.net/main.php?c=video&v=tv&t=1&id="
js.tvs.push(new TV("宿迁综合频道",u + "10"))
js.tvs.push(new TV("宿迁公共频道",u + "11"))

//江西
var u = "http://www.jxntv.cn/live/#/"
jx.tvs.push(new TV("江西卫视",u + "jxtv1"))
jx.tvs.push(new TV("都市频道",u + "jxtv2"))
jx.tvs.push(new TV("经济生活频道",u + "jxtv3"))
jx.tvs.push(new TV("影视旅游频道",u + "jxtv4"))
jx.tvs.push(new TV("公共农业频道",u + "jxtv5"))
jx.tvs.push(new TV("少儿频道",u + "jxtv6"))
jx.tvs.push(new TV("新闻频道",u + "jxtv7"))
jx.tvs.push(new TV("移动电视",u + "jxtv8"))
jx.tvs.push(new TV("风尚购物",u + "fsgw"))
jx.tvs.push(new TV("陶瓷频道",u + "tcpd"))
var u = "https://www.nctv.net.cn/"
jx.tvs.push(new TV("南昌新闻综合",u))
jx.tvs.push(new TV("南昌文旅频道",u))
jx.tvs.push(new TV("南昌资讯频道",u))
jx.tvs.push(new TV("南昌公共频道",u))
var u = "http://www.jjntv.cn/video/?id="
jx.tvs.push(new TV("九江新闻综合",u + "0"))
jx.tvs.push(new TV("九江经济民生",u + "1"))
jx.tvs.push(new TV("九江科技法制",u + "2"))
jx.tvs.push(new TV("九江共青城一套",u + "6"))
jx.tvs.push(new TV("九江共青城二套",u + "7"))
var u = "http://m.0793.tv/folder38/folder41/"
jx.tvs.push(new TV("上饶一套",u + "folder60"))
jx.tvs.push(new TV("上饶二套",u + "folder61"))
var u = "http://www.ijatv.com/live/"
jx.tvs.push(new TV("吉安一套",u + "jatv1"))
jx.tvs.push(new TV("吉安二套",u + "jatv2"))
var u = "http://www.jxgztv.com/"
jx.tvs.push(new TV("赣州一套",u + "gztv1/index.jhtml"))
jx.tvs.push(new TV("赣州二套",u + "gztv2/index.jhtml"))
jx.tvs.push(new TV("赣州三套",u + "gztv3/index.jhtml"))
jx.tvs.push(new TV("赣州金牛影视",u + "gztv5/index.jhtml"))

//辽宁
var u = "http://dltv.dlxww.com/live/"
ln.tvs.push(new TV("大连新闻综合",u + "kds_news.shtml"))
ln.tvs.push(new TV("大连生活频道",u + "kds_life.shtml"))
ln.tvs.push(new TV("大连文体频道",u + "kds_genres.shtml"))
ln.tvs.push(new TV("大连影视频道",u + "kds_film.shtml"))
ln.tvs.push(new TV("大连云动TV",u + "kds_ydtv.shtml"))

//内蒙古
var u = "http://www.nmtv.cn/folder84/folder86/folder137"
nm.tvs.push(new TV("内蒙古卫视",u))
nm.tvs.push(new TV("经济生活",u))
nm.tvs.push(new TV("内蒙古内蒙古语卫视",u))
nm.tvs.push(new TV("少儿频道",u))
nm.tvs.push(new TV("内蒙古内蒙古语文化",u))
nm.tvs.push(new TV("农牧频道",u))
nm.tvs.push(new TV("新闻综合",u))
nm.tvs.push(new TV("文体娱乐",u))
var u = "http://www.0471tv.org.cn/detailLive/"
nm.tvs.push(new TV("呼和浩特新闻综合",u + "11223777_55295_100503_huhehaotegd.html"))
nm.tvs.push(new TV("呼和浩特都市生活",u + "11223778_55295_100501_huhehaotegd.html"))
nm.tvs.push(new TV("呼和浩特影视娱乐",u + "11223779_55295_100495_huhehaotegd.html"))
var u = "http://www.cfrtv.cn/folder67/"
nm.tvs.push(new TV("赤峰新闻综合",u + "folder85/"))
nm.tvs.push(new TV("赤峰经济服务",u + "folder87/"))
nm.tvs.push(new TV("赤峰影视娱乐",u + "folder86/"))
var u = "https://erdszs.org.cn/live/index_new.shtml?index="
nm.tvs.push(new TV("鄂尔多斯新闻综合",u + "0"))
nm.tvs.push(new TV("鄂尔多斯经济服务",u + "1"))
nm.tvs.push(new TV("鄂尔多斯城市生活",u + "2"))
nm.tvs.push(new TV("鄂尔多斯蒙语综合",u + "3"))
var u = "http://www.hrtonline.cn/live/"
nm.tvs.push(new TV("呼伦贝尔新闻综合",u))
nm.tvs.push(new TV("呼伦贝尔文化旅游",u))
nm.tvs.push(new TV("呼伦贝尔生活资讯",u))
var u = "https://www.wrbtv.cn/folder98/folder100/folder104/"
nm.tvs.push(new TV("乌兰察布新闻综合",u))
nm.tvs.push(new TV("乌兰察布经济生活",u))
nm.tvs.push(new TV("乌兰察布生活频道",u))

//宁夏
var u = "http://www.nxtv.com.cn/live/"
nx.tvs.push(new TV("宁夏卫视",u + "wsh"))
nx.tvs.push(new TV("公共频道",u + ""))
nx.tvs.push(new TV("经济频道",u + "jj"))
var u = "http://www.ycen.com.cn/zzgn/zhibo/"
nx.tvs.push(new TV("银川公共频道",u))
nx.tvs.push(new TV("银川生活频道",u))
nx.tvs.push(new TV("银川文娱频道",u))
var u = "https://www.kanwz.net/folder83/folder135?channel_id="
nx.tvs.push(new TV("吴忠公共频道",u + "8"))
nx.tvs.push(new TV("吴忠综合频道",u + "9"))

//青海
var u = "http://www.qhbtv.com/new_index/live/"
qh.tvs.push(new TV("青海卫视",u + "folder2646"))
qh.tvs.push(new TV("青海经视",u + "folder2647"))
qh.tvs.push(new TV("青海都市",u + "folder2648"))
qh.tvs.push(new TV("新闻综合",u + "folder2650"))
var u = "https://www.xntv.tv/"
qh.tvs.push(new TV("西宁新闻频道",u + "xnxwpd"))
qh.tvs.push(new TV("西宁生活频道",u + "xnshpd"))
var u = "http://www.hnzzzzzdst.com/live/"
qh.tvs.push(new TV("海南州电视台",u))

//山东
var u = "http://v.iqilu.com/live/"
sd.tvs.push(new TV("山东卫视",u + "sdtv"))
sd.tvs.push(new TV("齐鲁频道",u + "qlpd"))
sd.tvs.push(new TV("体育频道",u + "typd"))
sd.tvs.push(new TV("生活频道",u + "shpd"))
sd.tvs.push(new TV("综艺频道",u + "zypd"))
sd.tvs.push(new TV("新闻频道",u + "ggpd"))
sd.tvs.push(new TV("农科频道",u + "nkpd"))
sd.tvs.push(new TV("文旅频道",u + "yspd"))
sd.tvs.push(new TV("少儿频道",u + "sepd"))
sd.tvs.push(new TV("居家购物频道",u + "gwpd"))
var u = "https://zhibo.ijntv.cn/index.php?channel="
sd.tvs.push(new TV("济南新闻综合",u + "5"))
sd.tvs.push(new TV("济南都市频道",u + "6"))
sd.tvs.push(new TV("济南文旅体育",u + "7"))
sd.tvs.push(new TV("济南娱乐频道",u + "8"))
sd.tvs.push(new TV("济南生活频道",u + "9"))
sd.tvs.push(new TV("济南少儿频道",u + "11"))
sd.tvs.push(new TV("济南鲁中频道",u + "225"))
sd.tvs.push(new TV("济南新闻综合(高清)",u + "13"))
sd.tvs.push(new TV("济南移动电视",u + "244"))
sd.tvs.push(new TV("济南地铁电视",u + "245"))
sd.tvs.push(new TV("济南城市电视",u + "246"))
var u = "http://www.qtv.com.cn/live/tv/"
sd.tvs.push(new TV("青海一套",u + "index.shtml"))
sd.tvs.push(new TV("青海二套",u + "tv_qtv2.shtml"))
sd.tvs.push(new TV("青海三套",u + "tv_qtv3.shtml"))
sd.tvs.push(new TV("青海四套",u + "tv_qtv4.shtml"))
sd.tvs.push(new TV("青海五套",u + "tv_qtv5.shtml"))
sd.tvs.push(new TV("青海六套",u + "tv_qtv6.shtml"))
var u = "https://www.cbbn.net/folder253/folder337?channel_id="
sd.tvs.push(new TV("淄博新闻综合",u + "5"))
sd.tvs.push(new TV("淄博影视频道",u + "37"))
sd.tvs.push(new TV("淄博文旅频道",u + "41"))
sd.tvs.push(new TV("淄博民生频道",u + "9"))
var u = "http://tv.lncm.cn/jplm/"
sd.tvs.push(new TV("枣庄新闻综合",u + "news/index.shtml"))
sd.tvs.push(new TV("枣庄生活教育",u + "shjy/index.shtml"))
sd.tvs.push(new TV("枣庄公共教育",u + "zzgg/index.shtml"))
var u = "http://www.hhek.cn/folder4/"
sd.tvs.push(new TV("东营新闻综合",u + "folder37"))
sd.tvs.push(new TV("东营公共频道",u + "folder38"))
sd.tvs.push(new TV("东营科教频道",u + "folder39"))
var u = "http://www.yantaitv.cn/zhibo/"
sd.tvs.push(new TV("烟台新闻综合",u + "ch1"))
sd.tvs.push(new TV("烟台公共频道",u + "ch2"))
sd.tvs.push(new TV("烟台经济频道",u + "ch4"))
sd.tvs.push(new TV("烟台影视频道",u + "ch3"))
var u = "http://www.wfcmw.cn/tv/"
sd.tvs.push(new TV("潍坊一套",u + "wftv-1"))
sd.tvs.push(new TV("潍坊二套",u + "wftv-2"))
sd.tvs.push(new TV("潍坊三套",u + "wftv-3"))
sd.tvs.push(new TV("潍坊四套",u + "wftv-4"))
var u = "https://www.jnnews.tv/app/tv/83"
sd.tvs.push(new TV("济宁综合频道",u))
sd.tvs.push(new TV("济宁生活频道",u))
sd.tvs.push(new TV("济宁公共频道",u))
var u = "http://lv.weihai.tv/"
sd.tvs.push(new TV("威海新闻综合",u + "ive_13705e35636b2136b590e5a015bb801c.html"))
sd.tvs.push(new TV("威海都市生活",u + "live_8bfc704cbba598e76540f5d4f61a0e03.html"))
sd.tvs.push(new TV("威海海洋频道",u + "live_6dffaf124b89957024f9f31de302d183.html"))
var u = "http://www1.rzw.com.cn/folder247/folder2217"
sd.tvs.push(new TV("日照新闻综合",u))
sd.tvs.push(new TV("日照科教频道",u))
sd.tvs.push(new TV("日照公共频道",u))
sd.tvs.push(new TV("日照房车(网络)",u))
var u = "http://www.lcbtv.com/cms/tv/"
sd.tvs.push(new TV("聊城新闻综合",u + "11857696"))
sd.tvs.push(new TV("聊城民生频道",u + "11857058"))

//山西
var u = "http://www.sxrtv.com/live/"
sx.tvs.push(new TV("山西卫视",u))
sx.tvs.push(new TV("黄河电视台",u))
sx.tvs.push(new TV("经济与科技频道",u))
sx.tvs.push(new TV("山西影视频道",u))
sx.tvs.push(new TV("社会与法制频道",u))
sx.tvs.push(new TV("文体生活频道",u))
var u = "http://ty.cutv.com/live/"
sx.tvs.push(new TV("太原台",u))
var u = "https://www.dtradio.com.cn/local/folder25"
sx.tvs.push(new TV("大同新闻综合",u))
sx.tvs.push(new TV("大同生活频道",u))
sx.tvs.push(new TV("大同煤都生活",u))
var u = "https://www.yqrtv.com/folder74/folder139?id="
sx.tvs.push(new TV("阳泉新闻综合",u + "10"))
sx.tvs.push(new TV("阳泉科教频道",u + "11"))
var u = "https://web.guangdianyun.tv/tv/"
sx.tvs.push(new TV("吕梁一套",u + "2652"))
sx.tvs.push(new TV("吕梁二套",u + "2653"))
var u = "http://www.0359tv.com/live/"
sx.tvs.push(new TV("运城新闻综合",u + "xwzh/index.shtml"))
sx.tvs.push(new TV("运城公共频道",u + "gg/index.shtml"))
sx.tvs.push(new TV("运城科教频道",u + "kjjy/index.shtml"))

//陕西
var u = "http://live.snrtv.com/star"
sn.tvs.push(new TV("陕西卫视",u))
sn.tvs.push(new TV("新闻资讯",u))
sn.tvs.push(new TV("都市青春",u))
sn.tvs.push(new TV("生活频道",u))
sn.tvs.push(new TV("影视频道",u))
sn.tvs.push(new TV("公共频道",u))
sn.tvs.push(new TV("乐家购物",u))
sn.tvs.push(new TV("体育休闲",u))
sn.tvs.push(new TV("农林卫视",u))
sn.tvs.push(new TV("移动电视",u))
var u = "http://v.xiancity.cn/folder8/folder39/"
sn.tvs.push(new TV("西安新闻综合",u + "folder29"))
sn.tvs.push(new TV("西安都市频道",u + "folder30"))
sn.tvs.push(new TV("西安商务资讯",u + "folder31"))
sn.tvs.push(new TV("西安影视频道",u + "folder32"))
sn.tvs.push(new TV("西安丝路频道",u + "folder33"))
var u = "http://www.tvbaoji.com/live/dianshizhibo.shtml"
sn.tvs.push(new TV("宝鸡新闻综合",u))
sn.tvs.push(new TV("宝鸡经济生活",u))
var u = "http://v.ylrb.com/index.php?r=live/view/"
sn.tvs.push(new TV("榆林一套",u + "1"))
sn.tvs.push(new TV("榆林二套",u + "2"))

//上海

//四川
var u = "http://www.sctv.com/watchTV"
sc.tvs.push(new TV("四川卫视",u))
sc.tvs.push(new TV("经济",u))
sc.tvs.push(new TV("文化旅游",u))
sc.tvs.push(new TV("新闻",u))
sc.tvs.push(new TV("影视文艺",u))
sc.tvs.push(new TV("妇女儿童",u))
sc.tvs.push(new TV("星空购物",u))
sc.tvs.push(new TV("四川乡村",u))
sc.tvs.push(new TV("康巴卫视",u))
var u = "https://www.cditv.cn/"
sc.tvs.push(new TV("成都新闻综合",u + "show-192-1-1.html"))
sc.tvs.push(new TV("成都经济资讯",u + "show-192-2-1.html"))
sc.tvs.push(new TV("成都都市生活",u + "show-192-3-1.html"))
sc.tvs.push(new TV("成都影视文艺",u + "show-192-45-1.html"))
sc.tvs.push(new TV("成都公共频道",u + "show-192-5-1.html"))
sc.tvs.push(new TV("成都少儿频道",u + "show-192-6-1.html"))
var u = "https://www.pzhgd.com/Live/index?liveid="
sc.tvs.push(new TV("攀枝花新闻综合",u + "1"))
sc.tvs.push(new TV("攀枝花文旅生活",u + "2"))
var u = "http://www.luzhoubs.com/"
sc.tvs.push(new TV("泸州新闻综合",u + "lztv1"))
sc.tvs.push(new TV("泸州公共生活",u + "lztv2"))
sc.tvs.push(new TV("泸州科技教育",u + "lztv3"))
var u = "http://zb.scdytv.com/"
sc.tvs.push(new TV("德阳新闻综合",u))
sc.tvs.push(new TV("德阳公共频道",u))
var u = "http://www.myntv.cn/html/zb/"
sc.tvs.push(new TV("绵阳新闻综合",u + "mytv1.asp"))
sc.tvs.push(new TV("绵阳科技频道",u + "mytv2.asp"))
var u = "http://www.dzsm.com/live.asp"
sc.tvs.push(new TV("广元新闻综合",u))
sc.tvs.push(new TV("广元科技频道",u))
var u = "http://www.snxw.com/wldst/"
sc.tvs.push(new TV("遂宁综合频道",u + "xwzh"))
sc.tvs.push(new TV("遂宁公共频道",u + "gggyzb"))
var u = "https://www.scnj.tv/bencandy.php?fid=43&aid="
sc.tvs.push(new TV("内江公共频道",u + "973"))
sc.tvs.push(new TV("内江综合频道",u + "972"))
sc.tvs.push(new TV("内江科教频道",u + "1914042"))
var u = "http://www.leshantv.net/cms/tv/"
sc.tvs.push(new TV("乐山新闻综合",u + "28"))
sc.tvs.push(new TV("乐山公共频道",u + "44"))
var u = "https://www.scmstv.cn/web/folder88/folder89/"
sc.tvs.push(new TV("眉山新闻综合",u))
sc.tvs.push(new TV("眉山公共频道",u))
var u = "http://www.gatv.com.cn/Tv/details?id="
sc.tvs.push(new TV("广安新闻综合",u + "10"))
sc.tvs.push(new TV("广安公共频道",u + "9"))
sc.tvs.push(new TV("广安广安区电视台",u + "8"))
sc.tvs.push(new TV("广安前锋区电视台",u + "7"))
sc.tvs.push(new TV("广安华蓥市电视台",u + "6"))
sc.tvs.push(new TV("广安岳池县电视台",u + "5"))
sc.tvs.push(new TV("广安邻水县电视台",u + "4"))
sc.tvs.push(new TV("广安武胜县电视台",u + "3"))
var u = "dzxw.net/cms/tv/13560916"
sc.tvs.push(new TV("达州新闻综合",u))
sc.tvs.push(new TV("达州文化生活",u))
sc.tvs.push(new TV("达州通川",u))
var u = "https://www.wuxianyaan.com/cms/tv/"
sc.tvs.push(new TV("雅安新闻综合",u + "1030244"))
sc.tvs.push(new TV("雅安公共频道",u + "1031118"))
var u = "http://www.sczytv.com/folder17/folder380?channel_id="
sc.tvs.push(new TV("资阳新闻综合",u + "137"))
sc.tvs.push(new TV("资阳雁江频道",u + "138"))

//天津

//西藏
var u = "http://www.vtibet.cn/html/CHAL1492477520535104/2021111212835975309/index.shtml"
xz.tvs.push(new TV("西藏卫视",u))
xz.tvs.push(new TV("藏语卫视",u))
xz.tvs.push(new TV("影视文化",u))
var u = "http://www.lasatv.cn/cms/tv"
xz.tvs.push(new TV("拉萨藏语综合",u))
xz.tvs.push(new TV("拉萨综合频道",u))
xz.tvs.push(new TV("拉萨文化旅游",u))

//新疆
var u = "http://www.xjtvs.com.cn/jlmxjtv2022/2wzgbcslm/zb/"
xj.tvs.push(new TV("新疆卫视",u + "29322654.shtml"))
xj.tvs.push(new TV("维吾尔语新闻综合频道",u + "29322652.shtml"))
xj.tvs.push(new TV("哈萨克语新闻综合频道",u + "29322656.shtml"))
xj.tvs.push(new TV("汉语综艺频道",u + "29322658.shtml"))
xj.tvs.push(new TV("维吾尔语影视频道",u + "29322660.shtml"))
xj.tvs.push(new TV("汉语经济生活频道",u + "29322662.shtml"))
xj.tvs.push(new TV("哈萨克语综艺频道",u + "29322664.shtml"))
xj.tvs.push(new TV("维吾尔语经济生活频道",u + "29322666.shtml"))
xj.tvs.push(new TV("汉语体育健康频道",u + "29322668.shtml"))
xj.tvs.push(new TV("汉语信息服务频道",u + "29322670.shtml"))
xj.tvs.push(new TV("少儿频道",u + "29322672.shtml"))

//云南
var u = "http://www.yntv.cn/live.html"
yn.tvs.push(new TV("云南卫视",u))
yn.tvs.push(new TV("云南都市",u))
yn.tvs.push(new TV("云南娱乐",u))
yn.tvs.push(new TV("云南公共",u))
yn.tvs.push(new TV("澜湄国际",u))
yn.tvs.push(new TV("云南少儿",u))
var u = "http://www.kunmingbc.com/wzzb/"
yn.tvs.push(new TV("昆明新闻综合",u + "89949.shtml"))
yn.tvs.push(new TV("昆明生活频道",u + "89954.shtml"))
yn.tvs.push(new TV("昆明科学教育",u + "89955.shtml"))
yn.tvs.push(new TV("昆明影视综艺",u + "89957.shtml"))
yn.tvs.push(new TV("昆明春城民生",u + "89958.shtml"))
var u = "http://www.bsrtv.cn/zb/dszb/index.shtml"
yn.tvs.push(new TV("保山一套",u))
yn.tvs.push(new TV("保山二套",u))
yn.tvs.push(new TV("保山三套",u))
var u = "https://www.nujiang.cn/html/zb/"
yn.tvs.push(new TV("怒江台",u))
yn.tvs.push(new TV("泸水台",u))
yn.tvs.push(new TV("福贡台",u))
yn.tvs.push(new TV("贡山台",u))
yn.tvs.push(new TV("兰坪台",u))
var u = "http://www.xsbnrtv.cn/cms/tv"
yn.tvs.push(new TV("西双版纳综合频道",u))
yn.tvs.push(new TV("西双版纳民族语言",u))
yn.tvs.push(new TV("西双版纳勐海电视",u))

//浙江
var u = "http://www.cztv.com/live/?cid="
zj.tvs.push(new TV("浙江卫视",u + "101"))
zj.tvs.push(new TV("钱江都市",u + "102"))
zj.tvs.push(new TV("经济生活",u + "103"))
zj.tvs.push(new TV("科教影视",u + "104"))
zj.tvs.push(new TV("民生休闲",u + "106"))
zj.tvs.push(new TV("新闻",u + "107"))
zj.tvs.push(new TV("少儿频道",u + "108"))
zj.tvs.push(new TV("浙江国际",u + "110"))
zj.tvs.push(new TV("好易购",u + "111"))
zj.tvs.push(new TV("数码时代",u + "112"))
var u = "https://tv.hoolo.tv/"
zj.tvs.push(new TV("杭州综合频道",u + "hzzh"))
zj.tvs.push(new TV("杭州西湖明珠",u + "xhmz"))
zj.tvs.push(new TV("杭州生活频道",u + "hzsh"))
zj.tvs.push(new TV("杭州影视频道",u + "utv"))
zj.tvs.push(new TV("杭州青少体育",u + "hzse"))
var u = "http://www.nbtv.cn/gbds/folder8458/"
zj.tvs.push(new TV("宁波一套",u + "NBTV1/index.shtml"))
zj.tvs.push(new TV("宁波二套",u + "NBTV2/index.shtml"))
zj.tvs.push(new TV("宁波三套",u + "NBTV3/index.shtml"))
zj.tvs.push(new TV("宁波四套",u + "NBTV4/index.shtml"))
zj.tvs.push(new TV("宁波五套",u + "NBTV5/index.shtml"))
var u = "http://www.shaoxing.com.cn/app/tv/78"
zj.tvs.push(new TV("绍兴新闻综合",u))
zj.tvs.push(new TV("绍兴公共频道",u))
zj.tvs.push(new TV("绍兴文化影视",u))

//台湾
// tw.tvs.push(new TV("",u + ""))

//没有找到官网直播
noAut.tvs.push(new TV("TVB翡翠台","https://www.tvb.com/"))
noAut.tvs.push(new TV("汕头电视台","http://www.dahuawang.com/"))
noAut.tvs.push(new TV("厦门卫视","https://xmtv.cn/"))
noAut.tvs.push(new TV("桂林电视台","https://www.gltvs.com/"))
noAut.tvs.push(new TV("辽宁卫视","http://www.lntv.cn/"))
noAut.tvs.push(new TV("东方卫视","https://www.smg.cn/"))
noAut.tvs.push(new TV("天津卫视","http://tjtv.enorth.com.cn/"))
noAut.tvs.push(new TV("星空卫视","http://xk.kgdns.cn/"))
//已停播
isStop.tvs.push(new TV("华娱卫视","https://baike.baidu.com/item/华娱卫视"))
isStop.tvs.push(new TV("亚洲电视亚洲台","https://baike.baidu.com/item/亚洲电视亚洲台/58985627"))
isStop.tvs.push(new TV("亚洲电视本港台","https://baike.baidu.com/item/亚洲电视本港台/58985627"))

let TVS = [cctv,gd,hk,mo,ah,bj,cq,fj,gs,gx,gz,hi,he,ha,
    hl,hb,hn,jl,js,jx,ln,nm,nx,qh,sd,sx,sn,sh,sc,tj,xz,
    xj,yn,zj,tw,noAut,isStop]